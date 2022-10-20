const express = require('express');
const app = express();

const mw = function(req, res, next) {
    console.log('这是一个中间件函数');
    // 在当前中间件的业务处理完毕后， 必须调用 next() 函数
    // 表示把流转关系转交给下一个中间件或路由
    next();
};

app.listen(80, () => {
    console.log('http://127.0.0.1');
});