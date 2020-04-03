import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const addressGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const models = await gsModels();
    const a = models.address.getById(id);

    return {
      building_name: a.address,
      street: a.address,
      city: a.address,
      state: a.address,
      zip_code: a.address,
      id: a.__metadata.uid,
    };
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('address', models.address.getAll());
    const add: Array<any> = models.address.getAll().map((a, idx) => {
      return {
        building_name: a.address,
        street: a.address,
        city: a.address,
        state: a.address,
        zip_code: a.address,
        id: a.__metadata.uid,
      };
    });
    return add;
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { addressGs };
