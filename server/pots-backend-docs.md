## Purchase Order Tracking System Backend Documentation



### Data Model

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
        * address
            * id
            * building_name
            * street
            * city
            * state
            * zip_code
    