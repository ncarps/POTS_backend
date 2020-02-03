import { makeUser } from '.';

describe('User', () => {
	it('must have a name', () => {
		const user = {
			name: '',
		};
		expect(() => makeUser(user)).toThrow('Name is required.');
	});
});
