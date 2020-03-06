import { makeUser } from '../user';

const updateUCUser = () => (userInput, oldValue) => {
	// let setFields = {
	// 	...data,
	// };
	// for (let prop in setFields) {
	// 	if (setFields[prop] == undefined) {
	// 		delete setFields[prop];
	// 	}
	// }
	return makeUser(userInput);
};

export { updateUCUser };
