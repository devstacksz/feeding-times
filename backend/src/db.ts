import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

const sqlite = new Database('feed-times.db');
export const db = drizzle(sqlite);

export const feeding = sqliteTable('feeding', {
    id: integer('id').primaryKey(),
    date: text('date'),
    time: text('time'),
    amount: integer('amount')
});
