import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    password: String!
  }

  " document chu chu"
  type Query {
    """
    insert something something
    """
    tokenToUser(user: String!): User!
    user(id: String): User
    allUsers: [User]
  }

  type Mutation {
    login(user: String!, pass: String!): String!
    logout(token: String): User
    createUser(name: String): User
    updateUser(id: String, name: String): User
    deleteUser(id: String): User
  }
  input createUserInput {
    name: String!
    passsword: String!
  }
`;

export default typeDefs;
