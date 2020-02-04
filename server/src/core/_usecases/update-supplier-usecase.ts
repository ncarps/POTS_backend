import { makeSupplier } from '../supplier';

const updateUCSupplier = () => (supplierInput, oldValue) => {
	return makeSupplier(supplierInput);
};

export { updateUCSupplier };
