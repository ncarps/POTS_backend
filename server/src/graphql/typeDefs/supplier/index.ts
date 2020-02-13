import { gql } from 'apollo-server';

const suppliertypeDefs = gql`
	type Supplier {
		id: ID!
		externalID: String!
		name: String!
		address: Address!
	}

	type Query {
		supplier(id: ID!): Supplier!
		allSuppliers: [Supplier!]!
	}

	type Mutation {
		createSupplier(supplier: SupplierInput): Supplier
		deleteSupplier(id: ID!): Supplier
		updateSupplier(supplier: UpdateSupplierInput): Supplier
	}

	input SupplierInput {
		externalID: String!
		name: String!
		address: AddressInput!
	}

	input UpdateSupplierInput {
		id: ID!
		externalID: String
		name: String!
		# address: String!
	}
`;

export default suppliertypeDefs;
