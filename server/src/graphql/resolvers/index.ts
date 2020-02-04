import { mergeResolvers } from 'merge-graphql-schemas';
import { IResolvers } from 'graphql-tools';

import user from './user';
import address from './address';

const resolvers: IResolvers[] = [user, address];

export default mergeResolvers(resolvers);
