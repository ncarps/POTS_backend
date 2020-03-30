import { IDBModel } from '../../commons/types';
import { google } from 'googleapis';
import { sheeez } from 'gsheeez';

import itemSheet from '../gs-models/Item-gs';

const itemGs: IDBModel<any> = {
  insert: async user => {},

  getById: async data => {},

  getAll: async () => {
    const gshez = sheeez({
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      token_path: 'token.json',
      creds_path: 'credentials.json',
      google,
    });

    const itemsSheet = gshez.create({
      spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
      range: 'AA:AO',
    });

    const grid = await itemsSheet.grid({ headerLength: 1 });
    itemSheet.setGrid(grid);
    return itemSheet.getAll();
  },

  deleteById: async data => {},

  updateById: async data => {},

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

export { itemGs };
