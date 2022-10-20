// 1. 导入 express
const express = require('express');
// 2. 创建 web 服务器
const app = express();
// 3. 创建路由规则， 在匹配时，会安装路由的顺序进行匹配

app.get('/', function(req, res) {
    res.send({
        name: 'zs',
        age: 20,
        gender: '男'
    });
});

app.post('/user', function(req, res) {
    res.send('post success');
});

// 通过 req.query 对象，可以访问到客户端发送过来的参数， req.query 默认是空对象
app.get('/query', (req, res) => {
    res.send(req.query)
});

// url 地址中，可以通过 :参数名  的形式，匹配动态参数值   http://127.0.0.1/user/1   =>  {"id": "1"}
// 可以有多个动态参数  '/user/:id/:username/:...
app.get('/user/:id', (req, res) => {
    // 通过 req.params 对象， 默认是一个空对象
    console.log(req.params);
    res.send(req.params);
});

// 4. 调用 app.listen(端口号, 回调函数)， 启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});