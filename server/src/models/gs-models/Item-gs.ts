import { createSchema, createModel } from 'gsheeez';

const Itemschema = new createSchema({
  range: 'A:N',
  header: [
    'id',
    'itemNo',
    'productId',
    'description',
    'quantity',
    'uom',
    'unitPrice',
    'totalAmount',
    'discount',
    'deliveryAddress',
    'supplierStatusItem',
    'scheduleLine',
    'currency',
    'dateUpdated',
    'timeUpdated',
  ],
});

export default createModel(Itemschema);
