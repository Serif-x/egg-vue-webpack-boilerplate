const { Subscription } = require('egg');

class UpdateCache extends Subscription {
  static get schedule () {
    return {
      // interval: '1m',
      // 每三小时准点执行一次
      cron: '0 0 */3 * * *',
      type: 'all', // 指定所有的 worker 都需要执行
      immediate: false,
      disable: true
    };
  }

  async subscribe () {
    // do something...
    const { ctx } = this;
    ctx.app.cache = null;
    console.log('Cache updated!');
  }
}

module.exports = UpdateCache;
