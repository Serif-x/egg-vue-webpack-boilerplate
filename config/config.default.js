const path = require('path');
const fs = require('fs');

module.exports = app => {
  const exports = {};

  /* region Core */
  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      // 告诉 vue-server-renderer 去 app/view 查找异步 chunk 文件
      basedir: path.join(app.baseDir, 'app/web/page')
    }
  };

  exports.middleware = [
    'access',
    'gzip'
  ];

  exports.gzip = {
    threshold: 1024 // 小于 1k 的响应体不压缩
  };

  exports.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb'
  };
  /* endregion Core */

  /* region Security */
  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.keys = '123456';

  exports.session = {
    key: 'SESS_SERIFX', // 承载 Session 的 Cookie 键值对名字
    maxAge: 86400000, // Session 的最大有效时间
    renew: true
  };

  exports.security = {
    domainWhiteList: []
  };

  exports.cors = {
    enable: true,
    credentials: false,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  /* endregion Security */

  /* region Web */
  exports.view = {
    cache: false
  };

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };
  /* endregion Web */

  /* region Error */
  exports.notfound = {
    pageUrl: path.join(app.baseDir, '404.html'),
  };

  exports.onerror = {
    errorPageUrl: path.join(app.baseDir, '/500.html'),

    all(err, ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      ctx.body = 'oops, something unexpected happened';
      ctx.status = 500;
      console.error(err);
    },
    html(err, ctx) {
      // html handler
      ctx.body = '<h3>oops, something unexpected happened</h3>';
      ctx.status = 500;
    },
    json(err, ctx) {
      // json handler
      ctx.body = {
        msg: 'error'
      };
      ctx.status = 500;
    },
    // jsonp (err, ctx) {
    //   // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，
    //   // 并包装成 jsonp 的响应格式
    // }
  };
  /* endregion Error */

  return exports;
};