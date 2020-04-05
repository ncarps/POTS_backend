import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const scheduleLineGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const models = await gsModels();
    const sl = models.scheduleLine.getById(id);
    const supplierStatus = models.deliveryStatus.get({
      deliveryStatus: sl.deliveryStatus,
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
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('schedule line', models.scheduleLine.getAll());
    const sl: Array<any> = models.scheduleLine.getAll().map((sl, idx) => {
      // const supplierStatus = models.deliveryStatus.get({
      //   supplierStatus: sl.deliveryStatus,
      // }).__metadata.uid;
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
  getAllBySupplierStatus: async id => {
    const models = await gsModels();
<<<<<<< HEAD
    const SupplierStatus: Array<any> = models.supplierStatus
      .getAll()
      .filter(x => x.supplierStatusID === id)
      .map((a, idx) => {
        return {
          status: a.status,
          timeCreated: a.timeCreated,
          dateCreated: a.dateCreated,

          id: a.__metadata.uid,
        };
      });
    return SupplierStatus;
=======
    const suppstat: Array<any> = models.deliveryStatus
      .getAll()
      .filter(x => x.deliveryStatus === id)
      .map((ss, idx) => {
        return {
          status: ss.status,
          timeCreated: ss.timeCreated,
          dateCreated: ss.dateCreated,
          id: ss.__metadata.uid,
        };
      });
    return suppstat;
>>>>>>> dca655d7426ba5955c87c23365004597550efb52
  },
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { scheduleLineGs };
