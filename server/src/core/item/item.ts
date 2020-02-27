export type TItem = {
	itemNo: string;
	productId: string;
	description: string;
	quantity: string;
	uom: string;
	unitPrice: string;
	currency: string;
};

const createMakeItem = () => (item): TItem => {
	const { itemNo, description, productId, quantity, uom, unitPrice, currency } = item;

	if (!itemNo) {
		throw new Error('Item Number is required.');
	}

	if (!description) {
		throw new Error('Description is required.');
	}

	if (!productId) {
		throw new Error('Product ID is required.');
	}

	if (!quantity) {
		throw new Error('Quantity is required.');
	}

	if (!uom) {
		throw new Error('Unit of Measure is required.');
	}

	if (!unitPrice) {
		throw new Error('Unit Price is required.');
	}

	if (!currency) {
		throw new Error('Currency is required.');
	}

	return {
		itemNo: itemNo,
		productId: productId,
		description: description,
		quantity: quantity,
		uom: uom,
		unitPrice: unitPrice,
		currency: currency,
	};
};

export { createMakeItem };
