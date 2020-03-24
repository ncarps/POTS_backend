import { gql } from 'apollo-server';

const typeDefs = gql`
  type PurchaseOrder {
    id: ID!
    purchaseOrderNo: String!
    shipmentNo: String!
    adminStatus: String
    supplierStatusHeader: String
    vendorAddress: Address!
    supplier: Supplier!
    documentDate: String
    postingDate: String
    items: [Item!]
  }

  type Query {
    purchaseOrder(id: ID!): PurchaseOrder
    allPurchaseOrders: [PurchaseOrder]
    purchaseOrdersStatus(status: String): [PurchaseOrder]
  }

  type Mutation {
    createPurchaseOrder(purchaseOrder: PurchaseOrderInput): PurchaseOrder
    deletePurchaseOrder(id: ID!): PurchaseOrder
    updatePurchaseOrder(purchaseOrder: UpdatePurchaseOrderInput): PurchaseOrder
    updateAdminStatus(purchaseOrder: UpdateAdminStatusInput): PurchaseOrder
  }

  input UpdateAdminStatusInput {
    id: ID!
    adminStatus: String!
  }

  input PurchaseOrderInput {
    purchaseOrderNo: String!
    shipmentNo: String!
    adminStatus: String
    supplierStatusHeader: String
    vendorAddress: AddressInput!
    documentDate: String
    postingDate: String
    supplier: SupplierInput!
    items: [ItemInput!]!
  }

  input UpdatePurchaseOrderInput {
    id: ID!
    purchaseOrderNo: String
    shipmentNo: String
    adminStatus: String
    supplierStatusHeader: String
    documentDate: String
    postingDate: String
    supplier: UpdateSupplierInput
    items: [UpdateItemInput]
  }
`;

export default typeDefs;
