'use strict';

const express = require('express');
const db = require('../db');

const router = express.Router();

/* tiny async wrapper so Express 4 forwards rejections to the error handler */
const ah = fn => (req, res, next) => fn(req, res, next).catch(next);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DISCORD_RE = /^[A-Za-z0-9_.#-]{2,64}$/;

function fail(res, status, message) {
  return res.status(status).json({ error: message });
}

/* POST /api/orders — submit a purchase request (contact via Discord) */
router.post('/', ah(async (req, res) => {
  const { name, email, discord, items } = req.body || {};

  if (!name || String(name).trim().length < 2) return fail(res, 400, 'يرجى إدخال اسم صحيح');
  if (!EMAIL_RE.test(String(email || ''))) return fail(res, 400, 'يرجى إدخال بريد إلكتروني صحيح');
  if (!DISCORD_RE.test(String(discord || ''))) return fail(res, 400, 'يرجى إدخال اسم مستخدم Discord صحيح (2-32 حرفًا)');

  if (!Array.isArray(items) || items.length === 0) return fail(res, 400, 'السلة فارغة');
  for (const it of items) {
    if (!it.name || typeof it.price !== 'number' || it.price <= 0) {
      return fail(res, 400, 'بيانات عناصر الطلب غير صحيحة');
    }
  }

  const order = await db.createOrder({
    name: String(name).trim(),
    email: String(email).trim(),
    discord: String(discord).trim(),
    items
  });

  res.status(201).json({
    reference: order.reference,
    status: order.status,
    message: 'تم استلام طلبك — سنتواصل معك على Discord لتأكيد الدفع والتسليم'
  });
}));

/* GET /api/orders/:reference — public order status lookup */
router.get('/:reference', ah(async (req, res) => {
  const order = await db.getOrderByReference(String(req.params.reference).toUpperCase().trim());
  if (!order) return fail(res, 404, 'لم يتم العثور على الطلب');
  res.json({
    reference: order.reference,
    status: order.status,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt
  });
}));

module.exports = router;
