// import { DeleteRecordByIDDB } from './delete-data-db';

// const mockItem = [
// 	{
// 		_id: '1',
// 		itemNo: '1',
// 		description: 'Corned Beef',
// 		quantity: '5',
// 		uom: 'kg',
// 		price: '2000',
// 		currency: 'PHP',
// 	},
// 	{
// 		_id: '2',
// 		itemNo: '2',
// 		description: 'Burger',
// 		quantity: '6',
// 		uom: 'kg',
// 		price: '3000',
// 		currency: 'USD',
// 	},
// ];

// describe('Delete Item', () => {
// 	it('Should be able to delete an item by ID in DB', async () => {
// 		const oneData = [mockItem[0]];
// 		const mockDB: any = {
// 			deleteById: jest.fn(async id => {
// 				const filterMock = data => {
// 					if (data._id === id) {
// 						return data;
// 					}
// 				};

// 				return mockItem.filter(filterMock);
// 			}),
// 		};
// 		const getOneData = DeleteRecordByIDDB(mockDB);
// 		const data = await getOneData('1');
// 		expect(mockDB.deleteById.mock.calls.length).toBe(1);

// 		expect(data).toMatchObject(oneData);
// 	});
// });
