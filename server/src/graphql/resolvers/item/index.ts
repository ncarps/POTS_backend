const itemResolvers = {
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
			const { createItem } = context;
			return await createItem(item);
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
