const supplierResolvers = {
	Supplier: {
		address: async (parent, args, context, info) => {
			const { getAddressById } = context;
			return await getAddressById(parent.address);
		},
	},

	Query: {
		supplier: async (parent, { id }, context, info) => {
			const { getSupplierById } = context;
			return await getSupplierById(id);
		},
		allSuppliers: async (parent, args, context, info) => {
			const { getAllSuppliers } = context;
			return await getAllSuppliers();
		},
	},
	// Mutation: {
	//   createCustomer: async (parent, { customer }, context, info) => {
	//     const { createCustomer } = context;
	//     return await createCustomer(customer);
	//   },
	//   updateCustomer: async (parent, { customer }, context, info) => {
	//     const { updateCustomerByID } = context;
	//     return await updateCustomerByID(customer);
	//   },
	//   deleteCustomer: async (parent, { id }, context, info) => {
	//     const { deleteCustomerById } = context;
	//     return await deleteCustomerById(id);
	//   }
	// }
};

export default supplierResolvers;
