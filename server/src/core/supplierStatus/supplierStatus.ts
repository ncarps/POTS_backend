export type TSupplierStatus = {
	status: string;
	dateCreated: string;
	timeCreated: string;
};

const createMakeSupplierStatus = () => (supplierStatus: TSupplierStatus) => {
	const { status, dateCreated } = supplierStatus;

	// if (!status) {
	// 	throw new Error('Status is required.');
	// }

	// if (!dateCreated) {
	// 	throw new Error('Date Created is required.');
	// }

	return supplierStatus;
};

export { createMakeSupplierStatus };
