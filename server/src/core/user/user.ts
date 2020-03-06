export type TUser = {
	userName: string;
	password: string;
	userLevel: string;
};

const createMakeUser = () => ({ userName, password, userLevel }): TUser => {
	if (!userName) {
		throw new Error('Username is required.');
	}
	if (!password) {
		throw new Error('Password is required.');
	}
	if (!userLevel) {
		throw new Error('User Level is required.');
	}

	return {
		userName: userName,
		password: password,
		userLevel: userLevel,
	};
};

export { createMakeUser };
