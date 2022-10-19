const fs = require('fs')

// 读取 成绩.txt
fs.readFile(__dirname + '/成绩.txt', 'utf8', function(err, dataStr) {
    if(err) {
        return console.log(err + '  读取文件失败');
    }
    // console.log('读取文件成功:  ' + dataStr);

    // 将成绩数据按照空格进行分割
    const arrOld = dataStr.split(' ');
    
    // 循环分割后的数组， 对每一项数据进行字符串的替换操作
    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'));
    });
    
    // 把新数组中的每一项进行合并，得到一个新的字符串
    // join方法用于把数组中的所有元素放入一个字符串
    // 元素是通过指定的分隔符进行分隔的。
    const newStr = arrNew.join('\r\n');

    // 调用 fs.writeFile() 方法， 将处理完毕的成绩写入新文件
    fs.writeFile(__dirname + '/new成绩.txt', newStr, function(err) {
        if(err) {
            return console.log('文件写入失败  ' + err.message);
        }
        console.log('success!')
    })
})