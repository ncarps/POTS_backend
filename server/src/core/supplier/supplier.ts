export type TSupplier = {
	name: string;
	address: string;
};

const createMakeSupplier = () => (supplier): TSupplier => {
	const { name, address } = supplier;
	if (!name) {
		throw new Error('Supplier name is required.');
	}
	// if (!address) {
	// 	throw new Error('Address is required');
	// }

	return {
		name: name,
		address: address,
	};
};

export { createMakeSupplier };
