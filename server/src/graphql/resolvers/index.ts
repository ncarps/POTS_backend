import { mergeResolvers } from 'merge-graphql-schemas';
import { IResolvers } from 'graphql-tools';

import user from './user';
import address from './address';
import supplier from './supplier';
import supplierStatus from './supplierStatus';
import item from './item';
import purchaseOrder from './purchaseOrder';

const resolvers: IResolvers[] = [user, address, supplier, supplierStatus, item, purchaseOrder];

export default mergeResolvers(resolvers);
