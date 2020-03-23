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

### Admin

1. Admin should be able to (Read, Update Delete) purchase orders

* Read

The Admin can Read Purchase Orders using the following GQL queries: 

1. purchaseOrder

The query purchaseOrder is used to read a single Purchase Order. It takes the ID of the Purchase Order as a parameter.

``` 
purchaseOrder(id: ID!): PurchaseOrder
```

2. allPurchaseOrders

The query allPurchaseOrders is used to read all of the Purchase Orders. 

