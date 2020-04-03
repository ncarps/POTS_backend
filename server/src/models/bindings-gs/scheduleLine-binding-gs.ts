import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const scheduleLineGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    // const models = await gsModels();
    // const sl = models.scheduleLine.getById(id);
    // const supplierStatus = models.supplierStatus.get({
    //   supplierStatus: sl.supplierStatus,
    // }).__metadata.uid;
    // return {
    //   quantity: sl.quantity,
    //   uom: sl.uom,
    //   unitPrice: sl.unitPrice,
    //   totalAmount: sl.totalAmount,
    //   deliveryDateAndTime: sl.deliveryDateAndTime,
    //   deliveryStatus: supplierStatus,
    //   id: sl.__metadata.uid,
    // };
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('schedule line', models.scheduleLine.getAll());
    const sl: Array<any> = models.scheduleLine.getAll().map((sl, idx) => {
      const supplierStatus = models.supplierStatus.get({
        supplierStatus: sl.supplierStatus,
      }).__metadata.uid;
      return {
        quantity: sl.quantity,
        uom: sl.uom,
        unitPrice: sl.unitPrice,
        totalAmount: sl.totalAmount,
        deliveryDateAndTime: sl.deliveryDateAndTime,
        deliveryStatus: supplierStatus,
        id: sl.__metadata.uid,
      };
    });
    return sl;
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { scheduleLineGs };
