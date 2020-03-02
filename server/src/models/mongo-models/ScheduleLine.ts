import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
	return this.toString();
};

const ScheduleLineSchema = new Schema({
	quantity: {
		type: String,
		required: true,
	},
	uom: {
		type: String,
		required: true,
	},
	deliveryDate: {
		type: String,
		required: true,
	},
	supplierStatus: {
		type: [String],
	},
});

export default mongoose.model('ScheduleLine', ScheduleLineSchema);
