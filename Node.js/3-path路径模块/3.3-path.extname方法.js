const path = require('path');


const fpath = path.join(__dirname, '../2-fs文件系统模块/test.txt');
var fext = path.extname(fpath);
console.log(fext); // 输出 .txt