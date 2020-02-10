import { getAllDataDB, getByIDDB } from './retrieve-data-db';

const mockItem = [
	{
		_id: '1',
		itemNo: '1',
		description: 'Corned Beef',
		quantity: '5',
		uom: 'kg',
		price: '2000',
		currency: 'PHP',
	},
	{
		_id: '2',
		itemNo: '2',
		description: 'Burger',
		quantity: '6',
		uom: 'kg',
		price: '3000',
		currency: 'USD',
	},
];

describe('Retrieve Item', () => {
	it('Should be able to return all item from db', async () => {
		const mockDB: any = {
			getAll: jest.fn(async () => {
				return [...mockItem];
			}),
		};

		const getAllItems = getAllDataDB(mockDB);
		const allItems = await getAllItems();
		expect(mockDB.getAll.mock.calls.length).toBe(1);
		expect(allItems).toMatchObject(mockItem);
	});

	it('Should be able to return one item from db', async () => {
		const oneItem = [mockItem[0]];
		const mockDB: any = {
			getById: jest.fn(async id => {
				const filterItem = cust => {
					if (cust._id === id) {
						return cust;
					}
				};

				return mockItem.filter(filterItem);
			}),
		};

		const getOneItem = getByIDDB(mockDB);
		const item = await getOneItem('1');
		expect(mockDB.getById.mock.calls.length).toBe(1);

		expect(item).toMatchObject(oneItem);
	});
});
