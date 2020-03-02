import { TSupplierStatus } from './../supplierStatus';

export type TScheduleLine = {
	quantity: string;
	uom: string;
	deliveryDate: string;
	supplierStatus: [TSupplierStatus] | undefined;
};

const createMakeScheduleLine = () => (scheduleLine): TScheduleLine => {
	const { quantity, uom, deliveryDate, supplierStatus } = scheduleLine;

	// if (!itemNo) {
	// 	throw new Error('Item Number is required.');
	// }

	// if (!description) {
	// 	throw new Error('Description is required.');
	// }

	// if (!productId) {
	// 	throw new Error('Product ID is required.');
	// }

	// if (!quantity) {
	// 	throw new Error('Quantity is required.');
	// }

	// if (!uom) {
	// 	throw new Error('Unit of Measure is required.');
	// }

	// if (!unitPrice) {
	// 	throw new Error('Unit Price is required.');
	// }

	// if (!totalAmount) {
	// 	throw new Error('Total Amount is required.');
	// }

	// if (!deliveryAddress) {
	// 	throw new Error('Delivery Address is required.');
	// }

	// if (!deliveryDate) {
	// 	throw new Error('Delivery Date is required.');
	// }

	// if (!currency) {
	// 	throw new Error('Currency is required.');
	// }

	return {
		quantity: quantity,
		uom: uom,
		deliveryDate: deliveryDate,
		supplierStatus: supplierStatus,
	};
};

export { createMakeScheduleLine };
