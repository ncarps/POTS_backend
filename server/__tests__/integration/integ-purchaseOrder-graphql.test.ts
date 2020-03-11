import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import mockData from '../mocks/mock-data';
import * as controllers from '../../src/controllers';
import { constructTestServer } from '../__utils';

const {
  getAllDataDB,
  getByIDDB,
  DeleteRecordByIDDB,
  getAllByItemDB,
  createCreatePurchaseOrderDB,
  createCreateItemDB,
  createCreateSupplierDB,
  createCreateScheduleLineDB,
  updatePurchaseOrderByIDDB,
} = controllers;

const purchaseOrderMock = {
  insert: jest.fn(async input => {
    return { id: '1', ...input, vendorAddress: 'A1', supplier: '1' };
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

const itemMock = {
  insert: jest.fn(async input => {
    return {
      id: '1',
      ...input,
      deliveryAddress: 'A1',
    };
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
  getAllByScheduleLine: jest.fn(async id => {
    const filterData = data => {
      if (id.includes(data._id)) {
        return data;
      }
    };
    const res = mockData.scheduleLines
      .filter(filterData)
      .map(data => ({ ...data, id: data._id }));
    return res;
  }),
};

const supplierMock = {
  insert: jest.fn(async input => {
    return { id: '1', ...input, address: 'A1' };
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

const addressMock = {
  insert: jest.fn(async input => {
    return { id: 'A1', ...input };
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

const { server }: any = constructTestServer({
  context: {
    createPurchaseOrder: createCreatePurchaseOrderDB(purchaseOrderMock),
    updatePurchaseOrderById: updatePurchaseOrderByIDDB(purchaseOrderMock),
    deletePurchaseOrderbyId: DeleteRecordByIDDB(purchaseOrderMock),
    getPurchaseOrderById: getByIDDB(purchaseOrderMock),
    getAllPurchaseOrders: getAllDataDB(purchaseOrderMock),
    getAllItemsByPurchaseOrder: getAllByItemDB(purchaseOrderMock),
    getItemById: getByIDDB(itemMock),
    createScheduleLine: createCreateScheduleLineDB(scheduleLinesMock),
    getAddressById: getByIDDB(addressMock),
    createItem: createCreateItemDB(itemMock),
    createSupplier: createCreateSupplierDB(supplierMock),
    getSupplierById: getByIDDB(supplierMock),
  },
});

describe('Tests', () => {
  //Queries
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

  //Mutations

  it('create a purchase order', async () => {
    const CREATE_PURCHASEORDER = gql`
      mutation createPO($purchaseOrder: PurchaseOrderInput) {
        createPurchaseOrder(purchaseOrder: $purchaseOrder) {
          purchaseOrderNo
          shipmentNo
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
              building_name
              street
              city
              state
              zip_code
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

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_PURCHASEORDER,
      variables: {
        purchaseOrder: {
          purchaseOrderNo: '001',
          shipmentNo: '123',
          supplier: {
            supplierNo: '001',
            supplierName: 'Juan Dela Cruz',
            address: {
              building_name: '002',
              street: 'Elmer',
              city: 'Celadon',
              state: 'Johto',
              zip_code: '123',
            },
            contactPerson: 'Basil Valdez',
            contactNumber: '1234567',
            tin: '12345',
          },
          postingDate: '03/03/20200',
          documentDate: '03/03/20200',
          vendorAddress: {
            building_name: '002',
            street: 'Elmer',
            city: 'Celadon',
            state: 'Johto',
            zip_code: '123',
          },
          items: [
            {
              itemNo: '001',
              description: 'Beef',
              productId: '0001',
              quantity: 10,
              uom: 'kilograms',
              unitPrice: 1000,
              discount: 0.05,
              totalAmount: 10000,
              deliveryAddress: {
                building_name: 'building name',
                street: 'street',
                city: 'city',
                state: 'state',
                zip_code: 'zip_code',
              },
              scheduleLine: [
                {
                  quantity: 10,
                  uom: 'kilograms',
                  deliveryDateAndTime: 'February 25,2020 4:30PM',
                  unitPrice: 1000,
                  totalAmount: 10000,
                },
              ],
              currency: 'PHP',
            },
          ],
        },
      },
    });

    expect(res.errors).toBeUndefined();
    expect(purchaseOrderMock.insert.mock.calls.length).toBe(1);
    expect(res.data).toMatchObject({
      createPurchaseOrder: {
        _id: '1',
        purchaseOrderNo: '001',
        shipmentNo: '123',
        supplier: {
          id: '1',
          supplierNo: '001',
          supplierName: 'Juan Dela Cruz',
          address: {
            building_name: '002',
            street: 'Elmer',
            city: 'Celadon',
            state: 'Johto',
            zip_code: '123',
          },
          contactPerson: 'Basil Valdez',
          contactNumber: '1234567',
          tin: '12345',
        },
        postingDate: '03/03/20200',
        documentDate: '03/03/20200',
        vendorAddress: {
          building_name: '002',
          street: 'Elmer',
          city: 'Celadon',
          state: 'Johto',
          zip_code: '123',
        },
        items: [
          {
            id: '1',
            itemNo: '001',
            description: 'Beef',
            productId: '0001',
            quantity: 10,
            uom: 'kilograms',
            unitPrice: 1000,
            discount: 0.05,
            totalAmount: 10000,
            deliveryAddress: {
              building_name: 'building name',
              street: 'street',
              city: 'city',
              state: 'state',
              zip_code: 'zip_code',
            },
            scheduleLine: [
              {
                quantity: 10,
                uom: 'kilograms',
                deliveryDateAndTime: 'February 25,2020 4:30PM',
                unitPrice: 1000,
                totalAmount: 10000,
              },
            ],
            currency: 'PHP',
          },
        ],
      },
    });
    expect(res).toMatchSnapshot();
  });

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
