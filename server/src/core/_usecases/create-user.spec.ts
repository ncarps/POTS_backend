import { createUCCreateUser } from './create-user-usecase';

const addUser = createUCCreateUser();

describe('Create a User', () => {
	it('Should be able to create a user', () => {
		const userInput = {
			name: 'Nat',
		};
		const newUser = addUser(userInput);
		expect(newUser).toMatchObject(userInput);
	});
});
