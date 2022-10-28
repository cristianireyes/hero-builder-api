import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { APP_PORT } from '@app/env-config';
import { v1Router } from '@app/api/v1';
import { DBConnection } from '@database';

const PORT = APP_PORT || 3000;
const CORS_OPTIONS = {
  origin: 'http://localhost:8081',
};

const app = express();

app.use(cors(CORS_OPTIONS));
app.use(express.json());

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
