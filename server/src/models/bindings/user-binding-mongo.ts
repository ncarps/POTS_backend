import { IDBModel } from '../../commons/types';
import { User } from '../mongo-models';

const userModel: IDBModel<any> = {
	insert: async addUser => {
		const { name } = addUser;
		const newUser = await new User({ name });
		return new Promise((resolve, reject) => {
			newUser.save((err, res) => {
				err ? reject(err) : resolve(res);
			});
		});
	},
	getById: async id => {
		const user: any = await User.findOne({ _id: id }).exec();
		if (!user._id) {
			throw new Error('No user found');
		}
		return {
			id: user.id,
			name: user.name,
		};
	},
	getAll: async () => {
		const users: any = await User.find({}).exec();

		return users.map(u => ({
			id: u._id.toString(),
			name: u.name,
		}));
	},

	updateById: async data => {
		const user: any = await User.findByIdAndUpdate(
			{
				id: data._id,
				name: data.name,
			},
			{
				new: true,
			}
		).exec();
		return {
			id: user._id,
			name: user.name,
		};
	},
	deleteById: async id => {
		return new Promise((resolve, reject) => {
			User.findByIdAndDelete(id).exec((err, res) => {
				err ? reject(err) : resolve(res);
			});
		});
	},
	// getAllByDriver: async id => {},
	// getByDeliverId: async id => {},
	// submitDelivery: async id => {}
};

export { userModel };
