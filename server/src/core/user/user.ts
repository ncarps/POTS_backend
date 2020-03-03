export type TUser = {
	userName: string;
	password: string;
	userLevel: string;
};

const createMakeUser = () => (user: TUser) => {
	const { userName, password, userLevel } = user;

	// if (!name) {
	// 	throw new Error('Name is required.');
	// }
	return user;
};

export { createMakeUser };
