import { makeUser } from '../user';

const updateUCUser = () => (userInput, oldValue) => {
	return makeUser(userInput);
};

export { updateUCUser };
