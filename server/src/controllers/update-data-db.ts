import { IDBModel } from '../commons/types';
import { updateUCUser } from '../core/_usecases';

const UpdateByIDDB = (db: IDBModel<any>) => async data => {
	return db.updateById(data);
};

export { UpdateByIDDB };
