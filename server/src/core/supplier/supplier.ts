export type TSupplier = {
	supplierNo: string;
	name: string;
	address: string;
};

const createMakeSupplier = () => (supplier): TSupplier => {
	const { name, address, supplierNo } = supplier;
	if (!name) {
		throw new Error('Supplier name is required.');
	}
	// if (!address) {
	// 	throw new Error('Address is required');
	// }

	return {
		supplierNo: supplierNo,
		name: name,
		address: address,
	};
};

export { createMakeSupplier };
