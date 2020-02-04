import { mergeResolvers } from 'merge-graphql-schemas';
import { IResolvers } from 'graphql-tools';

import user from './user';
import address from './address';
import supplier from './supplier';

const resolvers: IResolvers[] = [user, address, supplier];

export default mergeResolvers(resolvers);
