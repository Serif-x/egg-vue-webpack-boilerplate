const reportTime = (ctx, time) => {
  ctx.logger.info(`Request process time ${time}ms`);
};

module.exports = (options) => {
  return async function (ctx, next) {
    const startTime = Date.now();
    await next();

    // 上报请求时间
    reportTime(ctx, Date.now() - startTime);
  };
};
