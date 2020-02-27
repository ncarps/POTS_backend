import { makeSupplier } from '../supplier';

const createUCCreateSupplier = () => suppplierInput => {
	const supplier = makeSupplier({
		supplierNo: suppplierInput.supplierNo,
		name: suppplierInput.name,
		address: suppplierInput.address,
	});

	return supplier;
};

export { createUCCreateSupplier };
