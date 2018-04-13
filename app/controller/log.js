const Controller = require('../core/base-controller');

module.exports = class LogController extends Controller {
  async index () {
    const { ctx } = this;
    const query = ctx.query;
    try {
      ctx.validate({ name: 'string' }, query);
    } catch (err) {
      console.warn(err);
      this.rest(err.errors, err.message, err.code);
      return;
    }
    this.rest(query);
  }
};
