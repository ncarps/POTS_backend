import { updateUCSupplierStatus } from './update-supplierStatus-usecase';
const updateSupplierStatus = updateUCSupplierStatus();

describe('UseCase: Update Supplier Status ', () => {
	it('should be able to update a User', () => {
		const supplierStatusInput = {
			status: 'Delivered',
			dateCreated: 'February 14, 2020',
		};

		const oldSupplierStatusInput = {
			status: 'Dispatched',
			dateCreated: 'February 14, 2020',
		};
		const newSupplierStatus = updateSupplierStatus(supplierStatusInput, oldSupplierStatusInput);
		expect(newSupplierStatus).toMatchObject(supplierStatusInput);
	});
});
