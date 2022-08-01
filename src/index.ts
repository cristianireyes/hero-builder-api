import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { DBConnection } from '@database';
import { v1Router } from './api/v1';

const CORS_OPTIONS = {
  origin: 'http://localhost:8081',
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(CORS_OPTIONS));

app.use('/api/v1', v1Router);

const start = async (): Promise<void> => {
  try {
    await DBConnection.sync();
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`🚀 API listening on port ${PORT}!`);
    });
  } catch (error) {
    process.exit(1);
  }
};

start();
