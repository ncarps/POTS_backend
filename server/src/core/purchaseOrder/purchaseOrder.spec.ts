// import { createMakePurchaseOrder } from './purchaseOrder';

// const makePurchaseOrder = createMakePurchaseOrder();

// describe('Purchase Order', () => {
// 	it('must have an external ID', () => {
// 		const purchaseOrderInput = {
// 			externalID: '',
// 			status: 'status',
// 			supplierStatus: 'supplierStatus',
// 			supplier: 'supplier',
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
// 		expect(() => makePurchaseOrder(purchaseOrderInput)).toThrow('External ID is required');
// 	});

// 	it('must have a status', () => {
// 		const purchaseOrderInput = {
// 			externalID: '1',
// 			status: '',
// 			supplierStatus: 'supplierStatus',
// 			supplier: 'supplier',
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
// 		expect(() => makePurchaseOrder(purchaseOrderInput)).toThrow('Status is required');
// 	});

// 	it('must have a supplier', () => {
// 		const purchaseOrderInput = {
// 			externalID: '1',
// 			status: 'status',
// 			supplierStatus: 'supplierStatus',
// 			supplier: '',
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
// 		expect(() => makePurchaseOrder(purchaseOrderInput)).toThrow('Supplier is required');
// 	});

// 	it('must have a items', () => {
// 		const purchaseOrderInput = {
// 			externalID: '1',
// 			status: 'status',
// 			supplierStatus: 'supplierStatus',
// 			supplier: 'supplier',
// 			items: null,
// 		};
// 		expect(() => makePurchaseOrder(purchaseOrderInput)).toThrow('Item/s is/are required');
// 	});
// });
