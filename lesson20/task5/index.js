/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = String(id);
    this._name = String(name);
    this._sessionId = String(sessionId);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this.users.map((el) => el._name);
  }

  getUserIds() {
    return this.users.map((el) => el._id);
  }

  getUserNameById(id) {
    return this.users.find((el) => el._id === id)._name;
  }
}

// examples
const user1 = new User('1', 'Tom', 'session-id');
const user2 = new User('2', 'Bob', 'session-id');
const user3 = new User('3', 'Anna', 'session-id');
const users = new UserRepository([user1, user2, user3]);

// получить свойства можем
console.log(user1.id); // ===> '1'
console.log(user1.name); // ===> 'Tom'
console.log(user1.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

console.log(users.getUserNameById('2'));
