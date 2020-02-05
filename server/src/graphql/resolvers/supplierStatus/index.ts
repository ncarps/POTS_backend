const supplierSupplierResolvers = {
	Query: {
		supplierStatus: async (parent, { id }, { getSupplierStatusById }, info) => {
			return getSupplierStatusById(id);
		},

		allSupplierStatus: async (parent, args, { getAllSupplierStatus }, info) => {
			return getAllSupplierStatus();
		},
	},
	// Mutation: {
	//   createUser: async (_, { name }, { createUser }) => {
	//     return createUser({ name });
	//   },

	//   updateUser: async (parent, { id, name }, { updateUserById }, info) => {
	//     return updateUserById({ id, name });
	//   },

	//   deleteUser: async (parent, { id }, { deleteUserById }, info) => {
	//     return deleteUserById(id);
	//   }
	// }
};

export default supplierSupplierResolvers;
