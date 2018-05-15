const { Subscription } = require('egg');

module.exports = class ForceRefresh extends Subscription {
  static get schedule () {
    return {
      interval: '10m',
      // cron: '0 0 */3 * * *', // 每三小时准点执行一次
      type: 'all', // run in all workers
      immediate: false,
      disable: true
    };
  }

  async subscribe () {
    const { ctx } = this;
    await ctx.service.source.update();
    ctx.app.lastUpdateBy = 'force';
  }
};
