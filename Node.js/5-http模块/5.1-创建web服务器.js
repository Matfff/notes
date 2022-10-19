// 1. 导入 http
const http = require('http');

// 2. 创建 web 服务器实例
const server = http.createServer();

// 3. 使用服务器实例的 .on() 方法，为服务器绑定一个 request 事件
server.on('request', (req, res) => {
    // 只要有客户端来请求我们自己的服务器，就会触发 request 事件

    // req 是请求对象，它包含了与客户端相关的数据和属性，例如：
    // req.url 是客户端请求的 url 地址； req.method 是客户端的 method 请求类型

    // res 是响应对象， 它包含了与服务器相关的数据和属性，例如：
    // 要发送到客户端的字符串
    console.log('url:' + req.url, '   method:' + req.method);
    const str = `您的url: ${req.url}  请求的method: ${req.method}`;
    // 为了防止中文乱码，需要设置响应头
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // res.end() 方法作用：
    // 向客户端发送指定内容，并结束这次请求的处理过程
    res.end(str);
});

// 4. 调用 server.listen（端口号，回调）方法，即可启动 web 服务器
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1');
});