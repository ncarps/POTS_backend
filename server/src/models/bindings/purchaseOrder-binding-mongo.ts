import { IDBModel } from '../../commons/types';
import { PurchaseOrder, SupplierStatus, Supplier, Item } from '../mongo-models';

const purchaseOrderModel: IDBModel<any> = {
	insert: async purchaseOrder => {
		const newPO = await new PurchaseOrder({
			externalID: purchaseOrder.externalID,
			status: purchaseOrder.status,
			supplierStatus: purchaseOrder.supplierStatus.map(ss => ss.status),
			supplier: purchaseOrder.supplier.toString(),
			items: purchaseOrder.items.map(item => item.itemNo),
		});

		const newPurchaseOrder: any = await new Promise((resolve, reject) => {
			newPO.save((err, res) => {
				err ? reject(err) : resolve(res);
			});
		});

		const purchaseOrderItems: Array<any> = await Promise.all(
			purchaseOrder.items.map(async item => {
				const newItem = await new Item({
					itemNo: item.itemNo,
					description: item.description,
					quantity: item.quantity,
					uom: item.uom,
					price: item.price,
					currency: item.currency,
				});

				const newPOItem: any = await newItem.save();

				return {
					id: newPOItem._id.toString(),
					itemNo: newPOItem.itemNo,
					description: newPOItem.description,
					quantity: newPOItem.quantity,
					uom: newPOItem.uom,
					price: newPOItem.price,
					currency: newPOItem.currency,
				};
			})
		);

		const purchaseOrderSupplierStatus: Array<any> = await Promise.all(
			purchaseOrder.supplierStatus.map(async ss => {
				const newSS = await new SupplierStatus({
					status: ss.status,
					dateCreated: ss.dateCreated,
				});

				const newPOSupplierStatus: any = await newSS.save();

				return {
					id: newPOSupplierStatus._id.toString(),
					status: newPOSupplierStatus.status,
					dateCreated: newPOSupplierStatus.dateCreated,
				};
			})
		);

		return {
			id: newPurchaseOrder._id.toString(),
			externalID: purchaseOrder.externalID,
			status: purchaseOrder.status,
			supplier: purchaseOrder.supplier,
			supplierStatus: purchaseOrderSupplierStatus,
			items: purchaseOrderItems,
		};
	},

	getAll: async () => {
		const po: any = await PurchaseOrder.find({}).exec();

		return po.map(u => ({
			id: u._id.toString(),
			externalID: u.externalID,
			status: u.status,
			supplierStatus: u.supplierStatus.toString(),
			supplier: u.supplier.toString(),
			items: u.toString(),
		}));
	},

	getById: async id => {
		const u: any = await PurchaseOrder.findOne({ _id: id }).exec();

		return {
			id: u._id.toString(),
			externalID: u.externalID,
			status: u.status,
			supplierStatus: u.supplierStatus.toString(),
			supplier: u.supplier.toString(),
			items: u.items.toString(),
		};
	},

	deleteById: async id => {
		return new Promise((resolve, reject) => {
			PurchaseOrder.findByIdAndDelete(id).exec((err, res) => {
				err ? reject(err) : resolve(res);
			});
		});
	},
	updateById: async purchaseOrder => {
		return new Promise((resolve, reject) => {
			PurchaseOrder.findByIdAndUpdate(
				{ _id: purchaseOrder.id },
				{ $set: { ...purchaseOrder } },
				{ new: true }
			).exec((err, res) => {
				err ? reject(err) : resolve(res);
			});
		});
	},
};

export { purchaseOrderModel };
