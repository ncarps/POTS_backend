import { TItem } from './../item';
import { TSupplierStatus } from './../supplierStatus';

export type TPurchaseOrder = {
	id?: string;
	purchaseOrderNo: string;
	shipmentNo: string;
	status: string;
	supplierStatus?: [TSupplierStatus] | undefined;
	supplier: string;
	items: [TItem] | undefined;
};

const createMakePurchaseOrder = () => ({
	purchaseOrderNo,
	shipmentNo,
	status,
	supplierStatus,
	supplier,
	items,
}): TPurchaseOrder => {
	if (!purchaseOrderNo) {
		throw new Error('Purchase Order Number is required');
	}
	if (!status) {
		throw new Error('Status is required');
	}
	if (!supplier) {
		throw new Error('Supplier is required');
	}
	if (!items) {
		throw new Error('Item/s is/are required');
	}

	// const _items = items.map(item => makeItem(item));

	return {
		purchaseOrderNo: purchaseOrderNo,
		shipmentNo: shipmentNo,
		status: status,
		supplierStatus: supplierStatus,
		supplier: supplier,
		items: items,
	};
};

export { createMakePurchaseOrder };
