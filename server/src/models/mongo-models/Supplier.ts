import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
	return this.toString();
};

const Supplierchema = new Schema({
	externalID: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	address: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

export default mongoose.model('Supplier', Supplierchema);
