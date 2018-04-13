module.exports = app => {
  app.config.coreMiddleware.unshift('report'); // 统计请求时间

  app.beforeStart(async () => {
    // 初始化工作，等初始化完成后应用才可以启动成功，并开始对外提供服务
    // 保证应用启动监听端口前数据已经准备好了

    // 调用 Service
    // Service 不是单例，是 请求级别 的对象，框架在每次请求中首次访问 ctx.service.xx 时延迟实例化，
    // 所以 Service 中可以通过 this.ctx 获取到当前请求的上下文
    // const ctx = app.createAnonymousContext();
  });

  app.once('egg-ready', server => {
    // egg messenger ready
  });

  app.once('server', server => {
    // websocket
  });

  app.on('error', (err, ctx) => {
    // report error
  });

  app.on('request', ctx => {
    // log receive request
  });

  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
  });

  // Agent
  app.messenger.on('agent-event', (data) => {
    console.log('App received Agent message: [agent-event] %o', data);
  });

  // Refresh cache
  app.messenger.on('refresh', (by) => {
    app.logger.info('start update by %s', by);
    // create an anonymous context to access service
    const ctx = app.createAnonymousContext();
    ctx.runInBackground(async () => {
      await ctx.service.source.update();
      app.lastUpdateBy = by;
    });
  });
};
