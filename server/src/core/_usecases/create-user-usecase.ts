import { makeUser } from '../user';

const createUCCreateUser = () => userInput => {
	const user = makeUser({
		name: userInput.name,
	});

	return user;
};

export { createUCCreateUser };
