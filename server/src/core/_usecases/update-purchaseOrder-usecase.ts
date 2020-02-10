import { makePurchaseOrder } from '../purchaseOrder';

const updateUCPurchaseOrder = () => (purchaseOrderInput, oldValue) => {
	return makePurchaseOrder(purchaseOrderInput);
};

export { updateUCPurchaseOrder };
