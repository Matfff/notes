const express = require('express');
const app = express();

// 1. 导入路由模块
const userRouter = require('./router')

// 2. 使用 app.use() 注册路由模块
app.use('/api', userRouter)

app.listen(80, () => {
    console.log('http:127.0.0.1');
});