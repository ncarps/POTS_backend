import { updateUCSupplier } from './update-supplier-usecase';
const updateSupplier = updateUCSupplier();

describe('UseCase: Update a Supplier ', () => {
	it('should be able to update a supplier', () => {
		const supplierInput = {
			name: 'Supplier Name',
			address: {
				building_name: 'building',
				city: 'city',
				street: 'street',
				zipcode: '123',
			},
		};

		const oldSupplierInput = {
			name: 'Customer Name',
			address: {
				building_name: 'buildings',
				city: 'cities',
				street: 'streets',
				zipcode: '1234',
			},
		};
		const newSupplier = updateSupplier(supplierInput, oldSupplierInput);
		expect(newSupplier).toMatchObject(supplierInput);
	});
});
