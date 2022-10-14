// 1.引入
const { response } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装， response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应
    response.send('hello express get')
});

// ----------------------------------------------------------------------------------

// all -- 接受任意类型的请求
app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('hello express post')
});

// ----------------------------------------------------------------------------------

app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        result: 'json success!'
    }
    // 将 JavaScript 对象转换为字符串
    let str = JSON.stringify(data);
    response.send(str)
});

// ----------------------------------------------------------------------------------

// 延时响应
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        response.send('延时响应')
    }, 3000)
    
});

// ----------------------------------------------------------------------------------

// axios 服务
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('aixos success')
});

// ----------------------------------------------------------------------------------

// fetch 服务
app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('fetch success')
});

// ----------------------------------------------------------------------------------

// jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send("console.log('hello jsonp')");
    const data = {
        name: 'jsonp',
        age: '20'
    };
    //
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handled(${str})`)
})

// ----------------------------------------------------------------------------------

// jsonp  用户名检测
app.all('/check-username', (request, response) => {
    // response.send("console.log('hello jsonp')");
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`)
})

// ----------------------------------------------------------------------------------
app.all('/cors-server', (request, response) => {
    // 设置CORS响应头实现跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Method', '*');
    // response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');

    //
    response.send('hello cors')
});


// 4.监听端口
app.listen(8000, () => {
    console.log('服务已经启动, 8000....')
})