import { gql } from 'apollo-server';

const typeDefs = gql`
	type PurchaseOrder {
		id: ID!
		externalID: String!
		status: String!
		supplierStatus: SupplierStatus!
		supplier: Supplier!
		items: [Item!]
	}

	type Query {
		purchaseOrder(id: ID!): PurchaseOrder
		allPurchaseOrders: [PurchaseOrder]
	}

	type Mutation {
		createPurchaseOrder(purchaseOrder: PurchaseOrderInput): PurchaseOrder
	}

	input PurchaseOrderInput {
		externalID: String!
		status: String!
		supplierStatus: ID!
		supplier: ID!
		items: ID!
	}
`;

export default typeDefs;
