export type TSupplier = {
	externalID: string;
	name: string;
	address: string;
};

const createMakeSupplier = () => (supplier): TSupplier => {
	const { name, address, externalID } = supplier;
	if (!name) {
		throw new Error('Supplier name is required.');
	}
	// if (!address) {
	// 	throw new Error('Address is required');
	// }

	return {
		externalID: externalID,
		name: name,
		address: address,
	};
};

export { createMakeSupplier };
