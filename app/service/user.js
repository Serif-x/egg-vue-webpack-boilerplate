const { Service } = require('egg');

module.exports = class UserService extends Service {
  async find ({ username, password } = {}) {
    // ...
    return { username };
  }
};
