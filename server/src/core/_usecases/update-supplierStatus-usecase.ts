import { makeSupplierStatus } from '../supplierStatus';

const updateUCSupplierStatus = () => (supplierStatusInput, oldValue) => {
	return makeSupplierStatus(supplierStatusInput);
};

export { updateUCSupplierStatus };
