const { Service } = require('egg');
let memoryCache = {};

module.exports = class SourceService extends Service {
  get (key) {
    return memoryCache[key];
  }

  async checkUpdate () {
    // check if remote data source has changed
    const updated = await check();
    this.ctx.logger.info('Check update response %s', updated);
    return updated;
  }

  async update () {
    // update memory cache from remote
    memoryCache = await fetch();
    this.ctx.logger.info('Update cache from remote: %j', memoryCache);
  }
};

function fetch () {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {};
      return resolve(data);
    }, 1e3);
  });
}

function check () {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(false);
    }, 1e3);
  });
}
