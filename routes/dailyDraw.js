'use strict';

const express = require('express');
const db = require('../db');

const router = express.Router();

/* tiny async wrapper so Express 4 forwards rejections to the error handler */
const ah = fn => (req, res, next) => fn(req, res, next).catch(next);

/* POST /api/daily-draw/enter — enter the daily draw */
router.post('/enter', ah(async (req, res) => {
  const { name, email, discord } = req.body || {};

  if (!name || String(name).trim().length < 2) {
    return res.status(400).json({ error: 'يرجى إدخال اسم صحيح' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || ''))) {
    return res.status(400).json({ error: 'يرجى إدخال بريد إلكتروني صحيح' });
  }
  if (!/^[A-Za-z0-9_.#-]{2,64}$/.test(String(discord || ''))) {
    return res.status(400).json({ error: 'يرجى إدخال اسم مستخدم Discord صحيح (2-32 حرفًا)' });
  }

  const result = await db.enterDailyDraw({
    name: String(name).trim(),
    email: String(email).trim(),
    discord: String(discord).trim()
  });

  if (!result.success) {
    return res.status(409).json({ error: 'لقد سجلت مشاركتك في السحب اليومي بالفعل' });
  }

  res.status(201).json({
    ok: true,
    message: 'تم تسجيلك في السحب اليومي بنجاح! سيتم الإعلان عن الفائز في نهاية اليوم.'
  });
}));

/* GET /api/daily-draw/status — check if user already entered today */
router.get('/status', ah(async (req, res) => {
  const { email } = req.query;
  const status = await db.getDailyDrawStatus(email);
  res.json(status);
}));

/* GET /api/daily-draw/stats — get draw statistics */
router.get('/stats', ah(async (req, res) => {
  const stats = await db.getDrawStats();
  res.json(stats);
}));

/* GET /api/daily-draw/winner — get today's winner (public) */
router.get('/winner', ah(async (req, res) => {
  const winner = await db.getTodayWinner();
  if (!winner) {
    return res.json({ winner: null, message: 'لم يتم اختيار فائز بعد اليوم' });
  }
  // Return limited info for privacy
  res.json({
    winner: {
      name: winner.winner_name,
      prize: winner.prize,
      draw_date: winner.draw_date
    }
  });
}));

/* POST /api/daily-draw/pick — admin: pick today's winner (protected) */
router.post('/pick', ah(async (req, res) => {
  // Simple admin check - in production use proper auth middleware
  const auth = req.headers.authorization || '';
  if (!auth.includes('admin')) {
    return res.status(401).json({ error: 'غير مصرح' });
  }
  const winner = await db.pickDailyDrawWinner();
  if (!winner) {
    return res.status(404).json({ error: 'لا توجد مشاركات اليوم لاختيار فائز' });
  }
  res.json({ ok: true, winner });
}));

module.exports = router;