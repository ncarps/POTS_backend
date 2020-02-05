import { makeSupplierStatus } from '.';

describe('Supplier Status', () => {
	it('must have a status', () => {
		const supplierStatus = {
			status: '',
			dateCreated: 'dateCreated',
		};
		expect(() => makeSupplierStatus(supplierStatus)).toThrow('Status is required.');
	});

	it('must have a dateCreated', () => {
		const supplierStatus = {
			status: 'status',
			dateCreated: '',
		};
		expect(() => makeSupplierStatus(supplierStatus)).toThrow('Date Created is required.');
	});
});
