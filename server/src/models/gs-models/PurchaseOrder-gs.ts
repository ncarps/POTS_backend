import { createSchema, createModel } from 'gsheeez';

const PurchaseOrderSchema = new createSchema({
  range: 'A:F',
  header: [
    'quantity',
    'uom',
    'unitPrice',
    'totalAmount',
    'deliveryDateAndTime',
    'deliveryStatus',
  ],
});

export default createModel(PurchaseOrderSchema);
