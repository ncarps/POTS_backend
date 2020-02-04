import { getAllDataDB, getByIDDB } from './retrieve-data-db';

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

describe('Retrieve Supplier', () => {
	it('Should be able to return all suppliers from db', async () => {
		const mockDB: any = {
			getAll: jest.fn(async () => {
				return [...mockSupplier];
			}),
		};

		const getAllSuppliers = getAllDataDB(mockDB);
		const allSuppliers = await getAllSuppliers();
		expect(mockDB.getAll.mock.calls.length).toBe(1);
		expect(allSuppliers).toMatchObject(mockSupplier);
	});

	it('Should be able to return one supplier from db', async () => {
		const oneSupplier = [mockSupplier[0]];
		const mockDB: any = {
			getById: jest.fn(async id => {
				const filterSupplier = cust => {
					if (cust._id === id) {
						return cust;
					}
				};

				return mockSupplier.filter(filterSupplier);
			}),
		};

		const getOneSupplier = getByIDDB(mockDB);
		const supplier = await getOneSupplier('1');
		expect(mockDB.getById.mock.calls.length).toBe(1);

		expect(supplier).toMatchObject(oneSupplier);
	});
});
