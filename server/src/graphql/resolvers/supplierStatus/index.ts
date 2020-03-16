import { updateSupplierStatusItemByIDDB } from '../../../controllers/update-supplierStatusItem-db';

const supplierSupplierResolvers = {
  Query: {
    supplierStatus: async (parent, { id }, { getSupplierStatusById }, info) => {
      return getSupplierStatusById(id);
    },

    allSupplierStatus: async (parent, args, { getAllSupplierStatus }, info) => {
      return getAllSupplierStatus();
    },
  },
  Mutation: {
    createSupplierStatus: async (
      _,
      { supplierStatus },
      { createSupplierStatus },
    ) => {
      return createSupplierStatus(supplierStatus);
    },

    updateSupplierStatus: async (
      parent,
      { supplierStatus },
      { updateSupplierStatusById },
      info,
    ) => {
      return updateSupplierStatusById(supplierStatus);
    },
    updateSupplierStatusItem: async (parent, { item }, context, info) => {
      const { updateSupplierStatusItem } = context;

      const i = {
        id: item.id,
        itemNo: item.itemNo,
        productId: item.productId,
        description: item.description,
        quantity: item.quantity,
        uom: item.uom,
        unitPrice: item.unitPrice,
        totalAmount: item.totalAmount,
        discount: item.discount,
        deliveryAddress: item.deliveryAddress,
        supplierStatusItem: item.supplierStatusItem,
        scheduleLine: item.scheduleLine,
        currency: item.currency,
        dateUpdated: item.dateUpdated,
        timeUpdated: item.timeUpdated,
      };
      return await updateSupplierStatusItem(i);
    },

    deleteSupplierStatus: async (
      parent,
      { id },
      { deleteSupplierStatusById },
      info,
    ) => {
      return deleteSupplierStatusById(id);
    },
  },
};

export default supplierSupplierResolvers;
