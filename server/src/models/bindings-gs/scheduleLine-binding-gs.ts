import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const scheduleLineGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const models = await gsModels();
    const sl = models.scheduleLine.getById(id);
    // const supplierStatus = models.deliveryStatus.get({
    //   deliveryStatus: sl.deliveryStatus,
    // }).__metadata.uid;
    return {
      quantity: sl.quantity,
      uom: sl.uom,
      unitPrice: sl.unitPrice,
      totalAmount: sl.totalAmount,
      deliveryDateAndTime: sl.deliveryDateAndTime,
      // deliveryStatus: supplierStatus,
      id: sl.__metadata.uid,
    };
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('schedule line', models.scheduleLine.getAll());
    const sl: Array<any> = models.scheduleLine.getAll().map((sl, idx) => {
      const deliveryStatus = models.deliveryStatus.get({
        deliveryStatus: sl.deliveryStatus,
        purchaseOrderNo: sl.purchaseOrderNo,
        status: sl.status,
      }).__metadata.uid;

      // const supplierStatus: Array<any> = models.deliveryStatus
      //   .getAll()
      //   .filter(
      //     x => sl.purchaseOrderNo == x.purchaseOrderNo && sl.status == x.status,
      //   )
      //   .map(sl => sl.__metadata.uid);
      return {
        quantity: sl.quantity,
        uom: sl.uom,
        unitPrice: sl.unitPrice,
        totalAmount: sl.totalAmount,
        deliveryDateAndTime: sl.deliveryDateAndTime,
        deliveryStatus: deliveryStatus,
        id: sl.__metadata.uid,
      };
    });
    return sl;
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async data => {
    const models = await gsModels();
    console.log('array of status', data);
    const supplierStatus = models.deliveryStatus.getById(data);
    console.log('supplierStatus', supplierStatus.status);
    const status = supplierStatus.status;
    let arrayOfSupplierStatus = status.split('||');
    return (
      arrayOfSupplierStatus.map((ss, idx) => {
        return {
          status: ss,
          timeCreated: supplierStatus.timeCreated,
          dateCreated: supplierStatus.dateCreated,
          id: idx,
        };
      }) || []
    );
  },
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { scheduleLineGs };
