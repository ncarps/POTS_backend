import { IDBModel } from '../../commons/types';
import { google } from 'googleapis';
import { sheeez } from 'gsheeez';

import scheduleLineSheet from '../gs-models/ScheduleLine-gs';

const gshez = sheeez({
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  token_path: 'token.json',
  creds_path: 'credentials.json',
  google,
});

const scheduleLinesSheet = gshez.create({
  spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
  range: 'ScheduleLine!A:F',
});

const scheduleLineGs: IDBModel<any> = {
  insert: async user => {},

  getById: async data => {
    const grid = await scheduleLinesSheet.grid({ headerLength: 1 });
    scheduleLineSheet.setGrid(grid);
    const scheduleLine: Array<any> = scheduleLineSheet
      .getAll()
      .map((sl, idx) => {
        return {
          id: idx,
          quantity: sl.quantity,
          uom: sl.uom,
          unitPrice: sl.unitPrice,
          totalAmount: sl.totalAmount,
          deliveryDateAndTime: sl.deliveryDateAndTime,
          deliveryStatus: sl.deliveryStatus,
        };
      });
    return scheduleLine[data];
  },

  getAll: async () => {
    const grid = await scheduleLinesSheet.grid({ headerLength: 1 });
    scheduleLineSheet.setGrid(grid);
    console.log(scheduleLineSheet.getAll());
    return scheduleLineSheet.getAll().map((sl, idx) => {
      return {
        id: idx,
        quantity: sl.quantity,
        uom: sl.uom,
        unitPrice: sl.unitPrice,
        totalAmount: sl.totalAmount,
        deliveryDateAndTime: sl.deliveryDateAndTime,
        deliveryStatus: sl.deliveryStatus,
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

export { scheduleLineGs };
