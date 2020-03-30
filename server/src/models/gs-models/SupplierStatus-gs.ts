import { createSchema, createModel } from 'gsheeez';

const SupplierStatusSchema = new createSchema({
  range: 'N:Q',
  header: ['id', 'status', 'dateCreated', 'timeCreated'],
});

export default createModel(SupplierStatusSchema);
