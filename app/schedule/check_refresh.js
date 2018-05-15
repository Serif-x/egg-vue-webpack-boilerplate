const { Subscription } = require('egg');

module.exports = class ForceRefresh extends Subscription {
  static get schedule () {
    return {
      interval: '10s',
      type: 'worker', // run in on worker
      immediate: false,
      disable: true
    };
  }

  async subscribe () {
    const { ctx } = this;
    const hasUpdate = await ctx.service.source.checkUpdate();
    if (!hasUpdate) return;

    // notify all workers to update memory cache from `file`
    ctx.app.messenger.sendToApp('refresh_cache', 'pull');
  }
};
