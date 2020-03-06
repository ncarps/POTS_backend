// import { updateUCPurchaseOrder } from './update-purchaseOrder-usecase';
// const updatePurchaseOrder = updateUCPurchaseOrder();

// describe('UseCase: Update a Delivery ', () => {
// 	it('should be able to update a delivery', () => {
// 		const purchaseOrderInput = {
// 			externalID: '002',
// 			status: 'Delivered',
// 			supplierStatus: ['Delivered'],
// 			supplier: 'Jollibee',
// 			items: [
// 				{
// 					itemNo: '1',
// 					description: 'Corned Beef',
// 					quantity: '5',
// 					uom: 'kg',
// 					price: '2000',
// 					currency: 'PHP',
// 				},
// 			],
// 		};

// 		const oldValue = {
// 			externalID: '001',
// 			status: 'Pending',
// 			supplierStatus: ['Dispatched'],
// 			supplier: 'Jollibee',
// 			items: [
// 				{
// 					itemNo: '1',
// 					description: 'Corned Beef',
// 					quantity: '5',
// 					uom: 'kg',
// 					price: '2000',
// 					currency: 'PHP',
// 				},
// 			],
// 		};
// 		const newPurchaseOrder = updatePurchaseOrder(purchaseOrderInput, oldValue);
// 		expect(newPurchaseOrder).toMatchObject(purchaseOrderInput);
// 	});
// });
