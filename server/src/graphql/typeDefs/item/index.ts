import { gql } from 'apollo-server';

const typeDefs = gql`
	type Item {
		id: ID!
		itemNo: String!
		productId: String!
		description: String!
		quantity: Float!
		uom: String!
		unitPrice: Float!
		totalAmount: Float!
		deliveryAddress: Address!
		supplierStatus: String
		scheduleLine: [ScheduleLine]
		currency: String!
		dateUpdated: String
		timeUpdated: String
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
		productId: String!
		description: String!
		quantity: Float!
		uom: String!
		unitPrice: Float!
		totalAmount: Float!
		deliveryAddress: AddressInput!
		currency: String!
		dateUpdated: String
		timeUpdated: String
	}

	input UpdateItemInput {
		id: ID!
		itemNo: String
		productId: String
		description: String
		quantity: Float
		uom: String
		unitPrice: Float
		totalAmount: Float
		supplierStatus: String
		scheduleLine: ScheduleLineInput
		currency: String
		dateUpdated: String
		timeUpdated: String
	}
`;

export default typeDefs;
