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
		createSupplierStatus(status: String!, dateCreated: String!): SupplierStatus
		updateSupplierStatus(id: String, status: String, dateCreated: String): SupplierStatus
		deleteSupplierStatus(id: String): SupplierStatus
	}
`;

export default typeDefs;
