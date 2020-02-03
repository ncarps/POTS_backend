import { mergeResolvers } from 'merge-graphql-schemas';
import { IResolvers } from 'graphql-tools';

import user from './user';

const resolvers: IResolvers[] = [user];

export default mergeResolvers(resolvers);
