import { updateSupplierByIDDB } from './update-supplier-db';

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

describe('Update Supplier', () => {
	const mockDb: any = {
		updateById: jest.fn(async input => {
			return { ...input };
		}),
		getById: jest.fn(async id => {
			const filterMock = data => {
				if (data._id === id) {
					return data;
				}
			};

			return mockSupplier.filter(filterMock);
		}),
	};
	const updateSupplier = updateSupplierByIDDB(mockDb);

	it('should be able to update a supplier in the DB', async () => {
		const given = {
			name: 'Supplier Name-1.0',
			address: {
				building_name: 'building 1',
				city: 'city 1',
				street: 'street 1',
				zipcode: '123',
			},
		};

		const newData = await updateSupplier(given);

		expect(mockDb.getById.mock.calls.length).toBe(1);
		expect(mockDb.updateById.mock.calls.length).toBe(1);
		expect(newData).toMatchObject(given);
	});
});
