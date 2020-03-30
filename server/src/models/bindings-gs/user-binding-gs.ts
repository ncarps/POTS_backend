import { IDBModel } from '../../commons/types';
import { google } from 'googleapis';
import { sheeez } from 'gsheeez';

import userSheet from '../gs-models/User-gs';

const userGs: IDBModel<any> = {
  insert: async user => {},

  getById: async data => {},

  getAll: async () => {
    const gshez = sheeez({
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      token_path: 'token.json',
      creds_path: 'credentials.json',
      google,
    });

    const usersSheet = gshez.create({
      spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
      range: 'A:D',
    });

    const grid = await usersSheet.grid({ headerLength: 1 });
    userSheet.setGrid(grid);
    return userSheet.getAll();
  },

  deleteById: async data => {},

  updateById: async data => {},

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

export { userGs };
