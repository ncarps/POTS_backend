import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const supplierStatusGs: IDBModel<any> = {
  insert: async suppstat => {},
  getById: async id => {
    const models = await gsModels();
    const ss = models.deliveryStatus.getById(id);

    return {
      status: ss.status,
      timeCreated: ss.timeCreated,
      dateCreated: ss.dateCreated,
      id: ss.__metadata.uid,
    };
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('supplierStatus', models.deliveryStatus.getAll());
    const suppstat: Array<any> = models.deliveryStatus
      .getAll()
      .map((ss, idx) => {
        return {
          status: ss.status,
          timeCreated: ss.timeCreated,
          dateCreated: ss.dateCreated,
          id: ss.__metadata.uid,
        };
      });
    return suppstat;
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { supplierStatusGs };
