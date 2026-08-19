'use strict';

/**
 * Application configuration.
 * Change these values before going to production.
 */
module.exports = {
  port: process.env.PORT || 3000,

  /** Default admin password used on first run (HASHED automatically into the DB). */
  adminPassword: process.env.ADMIN_PASSWORD || 'admin123',

  sessionTTLHours: 24,

  /** Database file location (override on hosts with persistent storage). */
  dbPath: process.env.DB_PATH || require('node:path').join(__dirname, 'data', 'orders.db'),

  /** Optional external Postgres connection string (e.g. Supabase). Overrides SQLite. */
  databaseUrl: process.env.DATABASE_URL || null
};
