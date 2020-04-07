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
<<<<<<< HEAD
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
=======
      const supplierStatus = models.deliveryStatus.get({
        scheduleLine: sl.scheduleLine,
        purchaseOrderNo: sl.purchaseOrderNo,
        itemNo: sl.itemNo,
        productId: sl.productId,
      }).__metadata.uid;
      console.log(supplierStatus);
>>>>>>> 645cd954e7a4abbc93e17cee92566197edf02cda
      return {
        quantity: sl.quantity,
        uom: sl.uom,
        unitPrice: sl.unitPrice,
        totalAmount: sl.totalAmount,
        deliveryDateAndTime: sl.deliveryDateAndTime,
<<<<<<< HEAD
        deliveryStatus: deliveryStatus,
=======
        deliveryStatus: supplierStatus,
>>>>>>> 645cd954e7a4abbc93e17cee92566197edf02cda
        id: sl.__metadata.uid,
      };
    });
    return sl;
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async data => {
    const models = await gsModels();
<<<<<<< HEAD
    const deliveryStatus: Array<any> = id.map(i =>
      models.supplierStatus.getById(i),
    );
    return deliveryStatus.map(ss => {
      const supplierStatus1 = models.deliveryStatus.get({
        purchaseOrderNo: ss.purchaseOrderNo,
        itemNo: ss.itemNo,
        scheduleLine: ss.scheduleLine,
        status: ss.status,
      }).__metadata.uid;
      return {
        status: supplierStatus1,
        timeCreated: ss.timeCreated,
        dateCreated: ss.dateCreated,
        id: ss.__metadata.uid,
      };
    });
=======
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
>>>>>>> 645cd954e7a4abbc93e17cee92566197edf02cda
  },
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { scheduleLineGs };
