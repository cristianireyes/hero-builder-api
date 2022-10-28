import { Router } from 'express';
import { addItem, getItems } from '@modules/item/itemController';

const router = Router();

router.get('/', getItems);

router.post('/', addItem);

export const ItemRouter = router;
