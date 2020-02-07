import { createUCCreateItem } from './create-item-usecase';

const addItem = createUCCreateItem();

describe('Item CRUD', () => {
	it('should be able to create an item', () => {
		const itemInput = {
			itemNo: '1',
			description: 'Corned Beef',
			quantity: '5',
			uom: 'kg',
			price: '2000',
			currency: 'PHP',
		};
		const newItem = addItem(itemInput);
		expect(newItem).toMatchObject(itemInput);
	});
});
