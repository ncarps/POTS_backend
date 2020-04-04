import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const itemGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const models = await gsModels();
    const i = models.item.getById(id);

    return {
      itemNo: i.item,
      productId: i.item,
      description: i.item,
      quantity: i.item,
      uom: i.item,
      unitPrice: i.item,
      totalAmount: i.item,
      discount: i.item,
      deliveryAddress: i.item,
      supplierStatusItem: i.item,
      scheduleLine: i.item,
      currency: i.item,
      dateUpdated: i.item,
      timeUpdated: i.item,
      id: i.__metadata.uid,
    };
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('address', models.item.getAll());
    const itemzxc: Array<any> = models.item.getAll().map((i, idx) => {
      return {
        itemNo: i.item,
        productId: i.item,
        description: i.item,
        quantity: i.item,
        uom: i.item,
        unitPrice: i.item,
        totalAmount: i.item,
        discount: i.item,
        deliveryAddress: i.item,
        supplierStatusItem: i.item,
        scheduleLine: i.item,
        currency: i.item,
        dateUpdated: i.item,
        timeUpdated: i.item,
        id: i.__metadata.uid,
      };
    });
    return itemzxc;
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
