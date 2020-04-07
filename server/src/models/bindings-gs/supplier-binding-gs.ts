import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const supplierGs: IDBModel<any> = {
  insert: async suppstat => {},
  getById: async id => {
    const models = await gsModels();
    const supp = models.supplier.getById(id);
    const address = models.address.get({
      supplierNo: supp.supplierNo,
      supplierName: supp.supplierName,
    }).__metadata.uid;

    return {
      id: supp.__metadata.uid,
      supplierNo: supp.supplierNo,
      supplierName: supp.supplierName,
      address: address,
      tin: supp.tin,
      contactNumber: supp.contactNumber,
      contactPerson: supp.contactPerson,
    };
  },
  getAll: async () => {
    const models = await gsModels();

    const supp: Array<any> = models.supplier.getAll().map((supp, idx) => {
      const address = models.address.get({
        supplierNo: supp.supplierNo,
        supplierName: supp.supplierName,
        address: supp.address,
      }).__metadata.uid;
      console.log('address id', address);
      return {
        id: supp.__metadata.uid,
        supplierNo: supp.supplierNo,
        supplierName: supp.supplierName,
        address: address,
        tin: supp.tin,
        contactNumber: supp.contactNumber,
        contactPerson: supp.contactPerson,
      };
    });
    return supp;
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { supplierGs };
