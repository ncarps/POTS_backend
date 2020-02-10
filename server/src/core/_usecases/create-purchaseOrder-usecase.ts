import { makePurchaseOrder } from '../purchaseOrder';

const createUCPurchaseOrder = () => purchaseOrderInput => {
	const purchaseOrder = makePurchaseOrder({
		externalID: purchaseOrderInput.externalID,
		status: purchaseOrderInput.status,
		supplierStatus: purchaseOrderInput.supplierStatus,
		supplier: purchaseOrderInput.supplier,
		items: purchaseOrderInput.items,
	});

	return purchaseOrder;
};

export { createUCPurchaseOrder };
