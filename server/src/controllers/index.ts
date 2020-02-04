import { getAllDataDB, getByIDDB } from './retrieve-data-db';
import { DeleteRecordByIDDB } from './delete-data-db';

//User
import { createCreateUserDB } from './create-user-db';
import { updateUserByIDDB } from './update-user-db';

//Supplier
import { createCreateSupplierDB } from './create-supplier-db';
import { updateSupplierByIDDB } from './update-supplier-db';

export {
	getAllDataDB,
	getByIDDB,
	DeleteRecordByIDDB,
	//User exports
	createCreateUserDB,
	updateUserByIDDB,
	//Supplier exports
	createCreateSupplierDB,
	updateSupplierByIDDB,
};
