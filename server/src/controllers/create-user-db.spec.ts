// import { createCreateUserDB } from './create-user-db';

// describe('Create User', () => {
// 	const mockDB: any = {
// 		insert: jest.fn(async input => {
// 			return { _id: '1', ...input };
// 		}),
// 	};

// 	const createUser = createCreateUserDB(mockDB);

// 	it('Should be able to save a user to a database', async () => {
// 		const userInput = {
// 			name: 'Nathaniel Sebastian Carpio',
// 		};

// 		const newUser = await createUser(userInput);

// 		expect(mockDB.insert.mock.calls.length).toBe(1);
// 		expect(newUser).toMatchObject({ _id: '1', ...userInput });
// 	});
// });
