import { gql } from 'apollo-server';

const typeDefs = gql`
	type SupplierStatus {
		id: ID!
		status: String!
		dateCreated: String!
	}

	type Query {
		supplierStatus(id: String): SupplierStatus
		allSupplierStatus: [SupplierStatus]
	}

	type Mutation {
		createSupplierStatus(supplierStatus: SupplierStatusInput!): SupplierStatus
		updateSupplierStatus(supplierStatus: UpdateSupplierStatusInput!): SupplierStatus
		deleteSupplierStatus(id: ID!): SupplierStatus
	}

	input SupplierStatusInput {
		status: String!
		dateCreated: String!
	}

	input UpdateSupplierStatusInput {
		id: ID!
		status: String!
		dateCreated: String!
	}
`;

export default typeDefs;
