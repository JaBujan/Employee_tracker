import dotenv from 'dotenv';
// import path from 'path'; // Standard Node.js module - No longer needed for diagnostics

// Explicitly try to load .env from the current working directory
// const envPath = path.resolve(process.cwd(), '.env');
// console.log(`[dotenv] Attempting to load .env file from: ${envPath}`); // Diagnostic log - REMOVED

const dotenvResult = dotenv.config(); // Simplified back, assuming .env is in root

if (dotenvResult.error) {
  console.error('[dotenv] Error loading .env file:', dotenvResult.error); // Keep basic error logging
}

// Re-check process.env immediately after attempting to load
// console.log('[dotenv] DB_USER after config:', process.env.DB_USER); // Diagnostic log - REMOVED
// console.log('[dotenv] DB_PASSWORD after config:', process.env.DB_PASSWORD ? '********' : undefined); // Diagnostic log - REMOVED
// console.log('[dotenv] DB_NAME after config:', process.env.DB_NAME); // Diagnostic log - REMOVED

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  database: process.env.DB_NAME,
  port: 5432,
});

const connectToDb = async () => {
  try
  {
    await pool.connect();
    console.log('Connected to the database.');
  } catch (err) { 
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
}



export { pool, connectToDb };