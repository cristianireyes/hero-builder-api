import { Item } from './types';

export const isItemValid = (item: Item): boolean => {
  const { image, name, tier } = item;

  return !!image && !!name && !!tier;
};
