# Purchase Order Tracking System Backend Documentation

## Data Model

* Purchase Order
    * id
    * purchaseOrderNo
    * shipment No
    * adminStatus
    * supplierStatusHeader
    * postingDate
    * documentDate
    * vendorAddress (Address)
        * id
        * building_name
        * street
        * city
        * state
        * zip_code
    * Supplier
        * id
        * supplierNo
        * supplierName
        * tin
        * contactPerson
        * contactNumber
        * address (Address)
            * id
            * building_name
            * street
            * city
            * state
            * zip_code
    * Items
        * id
        * itemNo
        * productId
        * description
        * quantity 
        * uom
        * unitPrice
        * totalAmount
        * discount
        * supplierStatusItem
        * currency
        * dateUpdated
        * timeUpdated
        * deliveryAddress (Address)
            * id
            * building_name
            * street
            * city
            * state
            * zip_code
        * scheduleLine (Schedule Line)
            * id
            * quantity
            * uom
            * unitPrice
            * totalAmount
            * deliveryDateAndTime
            * deliveryStatus (Supplier Status)
                * id
                * status
                * dateCreated
                * timeCreated


## Use Cases

## Admin

### 1. The Admin should be able to Read, Update, and Delete Purchase Orders.

* Read

The Admin can Read Purchase Orders using the following GQL queries: 

1. purchaseOrder - used to read a single Purchase Order. This query takes the ID of the Purchase Order as a parameter.

``` 
purchaseOrder(id: ID!): PurchaseOrder
```

2. allPurchaseOrders - used to read all Purchase Orders.

```
allPurchaseOrders: [PurchaseOrder]
```

3. purchaseOrdersStatus - used to read Purchase Orders by status. This query takes status as a parameter in order to filter the Purchase Orders.

```
 purchaseOrdersStatus(status: String): [PurchaseOrder]
```

</br>

* Update

The Admin can Update Purchase Orders using the following GQL 
mutations:

1. updatePurchaseOrder - used to update the fields of a Purchase Order. The mutation queries a specific purchase order using its ID.  

```
updatePurchaseOrder(purchaseOrder: UpdatePurchaseOrderInput): PurchaseOrder

input UpdatePurchaseOrderInput {
    id: ID!
    purchaseOrderNo: String
    shipmentNo: String
    adminStatus: String
    supplierStatusHeader: String
    documentDate: String
    postingDate: String
}
```

2. updateAdminStatus - used to update a the adminStatus field (Recieved/Pending) of a Purchase Order. The ID of the Purchase Order is used to query a single Purchase Order, and the mutation accepts adminStatus as a parameter. 

```
updateAdminStatus(purchaseOrder: UpdateAdminStatusInput): PurchaseOrder

input UpdateAdminStatusInput {
    id: ID!
    adminStatus: String!
}
```

</br>

* Delete

The Admin can Delete Purchase Orders using the following GQL mutation:

1. deletePurchaseOrder - used to delete a Purchase Order from the database. It accepts the ID of a Purchase Order as a parameter in order to query the specific Purchase Order to be deleted.

```
 deletePurchaseOrder(id: ID!): PurchaseOrder
```


