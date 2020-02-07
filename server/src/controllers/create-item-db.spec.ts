import { createCreateItemDB } from './create-item-db';

describe('Create Item', () => {
	it('Should be able to save an item to a database', async () => {
		const mockDB: any = {
			insert: jest.fn(async input => {
				return { _id: '1', ...input };
			}),
		};
		const createItem = createCreateItemDB(mockDB);

		const itemInput = {
			itemNo: '1',
			description: 'Corned Beef',
			quantity: '5',
			uom: 'kg',
			price: '2000',
			currency: 'PHP',
		};

		const newItem = await createItem(itemInput);

		expect(mockDB.insert.mock.calls.length).toBe(1);
		expect(newItem).toMatchObject({ _id: '1', ...itemInput });
	});
});
