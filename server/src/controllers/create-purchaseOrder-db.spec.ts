import { createCreatePurchaseOrderDB } from './create-purchaseOrder-db';

describe('Create Purchase Order', () => {
	const mockDb: any = {
		insert: jest.fn(async input => {
			return { _id: '1', ...input };
		}),
	};
	const createPurchaseOrder = createCreatePurchaseOrderDB(mockDb);

	it('should be able to save a delivery item in the DB', async () => {
		const given = {
			externalID: '001',
			status: 'Pending',
			supplierStatus: {
				_id: '1',
				status: 'Dispatched',
				dateCreated: 'February 14, 2020',
			},
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
		const newPurchaseOrder = await createPurchaseOrder(given);
		expect(mockDb.insert.mock.calls.length).toBe(1);
		expect(newPurchaseOrder).toMatchObject({ _id: '1', ...given });
	});
});
