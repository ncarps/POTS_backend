import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';
import moment from 'moment';

const scheduleLineGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const models = await gsModels();
    const sl = models.scheduleLine.getById(id);
    const deliveryStatus = models.deliveryStatus.get({
      itemNo: sl.itemNo,
      purchaseOrderNo: sl.purchaseOrderNo,
      scheduleLine: sl.scheduleLine,
      productId: sl.productId,
    }).__metadata.uid;
    return {
      quantity: sl.quantity,
      uom: sl.uom,
      unitPrice: sl.unitPrice,
      totalAmount: sl.totalAmount,
      deliveryDateAndTime: sl.deliveryDateAndTime,
      deliveryStatus: deliveryStatus,
      id: sl.__metadata.uid,
    };
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('schedule line', models.scheduleLine.getAll());
    const sl: Array<any> = models.scheduleLine.getAll().map((sl, idx) => {
      const deliveryStatus = models.deliveryStatus.get({
        itemNo: sl.itemNo,
        purchaseOrderNo: sl.purchaseOrderNo,
        scheduleLine: sl.scheduleLine,
        productId: sl.productId,
      }).__metadata.uid;

      // const supplierStatus: Array<any> = models.scheduleLine
      //   .getAll()
      //   .filter(
      //     x => sl.purchaseOrderNo == x.purchaseOrderNo && sl.itemNo == x.itemNo
      //     && sl.productId == sl.productId && x.scheduleLine == x.scheduleLine
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
    const supplierStatus = models.deliveryStatus.getById(data);
    console.log(supplierStatus);
    const status = supplierStatus.deliveryStatus;
    const date = supplierStatus.dateCreated;
    const time = supplierStatus.timeCreated;
    let arrayOfSupplierStatus = status.split('||');
    let arrayOfDate = date.split('||');
    let arrayOfTime = time.split('||');

    return (
      arrayOfSupplierStatus.map((ss, idx) => {
        return {
          status: ss,
          timeCreated: arrayOfDate[idx],
          dateCreated: arrayOfTime[idx],
          id: idx,
        };
      }) || []
    );
  },
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async data => {
    const models = await gsModels();
    const ss = models.scheduleLine.getById(data.id);
    const gsheet = models.gsheet;
    console.log(ss);
    let newStatus, newDate, newTime;

    await Promise.all(
      data.deliveryStatus.map(ds => {
        if (ss.deliveryStatus) {
          newStatus = ss.deliveryStatus + '||' + ds.status;
        } else {
          newStatus = data.status;
        }

        if (ss.dateCreated) {
          newDate = ss.dateCreated + '||' + moment().format('YYYY-MM-DD');
        } else {
          newDate = moment().format('YYYY-MM-DD');
        }
        if (ss.timeCreated) {
          newTime = ss.timeCreated + '||' + moment().format('LTS');
        } else {
          newTime = moment().format('LTS');
        }
      }),
    );

    const a = models.scheduleLine.update(ss, {
      deliveryStatus: newStatus,
      dateCreated: newDate,
      timeCreated: newTime,
    });

    const res = await gsheet.save(
      { headerLength: 1 },
      models.scheduleLine.getChanges(),
    );

    return {
      quantity: ss.quantity,
      uom: ss.uom,
      unitPrice: ss.unitPrice,
      totalAmount: ss.totalAmount,
      deliveryDateAndTime: ss.deliveryDateAndTime,
      // deliveryStatus: supplierStatus,
      id: ss.__metadata.uid,
    };
  },
};

export { scheduleLineGs };
