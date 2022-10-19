const fs = require('fs');
const path = require('path');

// 1.1 匹配 style
// \s 表示空白字符， \S 表示非空白字符， * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/

// 1.2 匹配 script
const regScript = /<script>[\s\S]*<\/script>/

// 2. 读取需要被处理的html文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf8', (err, dataStr) => {
    if(err) {
        return console.log(err.message + '读取文件失败！');
    }

    // 读取文件成功
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
});

// 3.1 处理css样式
function resolveCSS(htmlStr) {
    // 3.2 使用 exec() 方法提取style标签里的内容
    const r1 = regStyle.exec(htmlStr);
    // 3.3 将style标签替换成空字符串
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    // 3.4 将提取出来的 css 样式， 写入到 index.css 中
    fs.writeFile(path.join(__dirname, './repositories/index.css'), newCSS, err => {
        if(err) {
            return console.log(err.message + '  写入css样式失败!');
        }
        console.log('写入css样式成功!');
    });
}

// 4. 出来js脚本
function resolveJS(htmlStr) {
    // 
    const r2 = regScript.exec(htmlStr);
    // 
    const newJS = r2[0].replace('<script>', '').replace('</script>', '');
    // 
    fs.writeFile(path.join(__dirname, './repositories/index.js'), newJS, err => {
        if(err) {
            return console.log(err.message + '  写入js失败!');
        }
        console.log('写入js成功!');
    })
}

// 5. 处理 html 文件
function resolveHTML(htmlStr) {
    // 5.1 使用字符串replace方法，把内嵌的style和script标签替换为外联的link和script标签
    const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
    .replace(regScript, '<script src="./index.js"></script>');
    // 5.2 将替换后的html文件写入 index.html 文件中
    fs.writeFile(path.join(__dirname, './repositories/index.html'), newHTML, err => {
        if(err) {
            return console.log(err.message + '  写入html失败!');
        }
        console.log('写入html成功!');
    })
}