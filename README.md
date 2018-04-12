# egg-vue-webpack-boilerplate

基于 Egg + Vue + Webpack4 多页面服务端渲染项目开发模板


## 版本

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+
- Webpack 版本: ^4.x.x, 对应 `easywebpack-vue` 版本为 ^4.x.x
- Vue 版本: ^2.5.0

## 说明 

- Egg + TypeScript 已初步支持， 包括 Node 端 typescript 编写 和 前端 TypeScript编写, 具体请见(https://github.com/hubcarl/egg-vue-typescript-boilerplate)项目
- 项目开发之前, 请阅读
    [Egg + Vue 服务端渲染开发指南](https://zhuanlan.zhihu.com/p/30445536) 
    [Egg + Vue 服务端渲染工程化实现](https://zhuanlan.zhihu.com/p/29838551)
- 如果你需要了解 Egg+Vue+Webpack 项目更多信息，查看原始分支
- 基于原始骨架，进行了部分自定义配置和环境搭建

![egg-vue-webpack-boilerplate](https://github.com/hubcarl/egg-vue-webpack-boilerplate)

## 文档

- http://hubcarl.github.io/easywebpack/vue/rule
- https://zhuanlan.zhihu.com/easywebpack


## 1.特性

- 支持服务端渲染, 前端渲染, 静态页面渲染三种方式,

- 支持单页面, 多页面服务端渲染, 前端渲染模式

- 支持 server 和 client 端代码修改, webpack 时时编译和热更新, `npm start` 一键启动应用

- 基于 vue + axios 多页面服务端渲染, 客户端渲染同构实现

- 基于 vue + vuex + vue-router + axios 单页面服务器客户端同构实现

- 基于 easywebpack 基础配置, 使用 es6 class 继承方式编写webpack配置 和 cli 构建

- 支持开发环境, 测试环境，正式环境 webpack 编译

- 支持 js/css/image 资源依赖, 内置支持CDN特性

- 支持 css/sass/less 样式编写

- 支持根据 .vue 文件自动创建 webpack entry 入口文件

- egg-webpack ^3.2.4 版本开始支持多进程编译

- easywebpack ^3.5.0 版本开始支持 webpack dll 自动化构建, 与多进程编译结合，构建速度减少 2/3

- 支持Vue组件异步加载, 具体实例请看[app/web/page/dynamic](app/web/page/dynamic)

- Node 8 版本的async和await特性, Controller 采用 class 方式编写

- 支持vue 2.3 官方VueSSRPlugin实现方案,代码分支[feature/VueSSRPlugin](https://github.com/hubcarl/egg-vue-webpack-boilerplate/tree/feature/VueSSRPlugin)

 

## 2.依赖

- [easywebpack](https://github.com/hubcarl/easywebpack) 
- [easywebpack-vue](https://github.com/hubcarl/easywebpack) 
- [egg-view-vue-ssr](https://github.com/hubcarl/egg-view-vue-ssr)
- [egg-webpack](https://github.com/hubcarl/egg-webpack) 
- [egg-webpack-vue](https://github.com/hubcarl/egg-webpack-vue)


## 3. 使用

#### 3.1 安装cli(非必需)

```bash
npm install easywebpack-cli -g
```

^3.5.0 开始， `easywebpack-cli` 已内置 `devDependencies` 中, 无需安装。如果你需要在命令行使用 `easy` 命令, 可以单独全局安装。

#### 3.2 安装依赖

```bash
npm install
npm start
```


#### 3.3 本地开发启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

![npm start启动](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/master/docs/images/webpack-build.png)


#### 3.4 发布模式启动应用

- 首先在本地或者ci构建好jsbundle文件

```bash
npm run build 
```

- 然后,启动应用

```bash
npm start 
```

## 5. 项目结构和基本规范

    ├── app
    │   ├── controller
    │   │   ├── test
    │   │   │   └── test.js
    │   ├── extend
    │   ├── lib
    │   ├── middleware
    │   ├── mocks
    │   ├── proxy
    │   ├── router.js
    │   ├── view
    │   │   ├── about                         // 服务器编译的jsbundle文件
    │   │   │   └── about.js
    │   │   ├── home
    │   │   │     └── home.js                 // 服务器编译的jsbundle文件
    │   │   └── layout                        // 用于根据指定的layout生成对应的html页面, 用于服务器渲染失败时,采用客户端渲染
    │   │       └── layout.html
    │   └── web                               // 前端工程目录
    │       ├── asset                         // 存放公共js,css资源
    │       ├── framework                     // 前端公共库和第三方库
    │       │   ├── fastclick
    │       │   │   └── fastclick.js
    │       │   ├── sdk
    │       │   │   ├── sdk.js
    │       │   ├── storage
    │       │   │   └── storage.js
    │       │   └── vue                           // 与vue相关的公开代码
    │       │       ├── app.js                    // 前后端调用入口, 默认引入componet/directive/filter
    │       │       ├── component.js              // 组件入口, 可以增加component目录,类似下面的directive
    │       │       ├── directive                 // directive 目录,存放各种directive组件
    │       │       ├── directive.js              // directive引用入口
    │       │       └── filter.js                 // filter引用入口
    │       ├── page                              // 前端页面和webpack构建目录, 也就是webpack打包配置entryDir
    │       │   ├── home                          // 每个页面遵循目录名, js文件名, scss文件名, vue文件名相同
    │       │   │   ├── home.scss
    │       │   │   ├── home.vue
    │       │   │   ├── images                    // 页面自有图片,公共图片和css放到asset下面
    │       │   │   │   └── icon_more.png
    │       │   │   └── w-week                    // 页面自有组件,公共组件放到widget下面
    │       │   │       ├── w-week.scss
    │       │   │       └── w-week.vue
    │       │   └── test                          // 每个页面遵循目录名, js文件名, scss文件名, vue文件名相同
    │       │       └── test.vue
    │       ├── store                             // 引入vuex 的基本规范, 可以分模块
    │       │   ├── app
    │       │   │   ├── actions.js
    │       │   │   ├── getters.js
    │       │   │   ├── index.js
    │       │   │   ├── mutation-type.js
    │       │   │   └── mutations.js
    │       │   └── store.js
    │       └── component                         // 公共业务组件, 比如loading, toast等, 遵循目录名, js文件名, scss文件名, vue文件名相同
    │           ├── loading
    │           │   ├── loading.scss
    │           │   └── loading.vue
    │           ├── test
    │           │   ├── test.vue
    │           │   └── test.scss
    │           └── toast
    │               ├── toast.scss
    │               └── toast.vue
    ├── build                                   //  webpack 自定义配置入口, 会与默认配置进行合并(看似这么多,其实这里只是占个位说明一下)
    │   ├── base
    │   │   └── index.js                        // 公共配置        
    │   ├──  client                             // 客户端webpack编译配置
    │   │   ├── dev.js
    │   │   ├── prod.js
    │   │   └── index.js
    │   ├──  server                             // 服务端webpack编译配置
    │   │    ├── dev.js
    │   │    ├── prod.js
    │   │    └── index.js
    │   └── index.js
    ├── config
    │   ├── config.default.js
    │   ├── config.local.js
    │   ├── config.prod.js
    │   ├── config.test.js
    │   └── plugin.js
    ├── doc
    ├── index.js
    ├── public                                 // webpack编译目录结构, render文件查找目录
    │   ├── manifest.json                      // 资源依赖表
    │   ├── static
    │   │   ├── css
    │   │   │   ├── home
    │   │   │   │   ├── home.07012d33.css
    │   │   │   └── test
    │   │   │       ├── test.4bbb32ce.css
    │   │   ├── img
    │   │   │   ├── change_top.4735c57.png
    │   │   │   └── intro.0e66266.png
    │   ├── test
    │   │   └── test.js
    │   └── vendor.js                         // 生成的公共打包库



## License

[MIT](LICENSE)
