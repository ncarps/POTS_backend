export type TSupplier = {
	supplierNo: string;
	supplierName: string;
	address: string;
	contactPerson: string;
	contactNumber: string;
	tin: string;
};

const createMakeSupplier = () => (supplier): TSupplier => {
	const { supplierName, address, supplierNo, tin, contactNumber, contactPerson } = supplier;
	if (!supplierName) {
		throw new Error('Supplier name is required.');
	}
	// if (!address) {
	// 	throw new Error('Address is required');
	// }

	return {
		supplierNo: supplierNo,
		supplierName: supplierName,
		address: address,
		tin: tin,
		contactNumber: contactNumber,
		contactPerson: contactPerson,
	};
};

export { createMakeSupplier };
