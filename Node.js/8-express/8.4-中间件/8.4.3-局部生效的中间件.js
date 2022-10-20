// 不使用 app.use() 定义的中间件，叫做局部生效的中间件

const express = require('express');
const app = express();

const mw1 = function(req, res, next) {
    console.log('这是一个中间件函数');
    next();
};


// mw1 这个中间件只在“当前路由中生效”
app.get('/', mw1, (req, res) => {
    res.send('home page');
});

// mw1 中间件不影响下面这个路由
app.get('/user', (req, res) => {
    res.send('user page');
});


app.listen(80, () => {
    console.log('http://127.0.0.1');
});


