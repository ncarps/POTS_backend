const purchaseOrderResolvers = {
	PurchaseOrder: {
		supplier: async (parent, args, context, info) => {
			const { getSupplierById } = context;
			return await getSupplierById(parent.supplier);
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
		purchaseOrder: async (parent, { id }, context, info) => {
			const { getPurchaseOrderById } = context;
			return getPurchaseOrderById(id);
		},
	},
	Mutation: {
		createPurchaseOrder: async (parent, { purchaseOrder }, context, info) => {
			const { createPurchaseOrder, createSupplier, createItem, createScheduleLine, createSupplierStatus } = context;

			const supplier = await createSupplier(purchaseOrder.supplier);

			const items: Array<any> = await Promise.all(
				purchaseOrder.items.map(async item => {
					const scheduleLine: Array<any> = await Promise.all(
						item.scheduleLine.map(async sl => {
							let deliveryStatus;

							if (sl.deliveryStatus) {
								deliveryStatus = await createSupplierStatus(sl.deliveryStatus);
							}

							const scheduleLine = {
								quantity: sl.quantity,
								uom: sl.uom,
								unitPrice: sl.unitPrice,
								totalAmount: sl.totalAmount,
								deliveryDateAndTime: sl.deliveryDateAndTime,
								deliveryStatus: deliveryStatus ? deliveryStatus.id.toString() : null,
							};
							const itemSl = await createScheduleLine(scheduleLine);
							return itemSl.id.toString();
						})
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
					console.log('PO item', poitem);
					return poitem.id.toString();
				})
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
		updatePurchaseOrder: async (parent, { purchaseOrder }, { updatePurchaseOrderById }, info) => {
			return updatePurchaseOrderById(purchaseOrder);
		},
		// updatePurchaseOrder: async (parent, { purchaseOrder }, context, info) => {
		// 	const { updatePurchaseOrderById, updateItemById, updateSupplierById } = context;

		// 	const supplier = await updateSupplierById(purchaseOrder.supplier);

		// 	const items: Array<any> = await Promise.all(
		// 		purchaseOrder.items.map(async item => {
		// 			const poitem = await updateItemById(item);
		// 			return poitem.id.toString();
		// 		})
		// 	);

		// 	const po = {
		// 		purchaseOrderNo: purchaseOrder.purchaseOrderNo,
		// 		shipmentNo: purchaseOrder.shipmentNo,
		// 		adminStatus: purchaseOrder.adminStatus,
		// 		supplierStatusHeader: purchaseOrder.supplierStatusHeader,
		// 		vendorAddress: purchaseOrder.vendorAddress,
		// 		supplier: supplier.id,
		// 		documentDate: purchaseOrder.documentDate,
		// 		items: items,
		// 	};
		// 	return await updatePurchaseOrderById(po);
		// },
	},
};

export default purchaseOrderResolvers;
