const Controller = require('../core/base-controller');

module.exports = class HomeController extends Controller {

  async login () {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.find({ username, password });
    if (!user) ctx.throw(403);

    ctx.session = { user };

    // 刷新用户的 CSRF token
    ctx.rotateCsrfSecret();
  }
};
