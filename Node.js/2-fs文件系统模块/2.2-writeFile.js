const fs = require('fs');
fs.writeFile(__dirname + '/test.txt', 'hello nodejs!', function(err) {
    if(err) {
        return console.log('文件写入失败' + err.message)
    }
    console.log('文件写入成功')
});