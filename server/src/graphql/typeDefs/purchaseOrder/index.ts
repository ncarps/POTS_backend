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
		deletePurchaseOrder(id: ID!): PurchaseOrder
	}

	input PurchaseOrderInput {
		externalID: String!
		status: String!
		supplierStatus: String!
		supplier: String!
		items: [String]!
	}
`;

export default typeDefs;
