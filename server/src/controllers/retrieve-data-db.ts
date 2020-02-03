import { IDBModel } from '../commons/types';

const getAllDataDB = (db: IDBModel<any>) => async () => {
	return db.getAll();
};
const getByIDDB = (db: IDBModel<any>) => async id => {
	return db.getById(id);
};

export { getAllDataDB, getByIDDB };
