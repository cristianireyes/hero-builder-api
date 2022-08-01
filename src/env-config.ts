import dotenv from 'dotenv';

dotenv.config();

// prettier-ignore
const {
  DB_DIALECT,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
} = process.env;

// prettier-ignore
export {
  DB_DIALECT,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
};
