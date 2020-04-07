import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const itemGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const models = await gsModels();
    const itemz = models.item.getById(id);
    const deliveryAddress = models.deliveryAddress.get({
      purchaseOrderNo: itemz.purchaseOrderNo,
      itemNo: itemz.itemNo,
      productId: itemz.productId,
      deliveryAddress: itemz.deliveryAddress,
    }).__metadata.uid;

    const scheduleline: Array<any> = models.scheduleLine
      .getAll()
      .filter(
        x =>
          x.purchaseOrderNo == itemz.purchaseOrderNo &&
          x.itemNo === itemz.itemNo &&
          x.productId === itemz.productId,
      )
      .map(sl => sl.__metadata.uid);
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
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('item', models.item.getAll());

    const itemz: Array<any> = models.item.getAll().map((itemz, idx) => {
      const deliveryAddress = models.deliveryAddress.get({
        deliveryAddress: itemz.deliveryAddress,
      }).__metadata.uid;
      const scheduleline: Array<any> = models.scheduleLine
        .getAll()
        .filter(
          x =>
            x.purchaseOrderNo == itemz.purchaseOrderNo &&
            x.itemNo === itemz.itemNo &&
            x.productId === itemz.productId,
        )
        .map(sl => sl.__metadata.uid);
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

    const items: Array<any> = data.map(i => models.scheduleLine.getById(i));

    return items.map(sl => {
      const supplierStatus = models.deliveryStatus.get({
        purchaseOrderNo: sl.purchaseOrderNo,
        itemNo: sl.itemNo,
        productId: sl.productId,
        scheduleLine: sl.scheduleLine,
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
  },

  updateSupplierStatusItemById: async i => {
    const models = await gsModels();
    const itemz = models.item.getById(i.id);
    const deliveryAddress = models.deliveryAddress.get({
      purchaseOrderNo: itemz.purchaseOrderNo,
      itemNo: itemz.itemNo,
      productId: itemz.productId,
      deliveryAddress: itemz.deliveryAddress,
    }).__metadata.uid;

    console.log('SCHEDULE LINE PAKITA KA', models.scheduleLine.getAll());
    const scheduleline: Array<any> = models.scheduleLine
      .getAll()
      .filter(
        x =>
          x.purchaseOrderNo == itemz.purchaseOrderNo &&
          x.itemNo === itemz.itemNo &&
          x.productId === itemz.productId,
      )
      .map(itemz => itemz.__metadata.uid);

    const gsheet = models.gsheet;
    console.log(itemz);
    const newObj = models.item.update(itemz, {
      supplierStatusItem: i.supplierStatusItem,
    });

    console.log(newObj);
    const res = await gsheet.save(
      { headerLength: 1 },
      models.item.getChanges(),
    );
    if (res.status == 200) {
      return {
        itemNo: newObj.itemNo,
        productId: newObj.productId,
        description: newObj.description,
        quantity: newObj.quantity,
        uom: newObj.uom,
        unitPrice: newObj.unitPrice,
        totalAmount: newObj.totalAmount,
        discount: newObj.discount,
        deliveryAddress: deliveryAddress,
        supplierStatusItem: newObj.supplierStatusItem,
        scheduleLine: scheduleline,
        currency: newObj.currency,
        dateUpdated: newObj.dateUpdated,
        timeUpdated: newObj.timeUpdated,
        id: i.id,
      };
    }
  },
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { itemGs };
