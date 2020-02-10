import { updatePurchaseOrderByIDDB } from './update-purchaseOrder-db';

const mockPurchaseOrder = [
	{
		_id: '1',
		externalID: '001',
		status: 'Pending',
		supplierStatus: [
			{
				_id: '1',
				status: 'Dispatched',
				dateCreated: 'February 14, 2020',
			},
		],
		supplier: {
			_id: '1',
			name: 'Supplier Name-1',
			address: {
				building_name: 'building 1',
				city: 'city 1',
				street: 'street 1',
				zip_code: '123',
			},
		},
		items: [
			{
				itemNo: '1',
				description: 'Corned Beef',
				quantity: '5',
				uom: 'kg',
				price: '2000',
				currency: 'PHP',
			},
		],
	},
	{
		_id: '2',
		externalID: '002',
		status: 'Shipped',
		supplierStatus: [
			{
				_id: '1',
				status: 'Dispatched',
				dateCreated: 'February 14, 2020',
			},
		],
		supplier: {
			_id: '1',
			name: 'Supplier Name-1',
			address: {
				building_name: 'building 1',
				city: 'city 1',
				street: 'street 1',
				zip_code: '123',
			},
		},
		items: [
			{
				itemNo: '1',
				description: 'Corned Beef',
				quantity: '5',
				uom: 'kg',
				price: '2000',
				currency: 'PHP',
			},
		],
	},
];

describe('Update Purchase ORder', () => {
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

			return mockPurchaseOrder.filter(filterMock);
		}),
	};
	const updatePurchaseOrder = updatePurchaseOrderByIDDB(mockDb);
	it('should be able to update a purchase order in the DB', async () => {
		const given = {
			externalID: '001',
			status: 'Pending',
			supplierStatus: [
				{
					_id: '1',
					status: 'Dispatched',
					dateCreated: 'February 14, 2020',
				},
			],
			supplier: {
				_id: '1',
				name: 'Supplier Name-1',
				address: {
					building_name: 'building 1',
					city: 'city 1',
					street: 'street 1',
					zip_code: '123',
				},
			},
			items: [
				{
					itemNo: '1',
					description: 'Corned Beef',
					quantity: '5',
					uom: 'kg',
					price: '2000',
					currency: 'PHP',
				},
			],
		};

		const newData = await updatePurchaseOrder(given);

		expect(mockDb.getById.mock.calls.length).toBe(1);
		expect(mockDb.updateById.mock.calls.length).toBe(1);
		expect(newData).toMatchObject(given);
	});
});
