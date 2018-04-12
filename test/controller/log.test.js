const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/controller/log.test.js', () => {
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
