import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const purchaseOrderGs: IDBModel<any> = {
  insert: async suppstat => {},
  getById: async id => {
    const models = await gsModels();
    const po = models.purchaseOrder.getById(id);
    // const su = models.supplier.getById(id);
    // const it = models.item.getById(id);
    // const vendorAddress = models.address.get({ address: po.address }).__metadata
    //   .uid;
    // const Supplier = models.supplier.get({ supplier: su.supplier }).__metadata;
    // const item = models.item.get({ item: it.item }).__metadata;
    return {
      purchaseOrderNo: po.purchaseOrderNo,
      shipmentNo: po.shipmentNo,
      adminStatus: po.adminStatus,
      supplierStatusHeader: po.supplierStatusHeader,
      documentDate: po.documentDate,
      postingDate: po.postingDate,
      // vendorAddress: vendorAddress,
      // supplier: Supplier,
      // items: item,
      id: po.__metadata.uid,
    };
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('Purchase Order', models.purchaseOrder.getAll());

    const po: Array<any> = models.purchaseOrder.getAll().map((po, idx) => {
      // const vendorAddress = models.address.get({ address: po.address }).__metadata
      //   .uid;
      //   const Supplier = models.supplier.get({ supplier: po.supplier }).__metadata
      //   .uid;
      //   const item = models.item.get({ item: po.item }).__metadata
      //   .uid;
      return {
        purchaseOrderNo: po.purchaseOrderNo,
        shipmentNo: po.shipmentNo,
        adminStatus: po.adminStatus,
        supplierStatusHeader: po.supplierStatusHeader,
        documentDate: po.documentDate,
        postingDate: po.postingDate,
        // vendorAddress: vendorAddress,
        // supplier: Supplier,
        // items: item,
        id: po.__metadata.uid,
      };
    });
    return po;
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { purchaseOrderGs };
