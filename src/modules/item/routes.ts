import { Router } from 'express';
import { findAll } from '@modules/item/itemController';

const router = Router();

router.get('/', findAll);
router.post('/', (req, res) => {
  console.log({ body: req.body });
  res.send('ok');
});

export const ItemRouter = router;
