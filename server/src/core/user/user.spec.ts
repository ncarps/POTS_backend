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

	it('must have a password', () => {
		const user = {
			userName: 'userName',
			password: '',
			userLevel: 'Admin',
		};
		expect(() => makeUser(user)).toThrow('Password is required.');
	});

	it('must have a userlevel', () => {
		const user = {
			userName: 'userName',
			password: '1234',
			userLevel: '',
		};
		expect(() => makeUser(user)).toThrow('User Level is required.');
	});
});
