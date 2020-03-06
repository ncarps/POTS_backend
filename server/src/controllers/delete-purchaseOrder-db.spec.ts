// import { DeleteRecordByIDDB } from './delete-data-db';

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

// describe('Delete purchase order', () => {
// 	it('Should be able to delete a pruchase order by ID in DB', async () => {
// 		const oneData = [mockPurchaseOrder[0]];
// 		const mockDB: any = {
// 			deleteById: jest.fn(async id => {
// 				const filterMock = data => {
// 					if (data._id === id) {
// 						return data;
// 					}
// 				};

// 				return mockPurchaseOrder.filter(filterMock);
// 			}),
// 		};
// 		const getOneData = DeleteRecordByIDDB(mockDB);
// 		const data = await getOneData('1');
// 		expect(mockDB.deleteById.mock.calls.length).toBe(1);

// 		expect(data).toMatchObject(oneData);
// 	});
// });
