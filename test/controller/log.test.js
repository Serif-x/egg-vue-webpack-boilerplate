const { app, assert, mock } = require('egg-mock/bootstrap');

describe('controller/log', () => {
  it('Should log params name', async () => {
    await app.httpRequest()
      .get('/log?name=serifx')
      .expect({
        code: 1000,
        data: {
          name: 'serifx'
        },
        msg: ''
      });
  });
});
