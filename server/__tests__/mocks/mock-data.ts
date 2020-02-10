export default {
	users: [
		{
			id: '1',
			name: 'User 1',
		},
		{
			id: '2',
			name: 'User 2',
		},
	],

	address: [
		{
			id: 'A1',
			building_name: 'building name',
			street: 'street',
			city: 'city',
			state: 'state',
			zip_code: 'zip_code',
		},
		{
			id: 'A2',
			building_name: 'building name 2',
			street: 'street 2',
			city: 'city 2',
			state: 'state 2',
			zip_code: 'zip_code 2',
		},
	],

	suppliers: [
		{
			_id: '1',
			name: 'Supplier Name-1',
			address: {
				building_name: 'building 1',
				city: 'city 1',
				street: 'street 1',
				zip_code: '123',
			},
		},
		{
			_id: '2',
			name: 'Supplier Name-2',
			address: {
				building_name: 'building 2',
				city: 'city 2',
				street: 'street 2',
				zip_code: '123',
			},
		},
	],

	supplierStatus: [
		{
			_id: '1',
			status: 'Dispatched',
			dateCreated: 'February 14, 2020',
		},
		{
			_id: '2',
			status: 'Delivered',
			dateCreated: 'February 14, 2020',
		},
	],

	items: [
		{
			_id: '1',
			itemNo: '1',
			description: 'Corned Beef',
			quantity: 5,
			uom: 'kg',
			price: 2000,
			currency: 'PHP',
		},
		{
			_id: '2',
			itemNo: '2',
			description: 'Burger',
			quantity: 6,
			uom: 'kg',
			price: 3000,
			currency: 'USD',
		},
	],
};
