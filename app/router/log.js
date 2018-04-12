module.exports = app => {
  app.get('/log', app.controller.log.index);
};
