import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import mockData from './mocks/mock-data';
import * as controllers from '../src/controllers';
import { constructTestServer } from './__utils';
const { createCreateUserDB, getAllDataDB, getByIDDB, DeleteRecordByIDDB } = controllers;

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
};

const { server }: any = constructTestServer({
	context: {
		createUser: createCreateUserDB(userMock),
		getUserById: getByIDDB(userMock),
		getAllUser: getAllDataDB(userMock),
		deleteUserById: DeleteRecordByIDDB(userMock),
	},
});

describe('Queries', () => {
	it('should fetch all user', async () => {
		const USER_ALL = gql`
			query {
				allUsers {
					id
					name
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({ query: USER_ALL });

		expect(res).toMatchSnapshot();
	});
});
