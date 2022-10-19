const fs = require('fs');

fs.readFile(__dirname + '/test.txt', 'utf8', function(err, dataStr) {
    if(err) {
        return console.log(err.message + '   文件读取失败')
    }

    console.log(dataStr)
});

// 读取成功， err 的值为 null
// 读书失败， err 的值为错误对象， dataStr 的值为 undefined