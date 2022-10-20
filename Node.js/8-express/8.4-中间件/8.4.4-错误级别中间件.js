const express = require('express');
const app = express();


app.get('/', (req, res) => {
    throw new Error('服务器内部发送错误'); // 抛出一个自定义错误
    res.send('home page');
})

// 错误级别中间件
app.use((err, req, res, next) => {
    console.log('发生了错误：' +  err.message);
    res.send('Error! ' + err.message);
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
});