import { gql } from 'apollo-server';

const typeDefs = gql`
	type Item {
		id: ID!
		itemNo: String!
		description: String!
		quantity: String!
		uom: String!
		price: String!
		currency: String!
	}

	type Query {
		item(id: String): Item
		allItems: [Item]
	}

	type Mutation {
		createItem(item: ItemInput!): Item
		updateItem(item: UpdateItemInput!): Item
		deleteItem(id: ID!): Item
	}

	input ItemInput {
		itemNo: String!
		description: String!
		quantity: String!
		uom: String!
		price: String!
		currency: String!
	}

	input UpdateItemInput {
		id: ID!
		itemNo: String!
		description: String!
		quantity: String!
		uom: String!
		price: String!
		currency: String!
	}
`;

export default typeDefs;
