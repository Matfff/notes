--实际开发中一般不需要自己配置 webpack ...  
--会使用命令行工具（CLI)一键生成带有 webpack 的项目  


webpack是前端项目工程化的具体解决方案  
主要功能：提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端js的兼容性、性能优化等功能。  

# 安装 webpack
npm install webpack@5.42.1 webpack-cli@4.7.2 -D
1. 在项目根目录中创建 webpack.config.js 的 webpack 配置文件，并初始化
2. 在 package.json 的 scripts 节点下，新增 dev 脚本
    scripts 节点下的脚本，可以通过 npm run 执行
3. 终端运行 npm run dev 命令，启动 webpack 进行项目打包构建

# webpack 中的默认约定
在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：
1. 默认的打包入口文件为 src -> idnex.js
2. 默认的输出文件路径为 dist -> main.js

可以在 webpack.config.js 中修改打包的默认约定
通过 entry 节点指定打包的入口。通过 output 节点指定打包出口

# 常用的webpack插件：
1. webpack-dev-server
    类似与nodemon工具，每当修改了源代码，webpack会自动进行项目的打包和构建
2. html-webpack-plugin
    webpack中的一个html插件（类似于一个模板引擎插件）
    可以通过此插件自定制index.html页面内容


# loader:  
npm i style-loader@3.0.0 css-loader@5.2.6 -D
npm i less-loader@10.0.1 less@4.1.1 -D
在实际开发过程中，webpack默认只能打包处理以.js后缀名结尾的模块，其他非.js后缀名结尾的模块，webpack默认处理不了，需要调用 loader 加载器才可以正常打包，否则会报错，比如：
1. css-loader 可以打包处理.css相关的文件
2. less-loader 可以打包处理.less相关的文件
3. babel-loader 可以打包处理 webpack 无法处理的高级JS语法
当 webpack 发现某个文件处理不了的时候， 会查找 webpack.config.js 这个配置文件，看 module.rules 数组中，是否配置了对应的 loader加载器。
处理好的结果会合并到 /dist/bundle.js 中，生成打包好的文件


# 配置 url-loader
打包处理样式表中与url路径相关的文件: npm i url-loader@4.1.1 file-loader@6.2.0 -D
{ test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=images' }
其中 ? 之后是 loader 的参数项：
    limit 用来指定图片的大小，单位是字节（byte）
    只有 <= limit 大小的图片，才会被转为 base64 格式的图片
    在配置 url-loader 时，多个参数使用 & 分割，outputPath=images 表示打包的图片文件放在 dist/images 目录下


# 配置 babel-loader
npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
必须使用 exclude 指定排除项：因为 node_modules 目录下的第三方包不需要被打包

在根目录下。创建名为 babel.config.js 的配置文件，定义 Babel 的配置项
官方文档：https://babeljs.io/docs/en/

# 配置 webpack 的打包发布
在 package.json 文件的 scripts 节点下， 新增  "build": "webpack --mode production" ， 项目发布时，运行 build 命令
--model 是一个参数项，用来指定 webpack 的运行模式。
production 代表生成模式，会对打包生成的文件进行代码压缩和性能优化
注意： 通过 --model 指定的参数项，会覆盖 webpack.config.js 中的 model 选项。


# 每次打包发布自动清理dist目录下的旧文件
clean-webpack-plugin 插件   npm i clean-webpack-plugin -D



# Source Map
一个信息文件，里面存储着位置信息。
也就是说，Source Map 文件中存储着压缩混淆后的代码所对应的转换前的位置信息。
出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，方便后期调试。
    开发环境下， 在 webpack.config.js 中添加：  devtool: 'eval-source-map'
    生产环境下， 为了安全性考虑，建议关闭 Source Map ，或者：
        如果只想定位报错的具体行数，不暴露源码:
            devtool: 'nosources-source-map'
        如果想定位报错的具体行数，并且展示具体的源码:
            devtool: 'source-map'
