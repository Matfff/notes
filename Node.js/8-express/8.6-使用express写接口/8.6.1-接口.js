const express = require('express');
const app = express();
// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// cors
const cors = require('cors');
app.use(cors());


// 导入路由模块
const apiRouter = require('./apiRouter');
app.use('/api', apiRouter);



app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});