// 客户端发起的任何请求， 到达服务器后， 都会触发的中间件，叫做全局生效的中间件。
// 通过调用 app.use(中间件函数), 即可定义一个全局生效的中间件

const express = require('express');
const app = express();

const mw = function(req, res, next) {
    console.log('这是一个中间件函数');
    next();
};

// 全局生效的中间件
app.use(mw);

app.get('/', (req, res) => {
    res.send('home page');
});

app.get('/user', (req, res) => {
    res.send('user page');
});


app.listen(80, () => {
    console.log('http://127.0.0.1:80');
});