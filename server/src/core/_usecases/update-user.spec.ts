import { updateUCUser } from './update-user.usecase';
const updateUser = updateUCUser();

describe('UseCase: Update a Customer ', () => {
	it('should be able to update a customer', () => {
		const userInput = {
			name: 'Customer Name',
		};

		const oldUserInput = {
			name: 'Customer Names',
		};
		const newCustomer = updateUser(userInput, oldUserInput);
		expect(newCustomer).toMatchObject(userInput);
	});
});
