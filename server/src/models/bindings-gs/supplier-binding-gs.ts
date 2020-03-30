import { IDBModel } from '../../commons/types';
import { google } from 'googleapis';
import { sheeez } from 'gsheeez';

import supplierSheet from '../gs-models/Supplier-gs';

const supplierGs: IDBModel<any> = {
  insert: async user => {},

  getById: async data => {},

  getAll: async () => {
    const gshez = sheeez({
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      token_path: 'token.json',
      creds_path: 'credentials.json',
      google,
    });

    const suppliersSheet = gshez.create({
      spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
      range: 'S:Y',
    });

    const grid = await suppliersSheet.grid({ headerLength: 1 });
    supplierSheet.setGrid(grid);
    return supplierSheet.getAll();
  },

  deleteById: async data => {},

  updateById: async data => {},

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

export { supplierGs };
