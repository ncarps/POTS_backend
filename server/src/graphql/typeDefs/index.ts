import { mergeTypes } from 'merge-graphql-schemas';

import user from './user';
import address from './address';
import supplier from './supplier';
import supplierStatus from './supplierStatus';

const typeDefs = [user, address, supplier, supplierStatus];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default mergeTypes(typeDefs, { all: true });
