import { createCreateSupplierDB } from './create-supplier-db';

// const mockSupplier = [
// 	{
// 		_id: '1',
// 		name: 'Supplier Name-1',
// 		address: {
// 			building_name: 'building 1',
// 			city: 'city 1',
// 			street: 'street 1',
// 			zipcode: '123',
// 		},
// 	},
// 	{
// 		_id: '2',
// 		name: 'Supplier Name-2',
// 		address: {
// 			building_name: 'building 2',
// 			city: 'city 2',
// 			street: 'street 2',
// 			zipcode: '123',
// 		},
// 	},
// ];

describe('Create Supplier', () => {
	it('Should be able to save a supplier to a database', async () => {
		const mockDB: any = {
			insert: jest.fn(async input => {
				return { _id: '1', ...input };
			}),
		};
		const createSupplier = createCreateSupplierDB(mockDB);

		const supplierInput = {
			name: 'Supplier Name',
			address: {
				building_name: 'building',
				city: 'city',
				street: 'street',
				zipcode: '123',
			},
		};

		const newSupplier = await createSupplier(supplierInput);

		expect(mockDB.insert.mock.calls.length).toBe(1);
		expect(newSupplier).toMatchObject({ _id: '1', ...supplierInput });
	});
});
