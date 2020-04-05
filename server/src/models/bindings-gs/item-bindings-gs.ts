import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const itemGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const models = await gsModels();
    const itemz = models.item.getById(id);
    // const sched = models.scheduleLineItem.getById(id);
    // const deliveryAddress = models.vendorAddress.get({ address: itemz.address })
    //   .__metadata.uid;
    // const scheduleline = models.scheduleLine.get({
    //   scheduleline: itemz.scheduleLine,
    // }).__metadata.uid;
    return {
      itemNo: itemz.itemNo,
      productId: itemz.productId,
      description: itemz.description,
      quantity: itemz.quantity,
      uom: itemz.uom,
      unitPrice: itemz.unitPrice,
      totalAmount: itemz.totalAmount,
      discount: itemz.discount,
      // deliveryAddress: deliveryAddress,
      supplierStatusItem: itemz.supplierStatusItem,
      // scheduleLine: scheduleline,
      currency: itemz.currency,
      dateUpdated: itemz.dateUpdated,
      timeUpdated: itemz.timeUpdated,
      id: itemz.__metadata.uid,
    };
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('item', models.item.getAll());

    const itemz: Array<any> = models.item.getAll().map((itemz, idx) => {
      const deliveryAddress = models.vendorAddress.get({
        vendorAddress: itemz.vendorAddress,
      }).__metadata.uid;
      const scheduleline = models.scheduleLine.get({
        scheduleLine: itemz.scheduleLine,
      }).__metadata.uid;
      return {
        itemNo: itemz.itemNo,
        productId: itemz.productId,
        description: itemz.description,
        quantity: itemz.quantity,
        uom: itemz.uom,
        unitPrice: itemz.unitPrice,
        totalAmount: itemz.totalAmount,
        discount: itemz.discount,
        deliveryAddress: deliveryAddress,
        supplierStatusItem: itemz.supplierStatusItem,
        scheduleLine: scheduleline,
        currency: itemz.currency,
        dateUpdated: itemz.dateUpdated,
        timeUpdated: itemz.timeUpdated,
        id: itemz.__metadata.uid,
      };
    });
    return itemz;
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {
    const models = await gsModels();

    // return models.scheduleLine
    //   .getAll()
    //   .filter(x => data.map(i => i === x.id))
    //   .map(sl => {
    //     const supplierStatus = models.deliveryStatus.get({
    //       purchaseOrderNo: sl.purchaseOrderNo,
    //       itemNo: sl.itemNo,
    //       productId: sl.productId,
    //       scheduleLine: sl.scheduleLine,
    //     });
    //     return {
    //       quantity: sl.quantity,
    //       uom: sl.uom,
    //       unitPrice: sl.unitPrice,
    //       totalAmount: sl.totalAmount,
    //       deliveryDateAndTime: sl.deliveryDateAndTime,
    //       deliveryStatus: [supplierStatus],
    //       id: sl.__metadata.uid,
    //     };
    //   });

    const items: Array<any> = data.map(i => models.scheduleLine.getById(i));

    return items.map(sl => {
      const supplierStatus = models.deliveryStatus.get({
        purchaseOrderNo: sl.purchaseOrderNo,
        itemNo: sl.itemNo,
        productId: sl.productId,
        scheduleLine: sl.scheduleLine,
      });
      return {
        quantity: sl.quantity,
        uom: sl.uom,
        unitPrice: sl.unitPrice,
        totalAmount: sl.totalAmount,
        deliveryDateAndTime: sl.deliveryDateAndTime,
        deliveryStatus: [supplierStatus],
        id: sl.__metadata.uid,
      };
    });
  },
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { itemGs };
