import { createMakeSupplier } from './supplier';
const makeSupplier = createMakeSupplier();

describe('Supplier', () => {
	it('must have a name', () => {
		const supplier = { externalID: '001', name: '', address: { city: 'city' } };
		expect(() => makeSupplier(supplier)).toThrow('Supplier name is required.');
	});
	// it('must have an Address', () => {
	// 	const supplier = {externalID: '001', name: 'Nat', address: '' };
	// 	expect(() => makeSupplier(supplier)).toThrow('Address is required');
	// });
});
