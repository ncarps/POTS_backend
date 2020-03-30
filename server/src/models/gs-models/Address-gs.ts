import { createSchema, createModel } from 'gsheeez';

const AddressSchema = new createSchema({
  range: 'G:L',
  header: ['id', 'building_name', 'street', 'city', 'state', 'zip_code'],
});

export default createModel(AddressSchema);
