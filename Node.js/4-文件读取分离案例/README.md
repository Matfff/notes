需求: 
将当前目录下index.html页面，拆分成三个文件，分别是：
index.html
index.css
index.js
并且将拆分出来的3个文件，存放在repositories目录下

实现：
1. 创建两个正则表达式，分别匹配<style>和<script>标签
2. 使用 fs 模块，读取需要被处理的HTML文件
3. 自定义 resolveCSS 方法，写入index.css样式文件
4. 自定义 resolveJS 方法，写入index.js脚本
5. 自定义 resolveHTML 方法， 写入index.html文件

exec() 方法：用于检索字符串中的正则表达式的匹配
语法：
RegExpObject.exec(string)
参数：
string, 必须，需要检索的字符串
返回值：
返回一个数组，其中存放匹配的结果。如果未找到匹配，返回Null。此数组的第0个元素是与正则表达式相匹配的文本...