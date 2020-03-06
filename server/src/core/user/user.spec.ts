import { makeUser } from '.';

describe('User', () => {
	it('must have a username', () => {
		const user = {
			userName: '',
			password: '1234',
			userLevel: 'Admin',
		};
		expect(() => makeUser(user)).toThrow('Username is required.');
	});
});
