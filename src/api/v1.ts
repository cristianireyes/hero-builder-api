import { Router } from 'express';
import { AuthRouter } from '@modules/auth';
import { BuildRouter } from '@modules/build';
import { ItemRouter } from '@modules/item';

const router = Router();

router.get('/', (req, res) => {
  // Retornar Swagger
  res.status(404).send();
});

router.use('/auth', AuthRouter);
router.use('/builds', BuildRouter);
router.use('/items', ItemRouter);

export const v1Router = router;
