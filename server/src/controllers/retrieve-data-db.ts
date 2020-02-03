import { IDBModel } from '../commons/types';

const getAllDataDB = (db: IDBModel<any>) => async () => {
	return db.getAll();
};
const getByIDDB = (db: IDBModel<any>) => async id => {
	return db.getById(id);
};

// const getByDeliveryIdDB = (db: IDBModel<any>) => async id => {
//   return db.getByDeliverId(id);
// };

// const getAllByDriverDB = (db: IDBModel<any>) => async id => {
//   return db.getAllByDriver(id);
// };

export { getAllDataDB, getByIDDB };
