import dotenv from 'dotenv';

dotenv.config();

// prettier-ignore
const {
  // Database
  DB_DIALECT,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  // App
  APP_PORT,
} = process.env;

// prettier-ignore
export {
  DB_DIALECT,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  APP_PORT,
};
