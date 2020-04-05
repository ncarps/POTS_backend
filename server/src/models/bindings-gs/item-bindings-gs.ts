import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const itemGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const models = await gsModels();
    const itemz = models.item.getById(id);
    const sched = models.scheduleLine.getById(id);
    const deliveryAddress = models.address.get({ address: itemz.address })
      .__metadata.uid;
    const scheduleline = models.scheduleLine.get({
      scheduleLine: sched.scheduleLine,
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
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('item', models.item.getAll());

    const itemz: Array<any> = models.item.getAll().map((itemz, idx) => {
      const deliveryAddress = models.address.get({ address: itemz.address })
        .__metadata.uid;
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
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { itemGs };
