import { IDBModel } from '../commons/types';
import { updateUCSupplier } from '../core/';

const updateSupplierByIDDB = (db: IDBModel<any>) => async data => {
	const a = await db.getById(data.id);
	const updateSuppier = updateUCSupplier();
	const newSupplier = updateSuppier(data, a);
	return db.updateById(newSupplier);
};

export { updateSupplierByIDDB };
