import { compareDate } from '../../../commons/dateCompare';

const purchaseOrderResolvers = {
  PurchaseOrder: {
    supplier: async (parent, args, context, info) => {
      const { getSupplierById } = context;
      const supp = await getSupplierById(parent.supplier);
      return supp;
    },
    items: async (parent, args, context, info) => {
      const { getAllItemsByPurchaseOrder } = context;
      return await getAllItemsByPurchaseOrder(parent.items);
    },
    vendorAddress: async (parent, args, context, info) => {
      const { getAddressById } = context;
      return await getAddressById(parent.vendorAddress);
    },
  },
  Query: {
    allPurchaseOrders: async (parent, args, context, info) => {
      const { getAllPurchaseOrders } = context;
      return getAllPurchaseOrders();
    },
    supplierAllPurchaseOrders: async (parent, args, context, info) => {
      const { getAllPurchaseOrders } = context;
      return getAllPurchaseOrders();
    },
    purchaseOrder: async (parent, { id }, context, info) => {
      const { getPurchaseOrderById } = context;
      return getPurchaseOrderById(id);
    },
    purchaseOrderSupplier: async (parent, { id }, context, info) => {
      const { getPurchaseOrderById } = context;
      return getPurchaseOrderById(id);
    },
    purchaseOrdersStatus: async (parent, { status }, context, info) => {
      const { getAllItemsByPurchaseOrder, getAllPurchaseOrders } = context;
      const poList = await getAllPurchaseOrders();
      const po: Array<any> = await Promise.all(
        await poList.map(async po => {
          const poItems = await getAllItemsByPurchaseOrder(po.items);

          const filterItems = i => {
            if (i.supplierStatusItem === status) {
              return i.id;
            }
          };
          let items;
          items = poItems.filter(filterItems);

          const itemsId: Array<String> = items.map(item => item.id);
          return { ...po, items: itemsId };
        }),
      );

      return po;
    },

    supplierPurchaseOrdersByStatus: async (
      parent,
      { status },
      context,
      info,
    ) => {
      const { getAllItemsByPurchaseOrder, getAllPurchaseOrders } = context;
      const poList = await getAllPurchaseOrders();
      const po: Array<any> = await Promise.all(
        await poList.map(async po => {
          const poItems = await getAllItemsByPurchaseOrder(po.items);

          const filterItems = i => {
            if (i.supplierStatusItem === status) {
              return i.id;
            }
          };
          let items;
          items = poItems.filter(filterItems);

          const itemsId: Array<String> = items.map(item => item.id);
          return { ...po, items: itemsId };
        }),
      );

      return po;
    },

    purchaseOrderSupplierNo: async (parent, { supplierno }, context, info) => {
      const { getAllPurchaseOrders, getSupplierById } = context;
      const poList = await getAllPurchaseOrders();
      const po: Array<any> = await Promise.all(
        await poList.map(async po => {
          const poSupp = await getSupplierById(po.supplier);

          if (poSupp.supplierNo === supplierno) {
            return po;
          }
        }),
      );
      return po;
    },
    purchaseOrdersAdminStatus: async (parent, { status }, context, info) => {
      const { getAllPurchaseOrders } = context;
      const po = await getAllPurchaseOrders();
      console.log('Po', po);
      return po.filter(po => po.adminStatus === status);
    },

    purchaseOrdersByPostDate: async (
      parent,
      { fromDate, toDate },
      context,
      info,
    ) => {
      const { getAllPurchaseOrders } = context;
      const po = await getAllPurchaseOrders();

      return po.filter(po => {
        if (compareDate(po.postingDate, fromDate, toDate)) {
          return po;
        }
      });
    },

    purchaseOrdersByDocDate: async (
      parent,
      { fromDate, toDate },
      context,
      info,
    ) => {
      const { getAllPurchaseOrders } = context;
      const po = await getAllPurchaseOrders();

      return po.filter(po => {
        if (compareDate(po.documentDate, fromDate, toDate)) {
          return po;
        }
      });
    },
  },
  Mutation: {
    createPurchaseOrder: async (parent, { purchaseOrder }, context, info) => {
      const {
        createPurchaseOrder,
        createSupplier,
        createItem,
        createScheduleLine,
        createSupplierStatus,
      } = context;

      const supplier = await createSupplier(purchaseOrder.supplier);

      const items: Array<any> = await Promise.all(
        purchaseOrder.items.map(async item => {
          const scheduleLine: Array<any> = await Promise.all(
            item.scheduleLine.map(async sl => {
              let deliveryStatus;
              if (sl.deliveryStatus) {
                deliveryStatus = await Promise.all(
                  sl.deliveryStatus.map(async ds => {
                    const deliveryStatus = await createSupplierStatus(ds);
                    return deliveryStatus.id.toString();
                  }),
                );
              }
              const scheduleLine = {
                quantity: sl.quantity,
                uom: sl.uom,
                unitPrice: sl.unitPrice,
                totalAmount: sl.totalAmount,
                deliveryDateAndTime: sl.deliveryDateAndTime,
                deliveryStatus: deliveryStatus ? deliveryStatus : null,
              };
              const itemSl = await createScheduleLine(scheduleLine);
              return itemSl.id.toString();
            }),
          );

          const i = {
            itemNo: item.itemNo,
            productId: item.productId,
            description: item.description,
            quantity: item.quantity,
            uom: item.uom,
            unitPrice: item.unitPrice,
            totalAmount: item.totalAmount,
            discount: item.discount,
            deliveryAddress: item.deliveryAddress,
            supplierStatusItem: item.supplierStatusItem,
            scheduleLine: scheduleLine,
            currency: item.currency,
            dateUpdated: item.dateUpdated,
            timeUpdated: item.timeUpdated,
          };

          const poitem = await createItem(i);
          return poitem.id.toString();
        }),
      );

      const po = {
        purchaseOrderNo: purchaseOrder.purchaseOrderNo,
        shipmentNo: purchaseOrder.shipmentNo,
        adminStatus: purchaseOrder.adminStatus,
        supplierStatusHeader: purchaseOrder.supplierStatusHeader,
        vendorAddress: purchaseOrder.vendorAddress,
        supplier: supplier.id,
        documentDate: purchaseOrder.documentDate,
        postingDate: purchaseOrder.postingDate,
        items: items,
      };

      return await createPurchaseOrder(po);
    },
    deletePurchaseOrder: async (parent, { id }, context, info) => {
      const { deletePurchaseOrderbyId } = context;
      return await deletePurchaseOrderbyId(id);
    },
    updatePurchaseOrder: async (
      parent,
      { purchaseOrder },
      { updatePurchaseOrderById },
      info,
    ) => {
      return updatePurchaseOrderById(purchaseOrder);
    },
    updateAdminStatus: async (parent, { purchaseOrder }, context, info) => {
      const { updateAdminStatusById } = context;

      return await updateAdminStatusById(purchaseOrder);
    },
  },
};

export default purchaseOrderResolvers;
