import { Router } from 'express';
import { ItemRouter } from '@modules/item';
import { AuthRouter } from '@modules/auth';
import { BuildRouter } from '@modules/build';

const router = Router();

router.get('/', (req, res) => {
  res.send('API root module');
});

router.use('/auth', AuthRouter);
router.use('/builds', BuildRouter);
router.use('/items', ItemRouter);

export const v1Router = router;
