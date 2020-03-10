import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import mockData from '../mocks/mock-data';
import * as controllers from '../../src/controllers';
import { constructTestServer } from '../__utils';

const {
	//Generic
	getAllDataDB,
	getByIDDB,
	DeleteRecordByIDDB,
	getAllByItemDB,
	getAllByScheduleLineDB,
	getAllBySupplierStatusDB,
	//User
	createCreateUserDB,
	updateUserByIDDB,
} = controllers;

const userMock = {
	insert: jest.fn(async input => {
		return { id: '1', ...input };
	}),
	getById: jest.fn(async id => {
		const filterData = data => {
			if (data.id === id) {
				return data;
			}
		};
		const res = mockData.users.filter(filterData);

		return res[0] || null;
	}),
	getAll: jest.fn(async () => {
		return mockData.users;
	}),
	updateById: jest.fn(async input => {
		return { ...input };
	}),
	deleteById: async id => {
		const filterData = data => {
			if (data.id === id) {
				return data;
			}
		};
		const res = mockData.users.filter(filterData);
		return res[0] || null;
	},
	getAllBySupplierStatus: async id => {},
	getAllByItem: async id => {},
	getAllByScheduleLine: async id => {},
};

const { server }: any = constructTestServer({
	context: {
		createUser: createCreateUserDB(userMock),
		getAllUsers: getAllDataDB(userMock),
		getUserById: getByIDDB(userMock),
		updateUserById: updateUserByIDDB(userMock),
		deleteUserById: DeleteRecordByIDDB(userMock),
	},
});

describe('Tests', () => {
	//Queries
	it('should fetch all user', async () => {
		const USER_ALL = gql`
			query {
				allUsers {
					id
					userName
					password
					userLevel
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({ query: USER_ALL });

		expect(res).toMatchSnapshot();
	});

	it('should fetch one user', async () => {
		const SINGLE_USER = gql`
			query u($id: String!) {
				user(id: $id) {
					id
					userName
					password
					userLevel
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_USER,
			variables: { id: '1' },
		});

		expect(res).toMatchSnapshot();
	});

	it('should error when no user', async () => {
		const SINGLE_USER = gql`
			query u($id: String!) {
				user(id: $id) {
					id
					userName
					password
					userLevel
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_USER,
			variables: { id: '' },
		});

		expect(res).toMatchSnapshot();
	});

	//Mutations
});
