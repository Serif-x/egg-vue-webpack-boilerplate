const { Controller } = require('egg');

class BaseController extends Controller {
  get user () {
    return this.ctx.session.user;
  }

  rest (data, msg = '', code = 1000) {
    const { ctx } = this;
    ctx.body = {
      code,
      data,
      msg
    };
    ctx.set('Content-type', 'application/json; charset=utf-8');
  }

  notFound (msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;
