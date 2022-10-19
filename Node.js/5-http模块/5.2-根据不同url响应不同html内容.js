const http = require('http');
const server = http.createServer();

server.on('request', function(req, res) {
    // 1. 获取请求的url地址
    const url = req.url;
    // 2. 设置默认内容为 404 Not found
    let content = '<h1>404 Not found</h1>';
    // 3. 判断用户请求的是否为/或index.html
    if(url === '/' || url ==='/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        // 4. 判断用户请求的是否为/about.html
        content = '<h1>相关页面</h1>'
    }
    // 5. 设置Content-Type 响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 6. 使用 res.end() 把内容响应给客户
    res.end(content);
})

server.listen(80, () => {
    console.log('http server running at http://127.0.0.1');
});