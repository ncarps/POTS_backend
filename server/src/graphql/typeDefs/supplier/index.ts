import { gql } from "apollo-server";

const suppliertypeDefs = gql`
  type Supplier {
    id: ID!
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
    name: String!
    address: AddressInput!
  }

  input UpdateSupplierInput {
    id: ID!
    name: String!
    address: String!
  }
`;

export default suppliertypeDefs;
