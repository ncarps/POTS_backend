import { createMakeSupplier } from './supplier';
const makeSupplier = createMakeSupplier();

describe('Supplier', () => {
	it('must have a name', () => {
		const supplier = { name: '', address: { city: 'city' } };
		expect(() => makeSupplier(supplier)).toThrow('Supplier name is required.');
	});
	it('must have an Address', () => {
		const supplier = { name: 'Nat', address: { building: 'build' } };
		expect(() => makeSupplier(supplier)).toThrow();
	});
});
