import { IDBModel } from '../../commons/types';
import { ScheduleLine, SupplierStatus } from '../mongo-models';

const scheduleLineModel: IDBModel<any> = {
	insert: async scheduleLine => {
		const newScheduleLine = await new ScheduleLine({
			quantity: scheduleLine.quantity,
			uom: scheduleLine.uom,
			deliveryDate: scheduleLine.deliveryDate,
			supplierStatus: scheduleLine.supplierStatus,
		});

		return new Promise((resolve, reject) => {
			newScheduleLine.save((err, res) => {
				err ? reject(err) : resolve(res);
			});
		});
	},

	getById: async data => {
		const scheduleLine: any = await ScheduleLine.findOne({ _id: data }).exec();
		if (!scheduleLine._id) {
			throw new Error('No schedule line found');
		}
		return {
			id: scheduleLine._id.toString(),
			quantity: scheduleLine.quantity,
			uom: scheduleLine.uom,
			deliveryDate: scheduleLine.deliveryDate,
			supplierStatus: scheduleLine.supplierStatus,
		};
	},

	getAll: async () => {
		const scheduleLine: any = await ScheduleLine.find({}).exec();
		return scheduleLine.map(sl => ({
			id: sl._id.toString(),
			quantity: sl.quantity,
			uom: sl.uom,
			deliveryDate: sl.deliveryDate,
			supplierStatus: sl.supplierStatus,
		}));
	},

	getAllByItem: async data => {},

	getAllBySupplierStatus: async data => {
		const supplierStatus: any = await SupplierStatus.find({
			_id: { $in: data },
		}).exec();

		return supplierStatus.map(ss => ({
			id: ss._id.toString(),
			status: ss.status,
			dateCreated: ss.dateCreated,
			timeCreated: ss.timeCreated,
		}));
	},

	deleteById: async id => {
		return new Promise((resolve, reject) => {
			ScheduleLine.findByIdAndDelete(id).exec((err, res) => {
				err ? reject(err) : resolve(res);
			});
		});
	},

	updateById: async data => {
		let setFields = {
			...data,
		};
		for (let prop in setFields) {
			if (setFields[prop] == undefined) {
				delete setFields[prop];
			}
		}
		delete setFields.supplierStatus;
		const supplierStatus = data.supplierStatus;

		let scheduleLine;
		if (supplierStatus) {
			scheduleLine = await ScheduleLine.findByIdAndUpdate(
				{
					_id: data.id,
				},
				{ $set: { ...setFields }, $push: { supplierStatus: supplierStatus } },
				{
					new: true,
				}
			).exec();
		} else {
			scheduleLine = await ScheduleLine.findByIdAndUpdate(
				{
					_id: data.id,
				},
				setFields,
				{
					new: true,
				}
			).exec();
		}

		return {
			id: scheduleLine._id.toString(),
			quantity: scheduleLine.quantity,
			uom: scheduleLine.uom,
			deliveryDate: scheduleLine.deliveryDate,
			supplierStatus: scheduleLine.supplierStatus,
		};
	},
};

export { scheduleLineModel };
