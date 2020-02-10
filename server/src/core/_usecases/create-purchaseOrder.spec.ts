import { createUCPurchaseOrder } from './create-purchaseOrder-usecase';

const addPurchaseOrder = createUCPurchaseOrder();

describe('Purchase Order Create', () => {
	it('should create a purchase order', () => {
		const purchaseOrderInput = {
			externalID: '001',
			status: 'Pending',
			supplierStatus: ['Dispatched'],
			supplier: 'Jollibee',
			items: [
				{
					itemNo: '1',
					description: 'Corned Beef',
					quantity: '5',
					uom: 'kg',
					price: '2000',
					currency: 'PHP',
				},
			],
		};

		const newPurchaseItem = addPurchaseOrder(purchaseOrderInput);
		expect(newPurchaseItem).toMatchObject(purchaseOrderInput);
	});
});
