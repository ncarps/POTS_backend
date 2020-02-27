const itemResolvers = {
	Item: {
		deliveryAddress: async (parent, args, context, info) => {
			const { getAddressById } = context;
			return await getAddressById(parent.deliveryAddress);
		},
		supplierStatus: async (parent, args, context, info) => {
			const { getAllSupplierStatusByPurchaseOrder } = context;
			return await getAllSupplierStatusByPurchaseOrder(parent.supplierStatus);
		},
	},
	Query: {
		item: async (parent, { id }, { getItemById }, info) => {
			return getItemById(id);
		},

		allItems: async (parent, args, { getAllItems }, info) => {
			return getAllItems();
		},
	},
	Mutation: {
		createItem: async (parent, { item }, context, info) => {
			const { createItem, createSupplierStatus } = context;

			const supplierStatus: Array<any> = await Promise.all(
				item.supplierStatus.map(async ss => {
					const poss = await createSupplierStatus(ss);
					return poss.id.toString();
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
				deliveryAddress: item.deliveryAddress,
				deliveryDate: item.deliveryDate,
				supplierStatus: supplierStatus,
				currency: item.currency,
			};

			return await createItem(i);
		},

		updateItem: async (parent, { item }, { updateItemById }, info) => {
			return updateItemById(item);
		},

		deleteItem: async (parent, { id }, context, info) => {
			const { deleteItemById } = context;
			return await deleteItemById(id);
		},
	},
};

export default itemResolvers;
