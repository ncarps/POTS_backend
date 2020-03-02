import { createMakeScheduleLine } from './scheduleLine';

const makeScheduleLine = createMakeScheduleLine();

describe('Schedule Line', () => {
	it('must have quantity', () => {
		const scheduleLine = {
			quantity: '',
			uom: 'uom',
			deliveryDate: 'deliveryDate',
			supplerStatus: 'supplerStatus',
		};
		expect(() => makeScheduleLine(scheduleLine)).toThrow('Quantity is required.');
	});

	it('must have uom', () => {
		const scheduleLine = {
			quantity: 'quantity',
			uom: '',
			deliveryDate: 'deliveryDate',
			supplerStatus: 'supplerStatus',
		};
		expect(() => makeScheduleLine(scheduleLine)).toThrow('UoM is required.');
	});

	it('must have deliveryDate', () => {
		const scheduleLine = {
			quantity: 'quantity',
			uom: 'uom',
			deliveryDate: '',
			supplerStatus: 'supplerStatus',
		};
		expect(() => makeScheduleLine(scheduleLine)).toThrow('Delivery Date is required.');
	});

	it('will return the item', () => {
		//givens
		const scheduleLineInput = {
			quantity: 'quantity',
			uom: 'uom',
			deliveryDate: '',
			supplerStatus: 'supplerStatus',
		};
		const a = makeScheduleLine(scheduleLineInput);
		expect(a).toMatchObject(scheduleLineInput);
	});
});
