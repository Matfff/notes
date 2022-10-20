// 
const qs = require('querystring');

// 解析表单的中间件
const bodyParser = (req, res, next) => {
    // 1. 定义变量，用来存储客户端发送过来的请求数据
    let str = '';
    // 2. 监听 req 对象的 data 事件 （客户端发送过来的新的请求体数据）
    
    req.on('data', (chunk) => {
        // data 事件可能会触发多次，每一次触发data事件时，获取到数据只是完整数据的一部分，需要手动拼接
        // 拼接请求体数据， 隐式转换为字符串
        str += chunk;
    });
    // 3. 当请求体数据接收完毕后，会自动触发 req 的 end 事件， 因此，可以在 req 的 end 事件中， 拿到并处理完整的请求体数据
    req.on('end', () => {
        //  4. 把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str);
        console.log(body);
        // 将解析出来的数据挂载为 req.body
        req.body = body;
        next();
    });
};

module.exports = bodyParser;