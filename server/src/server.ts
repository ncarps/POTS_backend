require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';

import mongoose from 'mongoose';
import express from 'express';

import { resolvers, typeDefs } from './graphql';
import bodyParser from 'body-parser';
import serveIndex from 'serve-index';

import {
  userModel,
  addressModel,
  supplierModel,
  supplierStatusModel,
  itemModel,
  purchaseOrderModel,
  scheduleLineModel,
} from './models';

import * as controllers from './controllers';

//Database
mongoose.set('useFindAndModify', false);
const { mongoURI: db } = process.env;
const { PORT } = process.env;

mongoose
  .connect(db || '', {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const {
  getAllDataDB,
  getByIDDB,
  DeleteRecordByIDDB,
  getAllByItemDB,
  getAllBySupplierStatusDB,
  getAllByScheduleLineDB,
  //User controllers
  createCreateUserDB,
  updateUserByIDDB,
  //Supplier controllers
  createCreateSupplierDB,
  updateSupplierByIDDB,
  //SupplierStatus
  createCreateSupplierStatusDB,
  updateSupplierStatusByIDDB,
  //Item
  createCreateItemDB,
  updateItemByIDDB,
  updateSupplierStatusItemByIDDB,
  //Purchase Order
  createCreatePurchaseOrderDB,
  updatePurchaseOrderByIDDB,
  updateAdminStatusByIDDB,
  //Schedule Line
  createCreateScheduleLineDB,
  updateScheduleLineByIDDB,
} = controllers;

const context = async session => {
  return {
    //User
    createUser: createCreateUserDB(userModel),
    getAllUsers: getAllDataDB(userModel),
    getUserById: getByIDDB(userModel),
    updateUserById: updateUserByIDDB(userModel),
    deleteUserById: DeleteRecordByIDDB(userModel),
    //Adress
    getAddressById: getByIDDB(addressModel),
    getAllAddress: getAllDataDB(addressModel),
    //Supplier
    createSupplier: createCreateSupplierDB(supplierModel),
    getAllSuppliers: getAllDataDB(supplierModel),
    getSupplierById: getByIDDB(supplierModel),
    deleteSupplierById: DeleteRecordByIDDB(supplierModel),
    updateSupplierById: updateSupplierByIDDB(supplierModel),
    //SupplierStatus
    createSupplierStatus: createCreateSupplierStatusDB(supplierStatusModel),
    updateSupplierStatusById: updateSupplierStatusByIDDB(supplierStatusModel),
    deleteSupplierStatusById: DeleteRecordByIDDB(supplierStatusModel),
    getSupplierStatusById: getByIDDB(supplierStatusModel),
    getAllSupplierStatus: getAllDataDB(supplierStatusModel),
    //Item
    createItem: createCreateItemDB(itemModel),
    updateItemById: updateItemByIDDB(itemModel),
    updateSupplierStatusItemById: updateSupplierStatusItemByIDDB(itemModel),
    deleteItemById: DeleteRecordByIDDB(itemModel),
    getItemById: getByIDDB(itemModel),
    getAllItems: getAllDataDB(itemModel),
    getAllSupplierStatusByItem: getAllBySupplierStatusDB(itemModel),
    getAllScheduleLinesByItem: getAllByScheduleLineDB(itemModel),
    //Purchase Order
    createPurchaseOrder: createCreatePurchaseOrderDB(purchaseOrderModel),
    updatePurchaseOrderById: updatePurchaseOrderByIDDB(purchaseOrderModel),
    deletePurchaseOrderbyId: DeleteRecordByIDDB(purchaseOrderModel),
    getPurchaseOrderById: getByIDDB(purchaseOrderModel),
    getAllPurchaseOrders: getAllDataDB(purchaseOrderModel),
    getAllSupplierStatusByPurchaseOrder: getAllBySupplierStatusDB(
      purchaseOrderModel,
    ),
    updateAdminStatusById: updateAdminStatusByIDDB(purchaseOrderModel),
    getAllItemsByPurchaseOrder: getAllByItemDB(purchaseOrderModel),
    //Schedule Line
    createScheduleLine: createCreateScheduleLineDB(scheduleLineModel),
    updateScheduleLine: updateScheduleLineByIDDB(scheduleLineModel),
    deleteScheduleLineById: DeleteRecordByIDDB(scheduleLineModel),
    getScheduleLineById: getByIDDB(scheduleLineModel),
    getAllScheduleLines: getAllDataDB(scheduleLineModel),
    getAllSupplierStatusByScheduleLine: getAllBySupplierStatusDB(
      scheduleLineModel,
    ),
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(
  '/images',
  express.static('./public/images'),
  serveIndex('public/images', { icons: true }),
);
server.applyMiddleware({ app });
// The `listen` method launches a web server.
const _port = PORT || 4000;
app.listen(_port, () => {
  console.log(`🚀  Server ready at http:  //localhost:${_port}/`);
});
