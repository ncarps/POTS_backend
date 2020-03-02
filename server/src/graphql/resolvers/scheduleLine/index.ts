const scheduleLineResolvers = {
	ScheduleLine: {
		supplierStatus: async (parent, args, context, info) => {
			const { getAllSupplierStatusByScheduleLine } = context;
			return (await getAllSupplierStatusByScheduleLine(parent.supplierStatus)) || null;
		},
	},
	Query: {
		scheduleLine: async (parent, { id }, { getScheduleLineById }, info) => {
			return getScheduleLineById(id);
		},

		allScheduleLines: async (parent, args, { getAllScheduleLines }, info) => {
			return getAllScheduleLines();
		},
	},
	Mutation: {
		createScheduleLine: async (parent, { scheduleLine }, context, info) => {
			const { createScheduleLine } = context;
			return await createScheduleLine(scheduleLine);
		},

		updateScheduleLine: async (parent, { scheduleLine }, context, info) => {
			const { updateScheduleLine, createSupplierStatus } = context;

			console.log({ ...scheduleLine.supplierStatus });
			let supplierStatus;
			if (scheduleLine.supplierStatus) {
				supplierStatus = await createSupplierStatus(scheduleLine.supplierStatus);
			}

			const sl = {
				id: scheduleLine.id,
				quantity: scheduleLine.quantity,
				uom: scheduleLine.uom,
				deliveryDate: scheduleLine.deliveryDate,
				supplierStatus: supplierStatus ? supplierStatus.id.toString() : null,
			};

			return await updateScheduleLine(sl);
		},

		deleteScheduleLine: async (parent, { id }, context, info) => {
			const { deleteScheduleLineById } = context;
			return await deleteScheduleLineById(id);
		},
	},
};

export default scheduleLineResolvers;
