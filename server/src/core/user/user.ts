export type TUser = {
	name: string;
};

const createMakeUser = () => (user: TUser) => {
	const { name } = user;

	if (!name) {
		throw new Error('Name is required.');
	}
	return user;
};

export { createMakeUser };
