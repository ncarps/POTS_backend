import { updateUserByIDDB } from './update-user-db';

const mockUser = [
	{
		_id: '1',
		name: 'Nat',
	},
	{
		_id: '2',
		name: 'Nats',
	},
];

describe('Update Driver', () => {
	const mockDb: any = {
		updateById: jest.fn(async input => {
			return { ...input };
		}),
		getById: jest.fn(async id => {
			const filterMock = data => {
				if (data._id === id) {
					return data;
				}
			};

			return mockUser.filter(filterMock);
		}),
	};
	const updateUser = updateUserByIDDB(mockDb);

	it('should be able to update a driver in the DB', async () => {
		const given = {
			id: '1',
			name: 'Natsu',
		};

		const newData = await updateUser(given);

		expect(mockDb.getById.mock.calls.length).toBe(1);
		expect(mockDb.updateById.mock.calls.length).toBe(1);
		expect(newData).toMatchObject(given);
	});
});
