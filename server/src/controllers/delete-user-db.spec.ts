import { DeleteRecordByIDDB } from './delete-data-db';

const mockUser = [
	{
		_id: '1',
		name: 'User 1',
	},
	{
		_id: '2',
		name: 'User 2',
	},
];

describe('Delete User', () => {
	it('Should be able to delete a user from the database', async () => {
		const mockDB: any = {
			deleteById: jest.fn(async id => {
				const filterTag = com => {
					if (com._id === id) {
						return com;
					}
				};

				return mockUser.filter(filterTag)[0];
			}),
		};

		const deleteOneUser = DeleteRecordByIDDB(mockDB);
		const user = await deleteOneUser('1');
		expect(mockDB.deleteById.mock.calls.length).toBe(1);

		expect(user).toMatchObject({
			_id: '1',
			name: 'User 1',
		});
	});
});
