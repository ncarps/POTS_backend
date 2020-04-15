import { gql } from 'apollo-server';

const typeDefs = gql`
  type PurchaseOrder {
    id: ID!
    purchaseOrderNo: String!
    shipmentNo: String!
    adminStatus: String
    supplierStatusHeader: String
    documentDate: String
    postingDate: String
    vendorAddress: Address!
    supplier: Supplier!
    items: [Item!]
  }

  type Query {
    purchaseOrderSupplier(id: ID!): PurchaseOrder # Get 1 PO Supplier
    purchaseOrder(id: ID!): PurchaseOrder # Get 1 PO Admin
    allPurchaseOrders: [PurchaseOrder] # Get all PO Admin
    supplierAllPurchaseOrders: [PurchaseOrder] # Get all PO Supplier
    supplierPurchaseOrdersByStatus(status: String): [PurchaseOrder] # Get by status Supplier
    purchaseOrdersStatus(status: String): [PurchaseOrder] # Get by status Admin
    purchaseOrdersAdminStatus(status: String): [PurchaseOrder]
    purchaseOrdersByPostDate(fromDate: String, toDate: String): [PurchaseOrder]
    purchaseOrdersByDocDate(fromDate: String, toDate: String): [PurchaseOrder]
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
  }
`;

export default typeDefs;
