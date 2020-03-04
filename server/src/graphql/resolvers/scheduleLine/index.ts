const scheduleLineResolvers = {
	ScheduleLine: {
		deliveryStatus: async (parent, args, context, info) => {
			const { getAllSupplierStatusByScheduleLine } = context;
			return (await getAllSupplierStatusByScheduleLine(parent.deliveryStatus)) || null;
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
			const { createScheduleLine, createSupplierStatus } = context;

			const deliveryStatus: Array<any> = await Promise.all(
				scheduleLine.deliveryStatus.map(async sl => {
					let deliveryStatus;

					if (scheduleLine.deliveryStatus) {
						deliveryStatus = await createSupplierStatus(scheduleLine.deliveryStatus);
					}
					const scheduleLinestatus = await createSupplierStatus(sl);
					return scheduleLinestatus.id.toString();
				})
			);

			const sl = {
				quantity: scheduleLine.quantity,
				uom: scheduleLine.uom,
				unitPrice: scheduleLine.unitPrice,
				totalAmount: scheduleLine.totalAmount,
				deliveryDateAndTime: scheduleLine.deliveryDateAndTime,
				deliveryStatus: deliveryStatus ? deliveryStatus.id.toString() : null,
			};

			return await createScheduleLine(sl);
		},

		updateScheduleLine: async (parent, { scheduleLine }, context, info) => {
			const { updateScheduleLine, createSupplierStatus } = context;

			const deliveryStatus: Array<any> = await Promise.all(
				scheduleLine.deliveryStatus.map(async sl => {
					const itemSl = await createSupplierStatus(sl);
					return itemSl.id.toString();
				})
			);

			const sl = {
				id: scheduleLine.id,
				quantity: scheduleLine.quantity,
				uom: scheduleLine.uom,
				unitPrice: scheduleLine.unitPrice,
				totalAmount: scheduleLine.totalAmount,
				deliveryDateAndTime: scheduleLine.deliveryDateAndTime,
				deliveryStatus: deliveryStatus,
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
