const path = require('path');


const fpath = path.join(__dirname, '../2-fs文件系统模块/test.txt');
var fullName = path.basename(fpath);
console.log(fullName); // 输出 test.txt

var nameWithoutExt = path.basename(fpath, '.txt');
console.log(nameWithoutExt);  // 输出 test
