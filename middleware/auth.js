'use strict';

const crypto = require('node:crypto');

const sessions = new Map();

function createSession(username) {
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, { username, createdAt: Date.now() });
  return token;
}

function destroySession(token) {
  sessions.delete(token);
}

function getSession(token) {
  const s = sessions.get(token);
  if (!s) return null;
  return s;
}

function requireAuth(req, res, next) {
  const token = req.cookies?.sz_session;
  const session = token ? getSession(token) : null;
  if (!session) {
    return res.status(401).json({ error: 'غير مصرح — يرجى تسجيل الدخول' });
  }
  req.session = session;
  next();
}

module.exports = { createSession, destroySession, getSession, requireAuth };
