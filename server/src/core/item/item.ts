export type TItem = {
	itemNo: string;
	description: string;
	quantity: string;
	uom: string;
	price: string;
	currency: string;
};

const createMakeItem = () => (item): TItem => {
	const { itemNo, description, quantity, uom, price, currency } = item;

	if (!itemNo) {
		throw new Error('Item Number is required.');
	}

	if (!description) {
		throw new Error('Description is required.');
	}

	if (!quantity) {
		throw new Error('Quantity is required.');
	}

	if (!uom) {
		throw new Error('Unit of Measure is required.');
	}

	if (!price) {
		throw new Error('Price is required.');
	}

	if (!currency) {
		throw new Error('Currency is required.');
	}

	return {
		itemNo: itemNo,
		description: description,
		quantity: quantity,
		uom: uom,
		price: price,
		currency: currency,
	};
};

export { createMakeItem };
