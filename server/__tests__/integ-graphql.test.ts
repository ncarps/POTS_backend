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
	getAllByItemDB,
	getAllByScheduleLineDB,
	getAllBySupplierStatusDB,
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
	//Purchase Order
	createCreatePurchaseOrderDB,
	updatePurchaseOrderByIDDB,
	//Schedule Line
	createCreateScheduleLineDB,
	updateScheduleLineByIDDB,
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
	getAllBySupplierStatus: async id => {},
	getAllByItem: async id => {},
	getAllByScheduleLine: async id => {},
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
	getAllBySupplierStatus: async id => {},
	getAllByItem: async id => {},
	getAllByScheduleLine: async id => {},
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
	getAllBySupplierStatus: async id => {},
	getAllByItem: async id => {},
	getAllByScheduleLine: async id => {},
};

//Item Mock

const itemMock = {
	insert: jest.fn(async input => {
		console.log('inserttt', { id: '1', ...input });
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
	getAllBySupplierStatus: async id => {},
	getAllByItem: async id => {},
	getAllByScheduleLine: jest.fn(async () => {
		return mockData.items;
	}),
};

//Supplier Status Mock

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
		const res = mockData.supplierStatus.filter(filterData);

		return res[0] || null;
	}),
	getAll: jest.fn(async () => {
		return mockData.supplierStatus;
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
		const res = mockData.supplierStatus.filter(filterData);
		return res[0] || null;
	},
	getAllBySupplierStatus: async id => {},
	getAllByItem: async id => {},
	getAllByScheduleLine: async id => {},
};

//Schedule Line Mock

const scheduleLinesMock = {
	insert: jest.fn(async input => {
		return { id: '1', ...input };
	}),
	getById: jest.fn(async id => {
		const filterData = data => {
			if (data.id === id) {
				return data;
			}
		};
		const res = mockData.scheduleLines.filter(filterData);

		return res[0] || null;
	}),
	getAll: jest.fn(async () => {
		return mockData.scheduleLines;
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
		const res = mockData.scheduleLines.filter(filterData);
		return res[0] || null;
	},
	getAllBySupplierStatus: jest.fn(async () => {
		return mockData.scheduleLines;
	}),
	getAllByItem: async id => {},
	getAllByScheduleLine: async id => {},
};

//PurchaseOrder Mock

const purchaseOrderMock = {
	insert: jest.fn(async input => {
		return { id: '1', ...input };
	}),
	getById: jest.fn(async id => {
		const filterData = data => {
			if (data.id === id) {
				return data;
			}
		};
		const res = mockData.purchaseOrders.filter(filterData);

		return res[0] || null;
	}),
	getAll: jest.fn(async () => {
		return mockData.purchaseOrders;
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
		const res = mockData.purchaseOrders.filter(filterData);
		return res[0] || null;
	},

	getAllBySupplierStatus: async id => {},
	getAllByItem: jest.fn(async () => {
		return mockData.purchaseOrders;
	}),
	getAllByScheduleLine: async id => {},
};

const { server }: any = constructTestServer({
	context: {
		//User
		createUser: createCreateUserDB(userMock),
		getAllUsers: getAllDataDB(userMock),
		getUserById: getByIDDB(userMock),
		updateUserById: updateUserByIDDB(userMock),
		deleteUserById: DeleteRecordByIDDB(userMock),
		//Adress
		getAddressById: getByIDDB(addressMock),
		getAllAddress: getAllDataDB(addressMock),
		//Supplier
		createSupplier: createCreateSupplierDB(supplierMock),
		getAllSuppliers: getAllDataDB(supplierMock),
		getSupplierById: getByIDDB(supplierMock),
		deleteSupplierById: DeleteRecordByIDDB(supplierMock),
		updateSupplierById: updateSupplierByIDDB(supplierMock),
		//SupplierStatus
		createSupplierStatus: createCreateSupplierStatusDB(supplierStatusMock),
		updateSupplierStatusById: updateSupplierStatusByIDDB(supplierStatusMock),
		deleteSupplierStatusById: DeleteRecordByIDDB(supplierStatusMock),
		getSupplierStatusById: getByIDDB(supplierStatusMock),
		getAllSupplierStatus: getAllDataDB(supplierStatusMock),
		//Item
		createItem: createCreateItemDB(itemMock),
		updateItemById: updateItemByIDDB(itemMock),
		deleteItemById: DeleteRecordByIDDB(itemMock),
		getItemById: getByIDDB(itemMock),
		getAllItems: getAllDataDB(itemMock),
		getAllSupplierStatusByItem: getAllBySupplierStatusDB(itemMock),
		getAllScheduleLinesByItem: getAllByScheduleLineDB(itemMock),
		//Purchase Order
		createPurchaseOrder: createCreatePurchaseOrderDB(purchaseOrderMock),
		updatePurchaseOrderById: updatePurchaseOrderByIDDB(purchaseOrderMock),
		deletePurchaseOrderbyId: DeleteRecordByIDDB(purchaseOrderMock),
		getPurchaseOrderById: getByIDDB(purchaseOrderMock),
		getAllPurchaseOrders: getAllDataDB(purchaseOrderMock),
		getAllSupplierStatusByPurchaseOrder: getAllBySupplierStatusDB(purchaseOrderMock),
		getAllItemsByPurchaseOrder: getAllByItemDB(purchaseOrderMock),
		//Schedule Line
		createScheduleLine: createCreateScheduleLineDB(scheduleLinesMock),
		updateScheduleLine: updateScheduleLineByIDDB(scheduleLinesMock),
		deleteScheduleLineById: DeleteRecordByIDDB(scheduleLinesMock),
		getScheduleLineById: getByIDDB(scheduleLinesMock),
		getAllScheduleLines: getAllDataDB(scheduleLinesMock),
		getAllSupplierStatusByScheduleLine: getAllBySupplierStatusDB(scheduleLinesMock),
	},
});

describe('Tests', () => {
	//User Queries
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
					id
					supplierNo
					supplierName
					address {
						id
						building_name
						street
						city
						state
						zip_code
					}
					contactPerson
					contactNumber
					tin
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
					id
					supplierNo
					supplierName
					address {
						id
						building_name
						street
						city
						state
						zip_code
					}
					contactPerson
					contactNumber
					tin
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
					id
					supplier {
						supplierNo
						supplierName
						address {
							id
							building_name
							street
							city
							state
							zip_code
						}
						contactPerson
						contactNumber
						tin
					}
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
					timeCreated
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
					id
					status
					dateCreated
					timeCreated
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
					id
					status
					dateCreated
					timeCreated
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

	//Item Queries

	it('should fetch all items', async () => {
		const ITEM_ALL = gql`
			query {
				allItems {
					id
					itemNo
					description
					quantity
					uom
					unitPrice
					currency
					deliveryAddress {
						id
					}
					totalAmount
					supplierStatusItem
					scheduleLine {
						id
						quantity
						uom
						unitPrice
						totalAmount
						deliveryDateAndTime
						deliveryStatus {
							id
							status
							dateCreated
							timeCreated
						}
					}
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
					id
					itemNo
					description
					quantity
					uom
					unitPrice
					currency
					deliveryAddress {
						id
					}
					totalAmount
					supplierStatusItem
					scheduleLine {
						id
						quantity
						uom
						unitPrice
						totalAmount
						deliveryDateAndTime
						deliveryStatus {
							id
							status
							dateCreated
							timeCreated
						}
					}
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
					id
					itemNo
					description
					quantity
					uom
					unitPrice
					currency
					deliveryAddress {
						id
					}
					totalAmount
					supplierStatusItem
					scheduleLine {
						id
						quantity
						uom
						unitPrice
						totalAmount
						deliveryDateAndTime
						deliveryStatus {
							id
							status
							dateCreated
							timeCreated
						}
					}
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

	//Purchase Order Queries

	it('should fetch all purchase orders', async () => {
		const PURCHASEORDER_ALL = gql`
			query {
				allPurchaseOrders {
					id
					purchaseOrderNo
					shipmentNo
					adminStatus
					supplierStatusHeader
					vendorAddress {
						id
						building_name
						street
						city
						state
						zip_code
					}
					supplier {
						id
						supplierNo
						supplierName
						tin
						contactNumber
						contactPerson
						address {
							id
							building_name
							street
							city
							state
							zip_code
						}
					}
					documentDate
					items {
						id
						itemNo
						description
						quantity
						uom
						unitPrice
						currency
						deliveryAddress {
							id
						}
						totalAmount
						supplierStatusItem
						scheduleLine {
							id
							quantity
							uom
							unitPrice
							totalAmount
							deliveryDateAndTime
							deliveryStatus {
								id
								status
								dateCreated
								timeCreated
							}
						}
					}
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({ query: PURCHASEORDER_ALL });

		expect(res).toMatchSnapshot();
	});

	it('should fetch one purchase order', async () => {
		const SINGLE_PURCHASEORDER = gql`
			query po($id: ID!) {
				purchaseOrder(id: $id) {
					id
					purchaseOrderNo
					shipmentNo
					adminStatus
					supplierStatusHeader
					vendorAddress {
						id
						building_name
						street
						city
						state
						zip_code
					}
					supplier {
						id
						supplierNo
						supplierName
						tin
						contactNumber
						contactPerson
						address {
							id
							building_name
							street
							city
							state
							zip_code
						}
					}
					documentDate
					items {
						id
						itemNo
						description
						quantity
						uom
						unitPrice
						currency
						deliveryAddress {
							id
						}
						totalAmount
						supplierStatusItem
						scheduleLine {
							id
							quantity
							uom
							unitPrice
							totalAmount
							deliveryDateAndTime
							deliveryStatus {
								id
								status
								dateCreated
								timeCreated
							}
						}
					}
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_PURCHASEORDER,
			variables: { id: '1' },
		});

		expect(res).toMatchSnapshot();
	});

	it('should error when no purchase order', async () => {
		const SINGLE_PURCHASEORDER = gql`
			query po($id: ID!) {
				purchaseOrder(id: $id) {
					id
					purchaseOrderNo
					shipmentNo
					adminStatus
					supplierStatusHeader
					vendorAddress {
						id
						building_name
						street
						city
						state
						zip_code
					}
					supplier {
						id
						supplierNo
						supplierName
						tin
						contactNumber
						contactPerson
						address {
							id
							building_name
							street
							city
							state
							zip_code
						}
					}
					documentDate
					items {
						id
						itemNo
						description
						quantity
						uom
						unitPrice
						currency
						deliveryAddress {
							id
						}
						totalAmount
						supplierStatusItem
						scheduleLine {
							id
							quantity
							uom
							unitPrice
							totalAmount
							deliveryDateAndTime
							deliveryStatus {
								id
								status
								dateCreated
								timeCreated
							}
						}
					}
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_PURCHASEORDER,
			variables: { id: '' },
		});

		expect(res).toMatchSnapshot();
	});

	// Schedule Line Queries
	it('should fetch all schedule lines', async () => {
		const SCHEDULELINES_ALL = gql`
			query {
				allScheduleLines {
					id
					quantity
					uom
					unitPrice
					totalAmount
					deliveryDateAndTime
					deliveryStatus {
						id
						status
						dateCreated
						timeCreated
					}
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({ query: SCHEDULELINES_ALL });

		expect(res).toMatchSnapshot();
	});

	it('should fetch one schedule line', async () => {
		const SINGLE_SCHEDULELINE = gql`
			query ss($id: String!) {
				scheduleLine(id: $id) {
					id
					quantity
					uom
					unitPrice
					totalAmount
					deliveryDateAndTime
					deliveryStatus {
						id
						status
						dateCreated
						timeCreated
					}
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_SCHEDULELINE,
			variables: { id: '1' },
		});

		expect(res).toMatchSnapshot();
	});

	it('should error when no schedule line', async () => {
		const SINGLE_SCHEDULELINE = gql`
			query ss($id: String!) {
				scheduleLine(id: $id) {
					id
					quantity
					uom
					unitPrice
					totalAmount
					deliveryDateAndTime
					deliveryStatus {
						id
						status
						dateCreated
						timeCreated
					}
				}
			}
		`;

		const { query } = createTestClient(server);
		const res = await query({
			query: SINGLE_SCHEDULELINE,
			variables: { id: '' },
		});

		expect(res).toMatchSnapshot();
	});

	//Mutations

	//User Mutations
	it('create a user', async () => {
		const CREATE_USER = gql`
			mutation createUser($user: UserInput!) {
				createUser(user: $user) {
					id
					userId
					userName
					password
					userLevel
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: CREATE_USER,
			variables: {
				user: {
					userId: '001',
					userName: 'User Name1',
					password: '12345',
					userLevel: 'Admin',
				},
			},
		});

		expect(res.errors).toBeUndefined();
		expect(userMock.insert.mock.calls.length).toBe(1);
		expect(res.data).toMatchObject({
			createUser: {
				id: '1',
				userId: '001',
				userName: 'User Name1',
				password: '12345',
				userLevel: 'Admin',
			},
		});
		expect(res).toMatchSnapshot();
	});

	it('delete a user', async () => {
		const DELETE_USER = gql`
			mutation u($id: ID!) {
				deleteUser(id: $id) {
					id
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
			mutation u($user: UpdateSupplierInput!) {
				updateUser(user: $user) {
					id
					userName
					password
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: UPDATE_USER,
			variables: {
				user: {
					id: '1',
					userName: 'User Name1',
					password: '12345',
					userLevel: 'Admin',
				},
			},
		});

		expect(res).toMatchSnapshot();
	});

	//Supplier Mutation
	it('create a supplier', async () => {
		const CREATE_SUPPLIER = gql`
			mutation createSupp($supplier: SupplierInput!) {
				createSupplier(supplier: $supplier) {
					id
					supplierNo
					supplierName
					contactPerson
					contactNumber
					tin
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: CREATE_SUPPLIER,
			variables: {
				supplier: {
					supplierNo: '001',
					supplierName: 'The Supplier',
					address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
					contactPerson: 'Basil Valdez',
					contactNumber: '1234567',
					tin: '12345',
				},
			},
		});

		expect(res.errors).toBeUndefined();
		expect(supplierMock.insert.mock.calls.length).toBe(1);
		expect(res.data).toMatchObject({
			createSupplier: {
				id: '1',
				supplierNo: '001',
				supplierName: 'The Supplier',
				// address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
				contactPerson: 'Basil Valdez',
				contactNumber: '1234567',
				tin: '12345',
			},
		});
		expect(res).toMatchSnapshot();
	});

	it('update a supplier', async () => {
		const UPDATE_SUPPLIER = gql`
			mutation supp($supplier: UpdateSupplierInput!) {
				updateSupplier(supplier: $supplier) {
					id
					supplierNo
					supplierName
					contactPerson
					contactNumber
					tin
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: UPDATE_SUPPLIER,
			variables: {
				supplier: {
					id: '1',
					supplierNo: '001',
					supplierName: 'The Supplier',
					address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
					contactPerson: 'Basil Valdez',
					contactNumber: '1234567',
					tin: '12345',
				},
			},
		});

		expect(res).toMatchSnapshot();
	});

	it('delete a supplier', async () => {
		const DELETE_SUPPLIER = gql`
			mutation supp($id: ID!) {
				deleteSupplier(id: $id) {
					supplierName
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
			mutation createSupplierStatus($supplierStatus: SupplierStatusInput!) {
				createSupplierStatus(supplierStatus: $supplierStatus) {
					id
					status
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: CREATE_SUPPPLIERSTATUS,
			variables: {
				supplierStatus: {
					status: 'yeeeeee',
				},
			},
		});

		expect(res.errors).toBeUndefined();
		expect(supplierStatusMock.insert.mock.calls.length).toBe(1);
		expect(res.data).toMatchObject({
			createSupplierStatus: {
				id: '1',
				status: 'yeeeeee',
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
					timeCreated
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
			mutation ss($supplierStatus: UpdateSupplierStatusInput!) {
				updateSupplierStatus(supplierStatus: $supplierStatus) {
					id
					status
					dateCreated
					timeCreated
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
				},
			},
		});

		expect(res).toMatchSnapshot();
	});

	//Schedule Line Mutations
	it('create a schedule line', async () => {
		const CREATE_SCHEDULELINE = gql`
			mutation createSl($scheduleLine: ScheduleLineInput!) {
				createScheduleLine(scheduleLine: $scheduleLine) {
					id
					quantity
					uom
					deliveryDateAndTime
					unitPrice
					totalAmount
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: CREATE_SCHEDULELINE,
			variables: {
				scheduleLine: {
					quantity: 10,
					uom: 'kilograms',
					deliveryDateAndTime: 'February 25,2020 4:30PM',
					unitPrice: 1000,
					totalAmount: 10000,
				},
			},
		});

		expect(res.errors).toBeUndefined();
		expect(scheduleLinesMock.insert.mock.calls.length).toBe(1);
		expect(res.data).toMatchObject({
			createScheduleLine: {
				id: '1',
				quantity: 10,
				uom: 'kilograms',
				deliveryDateAndTime: 'February 25,2020 4:30PM',
				unitPrice: 1000,
				totalAmount: 10000,
			},
		});
		expect(res).toMatchSnapshot();
	});

	it('delete a schedule Line', async () => {
		const DELETE_SCHEDULELINE = gql`
			mutation sl($id: ID!) {
				deleteScheduleLine(id: $id) {
					id
				}
			}
		`;
		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: DELETE_SCHEDULELINE,
			variables: { id: 'U1' },
		});
		expect(res.errors).toBeUndefined();
		expect(res).toMatchSnapshot();
	});

	it('update a schedule line', async () => {
		const UPDATE_SCHEDULELINE = gql`
			mutation sl($scheduleLine: UpdateScheduleLineInput!) {
				updateSupplierStatus(scheduleLine: $scheduleLine) {
					id
					deliveryStatus
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: UPDATE_SCHEDULELINE,
			variables: {
				scheduleLine: {
					id: '1',
					deliveryStatus: [{ status: 'Pending' }],
				},
			},
		});

		expect(res).toMatchSnapshot();
	});

	//Item Mutation

	// it('should create an item', async () => {
	// 	const CREATE_ITEM = gql`
	// 		mutation createI($item: ItemInput!) {
	// 			createItem(item: $item) {
	// 				itemNo
	// 				productId
	// 				description
	// 				quantity
	// 				uom
	// 				unitPrice
	// 				discount
	// 				totalAmount
	// 				deliveryAddress {
	// 					building_name
	// 					zip_code
	// 					state
	// 					street
	// 					city
	// 				}
	// 				scheduleLine {
	// 					quantity
	// 					uom
	// 					unitPrice
	// 					totalAmount
	// 				}
	// 				currency
	// 			}
	// 		}
	// 	`;

	// 	const { mutate } = createTestClient(server);
	// 	const res = await mutate({
	// 		mutation: CREATE_ITEM,
	// 		variables: {
	// 			item: {
	// 				itemNo: '001',
	// 				description: 'Beef',
	// 				productId: '0001',
	// 				quantity: 10,
	// 				uom: 'kilograms',
	// 				unitPrice: 1000,
	// 				discount: 0.05,
	// 				totalAmount: 10000,
	// 				deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
	// 				scheduleLine: [
	// 					{
	// 						quantity: 10,
	// 						uom: 'kilograms',
	// 						deliveryDateAndTime: 'February 25,2020 4:30PM',
	// 						unitPrice: 1000,
	// 						totalAmount: 10000,
	// 					},
	// 				],
	// 				currency: 'PHP',
	// 			},
	// 		},
	// 	});

	// 	console.log('testtt', res.errors);
	// 	expect(res.errors).toBeUndefined();
	// 	expect(itemMock.insert.mock.calls.length).toBe(1);

	// 	expect(res.data).toMatchObject({
	// 		createItem: {
	// 			id: '1',
	// 			itemNo: '001',
	// 			description: 'Beef',
	// 			productId: '0001',
	// 			quantity: 10,
	// 			uom: 'kilograms',
	// 			unitPrice: 1000,
	// 			discount: 0.05,
	// 			totalAmount: 10000,
	// 			deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
	// 			scheduleLine: [
	// 				{
	// 					id: '1',
	// 					quantity: 10,
	// 					uom: 'kilograms',
	// 					deliveryDateAndTime: 'February 25,2020 4:30PM',
	// 					unitPrice: 1000,
	// 					totalAmount: 10000,
	// 				},
	// 			],
	// 			currency: 'PHP',
	// 		},
	// 	});
	// 	expect(res).toMatchSnapshot();
	// });

	it('update an item', async () => {
		const UPDATE_ITEM = gql`
			mutation i($item: UpdateItemInput!) {
				updateItem(item: $item) {
					id
					supplierStatusItem
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: UPDATE_ITEM,
			variables: {
				item: {
					id: '1',
					supplierStatusItem: 'Dispatched',
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

	// //Purchase Order Mutations

	// it('create a purchase order', async () => {
	// 	const CREATE_PURCHASEORDER = gql`
	// 		mutation createPO($purchaseOrder: PurchaseOrderInput) {
	// 			createPurchaseOrder(purchaseOrder: $purchaseOrder) {
	// 				purchaseOrderNo
	// 				shipmentNo
	// 				vendorAddress {
	// 					id
	// 					building_name
	// 					street
	// 					city
	// 					state
	// 					zip_code
	// 				}
	// 				supplier {
	// 					id
	// 					supplierNo
	// 					supplierName
	// 					tin
	// 					contactNumber
	// 					contactPerson
	// 					address {
	// 						id
	// 						building_name
	// 						street
	// 						city
	// 						state
	// 						zip_code
	// 					}
	// 				}
	// 				documentDate
	// 				items {
	// 					id
	// 					itemNo
	// 					description
	// 					quantity
	// 					uom
	// 					unitPrice
	// 					currency
	// 					deliveryAddress {
	// 						id
	// 					}
	// 					totalAmount
	// 					supplierStatusItem
	// 					scheduleLine {
	// 						id
	// 						quantity
	// 						uom
	// 						unitPrice
	// 						totalAmount
	// 						deliveryDateAndTime
	// 						deliveryStatus {
	// 							id
	// 							status
	// 							dateCreated
	// 							timeCreated
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	`;

	// 	const { mutate } = createTestClient(server);
	// 	const res = await mutate({
	// 		mutation: CREATE_PURCHASEORDER,
	// 		variables: {
	// 			purchaseOrder: {
	// 				purchaseOrderNo: '001',
	// 				shipmentNo: '123',
	// 				supplier: {
	// 					supplierNo: '001',
	// 					supplierName: 'Juan Dela Cruz',
	// 					address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
	// 					contactPerson: 'Basil Valdez',
	// 					contactNumber: '1234567',
	// 					tin: '12345',
	// 				},
	// 				postingDate: '03/03/20200',
	// 				documentDate: '03/03/20200',
	// 				vendorAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
	// 				items: [
	// 					{
	// 						itemNo: '001',
	// 						description: 'Beef',
	// 						productId: '0001',
	// 						quantity: 10,
	// 						uom: 'kg',
	// 						unitPrice: 1000,
	// 						discount: 0.05,
	// 						totalAmount: 9000,
	// 						supplierStatusItem: 'Distpatched',
	// 						deliveryAddress: {
	// 							building_name: '002',
	// 							street: 'Elmer',
	// 							city: 'Celadon',
	// 							state: 'Johto',
	// 							zip_code: '123',
	// 						},
	// 						scheduleLine: [
	// 							{
	// 								quantity: 10,
	// 								uom: 'kilograms',
	// 								deliveryDateAndTime: 'February 25,2020 4:30PM',
	// 								unitPrice: 1000,
	// 								totalAmount: 10000,
	// 							},
	// 							{
	// 								quantity: 10,
	// 								uom: 'uom',
	// 								deliveryDateAndTime: 'dateandtime',
	// 								unitPrice: 1000,
	// 								totalAmount: 10000,
	// 							},
	// 						],
	// 						currency: 'PHP',
	// 						dateUpdated: '',
	// 						timeUpdated: '',
	// 					},
	// 					{
	// 						itemNo: '002',
	// 						description: 'Beef',
	// 						productId: '0001',
	// 						quantity: 10,
	// 						uom: 'kg',
	// 						unitPrice: 1000,
	// 						discount: 0.05,
	// 						totalAmount: 9000,
	// 						supplierStatusItem: 'Distpatched',
	// 						deliveryAddress: {
	// 							building_name: '002',
	// 							street: 'Elmer',
	// 							city: 'Celadon',
	// 							state: 'Johto',
	// 							zip_code: '123',
	// 						},
	// 						scheduleLine: [
	// 							{
	// 								quantity: 10,
	// 								uom: 'kilograms',
	// 								deliveryDateAndTime: 'February 25,2020 4:30PM',
	// 								unitPrice: 1000,
	// 								totalAmount: 10000,
	// 							},
	// 							{
	// 								quantity: 10,
	// 								uom: 'uom',
	// 								deliveryDateAndTime: 'dateandtime',
	// 								unitPrice: 1000,
	// 								totalAmount: 10000,
	// 							},
	// 						],
	// 						currency: 'PHP',
	// 						dateUpdated: '',
	// 						timeUpdated: '',
	// 					},
	// 				],
	// 			},
	// 		},
	// 	});

	// 	expect(res.errors).toBeUndefined();
	// 	expect(purchaseOrderMock.insert.mock.calls.length).toBe(1);
	// 	expect(res.data).toMatchObject({
	// 		createPurchaseOrder: {
	// 			_id: '1',
	// 			purchaseOrderNo: '001',
	// 			shipmentNo: '123',
	// 			supplier: {
	// 				_id: '1',
	// 				supplierNo: '001',
	// 				supplierName: 'Juan Dela Cruz',
	// 				address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
	// 				contactPerson: 'Basil Valdez',
	// 				contactNumber: '1234567',
	// 				tin: '12345',
	// 			},
	// 			postingDate: '03/03/20200',
	// 			documentDate: '03/03/20200',
	// 			vendorAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
	// 			items: [
	// 				{
	// 					_id: '1',
	// 					itemNo: '001',
	// 					description: 'Beef',
	// 					productId: '0001',
	// 					quantity: 10,
	// 					uom: 'kg',
	// 					unitPrice: 1000,
	// 					discount: 0.05,
	// 					totalAmount: 9000,
	// 					supplierStatusItem: 'Distpatched',
	// 					deliveryAddress: {
	// 						building_name: '002',
	// 						street: 'Elmer',
	// 						city: 'Celadon',
	// 						state: 'Johto',
	// 						zip_code: '123',
	// 					},
	// 					scheduleLine: [
	// 						{
	// 							quantity: 10,
	// 							uom: 'kilograms',
	// 							deliveryDateAndTime: 'February 25,2020 4:30PM',
	// 							unitPrice: 1000,
	// 							totalAmount: 10000,
	// 						},
	// 						{
	// 							_id: '2',
	// 							quantity: 10,
	// 							uom: 'uom',
	// 							deliveryDateAndTime: 'dateandtime',
	// 							unitPrice: 1000,
	// 							totalAmount: 10000,
	// 						},
	// 					],
	// 					currency: 'PHP',
	// 					dateUpdated: '',
	// 					timeUpdated: '',
	// 				},
	// 				{
	// 					itemNo: '002',
	// 					description: 'Beef',
	// 					productId: '0001',
	// 					quantity: 10,
	// 					uom: 'kg',
	// 					unitPrice: 1000,
	// 					discount: 0.05,
	// 					totalAmount: 9000,
	// 					supplierStatusItem: 'Distpatched',
	// 					deliveryAddress: {
	// 						building_name: '002',
	// 						street: 'Elmer',
	// 						city: 'Celadon',
	// 						state: 'Johto',
	// 						zip_code: '123',
	// 					},
	// 					scheduleLine: [
	// 						{
	// 							_id: '1',
	// 							quantity: 10,
	// 							uom: 'kilograms',
	// 							deliveryDateAndTime: 'February 25,2020 4:30PM',
	// 							unitPrice: 1000,
	// 							totalAmount: 10000,
	// 						},
	// 						{
	// 							_id: '2',
	// 							quantity: 10,
	// 							uom: 'uom',
	// 							deliveryDateAndTime: 'dateandtime',
	// 							unitPrice: 1000,
	// 							totalAmount: 10000,
	// 						},
	// 					],
	// 					currency: 'PHP',
	// 					dateUpdated: '',
	// 					timeUpdated: '',
	// 				},
	// 			],
	// 		},
	// 	});
	// 	expect(res).toMatchSnapshot();
	// });

	it('update a purchase order', async () => {
		const UPDATE_PURCHASEORDER = gql`
			mutation i($item: UpdateItemInput!) {
				updateItem(item: $item) {
					id
					adminStatus
					supplierStatusHeader
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: UPDATE_PURCHASEORDER,
			variables: {
				item: {
					id: '1',
					adminStatus: 'Recieved',
					supplierStatusHeader: 'Delivered',
				},
			},
		});

		expect(res).toMatchSnapshot();
	});

	it('delete a puchase order', async () => {
		const DELETE_PURCHASEORDER = gql`
			mutation i($id: ID!) {
				deletePurchaseOrder(id: $id) {
					id
				}
			}
		`;

		const { mutate } = createTestClient(server);
		const res = await mutate({
			mutation: DELETE_PURCHASEORDER,
			variables: { id: '1' },
		});

		expect(res).toMatchSnapshot();
	});
});
