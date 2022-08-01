import { Sequelize } from 'sequelize-typescript';
import { DB_OPTIONS } from '@database/config';

/* Models */
import { Item } from '@database/models';

export const DBConnection = new Sequelize({
  ...DB_OPTIONS,
  logging: false,
  models: [Item],
});
