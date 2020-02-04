import { TAddress, createMakeAddress } from '../address/address';

export type TSupplier = {
	name: string;
	address: TAddress;
};

const createMakeSupplier = () => (supplier): TSupplier => {
	const { name, address } = supplier;
	const makeAddress = createMakeAddress();
	if (!name) {
		throw new Error('Supplier name is required.');
	}
	if (!address) {
		throw new Error('Address is required');
	}

	const _address = makeAddress(address);

	return {
		name: name,
		address: _address,
	};
};

export { createMakeSupplier };
