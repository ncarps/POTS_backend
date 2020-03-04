const itemResolvers = {
	Item: {
		deliveryAddress: async (parent, args, context, info) => {
			const { getAddressById } = context;
			return await getAddressById(parent.deliveryAddress);
		},
		scheduleLine: async (parent, args, context, info) => {
			const { getAllScheduleLinesByItem } = context;

			return (await getAllScheduleLinesByItem(parent.scheduleLine)) || null;
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
			const { createItem, createScheduleLine } = context;

			// console.log('Test', item);

			const scheduleLine: Array<any> = await Promise.all(
				item.scheduleLine.map(async sl => {
					const itemSl = await createScheduleLine(sl);
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

			return await createItem(i);
		},

		updateItem: async (parent, { item }, context, info) => {
			const { updateItemById, createScheduleLine } = context;

			let scheduleLine;
			if (item.scheduleLine) {
				scheduleLine = await createScheduleLine(item.scheduleLine);
			}

			const i = {
				id: item.id,
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
				scheduleLine: scheduleLine ? scheduleLine.id.toString() : null,
				currency: item.currency,
				dateUpdated: item.dateUpdated,
				timeUpdated: item.timeUpdated,
			};
			return await updateItemById(i);
		},

		deleteItem: async (parent, { id }, context, info) => {
			const { deleteItemById } = context;
			return await deleteItemById(id);
		},
	},
};

export default itemResolvers;
