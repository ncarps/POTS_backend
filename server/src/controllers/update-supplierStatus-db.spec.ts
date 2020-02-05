import { updateSupplierStatusByIDDB } from './update-supplierStatus-db';

const mockSupplierStatus = [
	{
		_id: '1',
		status: 'Dispatched',
		dateCreated: 'February 14, 2020',
	},
	{
		_id: '2',
		status: 'Delivered',
		dateCreated: 'February 14, 2020',
	},
];

describe('Update Supplier Status', () => {
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

			return mockSupplierStatus.filter(filterMock);
		}),
	};
	const updateSupplierStatus = updateSupplierStatusByIDDB(mockDb);

	it('should be able to update a supplier status in the DB', async () => {
		const given = {
			_id: '1',
			status: 'Dispatched!',
			dateCreated: 'February 14, 2020',
		};

		const newData = await updateSupplierStatus(given);

		expect(mockDb.getById.mock.calls.length).toBe(1);
		expect(mockDb.updateById.mock.calls.length).toBe(1);
		expect(newData).toMatchObject(given);
	});
});
