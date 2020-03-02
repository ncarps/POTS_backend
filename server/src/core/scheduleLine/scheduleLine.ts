import { TSupplierStatus } from './../supplierStatus';

export type TScheduleLine = {
	quantity: string;
	uom: string;
	deliveryDate: string;
	supplierStatus?: [TSupplierStatus] | undefined;
};

const createMakeScheduleLine = () => (scheduleLine): TScheduleLine => {
	const { quantity, uom, deliveryDate, supplierStatus } = scheduleLine;

	return {
		quantity: quantity,
		uom: uom,
		deliveryDate: deliveryDate,
		supplierStatus: supplierStatus,
	};
};

export { createMakeScheduleLine };
