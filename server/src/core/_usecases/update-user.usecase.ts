import { makeUser, TUser } from '../user';

const updateUCUser = () => (userInput, oldValue) => {
	let newUser: TUser = {
		password: oldValue.password,
		userLevel: oldValue.userLevel,
		userName: oldValue.userName,
	};
	// console.log('Old User', oldValue);

	for (let prop in userInput) {
		if (userInput[prop]) {
			newUser[prop] = userInput[prop];
		} else {
			newUser[prop] = oldValue[prop];
		}
	}
	// console.log('New User', newUser);
	const user = makeUser(newUser);
	return { ...user, id: oldValue.id };
};

export { updateUCUser };
