'use strict';

const { DatabaseSync } = require('node:sqlite');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const config = require('./config');

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
`);

/* ---------- helpers ---------- */

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

/* ---------- seed admin ---------- */

function seedAdmin() {
  const row = db.prepare('SELECT id FROM admins WHERE username = ?').get('admin');
  if (!row) {
    const { salt, hash } = scryptHash(config.adminPassword);
    db.prepare('INSERT INTO admins (username, password_hash, salt) VALUES (?, ?, ?)')
      .run('admin', hash, salt);
    console.log('[db] seeded default admin (username: admin, password: ' + config.adminPassword + ')');
  }
}

/* ---------- orders ---------- */

function generateReference() {
  const ts = Date.now().toString(36).toUpperCase().slice(-6);
  const rand = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `ORD-${ts}${rand}`;
}

function createOrder({ name, email, discord, items }) {
  const reference = generateReference();
  db.prepare(`
    INSERT INTO orders (reference, customer_name, customer_email, discord, items, status)
    VALUES (?, ?, ?, ?, ?, 'pending')
  `).run(reference, name, email, discord, JSON.stringify(items));
  return getOrderByReference(reference);
}

function getOrderByReference(ref) {
  const row = db.prepare('SELECT * FROM orders WHERE reference = ?').get(ref);
  return row ? serializeOrder(row) : null;
}

function getAllOrders() {
  return db.prepare('SELECT * FROM orders ORDER BY id DESC').all().map(serializeOrder);
}

function updateOrderStatus(id, status) {
  db.prepare("UPDATE orders SET status = ?, updated_at = datetime('now') WHERE id = ?")
    .run(status, id);
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

module.exports = {
  db,
  seedAdmin,
  verifyPassword,
  generateReference,
  createOrder,
  getOrderByReference,
  getAllOrders,
  updateOrderStatus
};
