import { makeSupplier } from '../supplier';

const createUCCreateSupplier = () => suppplierInput => {
	const supplier = makeSupplier({
		externalID: suppplierInput.externalID,
		name: suppplierInput.name,
		address: suppplierInput.address,
	});

	return supplier;
};

export { createUCCreateSupplier };
