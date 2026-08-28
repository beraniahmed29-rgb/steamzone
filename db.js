'use strict';

const crypto = require('node:crypto');
const config = require('./config');

/* ---------- shared helpers ---------- */

function scryptHash(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { salt, hash };
}

function verifyPassword(password, salt, expectedHash) {
  const { hash } = scryptHash(password, salt);
  const a = Buffer.from(hash, 'hex');
  const b = Buffer.from(expectedHash, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function generateReference() {
  const ts = Date.now().toString(36).toUpperCase().slice(-6);
  const rand = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `ORD-${ts}${rand}`;
}

function serializeOrder(row) {
  return {
    id: row.id,
    reference: row.reference,
    customerName: row.customer_name,
    customerEmail: row.customer_email,
    discord: row.discord,
    items: JSON.parse(row.items),
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

/* ---------- Postgres (production, persistent) ---------- */

let impl = null;

if (config.databaseUrl) {
  const { Pool } = require('pg');
  const pool = new Pool({
    connectionString: config.databaseUrl,
    ssl: { rejectUnauthorized: false }
  });

  const SCHEMA = `
    CREATE TABLE IF NOT EXISTS orders (
      id            SERIAL PRIMARY KEY,
      reference     TEXT UNIQUE NOT NULL,
      customer_name TEXT NOT NULL,
      customer_email TEXT NOT NULL,
      discord       TEXT NOT NULL,
      items         TEXT NOT NULL,
      status        TEXT NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending','contacted','completed','cancelled')),
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at    TIMESTAMPTZ
    );
    CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
    CREATE INDEX IF NOT EXISTS idx_orders_reference ON orders(reference);
    CREATE TABLE IF NOT EXISTS admins (
      id            SERIAL PRIMARY KEY,
      username      TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      salt          TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS daily_draw_entries (
      id SERIAL PRIMARY KEY,
      user_name TEXT NOT NULL,
      user_email TEXT NOT NULL,
      user_discord TEXT NOT NULL,
      draw_date DATE NOT NULL DEFAULT CURRENT_DATE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      UNIQUE(user_email, draw_date)
    );
    CREATE INDEX IF NOT EXISTS idx_daily_draw_date ON daily_draw_entries(draw_date);
    CREATE TABLE IF NOT EXISTS daily_draw_winners (
      id SERIAL PRIMARY KEY,
      draw_date DATE NOT NULL UNIQUE,
      winner_name TEXT NOT NULL,
      winner_email TEXT NOT NULL,
      winner_discord TEXT NOT NULL,
      prize TEXT,
      claimed BOOLEAN DEFAULT FALSE,
      claimed_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;

  async function migrateFromLegacySqlite() {
    try {
      const fs = require('node:fs');
      const path = require('node:path');
      const legacyPath = config.dbPath;
      if (!fs.existsSync(legacyPath)) return;
      const { DatabaseSync } = require('node:sqlite');
      const legacy = new DatabaseSync(legacyPath);
      const rows = legacy.prepare('SELECT * FROM orders ORDER BY id').all();
      legacy.close();
      let inserted = 0;
      for (const row of rows) {
        const exists = await pool.query('SELECT 1 FROM orders WHERE reference = $1', [row.reference]);
        if (!exists.rows.length) {
          await pool.query(
            `INSERT INTO orders (reference, customer_name, customer_email, discord, items, status, created_at, updated_at)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
            [row.reference, row.customer_name, row.customer_email, row.discord, row.items, row.status, row.created_at, row.updated_at]
          );
          inserted++;
        }
      }
      if (inserted > 0) console.log(`[db] migrated ${inserted} orders from legacy SQLite`);
    } catch (e) {
      console.error('[db] legacy migration skipped:', e.message);
    }
  }

  impl = {
    async init() {
      await pool.query(SCHEMA);
      await migrateFromLegacySqlite();
      await impl.seedAdmin();
    },
    async findAdmin(username) {
      const r = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
      return r.rows[0] || null;
    },
    async seedAdmin() {
      const r = await pool.query('SELECT id FROM admins WHERE username = $1', ['admin']);
      if (!r.rows.length) {
        const { salt, hash } = scryptHash(config.adminPassword);
        await pool.query('INSERT INTO admins (username, password_hash, salt) VALUES ($1,$2,$3)', ['admin', hash, salt]);
        console.log('[db] seeded default admin (username: admin)');
      }
    },
    async createOrder({ name, email, discord, items }) {
      const reference = generateReference();
      const r = await pool.query(
        `INSERT INTO orders (reference, customer_name, customer_email, discord, items, status)
         VALUES ($1,$2,$3,$4,$5,'pending') RETURNING *`,
        [reference, name, email, discord, JSON.stringify(items)]
      );
      return serializeOrder(r.rows[0]);
    },
    async getOrderByReference(ref) {
      const r = await pool.query('SELECT * FROM orders WHERE reference = $1', [ref]);
      return r.rows[0] ? serializeOrder(r.rows[0]) : null;
    },
    async getOrderById(id) {
      const r = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
      return r.rows[0] ? serializeOrder(r.rows[0]) : null;
    },
    async getAllOrders() {
      const r = await pool.query('SELECT * FROM orders ORDER BY id DESC');
      return r.rows.map(serializeOrder);
    },
    async updateOrderStatus(id, status) {
      await pool.query('UPDATE orders SET status = $1, updated_at = now() WHERE id = $2', [status, id]);
    },
    async enterDailyDraw({ name, email, discord }) {
      const today = new Date().toISOString().split('T')[0];
      const r = await pool.query(
        `INSERT INTO daily_draw_entries (user_name, user_email, user_discord, draw_date)
         VALUES ($1,$2,$3,$4)
         ON CONFLICT (user_email, draw_date) DO NOTHING
         RETURNING id`,
        [name, email, discord, today]
      );
      return { success: r.rowCount > 0 };
    },
    async getDailyDrawStatus(email) {
      if (!email) return { entered: false };
      const today = new Date().toISOString().split('T')[0];
      const r = await pool.query(
        `SELECT 1 FROM daily_draw_entries WHERE user_email = $1 AND draw_date = $2`,
        [email, today]
      );
      return { entered: r.rows.length > 0 };
    },
    async pickDailyDrawWinner() {
      const today = new Date().toISOString().split('T')[0];
      const entries = await pool.query(`SELECT * FROM daily_draw_entries WHERE draw_date = $1`, [today]);
      if (!entries.rows.length) return null;
      const winner = entries.rows[Math.floor(Math.random() * entries.rows.length)];
      await pool.query(
        `INSERT INTO daily_draw_winners (draw_date, winner_name, winner_email, winner_discord, prize)
         VALUES ($1,$2,$3,$4,$5)
         ON CONFLICT (draw_date) DO UPDATE SET
           winner_name = EXCLUDED.winner_name,
           winner_email = EXCLUDED.winner_email,
           winner_discord = EXCLUDED.winner_discord,
           prize = EXCLUDED.prize`,
        [today, winner.user_name, winner.user_email, winner.user_discord, 'Steam Game / Account']
      );
      return winner;
    },
    async getTodayWinner() {
      const today = new Date().toISOString().split('T')[0];
      const r = await pool.query('SELECT * FROM daily_draw_winners WHERE draw_date = $1', [today]);
      return r.rows[0] || null;
    },
    async getDrawStats() {
      const today = new Date().toISOString().split('T')[0];
      const [entriesCount, winnersCount] = await Promise.all([
        pool.query('SELECT COUNT(*) FROM daily_draw_entries WHERE draw_date = $1', [today]),
        pool.query('SELECT COUNT(*) FROM daily_draw_winners')
      ]);
      return {
        todayEntries: parseInt(entriesCount.rows[0].count),
        totalWinners: parseInt(winnersCount.rows[0].count)
      };
    }
  };
  console.log('[db] using PostgreSQL (external, persistent)');
} else {
  /* ---------- SQLite (local dev fallback) ---------- */

  const { DatabaseSync } = require('node:sqlite');
  const fs = require('node:fs');
  const path = require('node:path');

  fs.mkdirSync(path.dirname(config.dbPath), { recursive: true });

  const db = new DatabaseSync(config.dbPath);

  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS orders (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      reference     TEXT UNIQUE NOT NULL,
      customer_name TEXT NOT NULL,
      customer_email TEXT NOT NULL,
      discord       TEXT NOT NULL,
      items         TEXT NOT NULL,
      status        TEXT NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending','contacted','completed','cancelled')),
      created_at    TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at    TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
    CREATE INDEX IF NOT EXISTS idx_orders_reference ON orders(reference);

    CREATE TABLE IF NOT EXISTS admins (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      username      TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      salt          TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS daily_draw_entries (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      user_name     TEXT NOT NULL,
      user_email    TEXT NOT NULL,
      user_discord  TEXT NOT NULL,
      draw_date     TEXT NOT NULL DEFAULT (date('now')),
      created_at    TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(user_email, draw_date)
    );
    CREATE INDEX IF NOT EXISTS idx_daily_draw_date ON daily_draw_entries(draw_date);

    CREATE TABLE IF NOT EXISTS daily_draw_winners (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      draw_date     TEXT NOT NULL UNIQUE,
      winner_name   TEXT NOT NULL,
      winner_email  TEXT NOT NULL,
      winner_discord TEXT NOT NULL,
      prize         TEXT,
      claimed       INTEGER NOT NULL DEFAULT 0,
      claimed_at    TEXT,
      created_at    TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  impl = {
    async init() {
      await impl.seedAdmin();
    },
    async findAdmin(username) {
      return db.prepare('SELECT * FROM admins WHERE username = ?').get(String(username || '').trim()) || null;
    },
    async seedAdmin() {
      const row = db.prepare('SELECT id FROM admins WHERE username = ?').get('admin');
      if (!row) {
        const { salt, hash } = scryptHash(config.adminPassword);
        db.prepare('INSERT INTO admins (username, password_hash, salt) VALUES (?, ?, ?)')
          .run('admin', hash, salt);
        console.log('[db] seeded default admin (username: admin, password: ' + config.adminPassword + ')');
      }
    },
    async createOrder({ name, email, discord, items }) {
      const reference = generateReference();
      db.prepare(`
        INSERT INTO orders (reference, customer_name, customer_email, discord, items, status)
        VALUES (?, ?, ?, ?, ?, 'pending')
      `).run(reference, name, email, discord, JSON.stringify(items));
      require('./backup').schedule();
      return impl.getOrderByReference(reference);
    },
    async getOrderByReference(ref) {
      const row = db.prepare('SELECT * FROM orders WHERE reference = ?').get(ref);
      return row ? serializeOrder(row) : null;
    },
    async getOrderById(id) {
      const row = db.prepare('SELECT * FROM orders WHERE id = ?').get(id);
      return row ? serializeOrder(row) : null;
    },
    async getAllOrders() {
      return db.prepare('SELECT * FROM orders ORDER BY id DESC').all().map(serializeOrder);
    },
    async updateOrderStatus(id, status) {
      db.prepare("UPDATE orders SET status = ?, updated_at = datetime('now') WHERE id = ?")
        .run(status, id);
      require('./backup').schedule();
    },
    async enterDailyDraw({ name, email, discord }) {
      const today = new Date().toISOString().split('T')[0];
      const stmt = db.prepare(`
        INSERT INTO daily_draw_entries (user_name, user_email, user_discord, draw_date)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(user_email, draw_date) DO NOTHING
      `);
      const res = stmt.run(name, email, discord, today);
      return { success: res.changes > 0 };
    },
    async getDailyDrawStatus(email) {
      if (!email) return { entered: false };
      const today = new Date().toISOString().split('T')[0];
      const row = db.prepare('SELECT 1 FROM daily_draw_entries WHERE user_email = ? AND draw_date = ?').get(email, today);
      return { entered: !!row };
    },
    async pickDailyDrawWinner() {
      const today = new Date().toISOString().split('T')[0];
      const entries = db.prepare('SELECT * FROM daily_draw_entries WHERE draw_date = ?').all(today);
      if (!entries.length) return null;
      const winner = entries[Math.floor(Math.random() * entries.length)];
      db.prepare(`
        INSERT INTO daily_draw_winners (draw_date, winner_name, winner_email, winner_discord, prize)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(draw_date) DO UPDATE SET
          winner_name = excluded.winner_name,
          winner_email = excluded.winner_email,
          winner_discord = excluded.winner_discord,
          prize = excluded.prize
      `).run(today, winner.user_name, winner.user_email, winner.user_discord, 'Steam Game / Account');
      return winner;
    },
    async getTodayWinner() {
      const today = new Date().toISOString().split('T')[0];
      return db.prepare('SELECT * FROM daily_draw_winners WHERE draw_date = ?').get(today) || null;
    },
    async getDrawStats() {
      const today = new Date().toISOString().split('T')[0];
      const todayEntries = db.prepare('SELECT COUNT(*) as c FROM daily_draw_entries WHERE draw_date = ?').get(today).c;
      const totalWinners = db.prepare('SELECT COUNT(*) as c FROM daily_draw_winners').get().c;
      return { todayEntries, totalWinners };
    }
  };
  console.log('[db] using SQLite (local)');
}

module.exports = {
  ...impl,
  verifyPassword,
  generateReference
};
