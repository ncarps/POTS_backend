const purchaseOrderResolvers = {
	PurchaseOrder: {
		supplierStatus: async (parent, args, context, info) => {
			const { getSupplierStatusById } = context;
			return await getSupplierStatusById(parent.supplierStatus);
		},
		supplier: async (parent, args, context, info) => {
			const { getSupplierById } = context;
			return await getSupplierById(parent.supplier);
		},
		items: async (parent, args, context, info) => {
			const { getItemById } = context;

			return await getItemById(parent.id);
		},
	},
	Query: {
		allPurchaseOrders: async (parent, args, context, info) => {
			const { getAllPurchaseOrders } = context;
			return getAllPurchaseOrders();
		},
		purchaseOrder: async (parent, { driver }, context, info) => {
			const { getDeliveryByDriver } = context;
			return getDeliveryByDriver(driver);
		},
	},
	Mutation: {
		createPurchaseOrder: async (parent, { purchaseOrder }, context, info) => {
			const { createPurchaseOrder, createSupplier, createSupplierStatus, createItem } = context;

			const supplierStatus = await createSupplierStatus(purchaseOrder.supplierStatus);
			const supplier = await createSupplier(purchaseOrder.supplier);
			const item = await createItem(purchaseOrder.items);

			const po = {
				supplierStatus: supplierStatus.id,
				supplier: supplier.id,
				item: item.id,
			};

			return await createPurchaseOrder(purchaseOrder);
		},
		deletePurchaseOrder: async (parent, { id }, context, info) => {
			const { deletePurchaseOrderbyId } = context;
			return await deletePurchaseOrderbyId(id);
		},
		// updateDelivery: async (parent, { delivery }, context, info) => {
		// 	const { updateDeliveryByID } = context;
		// 	return await updateDeliveryByID(delivery);
		// },
	},
};

export default purchaseOrderResolvers;
