express 是基于nodejs平台，快速、开发、极简的 Web 开发框架
与内置模块 http 类似，专门用来创建 Web 服务器
本质是 npm 上的第三方包
使用 express 可以方便、快速创建 Web 网站的服务器或 API 接口的服务器

托管静态资源：
通过 express.static(), 可以方便的创建一个静态资源服务器
app.use(express.static('文件夹目录'))
注意：express 在指定的静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录不会出现在 URL 中。

托管多个静态资源目录，需要多次调用 express.static()
app.use(express.static('文件夹目录1'))
app.use(express.static('文件夹目录2'))
访问静态资源文件时，该函数会根据目录的添加顺序查找所需文件

挂载路径前缀：
如果希望在托管的静态资源访问路径之前，挂载路径前缀
app.use('/public', express,static('public))
无前缀 --> 有前缀         http://127.0.0.1/index.js --> http://127.0.0.1/public/index.js


nodemon 工具：可以监听项目文件的变动，当代码被修改后，会自动重启项目

app.use() 注册全局中间件

在服务器，可以使用 req.body 这个属性来接收客户端发送过来的请求体数据

