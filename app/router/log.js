module.exports = app => {
  app.router.get('/log', app.controller.log.index);
};
