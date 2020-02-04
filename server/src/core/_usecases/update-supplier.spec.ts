import { updateUCSupplier } from './update-supplier-usecase';
const updateSupplier = updateUCSupplier();

describe('UseCase: Update a Supplier ', () => {
	it('should be able to update a supplier', () => {
		const supplierInput = {
			name: 'Supplier Name',
			address: {
				building_name: 'building',
				street: 'street',
				city: 'city',
				state: 'state',
				zip_code: '123',
			},
		};

		const oldSupplierInput = {
			name: 'Customer Name',
			address: {
				building_name: 'buildings',
				street: 'streets',
				city: 'cities',
				state: 'states',
				zip_code: '1234',
			},
		};
		const newSupplier = updateSupplier(supplierInput, oldSupplierInput);
		expect(newSupplier).toMatchObject(supplierInput);
	});
});
