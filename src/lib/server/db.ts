import fs from 'fs';
import path from 'path';
import Database from 'better-sqlite3';

const db = new Database('messages.db', { verbose: console.log });
bootstrap();

function bootstrap() {
    //WAL for speed
    db.pragma('journal_mode = WAL');

    //set application_id for the db
    db.pragma(`application_id = 9797;`);

    //check db version
    const userVersion = Number(db.pragma('user_version', { simple: true }));
    console.log(`DB Version ${userVersion}`);

    getMigrations();
}

function getMigrations() {
  const migrationsFolderPath = './src/lib/server/migrations';
  let migrationFiles = [];

  try {
    // Filter TypeScript files and sort them numerically
    migrationFiles = fs.readdirSync(migrationsFolderPath);

    // Filter SQL files and sort them numerically
    migrationFiles = migrationFiles
      .filter((file) => path.extname(file) === '.sql')
      .map((file) => parseInt(file.replace(/\.sql$/, ''), 10))
      .sort((a, b) => a - b)
      .map((version) => `${version}.sql`);
    console.log(`migrations: ${migrationFiles.join(',')}`);
  } catch (err: any) {
    console.error(`Error reading migrations folder: ${err?.message}`);
    process.exit(1);
  }

  return migrationFiles.map((fileName) => path.join(migrationsFolderPath, fileName));
}

export default {
    db
};
