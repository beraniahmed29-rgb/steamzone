'use strict';

const express = require('express');
const db = require('../db');
const auth = require('../middleware/auth');
const config = require('../config');

const router = express.Router();

/* tiny async wrapper so Express 4 forwards rejections to the error handler */
const ah = fn => (req, res, next) => fn(req, res, next).catch(next);

/* simple in-memory brute-force protection */
const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const rec = loginAttempts.get(ip) || { count: 0, first: now };
  if (now - rec.first > WINDOW_MS) { rec.count = 0; rec.first = now; }
  if (rec.count >= MAX_ATTEMPTS) return false;
  return true;
}

function bumpRateLimit(ip) {
  const now = Date.now();
  const rec = loginAttempts.get(ip) || { count: 0, first: now };
  rec.count += 1;
  loginAttempts.set(ip, rec);
}

/* POST /api/admin/login */
router.post('/login', ah(async (req, res) => {
  const ip = req.ip || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'محاولات كثيرة — انتظر 10 دقائق' });
  }

  const { username, password } = req.body || {};
  const admin = await db.findAdmin(String(username || '').trim());
  if (!admin || !db.verifyPassword(String(password || ''), admin.salt, admin.password_hash)) {
    bumpRateLimit(ip);
    return res.status(401).json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
  }

  loginAttempts.delete(ip);
  const token = auth.createSession(admin.username);
  res.cookie('sz_session', token, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: config.sessionTTLHours * 3600 * 1000
  });
  res.json({ ok: true, username: admin.username });
}));

/* POST /api/admin/logout */
router.post('/logout', auth.requireAuth, (req, res) => {
  auth.destroySession(req.cookies?.sz_session);
  res.clearCookie('sz_session');
  res.json({ ok: true });
});

/* GET /api/admin/orders — list all orders (protected) */
router.get('/orders', auth.requireAuth, ah(async (req, res) => {
  const { status, q } = req.query;
  let orders = await db.getAllOrders();
  if (status && status !== 'all') orders = orders.filter(o => o.status === status);
  if (q) {
    const needle = String(q).toLowerCase();
    orders = orders.filter(o =>
      o.reference.toLowerCase().includes(needle) ||
      o.customerName.toLowerCase().includes(needle) ||
      o.customerEmail.toLowerCase().includes(needle) ||
      o.discord.toLowerCase().includes(needle)
    );
  }
  res.json(orders);
}));

/* GET /api/admin/orders/stats (protected) */
router.get('/stats', auth.requireAuth, ah(async (req, res) => {
  const all = await db.getAllOrders();
  res.json({
    total: all.length,
    pending: all.filter(o => o.status === 'pending').length,
    contacted: all.filter(o => o.status === 'contacted').length,
    completed: all.filter(o => o.status === 'completed').length,
    cancelled: all.filter(o => o.status === 'cancelled').length
  });
}));

/* POST /api/admin/orders/:id/contacted — admin contacted the customer on Discord */
router.post('/orders/:id/contacted', auth.requireAuth, ah(async (req, res) => {
  const id = Number(req.params.id);
  const order = await db.getOrderById(id);
  if (!order) return res.status(404).json({ error: 'الطلب غير موجود' });
  await db.updateOrderStatus(id, 'contacted');
  res.json({ ok: true, status: 'contacted' });
}));

/* POST /api/admin/orders/:id/complete — deal finished */
router.post('/orders/:id/complete', auth.requireAuth, ah(async (req, res) => {
  const id = Number(req.params.id);
  const order = await db.getOrderById(id);
  if (!order) return res.status(404).json({ error: 'الطلب غير موجود' });
  await db.updateOrderStatus(id, 'completed');
  res.json({ ok: true, status: 'completed' });
}));

/* POST /api/admin/orders/:id/cancel */
router.post('/orders/:id/cancel', auth.requireAuth, ah(async (req, res) => {
  const id = Number(req.params.id);
  const order = await db.getOrderById(id);
  if (!order) return res.status(404).json({ error: 'الطلب غير موجود' });
  await db.updateOrderStatus(id, 'cancelled');
  res.json({ ok: true, status: 'cancelled' });
}));

module.exports = router;
