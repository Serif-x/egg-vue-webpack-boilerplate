const { Service } = require('egg');

class HomeService extends Service {
  async init () {
    const { ctx } = this;
    console.log('Service init.');
    return true;
  }
}

module.exports = HomeService;
