// 路由模块
const express = require('express');
const apiRouter = express.Router();

// get 
apiRouter.get('/get', (req, res) => {
    // 1. 获取到客户端通过查询字符串，发送到服务器的数据
    const query = req.query;
    // 2.调用 res.send(), 把数据响应给客户端
    res.send({
        status: 0,  // 0 表示成功， 1 表示失败
        msg: 'GET success!',  // 状态描述
        data: query  // 响应数据
    });
});

// post 
apiRouter.post('/post', (req, res) => {
    // 1. 获取客户端通过请求体，发送到服务器的 URL-encoded 数据
    const body = req.body;
    // 2. 调用 res.send(), 响应数据
    res.send({
        status: 0,
        mas: 'post success!',
        data: body
    });
});

module.exports = apiRouter;


