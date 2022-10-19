pats 模块是nodejs官方提供、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串
语法：
path.join([...paths])
参数： ...paths <string>路径片段序列
返回值： <string>


path.basename()方法，用来从路径字符串中，将文件名解析出来
语法：
path.basename(path[, ext])
参数1：<string>必选， 表示一个路径的字符串
参数2：<string>可选， 表示文件扩展名
返回： <string>表示路径中的最后一部分

path.extname()方法，获取路径中的文件扩展名
语法：
path.extname(path)
参数：<string>必选，表示一个路径的字符串
返回：<string>返回得到的扩展名字符串

导入path模块
const path = require('path')