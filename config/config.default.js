const path = require('path');
const fs = require('fs');

module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      // 告诉 vue-server-renderer 去 app/view 查找异步 chunk 文件
      basedir: path.join(app.baseDir, 'app/web/page')
    }
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.session = {
    key: 'SESS_SERIFX', // 承载 Session 的 Cookie 键值对名字
    maxAge: 86400000, // Session 的最大有效时间
  };

  exports.keys = '123456';

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

  exports.security = {
    domainWhiteList: []
  };

  return exports;
};
