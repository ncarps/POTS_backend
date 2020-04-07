import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const purchaseOrderGs: IDBModel<any> = {
  insert: async suppstat => {},
  getById: async id => {
    const models = await gsModels();
    const po = models.purchaseOrder.getById(id);
    const vendorAddress = models.vendorAddress.get({
      vendorAddress: po.vendorAddress,
      purchaseOrderNo: po.purchaseOrderNo,
    }).__metadata.uid;

    console.log('Supplier', po.supplierNo, po.supplierName);
    const supplier = models.supplier.get({
      supplierNo: po.supplierNo,
      supplierName: po.supplierName,
    }).__metadata.uid;

    console.log('Items', models.item.getAll());
    const item: Array<any> = models.item
      .getAll()
      .filter(
        x =>
          po.purchaseOrderNo == x.purchaseOrderNo &&
          x.deliveryAddress == x.deliveryAddress,
      )
      .map(po => po.__metadata.uid);
    return {
      purchaseOrderNo: po.purchaseOrderNo,
      shipmentNo: po.shipmentNo,
      adminStatus: po.adminStatus,
      supplierStatusHeader: po.supplierStatusHeader,
      documentDate: po.documentDate,
      postingDate: po.postingDate,
      vendorAddress: vendorAddress,
      supplier: supplier,
      items: item,
      id: po.__metadata.uid,
    };
  },
  getAll: async () => {
    const models = await gsModels();

    console.log('PO', models.purchaseOrder.getAll());
    const po: Array<any> = models.purchaseOrder.getAll().map(po => {
      const vendorAddress = models.vendorAddress.get({
        vendorAddress: po.vendorAddress,
        purchaseOrderNo: po.purchaseOrderNo,
      }).__metadata.uid;

      console.log('Supplier', po.supplierNo, po.supplierName);
      const supplier = models.supplier.get({
        supplierNo: po.supplierNo,
        supplierName: po.supplierName,
      }).__metadata.uid;

      console.log('Items', models.item.getAll());
      const item: Array<any> = models.item
        .getAll()
        .filter(
          x =>
            po.purchaseOrderNo == x.purchaseOrderNo &&
            x.deliveryAddress == x.deliveryAddress,
        )
        .map(po => po.__metadata.uid);

      console.log('items', item);
      return {
        purchaseOrderNo: po.purchaseOrderNo,
        shipmentNo: po.shipmentNo,
        adminStatus: po.adminStatus,
        supplierStatusHeader: po.supplierStatusHeader,
        documentDate: po.documentDate,
        postingDate: po.postingDate,
        vendorAddress: vendorAddress,
        supplier: supplier,
        items: item,
        id: po.__metadata.uid,
      };
    });
    return po;
  },

  getAllByItem: async id => {
    const models = await gsModels();

    const getScheduleLine = item => {
      return models.scheduleLine
        .getAll()
        .filter(
          x =>
            x.purchaseOrderNo === item.purchaseOrderNo &&
            x.itemNo === item.itemNo &&
            x.productId == item.productId,
        )
        .map(sl => {
          return sl.__metadata.uid;
        });
    };

    const items: Array<any> = id.map(i => models.item.getById(i));

    return items.map(itemz => {
      const deliveryAddress = models.deliveryAddress.get({
        itemNo: itemz.itemNo,
        productId: itemz.productId,
        deliveryAddress: itemz.deliveryAddress,
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
        scheduleLine: getScheduleLine(itemz),
        currency: itemz.currency,
        dateUpdated: itemz.dateUpdated,
        timeUpdated: itemz.timeUpdated,
        id: itemz.__metadata.uid,
      };
    });
  },
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async po => {
    const models = await gsModels();
    const PO = models.purchaseOrder.getById(po.id);
    const vendorAddress = models.vendorAddress.get({
      vendorAddress: PO.vendorAddress,
      purchaseOrderNo: PO.purchaseOrderNo,
    }).__metadata.uid;

    console.log('Supplier', PO.supplierNo, PO.supplierName);
    const supplier = models.supplier.get({
      supplierNo: PO.supplierNo,
      supplierName: PO.supplierName,
    }).__metadata.uid;

    console.log('Items', models.item.getAll());
    const item: Array<any> = models.item
      .getAll()
      .filter(
        x =>
          PO.purchaseOrderNo == x.purchaseOrderNo &&
          x.deliveryAddress == x.deliveryAddress,
      )
      .map(PO => PO.__metadata.uid);

    const gsheet = models.gsheet;
    console.log(PO);
    const newObj = models.purchaseOrder.update(PO, {
      adminStatus: po.adminStatus,
    });
    console.log(newObj);
    const res = await gsheet.save(
      { headerLength: 1 },
      models.purchaseOrder.getChanges(),
    );
    if (res.status == 200) {
      return {
        purchaseOrderNo: newObj.purchaseOrderNo,
        shipmentNo: newObj.shipmentNo,
        adminStatus: newObj.adminStatus,
        supplierStatusHeader: newObj.supplierStatusHeader,
        documentDate: newObj.documentDate,
        postingDate: newObj.postingDate,
        vendorAddress: vendorAddress,
        supplier: supplier,
        items: item,
        id: po.id,
      };
    }
  },

  deleteById: async id => {},
  updateById: async id => {},
};

export { purchaseOrderGs };
