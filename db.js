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
    CREATE TABLE IF NOT EXISTS visitors (
      id            SERIAL PRIMARY KEY,
      name          TEXT NOT NULL DEFAULT 'زائر',
      visitor_id    TEXT UNIQUE NOT NULL,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at    TIMESTAMPTZ
    );
    CREATE INDEX IF NOT EXISTS idx_visitors_visitor_id ON visitors(visitor_id);
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
    async getOrCreateVisitor(visitorId) {
      if (!visitorId) return null;
      const r = await pool.query('SELECT * FROM visitors WHERE visitor_id = $1', [visitorId]);
      if (r.rows.length) return r.rows[0];
      const ins = await pool.query(
        `INSERT INTO visitors (visitor_id) VALUES ($1) RETURNING *`,
        [visitorId]
      );
      return ins.rows[0];
    },
    async updateVisitorName(visitorId, name) {
      await pool.query('UPDATE visitors SET name = $1, updated_at = now() WHERE visitor_id = $2', [name, visitorId]);
    },
    async getVisitorById(visitorId) {
      const r = await pool.query('SELECT * FROM visitors WHERE visitor_id = $1', [visitorId]);
      return r.rows[0] || null;
    },
    async getAllVisitors() {
      const r = await pool.query('SELECT * FROM visitors ORDER BY created_at DESC');
      return r.rows;
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
    CREATE TABLE IF NOT EXISTS visitors (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      name          TEXT NOT NULL DEFAULT 'زائر',
      visitor_id    TEXT UNIQUE NOT NULL,
      created_at    TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at    TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_visitors_visitor_id ON visitors(visitor_id);
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
    async getOrCreateVisitor(visitorId) {
      if (!visitorId) return null;
      const row = db.prepare('SELECT * FROM visitors WHERE visitor_id = ?').get(visitorId);
      if (row) return row;
      db.prepare('INSERT INTO visitors (visitor_id) VALUES (?)').run(visitorId);
      return db.prepare('SELECT * FROM visitors WHERE visitor_id = ?').get(visitorId);
    },
    async updateVisitorName(visitorId, name) {
      db.prepare("UPDATE visitors SET name = ?, updated_at = datetime('now') WHERE visitor_id = ?")
        .run(name, visitorId);
    },
    async getVisitorById(visitorId) {
      return db.prepare('SELECT * FROM visitors WHERE visitor_id = ?').get(visitorId) || null;
    },
    async getAllVisitors() {
      return db.prepare('SELECT * FROM visitors ORDER BY created_at DESC').all();
    }
  };
  console.log('[db] using SQLite (local)');
}

module.exports = {
  ...impl,
  verifyPassword,
  generateReference
};