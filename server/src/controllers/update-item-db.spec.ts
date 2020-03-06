// import { updateItemByIDDB } from './update-item-db';

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

// describe('Update Item', () => {
// 	const mockDb: any = {
// 		updateById: jest.fn(async input => {
// 			return { ...input };
// 		}),
// 		getById: jest.fn(async id => {
// 			const filterMock = data => {
// 				if (data._id === id) {
// 					return data;
// 				}
// 			};

// 			return mockItem.filter(filterMock);
// 		}),
// 	};
// 	const updateItem = updateItemByIDDB(mockDb);

// 	it('should be able to update an item in the DB', async () => {
// 		const given = {
// 			itemNo: '12',
// 			description: 'Corned Beefz',
// 			quantity: '556',
// 			uom: 'kgss',
// 			price: '20002345',
// 			currency: 'PHP',
// 		};

// 		const newData = await updateItem(given);

// 		expect(mockDb.getById.mock.calls.length).toBe(1);
// 		expect(mockDb.updateById.mock.calls.length).toBe(1);
// 		expect(newData).toMatchObject(given);
// 	});
// });
