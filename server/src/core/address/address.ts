export type TAddress = {
	building_name: string;
	street: string;
	city: string;
	state: string;
	zipcode: string;
};

const createMakeAddress = () => (address: TAddress) => {
	const { building_name, state, city, street, zipcode } = address;
	if (!building_name) {
		throw new Error('Building is required.');
	}

	if (!street) {
		throw new Error('Street is required.');
	}

	if (!city) {
		throw new Error('City is required.');
	}

	if (!state) {
		throw new Error('State is required.');
	}

	if (!zipcode) {
		throw new Error('Zipcode is required.');
	}

	return address;
};

export { createMakeAddress };
