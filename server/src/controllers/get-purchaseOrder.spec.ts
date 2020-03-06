// import { getAllDataDB, getByIDDB } from './retrieve-data-db';

// const mockPurchaseOrder = [
// 	{
// 		_id: '1',
// 		externalID: '001',
// 		status: 'Pending',
// 		supplierStatus: {
// 			_id: '1',
// 			status: 'Dispatched',
// 			dateCreated: 'February 14, 2020',
// 		},
// 		supplier: {
// 			_id: '1',
// 			name: 'Supplier Name-1',
// 			address: {
// 				building_name: 'building 1',
// 				city: 'city 1',
// 				street: 'street 1',
// 				zip_code: '123',
// 			},
// 		},
// 		items: [
// 			{
// 				itemNo: '1',
// 				description: 'Corned Beef',
// 				quantity: '5',
// 				uom: 'kg',
// 				price: '2000',
// 				currency: 'PHP',
// 			},
// 		],
// 	},
// 	{
// 		_id: '2',
// 		externalID: '002',
// 		status: 'Shipped',
// 		supplierStatus: {
// 			_id: '1',
// 			status: 'Dispatched',
// 			dateCreated: 'February 14, 2020',
// 		},
// 		supplier: {
// 			_id: '1',
// 			name: 'Supplier Name-1',
// 			address: {
// 				building_name: 'building 1',
// 				city: 'city 1',
// 				street: 'street 1',
// 				zip_code: '123',
// 			},
// 		},
// 		items: [
// 			{
// 				itemNo: '1',
// 				description: 'Corned Beef',
// 				quantity: '5',
// 				uom: 'kg',
// 				price: '2000',
// 				currency: 'PHP',
// 			},
// 		],
// 	},
// ];

// describe('Retrieve Purchase Order', () => {
// 	it('Should be able to return all purchase orders from db', async () => {
// 		const mockDB: any = {
// 			getAll: jest.fn(async () => {
// 				return [...mockPurchaseOrder];
// 			}),
// 		};

// 		const getAllPurchaseOrders = getAllDataDB(mockDB);
// 		const allPurchaseOrders = await getAllPurchaseOrders();
// 		expect(mockDB.getAll.mock.calls.length).toBe(1);
// 		expect(allPurchaseOrders).toMatchObject(mockPurchaseOrder);
// 	});

// 	it('Should be able to return one item from db', async () => {
// 		const onePurchaseOrder = [mockPurchaseOrder[0]];
// 		const mockDB: any = {
// 			getById: jest.fn(async id => {
// 				const filterPurchaseOrder = cust => {
// 					if (cust._id === id) {
// 						return cust;
// 					}
// 				};

// 				return mockPurchaseOrder.filter(filterPurchaseOrder);
// 			}),
// 		};

// 		const getOnePurchaseOrder = getByIDDB(mockDB);
// 		const purchaseOrder = await getOnePurchaseOrder('1');
// 		expect(mockDB.getById.mock.calls.length).toBe(1);

// 		expect(purchaseOrder).toMatchObject(onePurchaseOrder);
// 	});
// });
