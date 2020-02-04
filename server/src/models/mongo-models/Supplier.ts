import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
	return this.toString();
};

const Supplierchema = new Schema({
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
