import { TSupplierStatus } from './../supplierStatus';

export type TScheduleLine = {
	quantity: string;
	unitPrice: string;
	totalAmount: string;
	uom: string;
	deliveryDateAndTime: string;
	deliveryStatus?: [TSupplierStatus] | undefined;
};

const createMakeScheduleLine = () => (scheduleLine): TScheduleLine => {
	const { quantity, uom, deliveryDateAndTime, deliveryStatus, unitPrice, totalAmount } = scheduleLine;

	return {
		quantity: quantity,
		uom: uom,
		deliveryDateAndTime: deliveryDateAndTime,
		deliveryStatus: deliveryStatus,
		unitPrice: unitPrice,
		totalAmount: totalAmount,
	};
};

export { createMakeScheduleLine };
