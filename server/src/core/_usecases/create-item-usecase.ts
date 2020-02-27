import { makeItem } from '../item';

const createUCCreateItem = () => itemInput => {
	const item = makeItem({
		itemNo: itemInput.itemNo,
		productId: itemInput.productId,
		description: itemInput.description,
		quantity: itemInput.quantity,
		totalAmount: itemInput.totalAmount,
		uom: itemInput.uom,
		unitPrice: itemInput.unitPrice,
		deliveryAddress: itemInput.deliveryAddress,
		deliveryDate: itemInput.deliveryDate,
		supplierStatus: itemInput.supplierStatus,
		currency: itemInput.currency,
	});

	return item;
};

export { createUCCreateItem };
