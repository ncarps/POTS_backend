import { makeSupplierStatus } from '../supplierStatus';

const createUCCreateSupplierStatus = () => suppplierStatusInput => {
	const supplier = makeSupplierStatus({
		status: suppplierStatusInput.status,
		dateCreated: suppplierStatusInput.dateCreated,
	});

	return supplier;
};

export { createUCCreateSupplierStatus };
