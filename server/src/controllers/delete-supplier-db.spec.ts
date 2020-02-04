import { DeleteRecordByIDDB } from './delete-data-db';

const mockSupplier = [
	{
		_id: '1',
		name: 'Supplier Name-1',
		address: {
			building_name: 'building 1',
			city: 'city 1',
			street: 'street 1',
			zipcode: '123',
		},
	},
	{
		_id: '2',
		name: 'Supplier Name-2',
		address: {
			building_name: 'building 2',
			city: 'city 2',
			street: 'street 2',
			zipcode: '123',
		},
	},
];

describe('Delete Supplier', () => {
	it('Should be able to delete a supplier by ID in DB', async () => {
		const oneData = [mockSupplier[0]];
		const mockDB: any = {
			deleteById: jest.fn(async id => {
				const filterMock = data => {
					if (data._id === id) {
						return data;
					}
				};

				return mockSupplier.filter(filterMock);
			}),
		};
		const getOneData = DeleteRecordByIDDB(mockDB);
		const data = await getOneData('1');
		expect(mockDB.deleteById.mock.calls.length).toBe(1);

		expect(data).toMatchObject(oneData);
	});
});
