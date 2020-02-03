import { gql } from 'apollo-server';

const typeDefs = gql`
	type User {
		id: ID!
		name: String
	}

	" document chu chu"
	type Query {
		user(id: String): User
		allUsers: [User]
	}

	type Mutation {
		createUser(name: String): User
		updateUser(id: String, name: String): User
		deleteUser(id: String): User
	}
`;

export default typeDefs;
