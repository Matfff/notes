const path = require('path')
const HtmlPlugin = require('html-webpack-plugin') // html-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定原文件存放路径
    filename: './index.html', // 指定生成的文件的存放路径
})

module.exports = {
    // mode 用来指定构建模式，可选值有 development 和 production
    // 分别为开发模式和生产模式， production 会压缩代码，但是打包时间长
    mode: 'development',
    devtool: 'nosources-source-map', // Source Map

    entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
    output: {
        path: path.join(__dirname, '/dist'), // 输出文件的存放路径
        filename: 'js/bundle.js' // 输出的文件名称
    },
    // 插件的数组， 在 Webpack 运行时，会加载并调用这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()], // 通过 plugins 节点，使 htmlPlugin 插件生效

    // devServer 节点
    devServer: {
        open: true, // 初次打包完成后，自动打开浏览器
        host: '127.0.0.1', // 实时打包所使用的主机地址
        port: 80, // 实时打包所使用的端口号
    },

    // 所有第三方文件模块的匹配规则
    module: {
        // loader 规则
        rules: [ // 文件后缀名的匹配规则
            // test 表示匹配的文件类型， use 表示对应要调用的loader
            // use 数组中指定的loader顺序是固定的
            // 多个loader的调用顺序是：从后往前调用
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 .less
            // 在配置 url-loader 时，多个参数使用 & 分割，outputPath=images 表示打包的图片文件放在 dist/images 目录下
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=images' }, // 处理图片
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },

    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')  // @ 表示 src 这一层目录
        }
    }
}