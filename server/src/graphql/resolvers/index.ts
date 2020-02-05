import { mergeResolvers } from 'merge-graphql-schemas';
import { IResolvers } from 'graphql-tools';

import user from './user';
import address from './address';
import supplier from './supplier';
import supplierStatus from './supplierStatus';

const resolvers: IResolvers[] = [user, address, supplier, supplierStatus];

export default mergeResolvers(resolvers);
