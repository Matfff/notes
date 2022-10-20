CORS (Cross-Origin Resource Sharing, 跨域资源共享) 由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源。

cors 中间件解决跨域文件:
1. npm i cors
2. const cors = require('cors')  导入
3. 在路由之前调用 app.use(cors()) 配置中间件

三个相关响应头
1. response.setHeader('Access-Control-Allow-Origin', '*')    origin 指定允许访问该资源外域的 url
2. response.setHeader('Access-Control-Allow-Headers', '*')   声明除默认 9 种请求头外的请求头
3. response.setHeader('Access-Control-Allow-Methods', '*')   默认情况下 cors 仅支持 GET、POST、HEAD 请求，如需要通过 PUT、DELETE ...

CORS 根据请求方式和请求头的不同，可以将cors的请求分为两大类：
1. 简单请求
    同时满足以下两个条件：
    （1）请求方式：GET、POST、HEAD 三者之一
    （2）HTTP头部信息为默认的9种，无自定义头部字段
    特点：客户端与服务器之间只会发生一次请求
2. 预检请求
    满意以下任一条件：
    （1）请求方式：GET、POST、HEAD 之外
    （2）包含自定义头部字段
    （3）向服务器发送了 application/json 格式的数据
    特点：客户端与服务器之间会发生两次请求，OPTION 预检请求成功后，才会发起真正的请求