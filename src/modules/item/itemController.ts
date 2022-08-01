import { Request, Response } from 'express';
import { Item } from '@database/models';

export const findAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await Item.findAll();

    console.log({ items });

    res.send({ items });
  } catch (e) {
    console.log(e);
    res.status(500).send({ messsage: 'tamos con problemas' });
  }
};
