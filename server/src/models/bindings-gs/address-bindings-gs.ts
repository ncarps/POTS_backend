import { IDBModel } from '../../commons/types';
import { google } from 'googleapis';
import { sheeez } from 'gsheeez';

import addressSheet from '../gs-models/Address-gs';

const gshez = sheeez({
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  token_path: 'token.json',
  creds_path: 'credentials.json',
  google,
});

const addsSheet = gshez.create({
  spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
  range: 'Address!A:E',
});

const addressGs: IDBModel<any> = {
  insert: async user => {},

  getById: async id => {
    const grid = await addsSheet.grid({ headerLength: 1 });
    addressSheet.setGrid(grid);
    const add: Array<any> = addressSheet.getAll().map((a, idx) => {
      return {
        building_name: a.building_name,
        id: idx,
        street: a.street,
        city: a.city,
        state: a.state,
        zip_code: a.zip_code,
      };
    });
    return add[id];
  },
  getAll: async () => {
    const grid = await addsSheet.grid({ headerLength: 1 });
    addressSheet.setGrid(grid);
    return addressSheet.getAll().map((a, idx) => {
      return {
        building_name: a.building_name,
        id: idx,
        street: a.street,
        city: a.city,
        state: a.state,
        zip_code: a.zip_code,
      };
    });
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
