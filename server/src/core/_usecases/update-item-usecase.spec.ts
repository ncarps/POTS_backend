import { updateUCItem } from './update-item-usecase';
const updateItem = updateUCItem();

describe('UseCase: Update a Item ', () => {
	it('should be able to update an item', () => {
		const itemInput = {
			itemNo: '1',
			description: 'Corned Beef',
			quantity: '5',
			uom: 'kg',
			price: '2000',
			currency: 'PHP',
		};

		const oldItemInput = {
			itemNo: '2',
			description: 'Corned Beefs',
			quantity: '50',
			uom: 'mg',
			price: '20001',
			currency: 'USD',
		};
		const newItem = updateItem(itemInput, oldItemInput);
		expect(newItem).toMatchObject(itemInput);
	});
});
