const express = require('express');
const app = express();

// 导入自己封装的中间件模块
const bodyParser = require('./8.5.2-模块化自定义中间件');
// 注册为全局
app.use(bodyParser);

app.post('/user', (req, res) => {
    res.send(req.body);
});

app.listen(80, () => {
    console.log('http://127.0.0.1');
});