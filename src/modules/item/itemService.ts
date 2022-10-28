import { Item as ItemModel } from '@database/models';
import { Item } from './types';

export const findAllItems = async (): Promise<ItemModel[]> => {
  try {
    const items = await ItemModel.findAll();

    // eslint-disable-next-line no-console
    console.log({ items });

    return items;
  } catch (e) {
    throw new Error('[Item Service]: Error al obtener los items');
  }
};

export const createItem = async (item: Item): Promise<ItemModel> => {
  try {
    const itemCreated = await ItemModel.create({
      name: item.name,
      image: item.image,
      tier: item.tier,
    });

    return itemCreated;
  } catch (e) {
    throw new Error('[Item Service]: Error al crear el item');
  }
};
