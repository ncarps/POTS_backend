import { gql } from 'apollo-server';

const typeDefs = gql`
	type PurchaseOrder {
		id: ID!
		externalID: String!
		status: String!
		supplierStatus: [SupplierStatus]
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
		updatePurchaseOrder(purchaseOrder: UpdatePurchaseOrderInput): PurchaseOrder
	}

	input PurchaseOrderInput {
		externalID: String!
		status: String!
		supplierStatus: [SupplierStatusInput]
		supplier: SupplierInput!
		items: [ItemInput!]!
	}

	input UpdatePurchaseOrderInput {
		id: ID!
		externalID: String!
		status: String!
		supplierStatus: UpdateSupplierStatusInput
		supplier: UpdateSupplierInput!
		items: UpdateItemInput!
	}
`;

export default typeDefs;
