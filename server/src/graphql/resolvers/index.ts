import { mergeResolvers } from 'merge-graphql-schemas';

// import address from "./address";

import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers[] = [
	//   address,
];

export default mergeResolvers(resolvers);
