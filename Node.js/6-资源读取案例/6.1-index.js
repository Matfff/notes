const fs = require('fs');
const path = require('path');
const http = require('http');

// 创建 Web 服务
const server = http.createServer();

// 监听 web 服务器的 request 事件
server.on('request', function(req, res) {
    // 获取客户端请求的 url 地址
    const url = req.url;
    // 把请求的 url 地址映射为本地文件存放路径
    let fpath = '';
    if(url === '/') {
        fpath = path.join(__dirname, './repositories/index.html');
    } else {
        fpath = path.join(__dirname, './repositories', url);
    }
    
    // 根据映射过来的文件路径读取文件
    fs.readFile(fpath, 'utf8', function(err, dataStr) {
        if(err) return res.end('404 Not fount.');
        // 读取文件成功
        res.end(dataStr);
    })
});

// 启动 Web 服务
server.listen(80, function() {
    console.log('server listen at http://127.0.0.1');
});