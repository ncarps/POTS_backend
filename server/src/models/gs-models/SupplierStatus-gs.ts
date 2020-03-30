import { createSchema, createModel } from 'gsheeez';

const SupplierStatusSchema = new createSchema({
  range: 'A:I',
  header: [
    'purchaseOrderNo',
    'shipmentNo',
    'adminStatus',
    'supplierStatusHeader',
    'documentDate',
    'postingDate',
    'vendorAddress',
    'supplier',
    'items',
  ],
});

export default createModel(SupplierStatusSchema);
