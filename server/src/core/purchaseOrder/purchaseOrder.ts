import { TItem, makeItem } from './../item';

export type TPurchaseOrder = {
	id?: string;
	externalID?: string;
	status?: string;
	supplierStatus?: string;
	supplier?: string;
	items?: [TItem] | undefined;
};

const createMakePurchaseOrder = () => ({ externalID, status, supplierStatus, supplier, items }): TPurchaseOrder => {
	if (!externalID) {
		throw new Error('External ID is required');
	}
	if (!status) {
		throw new Error('Status is required');
	}
	if (!supplierStatus) {
		throw new Error('Supplier Status is required');
	}
	if (!supplier) {
		throw new Error('Supplier is required');
	}
	if (!items) {
		throw new Error('Item/s is/are required');
	}

	const _items = items.map(item => makeItem(item));

	return {
		externalID: externalID,
		status: status,
		supplierStatus: supplierStatus,
		supplier: supplier,
		items: _items,
	};
};

export { createMakePurchaseOrder };
