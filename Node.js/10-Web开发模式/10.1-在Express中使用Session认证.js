// npm i express-session

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }))

// 1. 导入 session 中间件
const session = require('express-session');

// 2. 配置 session 中间件
app.use(session({
    secret: 'keyboard cat', // secret 属性的值可以为任意字符串, 负责加密
    resave: false, // 固定写法
    saveUninitialized: true // 固定写法
}));

// 3. 配置成功后，即可通过 req.session 来访问和使用 session 对象，从而存储用户相关信息
app.post('/api/login', (req, res) => {
    // 判断用户提交的登录信息是否正确
    if(req.body.username !== 'admin' || req.body.password !== '123456') {
        return res.send({
            status: 1,
            msg: '登录失败'
        });
    };

    // 追加自定义属性
    req.session.user = req.body; // 将用户信息存储到 session 中
    req.session.islogin = true; // 将用户的登录状态，存储到 session 中

    res.send({
        status: 0,
        msg: '登录成功'
    })
});

// 4. 从 session 中取数据
app.get('/api/username', (req, res) => {
    // 判断用户是否登录
    if(!req.session.islogin) {
        return res.send({
            status: 1,
            msg: 'fail'
        });
    };
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    });
});

// 5. 清空 session
// 调用 req.session.destory() 函数，即可清空服务器保存的session信息
app.post('/api/logout', (req, res) => {
    // 清空session信息
    req.session.destroy();
    res.send({
        status: 0,
        msg: '退出登录成功'
    });
});


app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});