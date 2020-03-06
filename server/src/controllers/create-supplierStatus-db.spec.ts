// import { createCreateSupplierStatusDB } from './create-supplierStatus-db';

// describe('Create SupplierStatus', () => {
// 	const mockDB: any = {
// 		insert: jest.fn(async input => {
// 			return { _id: '1', ...input };
// 		}),
// 	};

// 	const createSupplierStatus = createCreateSupplierStatusDB(mockDB);

// 	it('Should be able to save a supplier Status to a database', async () => {
// 		const supplierStatusInput = {
// 			status: 'Dispatched',
// 			dateCreated: 'February 14, 2020',
// 		};

// 		const newSupplierStatus = await createSupplierStatus(supplierStatusInput);

// 		expect(mockDB.insert.mock.calls.length).toBe(1);
// 		expect(newSupplierStatus).toMatchObject({ _id: '1', ...supplierStatusInput });
// 	});
// });
