import { createSchema, createModel } from 'gsheeez';

const UserSchema = new createSchema({
  range: 'A:E',
  header: ['id', 'userId', 'userName', 'password', 'userLevel'],
});

export default createModel(UserSchema);
