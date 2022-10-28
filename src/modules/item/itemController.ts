import { Request, Response } from 'express';
import { createItem, findAllItems } from '@modules/item/itemService';
import { isItemValid } from './helpers';

export const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await findAllItems();

    res.send({ data: items });
  } catch (e) {
    res.status(404).send({ messsage: 'Error al obtener los items' });
  }
};

export const addItem = async (req: Request, res: Response): Promise<void> => {
  if (!isItemValid(req.body)) {
    res.status(403).send('El formato del item es inválido');
  }
  try {
    const item = await createItem(req.body);
    res.status(201).send({ data: item });
  } catch (e) {
    res.status(500).send();
  }
};
