'use strict';

const path = require('node:path');
const express = require('express');
const config = require('./config');
const db = require('./db');

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '100kb' }));

/* cookie parser (tiny built-in replacement) */
app.use((req, res, next) => {
  const header = req.headers.cookie || '';
  req.cookies = {};
  for (const part of header.split(';')) {
    const eq = part.indexOf('=');
    if (eq > 0) req.cookies[part.slice(0, eq).trim()] = decodeURIComponent(part.slice(eq + 1).trim());
  }
  next();
});

/* security headers */
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

db.init().catch(err => {
  console.error('[db] init failed:', err.message);
  process.exit(1);
});
require('./backup').start();

/* API routes (must be registered before static to shadow nothing important) */
app.use('/api/orders', require('./routes/orders'));
app.use('/api/admin', require('./routes/admin'));

app.get('/api/health', (req, res) => res.json({ ok: true }));

/* static site */
app.use(express.static(path.join(__dirname, 'public')));

/* SPA-style fallbacks */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin.html')));

/* 404 for unknown /api paths */
app.use('/api', (req, res) => res.status(404).json({ error: 'المسار غير موجود' }));

/* global error handler */
app.use((err, req, res, next) => {
  console.error('[server] error:', err.message);
  res.status(500).json({ error: 'خطأ داخلي في الخادم' });
});

app.listen(config.port, () => {
  console.log(`[server] SteamZone running at http://localhost:${config.port}`);
  console.log(`[server] Admin dashboard: http://localhost:${config.port}/admin`);
});
