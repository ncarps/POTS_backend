const supplierSupplierResolvers = {
	Query: {
		supplierStatus: async (parent, { id }, { getSupplierStatusById }, info) => {
			return getSupplierStatusById(id);
		},

		allSupplierStatus: async (parent, args, { getAllSupplierStatus }, info) => {
			return getAllSupplierStatus();
		},
	},
	Mutation: {
		createSupplierStatus: async (_, { status, dateCreated }, { createSupplierStatus }) => {
			return createSupplierStatus({ status, dateCreated });
		},

		updateSupplierStatus: async (parent, { id, status, dateCreated }, { updateSupplierStatusById }, info) => {
			return updateSupplierStatusById({ id, status, dateCreated });
		},

		deleteSupplierStatus: async (parent, { id }, { deleteSupplierStatusById }, info) => {
			return deleteSupplierStatusById(id);
		},
	},
};

export default supplierSupplierResolvers;
