import { createUCCreateSupplier } from './create-supplier-usecase';

const addSupplier = createUCCreateSupplier();

describe('Supplier CRUD', () => {
	it('should be able to create a supplier', () => {
		const supplierInput = {
			name: 'Nat',
			address: {
				building_name: 'building',
				city: 'city',
				street: 'street',
				zipcode: '124365',
			},
		};
		const newSupplier = addSupplier(supplierInput);
		expect(newSupplier).toMatchObject(supplierInput);
	});
});
