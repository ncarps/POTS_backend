import { TItem } from './../item';

export type TPurchaseOrder = {
	id?: string;
	purchaseOrderNo: string;
	shipmentNo: string;
	adminStatus: string;
	supplierStatusHeader?: string;
	supplier: string;
	vendorAddress: string;
	documentDate?: string;
	items: [TItem] | undefined;
};

const createMakePurchaseOrder = () => ({
	purchaseOrderNo,
	shipmentNo,
	adminStatus,
	supplierStatusHeader,
	supplier,
	vendorAddress,
	documentDate,
	items,
}): TPurchaseOrder => {
	// if (!purchaseOrderNo) {
	// 	throw new Error('Purchase Order Number is required');
	// }
	// if (!supplier) {
	// 	throw new Error('Supplier is required');
	// }
	// if (!items) {
	// 	throw new Error('Item/s is/are required');
	// }

	return {
		purchaseOrderNo: purchaseOrderNo,
		shipmentNo: shipmentNo,
		adminStatus: adminStatus,
		supplierStatusHeader: supplierStatusHeader,
		vendorAddress: vendorAddress,
		documentDate: documentDate,
		supplier: supplier,
		items: items,
	};
};

export { createMakePurchaseOrder };
