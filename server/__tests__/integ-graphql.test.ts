import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import mockData from './mocks/mock-data';
import * as controllers from '../src/controllers';
import { constructTestServer } from './__utils';

const {
	//Generic
	getAllDataDB,
	getByIDDB,
	DeleteRecordByIDDB,
	//User
	createCreateUserDB,
	updateUserByIDDB,
	//Supplier
	createCreateSupplierDB,
	updateSupplierByIDDB,
	//SupplierStatus
	createCreateSupplierStatusDB,
	updateSupplierStatusByIDDB,
	//Item
	createCreateItemDB,
	updateItemByIDDB,
} = controllers;

//User

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

//Address
const addressMock = {
	insert: jest.fn(async input => {
		return { id: '1', ...input };
	}),
	getAll: jest.fn(async () => {
		return mockData.address;
	}),
	getById: jest.fn(async id => {
		const filterData = data => {
			if (data.id === id) {
				return data;
			}
		};
		const res = mockData.address.filter(filterData);
		return res[0] || null;
	}),
	deleteById: async id => {},
	updateById: async id => {},
};

//Supplier

const supplierMock = {
	insert: jest.fn(async input => {
		return { id: '1', ...input };
	}),
	getAll: jest.fn(async () => {
		return mockData.suppliers;
	}),
	getById: jest.fn(async id => {
		const filterData = cust => {
			if (cust.id === id) {
				return cust;
			}
		};

		const res = mockData.suppliers.filter(filterData);
		return res[0] || null;
	}),

	deleteById: async id => {
		const filterData = cust => {
			if (cust.id === id) {
				return cust;
			}
		};

		const res = mockData.suppliers.filter(filterData);
		return res[0] || null;
	},

	updateById: jest.fn(async input => {
		return { ...input };
	}),
};

//SupplierStatus

const itemMock = {
	insert: jest.fn(async input => {
		return { id: '1', ...input };
	}),
	getById: jest.fn(async id => {
		const filterData = data => {
			if (data.id === id) {
				return data;
			}
		};
		const res = mockData.items.filter(filterData);

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
		const res = mockData.items.filter(filterData);
		return res[0] || null;
	},
};

//Item

const supplierStatusMock = {
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
		//User
		createUser: createCreateUserDB(userMock),
		getUserById: getByIDDB(userMock),
		getAllUser: getAllDataDB(userMock),
		deleteUserById: DeleteRecordByIDDB(userMock),
		updateUserById: updateUserByIDDB(userMock),
		//Address
		getAllAddress: getAllDataDB(addressMock),
		getAddressById: getByIDDB(addressMock),
		//Supplier
		createSupplier: createCreateSupplierDB(supplierMock),
		getSupplierById: getByIDDB(supplierMock),
		getAllSuppliers: getAllDataDB(supplierMock),
		deleteSupplierById: DeleteRecordByIDDB(supplierMock),
		updateSupplierById: updateSupplierByIDDB(supplierMock),
		//SupplierStatus
		createSupplierStatus: createCreateSupplierStatusDB(supplierStatusMock),
		getSupplierStatusById: getByIDDB(supplierStatusMock),
		getAllSupplierStatus: getAllDataDB(supplierStatusMock),
		deleteSupplierStatusById: DeleteRecordByIDDB(supplierStatusMock),
		updateSupplierStatusById: updateSupplierStatusByIDDB(supplierStatusMock),
		//Item
		createItem: createCreateItemDB(itemMock),
		getItemById: getByIDDB(itemMock),
		getAllItems: getAllDataDB(itemMock),
		deleteItemById: DeleteRecordByIDDB(itemMock),
		updateItemById: updateItemByIDDB(itemMock),
	},
});

describe('Queries', () => {
	//User Queries
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

	it('should fetch one user', async () => {
		const SINGLE_USER = gql`
			query u($id: String!) {
				user(id: $id) {
					name
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
					name
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

	//Address Queries
	it('should fetch all address', async () => {
		const ADDRESS_ALL = gql`
			query {
				allAddresss {
					id
					building_name
					street
					city
					state
					zip_code
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({ query: ADDRESS_ALL });

		expect(res.errors).toBeUndefined();
		expect(addressMock.getAll.mock.calls.length).toBe(1);
		expect(res).toMatchSnapshot();
	});

	it('should fetch one address', async () => {
		const SINGLE_ADDRESS = gql`
			query add($id: ID!) {
				address(id: $id) {
					id
					building_name
					street
					city
					state
					zip_code
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_ADDRESS,
			variables: { id: 'A1' },
		});
		expect(res.errors).toBeUndefined();
		expect(res).toMatchSnapshot();
	});

	it('should error when no address', async () => {
		const SINGLE_ADDRESS = gql`
			query add($id: ID!) {
				address(id: $id) {
					id
					building_name
					street
					city
					state
					zip_code
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_ADDRESS,
			variables: { id: '' },
		});

		expect(res).toMatchSnapshot();
	});

	//Supplier Queries
	it('should fetch all suppliers', async () => {
		const SUPPLIER_ALL = gql`
			query {
				allSuppliers {
					name
					address {
						id
					}
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({ query: SUPPLIER_ALL });

		expect(res).toMatchSnapshot();
	});

	it('should fetch one supplier', async () => {
		const SINGLE_SUPPLIER = gql`
			query supp($id: ID!) {
				supplier(id: $id) {
					name
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_SUPPLIER,
			variables: { id: '1' },
		});

		expect(res).toMatchSnapshot();
	});

	it('should error when no supplier', async () => {
		const SINGLE_SUPPLIER = gql`
			query supp($id: ID!) {
				supplier(id: $id) {
					name
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_SUPPLIER,
			variables: { id: '' },
		});

		expect(res).toMatchSnapshot();
	});

	//SupplierStatus Queries
	it('should fetch all supplier status', async () => {
		const SUPPLIERSTATUS_ALL = gql`
			query {
				allSupplierStatus {
					id
					status
					dateCreated
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({ query: SUPPLIERSTATUS_ALL });

		expect(res).toMatchSnapshot();
	});

	it('should fetch one supplier status', async () => {
		const SINGLE_SUPPLIERSTATUS = gql`
			query ss($id: String!) {
				supplierStatus(id: $id) {
					status
					dateCreated
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_SUPPLIERSTATUS,
			variables: { id: '1' },
		});

		expect(res).toMatchSnapshot();
	});

	it('should error when no user', async () => {
		const SINGLE_SUPPLIERSTATUS = gql`
			query ss($id: String!) {
				supplierStatus(id: $id) {
					status
					dateCreated
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_SUPPLIERSTATUS,
			variables: { id: '' },
		});

		expect(res).toMatchSnapshot();
	});

	//Item

	it('should fetch all items', async () => {
		const ITEM_ALL = gql`
			query {
				allItems {
					id
					itemNo
					description
					quantity
					uom
					price
					currency
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({ query: ITEM_ALL });

		expect(res).toMatchSnapshot();
	});

	it('should fetch one item ', async () => {
		const SINGLE_ITEM = gql`
			query i($id: String!) {
				item(id: $id) {
					itemNo
					description
					quantity
					uom
					price
					currency
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_ITEM,
			variables: { id: '1' },
		});

		expect(res).toMatchSnapshot();
	});

	it('should error when no item', async () => {
		const SINGLE_ITEM = gql`
			query i($id: String!) {
				item(id: $id) {
					itemNo
					description
					quantity
					uom
					price
					currency
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_ITEM,
			variables: { id: '' },
		});

		expect(res).toMatchSnapshot();
	});

	//Mutations

	//User Mutations
	it('create a user', async () => {
		const CREATE_USER = gql`
			mutation createUser($name: String) {
				createUser(name: $name) {
					id
					name
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: CREATE_USER,
			variables: {
				name: 'User 1',
			},
		});

		expect(res.errors).toBeUndefined();
		expect(userMock.insert.mock.calls.length).toBe(1);
		expect(res.data).toMatchObject({
			createUser: {
				id: '1',
				name: 'User 1',
			},
		});
		expect(res).toMatchSnapshot();
	});

	it('delete a user', async () => {
		const DELETE_USER = gql`
			mutation u($id: String!) {
				deleteUser(id: $id) {
					id
					name
				}
			}
		`;
		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: DELETE_USER,
			variables: { id: 'U1' },
		});
		expect(res.errors).toBeUndefined();
		expect(res).toMatchSnapshot();
	});

	it('update a user', async () => {
		const UPDATE_USER = gql`
			mutation u($name: String!) {
				updateUser(name: $name) {
					name
				}
			}
		`;
		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: UPDATE_USER,
			variables: {
				id: '1',
				name: 'User 1',
			},
		});
		expect(res.errors).toBeUndefined();
		expect(res).toMatchSnapshot();
	});

	//Supplier Mutation
	it('create a supplier', async () => {
		const CREATE_SUPPLIER = gql`
			mutation createSupp($supplier: SupplierInput!) {
				createSupplier(supplier: $supplier) {
					id
					name
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: CREATE_SUPPLIER,
			variables: {
				supplier: {
					name: 'The Supplier',
					address: {
						building_name: 'bu',
						street: 'St',
						city: 'cty',
						state: 'stat',
						zip_code: 'zip',
					},
				},
			},
		});

		expect(res.errors).toBeUndefined();
		expect(supplierMock.insert.mock.calls.length).toBe(1);
		expect(res.data).toMatchObject({
			createSupplier: {
				id: '1',
				name: 'The Supplier',
			},
		});
		expect(res).toMatchSnapshot();
	});

	it('update a supplier', async () => {
		const UPDATE_SUPPLIER = gql`
			mutation supp($supplier: UpdateSupplierInput!) {
				updateSupplier(supplier: $supplier) {
					id
					name
					address {
						building_name
						street
					}
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: UPDATE_SUPPLIER,
			variables: {
				supplier: {
					id: '1',
					name: 'Supp name',
					address: 'A1',
				},
			},
		});

		expect(res).toMatchSnapshot();
	});

	it('delete a supplier', async () => {
		const DELETE_SUPPLIER = gql`
			mutation supp($id: ID!) {
				deleteSupplier(id: $id) {
					name
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: DELETE_SUPPLIER,
			variables: { id: 'S1' },
		});

		expect(res).toMatchSnapshot();
	});

	//SupplierStatus Mutations

	it('create a supplier status', async () => {
		const CREATE_SUPPPLIERSTATUS = gql`
			mutation createSupplierStatus($status: String!, $dateCreated: String!) {
				createSupplierStatus(status: $status, dateCreated: $dateCreated) {
					id
					status
					dateCreated
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: CREATE_SUPPPLIERSTATUS,
			variables: {
				status: 'Dispatched',
				dateCreated: 'February 14, 2020',
			},
		});

		expect(res.errors).toBeUndefined();
		expect(supplierStatusMock.insert.mock.calls.length).toBe(1);
		expect(res.data).toMatchObject({
			createSupplierStatus: {
				id: '1',
				status: 'Dispatched',
				dateCreated: 'February 14, 2020',
			},
		});
		expect(res).toMatchSnapshot();
	});

	it('delete a supplier status', async () => {
		const DELETE_SUPPLIERSTATUS = gql`
			mutation ss($id: ID!) {
				deleteSupplierStatus(id: $id) {
					status
					dateCreated
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: DELETE_SUPPLIERSTATUS,
			variables: { id: '1' },
		});

		expect(res).toMatchSnapshot();
	});

	it('update a supplier status', async () => {
		const UPDATE_SUPPLIERSTATUS = gql`
			mutation ss($status: String, $dateCreated: String) {
				updateSupplierStatus(status: $status, dateCreated: $dateCreated) {
					id
					status
					dateCreated
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: UPDATE_SUPPLIERSTATUS,
			variables: {
				supplierStatus: {
					id: '1',
					status: 'Dispatched',
					dateCreated: 'February 14, 2020',
				},
			},
		});

		expect(res).toMatchSnapshot();
	});

	//Item Mutation
	it('create an item', async () => {
		const CREATE_ITEM = gql`
			mutation createItem($item: ItemInput!) {
				createItem(item: $item) {
					id
					itemNo
					description
					quantity
					uom
					price
					currency
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: CREATE_ITEM,
			variables: {
				item: {
					itemNo: '1',
					description: 'Corned Beef',
					quantity: '5',
					uom: 'kg',
					price: '2000',
					currency: 'PHP',
				},
			},
		});

		expect(res.errors).toBeUndefined();
		expect(itemMock.insert.mock.calls.length).toBe(1);
		expect(res.data).toMatchObject({
			createItem: {
				id: '1',
				itemNo: '1',
				description: 'Corned Beef',
				quantity: '5',
				uom: 'kg',
				price: '2000',
				currency: 'PHP',
			},
		});
		expect(res).toMatchSnapshot();
	});

	it('update an item', async () => {
		const UPDATE_ITEM = gql`
			mutation i($item: UpdateItemInput!) {
				updateItem(item: $item) {
					id
					itemNo
					description
					quantity
					uom
					price
					currency
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: UPDATE_ITEM,
			variables: {
				item: {
					id: '1',
					itemNo: '1',
					description: 'Corned Beef',
					quantity: '5',
					uom: 'kg',
					price: '2000',
					currency: 'PHP',
				},
			},
		});

		expect(res).toMatchSnapshot();
	});

	it('delete an item', async () => {
		const DELETE_ITEM = gql`
			mutation i($id: ID!) {
				deleteItem(id: $id) {
					id
					itemNo
					description
					quantity
					uom
					price
					currency
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: DELETE_ITEM,
			variables: { id: '1' },
		});

		expect(res).toMatchSnapshot();
	});
});
