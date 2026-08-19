'use strict';

/* Hardened auto-backup of the SQLite orders database to GitHub via the Contents API.
   - Immediate push on every write (serialized, coalesced)
   - Boot-time restore: merges any orders from GitHub missing locally
   - Periodic verification every 5 min: pushes if local differs from GitHub
*/

const fs = require('node:fs');
const crypto = require('node:crypto');
const config = require('./config');

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'beraniahmed29-rgb';
const REPO = 'steamzone';
const DB_PATH = config.dbPath;
const TMP_PATH = DB_PATH + '.remote.tmp';
const API = `https://api.github.com/repos/${OWNER}/${REPO}/contents/data/orders.db`;
const VERIFY_MS = 5 * 60 * 1000;

let busy = false;
let dirty = false;
let verifyTimer = null;

function schedule() {
  if (!TOKEN) return;
  dirty = true;
  if (!busy) setImmediate(flush);
}

/* force a WAL checkpoint so the .db file contains all recent writes */
function checkpoint() {
  try {
    const { DatabaseSync } = require('node:sqlite');
    const d = new DatabaseSync(DB_PATH);
    d.exec('PRAGMA wal_checkpoint(TRUNCATE)');
    d.close();
  } catch (e) {
    console.error('[backup] checkpoint failed:', e.message);
  }
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

/* canonical content hash of a sqlite db file's orders */
function dbHash(filePath) {
  try {
    const { DatabaseSync } = require('node:sqlite');
    const d = new DatabaseSync(filePath);
    const rows = d.prepare('SELECT * FROM orders ORDER BY id').all();
    d.close();
    return crypto.createHash('sha256')
      .update(JSON.stringify(rows.map(serializeOrder)))
      .digest('hex');
  } catch (e) {
    return null;
  }
}

async function apiFetch(path, options = {}) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'User-Agent': 'steamzone',
      ...(options.headers || {})
    }
  });
  return res;
}

async function getRemote() {
  const res = await apiFetch('/contents/data/orders.db');
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GET ${res.status}`);
  const j = await res.json();
  fs.writeFileSync(TMP_PATH, Buffer.from(j.content, 'base64'));
  return { sha: j.sha };
}

async function pushLocal() {
  checkpoint();
  const content = fs.readFileSync(DB_PATH).toString('base64');
  const remote = await getRemote().catch(() => null);
  const payload = { message: 'chore: backup orders db', content };
  if (remote) payload.sha = remote.sha;
  let res = await apiFetch('/contents/data/orders.db', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (res.status === 409 && remote) {
    const fresh = await getRemote().catch(() => null);
    if (fresh) {
      payload.sha = fresh.sha;
      res = await apiFetch('/contents/data/orders.db', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }
  }
  if (!res.ok) throw new Error(`PUT ${res.status}`);
  console.log('[backup] orders db backed up to GitHub');
}

/* merge orders that exist remotely but not locally (boot-time restore) */
async function restoreFromRemote() {
  try {
    if (!fs.existsSync(DB_PATH)) return;
    const remote = await getRemote();
    if (!remote || !fs.existsSync(TMP_PATH)) return;
    const { DatabaseSync } = require('node:sqlite');
    const remoteDb = new DatabaseSync(TMP_PATH);
    const rows = remoteDb.prepare('SELECT * FROM orders ORDER BY id').all();
    remoteDb.close();
    fs.unlinkSync(TMP_PATH);
    if (!rows.length) return;
    const local = new DatabaseSync(DB_PATH);
    const check = local.prepare('SELECT 1 FROM orders WHERE reference = ?');
    const insert = local.prepare(
      `INSERT INTO orders (reference, customer_name, customer_email, discord, items, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    );
    let restored = 0;
    for (const r of rows) {
      if (!check.get(r.reference)) {
        insert.run(r.reference, r.customer_name, r.customer_email, r.discord,
          r.items, r.status, r.created_at, r.updated_at);
        restored++;
      }
    }
    local.close();
    if (restored > 0) {
      console.log(`[backup] restored ${restored} orders from GitHub backup`);
      schedule();
    }
  } catch (e) {
    console.error('[backup] restore failed:', e.message);
  }
}

async function flush() {
  if (!TOKEN || !dirty || busy) return;
  busy = true;
  try {
    await pushLocal();
    dirty = false;
  } catch (e) {
    console.error('[backup] push failed:', e.message);
  } finally {
    busy = false;
    if (dirty) setImmediate(flush);
  }
}

async function verify() {
  try {
    if (busy || !fs.existsSync(DB_PATH)) return;
    checkpoint();
    const localSha = dbHash(DB_PATH);
    const remote = await getRemote();
    const remoteSha = remote ? dbHash(TMP_PATH) : null;
    if (TMP_PATH && fs.existsSync(TMP_PATH)) fs.unlinkSync(TMP_PATH);
    if (localSha !== remoteSha) {
      console.log('[backup] local DB differs from GitHub — pushing');
      dirty = true;
      await flush();
    }
  } catch (e) {
    console.error('[backup] verify failed:', e.message);
  } finally {
    verifyTimer = setTimeout(verify, VERIFY_MS);
  }
}

function start() {
  if (!TOKEN) return;
  restoreFromRemote().then(() => {
    verifyTimer = setTimeout(verify, VERIFY_MS);
  });
}

process.on('SIGTERM', () => {
  if (verifyTimer) clearTimeout(verifyTimer);
  dirty = true;
  flush();
});

module.exports = { schedule, start, flush };