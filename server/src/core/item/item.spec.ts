import { createMakeItem } from './item';
const makeItem = createMakeItem();

describe('Item', () => {
	it('must have an itemNo', () => {
		const item = {
			itemNo: '',
			description: 'description',
			quantity: 'quantity',
			uom: 'uom',
			price: 'price',
			currency: 'currency',
		};
		expect(() => makeItem(item)).toThrow('Item Number is required.');
	});

	it('must have a description', () => {
		const item = {
			itemNo: 'itemNo',
			description: '',
			quantity: 'quantity',
			uom: 'uom',
			price: 'price',
			currency: 'currency',
		};
		expect(() => makeItem(item)).toThrow('Description is required.');
	});

	it('must have a quantity', () => {
		const item = {
			itemNo: 'itemNo',
			description: 'description',
			quantity: '',
			uom: 'uom',
			price: 'price',
			currency: 'currency',
		};
		expect(() => makeItem(item)).toThrow('Quantity is required.');
	});

	it('must have a unit of measure', () => {
		const item = {
			itemNo: 'itemNo',
			description: 'description',
			quantity: 'quantity',
			uom: '',
			price: 'price',
			currency: 'currency',
		};
		expect(() => makeItem(item)).toThrow('Unit of Measure is required.');
	});

	it('must have a price', () => {
		const item = {
			itemNo: 'itemNo',
			description: 'description',
			quantity: 'quantity',
			uom: 'uom',
			price: '',
			currency: 'currency',
		};
		expect(() => makeItem(item)).toThrow('Price is required.');
	});

	it('must have a currency', () => {
		const item = {
			itemNo: 'itemNo',
			description: 'description',
			quantity: 'quantity',
			uom: 'uom',
			price: 'price',
			currency: '',
		};
		expect(() => makeItem(item)).toThrow('Currency is required.');
	});

	it('will return the item', () => {
		//givens
		const itemInput = {
			itemNo: 'itemNo',
			description: 'description',
			quantity: 'quantity',
			uom: 'uom',
			price: 'price',
			currency: 'currency',
		};
		const a = makeItem(itemInput);
		expect(a).toMatchObject(itemInput);
	});
});
