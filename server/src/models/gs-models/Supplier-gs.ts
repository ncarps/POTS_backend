import { createSchema, createModel } from 'gsheeez';

const Supplierschema = new createSchema({
  range: 'S:Y',
  header: ['id', 'supplierNo', 'supplierName', 'tin', 'contactNumber','contactPerson','address'],
});

export default createModel(Supplierschema);
