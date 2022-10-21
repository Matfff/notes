// npm i jsonwebtoken express-jwt
// jsonwebtoken 用于生成 JWT 字符串
// express-jwt  用于将 JWT 字符串解析还原成 JSON对象

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }))

// 1. 导入
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

// cors
const cors = require('cors');
app.use(cors());

// 2. 定义 secret 密钥， 包装 JWT 字符串的安全性
// （1）当生成 JWT 字符串的时候，需要使用 secret 密钥对用户的信息进行加密，最终得到加密好的JWT字符串
// （2）当把JWT字符串解析还原成JSON对象的时候，需要使用secret密钥进行解密
const secretKey = 'xyking no.1'; // 本质是一个字符串


// 4.注册将 JWT 字符串解析还原成 JSON 对象的中间件
// unless() 方法指定哪些接口不需要访问权限
// 只要配置成功了， express-jwt 这个中间件， 就可以把解析出来的用户信息，挂载到 req.auth 属性上
app.use(expressJWT.expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))



// 3. 在登录成功后生成JWT字符串
// 调用 jsonwebtoken 包提供的 sign() 方法，将用户的信息加密成JWT字符串，响应给客户端
app.post('/api/login', (req, res) => {
    // 将 req.body 请求体中的数据， 转存为 unserinfo 常量
    const userinfo = req.body;
    // 判断用户提交的登录信息是否正确
    if (userinfo.username !== 'admin' || userinfo.password !== '123456') {
        return res.send({
            status: 400,
            msg: '登录失败'
        });
    };
    // jwt.sign()  三个参数： 用户信息对象， 加密密钥， 配置对象
    // 不要把密码加密到 token 中
    const tokenStr = jwt.sign(
        { username: userinfo.username },
        secretKey,
        { expiresIn: '60s' } // token 字符串有效期
    )
    res.send({
        status: 200,
        msg: '登录成功',
        token: tokenStr
    });
});

// 需要权限的 API 接口
app.get('/admin/getinfo', (req, res) => {
    // 使用 req.auth 获取用户信息，并使用 data 属性将用户信息发送给客户端
    // 2022-9-5 , req.user --> req.auth
    res.send({
        status: 200,
        msg: '获取用户信息成功!',
        data: req.auth
    });
});


//  捕获解析 JWT 失败后产生的错误
// app.use((err, req, res, next) => {
//     // token 解析错误
//     if (err.name === 'UnauthorizedError') {
//         return res.send({ status: 401, msg: '无效的Token' });
//     };
//     // 其他错误
//     res.send({ status: 500, msg: '未知错误' });
// });


app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});