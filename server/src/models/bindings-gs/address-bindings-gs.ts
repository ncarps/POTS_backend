import { IDBModel } from '../../commons/types';
import { google } from 'googleapis';
import { sheeez } from 'gsheeez';

import addressSheet from '../gs-models/Address-gs';

const addressGs: IDBModel<any> = {
  insert: async user => {},

  getById: async data => {},

  getAll: async () => {
    const gshez = sheeez({
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      token_path: 'token.json',
      creds_path: 'credentials.json',
      google,
    });

    const addressesSheet = gshez.create({
      spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
      range: 'G:L',
    });

    const grid = await addressesSheet.grid({ headerLength: 1 });
    addressSheet.setGrid(grid);
    return addressSheet.getAll();
  },

  deleteById: async data => {},

  updateById: async data => {},

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

export { addressGs };
