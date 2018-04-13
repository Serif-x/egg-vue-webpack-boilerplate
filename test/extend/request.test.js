const { app, assert, mock } = require('egg-mock/bootstrap');

describe('extend/request', () => {
  it('Should be chrome', async () => {
    const ctx = app.mockContext({
      headers: {
        'User-Agent': 'Chrome/56.0.2924.51'
      }
    });
    assert(ctx.request.isChrome === true);
  });

  it('Should not be chrome', async () => {
    const ctx = app.mockContext({
      headers: {
        'User-Agent': 'Firefox/1'
      }
    });
    assert(ctx.request.isChrome === false);
  });
});
