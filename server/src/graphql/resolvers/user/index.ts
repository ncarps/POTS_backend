const userResolvers = {
  Query: {
    user: async (parent, { id }, { getUserById }, info) => {
      return getUserById(id);
    },

    allUsers: async (parent, args, { getAllUser }, info) => {
      return getAllUser();
    }
  },
  Mutation: {
    createUser: async (_, { name }, { createUser }) => {
      return createUser({ name });
    },

    updateUser: async (parent, { id, name }, { updateUserById }, info) => {
      return updateUserById(id, name);
    },

    deleteUser: async (parent, { id }, { deleteUserById }, info) => {
      return deleteUserById(id);
    }
  }
};

export default userResolvers;
