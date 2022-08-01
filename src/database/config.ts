import {
  DB_DIALECT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from '@app/env-config';
import { Dialect } from 'sequelize';
import { SequelizeOptions } from 'sequelize-typescript';

export const DB_OPTIONS: SequelizeOptions = {
  dialect: DB_DIALECT as Dialect,
  host: DB_HOST,
  port: Number(DB_PORT),
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
