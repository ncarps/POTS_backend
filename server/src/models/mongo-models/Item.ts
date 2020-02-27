import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
	return this.toString();
};

const ItemSchema = new Schema({
	itemNo: {
		type: String,
		required: true,
	},
	productId: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	quantity: {
		type: String,
		required: true,
	},
	uom: {
		type: String,
		required: true,
	},
	unitPrice: {
		type: String,
		required: true,
	},
	totalAmount: {
		type: String,
		required: true,
	},
	deliveryAddress: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	deliveryDate: {
		type: String,
		required: true,
	},
	supplierStatus: {
		type: [String],
		required: true,
	},
	currency: {
		type: String,
		required: true,
	},
});

export default mongoose.model('Item', ItemSchema);
