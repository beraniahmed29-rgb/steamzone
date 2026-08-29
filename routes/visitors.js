'use strict';

const express = require('express');
const db = require('../db');

const router = express.Router();

/* tiny async wrapper so Express 4 forwards rejections to the error handler */
const ah = fn => (req, res, next) => fn(req, res, next).catch(next);

/* GET /api/visitors/me — get current visitor info */
router.get('/me', ah(async (req, res) => {
  if (!req.visitor) return res.status(404).json({ error: 'زائر غير موجود' });
  res.json({
    id: req.visitor.id,
    name: req.visitor.name,
    visitor_id: req.visitor.visitor_id,
    created_at: req.visitor.created_at
  });
}));

/* PUT /api/visitors/me — update visitor name */
router.put('/me', ah(async (req, res) => {
  if (!req.visitor) return res.status(404).json({ error: 'زائر غير موجود' });
  const { name } = req.body || {};
  if (!name || String(name).trim().length < 2) {
    return res.status(400).json({ error: 'اسم غير صحيح' });
  }
  await db.updateVisitorName(req.visitor.visitor_id, String(name).trim());
  const updated = await db.getVisitorById(req.visitor.visitor_id);
  res.json({ ok: true, visitor: { id: updated.id, name: updated.name, visitor_id: updated.visitor_id } });
}));

/* GET /api/visitors — admin: list all visitors */
router.get('/', ah(async (req, res) => {
  const visitors = await db.getAllVisitors();
  res.json(visitors);
}));

module.exports = router;