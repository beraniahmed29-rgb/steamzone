'use strict';

/* Auto-backup of the SQLite orders database to GitHub.
   Every write to the DB is pushed as a commit, so orders survive
   Render's ephemeral disk. Falls back gracefully if not configured. */

const { execFile } = require('node:child_process');
const path = require('node:path');
const config = require('./config');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GIT = process.env.GIT_BIN || 'git';
const REPO = `https://x-access-token:${GITHUB_TOKEN}@github.com/beraniahmed29-rgb/steamzone.git`;
const DB_REL = path.relative(__dirname, config.dbPath).replace(/\\/g, '/');

let timer = null;
let pushing = false;
let dirty = false;

function schedule() {
  if (!GITHUB_TOKEN) return;
  dirty = true;
  if (timer) clearTimeout(timer);
  timer = setTimeout(flush, 2500);
}

function flush() {
  if (!GITHUB_TOKEN || !dirty || pushing) return;
  pushing = true;
  dirty = false;
  execFile(GIT, ['add', '--', DB_REL], { cwd: __dirname }, () => {
    execFile(GIT, ['commit', '-m', 'chore: backup orders db'], { cwd: __dirname }, () => {
      execFile(GIT, ['push', REPO, 'HEAD:main'], { cwd: __dirname }, () => {
        pushing = false;
        if (dirty) setTimeout(flush, 1000);
      });
    });
  });
}

process.on('SIGTERM', () => {
  if (timer) clearTimeout(timer);
  flush();
});

module.exports = { schedule, flush };