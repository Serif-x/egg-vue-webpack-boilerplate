module.exports = app => {
  app.router.get('/', app.controller.home.index);
  app.router.get('/client', app.controller.home.client);
  app.router.get('/pager', app.controller.home.pager);
};
