import { IDBModel } from '../commons/types';
import { updateUCAdminStatus } from '../core/_usecases';

const updateAdminStatusByIDDB = (db: IDBModel<any>) => async data => {
  const a = await db.getById(data.id);
  const updateAdminStatus = updateUCAdminStatus();
  const newPurchaseOrder = updateAdminStatus(data, a);
  return db.updateById({ ...newPurchaseOrder, id: data.id });
};

export { updateAdminStatusByIDDB };
