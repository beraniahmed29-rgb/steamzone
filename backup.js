'use strict';

/* Auto-backup of the SQLite orders database to GitHub via the Contents API.
   No git binary needed. Runs after every write, debounced. */

const fs = require('node:fs');
const config = require('./config');

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'beraniahmed29-rgb';
const REPO = 'steamzone';
const DB_PATH = config.dbPath;
const API = `https://api.github.com/repos/${OWNER}/${REPO}/contents/data/orders.db`;

let timer = null;
let busy = false;
let dirty = false;

function schedule() {
  if (!TOKEN) return;
  dirty = true;
  if (timer) clearTimeout(timer);
  timer = setTimeout(flush, 2000);
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

async function getSha() {
  const res = await fetch(API, {
    headers: { Authorization: `Bearer ${TOKEN}`, 'User-Agent': 'steamzone' }
  });
  if (!res.ok) throw new Error(`GET sha ${res.status}`);
  const j = await res.json();
  return j.sha;
}

async function flush() {
  if (!TOKEN || !dirty || busy) return;
  busy = true;
  dirty = false;
  try {
    checkpoint();
    const content = fs.readFileSync(DB_PATH).toString('base64');
    let sha;
    try { sha = await getSha(); } catch (e) { sha = undefined; }
    const payload = { message: 'chore: backup orders db', content };
    if (sha) payload.sha = sha;
    const res = await fetch(API, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'User-Agent': 'steamzone',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`PUT ${res.status} ${await res.text()}`);
    console.log('[backup] orders db backed up to GitHub');
  } catch (e) {
    console.error('[backup] failed:', e.message);
    if (timer) clearTimeout(timer);
    timer = setTimeout(flush, 15000);
  } finally {
    busy = false;
  }
}

process.on('SIGTERM', () => {
  if (timer) clearTimeout(timer);
  flush();
});

module.exports = { schedule, flush };