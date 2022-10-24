// 1. ES6语法导入jquery
import $ from 'jquery'
// 导入样式（在webpakc中，一切皆模块，都可以通过ES6导入语法进行导入和使用）
// 推荐使用 @, 表示从 src 源代码目录，从外往里查找文件， 需要在 webpack 先配置 resolve ...
import '@/css/index.css'
import '@/css/index.less'

// 导入图片
import logo from '@/images/logo.jpg'
// 给 img 标签的 src 动态赋值
$('.box').attr('src', logo)

// 2. 定义jQuery的入口函数
$(function () {
    // 奇偶行变色
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'pink')
})



// ----------- 下面代码用于测试 babel-loader ----------

// 定义装饰器函数
function info(target) {
    target.info = 'person info'
}

// 定义一个普通的类
@info
class Person {}

console.log(Person.info)