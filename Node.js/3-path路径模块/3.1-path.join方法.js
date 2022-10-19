const fs = require('fs');
const path = require('path');

const pathShr = path.join('/a', '/b/c', '../', './d', 'e');
console.log(pathShr); // \a\b\d\e

fs.readFile(path.join(__dirname, '../2-fs文件系统模块/test.txt'), 'utf8', function(err, dataStr) {
    if(err) {
        return console.log(err.message + '   文件读取失败');
    }

    console.log(dataStr);
});