import { TSupplierStatus } from './../supplierStatus';

export type TItem = {
	itemNo: string;
	productId: string;
	description: string;
	quantity: string;
	uom: string;
	unitPrice: string;
	totalAmount: string;
	deliveryAddress: string;
	deliveryDate: string;
	supplierStatus: [TSupplierStatus] | undefined;
	currency: string;
	dateUpdated: string;
	timeUpdated: string;
};

const createMakeItem = () => (item): TItem => {
	const {
		itemNo,
		description,
		productId,
		quantity,
		uom,
		unitPrice,
		totalAmount,
		deliveryAddress,
		deliveryDate,
		supplierStatus,
		currency,
		dateUpdated,
		timeUpdated,
	} = item;

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
		itemNo: itemNo,
		productId: productId,
		description: description,
		quantity: quantity,
		totalAmount: totalAmount,
		uom: uom,
		unitPrice: unitPrice,
		deliveryAddress: deliveryAddress,
		deliveryDate: deliveryDate,
		supplierStatus: supplierStatus,
		currency: currency,
		dateUpdated: dateUpdated,
		timeUpdated: timeUpdated,
	};
};

export { createMakeItem };
