import { makeScheduleLine } from '../scheduleLine';

const createUCCreateScheduleLine = () => scheduleLineInput => {
	const scheduleLine = makeScheduleLine({
		quantity: scheduleLineInput.quantity,
		uom: scheduleLineInput.uom,
		deliveryDate: scheduleLineInput.deliveryDate,
		supplierStatus: scheduleLineInput.supplierStatus,
	});

	return scheduleLine;
};

export { createUCCreateScheduleLine };
