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
		deliveryDate: String!
		supplierStatus: [SupplierStatus!]!
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
		productId: String!
		description: String!
		quantity: Float!
		uom: String!
		unitPrice: Float!
		totalAmount: Float!
		deliveryAddress: AddressInput!
		deliveryDate: String!
		supplierStatus: [SupplierStatusInput!]!
		currency: String!
	}

	input UpdateItemInput {
		itemNo: String!
		productId: String!
		description: String!
		quantity: Float!
		# deliveryAddress: AddressInput!
		uom: String!
		unitPrice: Float!
		totalAmount: Float!
		deliveryDate: String!
		supplierStatus: [UpdateSupplierStatusInput!]!
		currency: String!
	}
`;

export default typeDefs;
