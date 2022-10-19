nodejs 中的第三方模块又叫做包
包是基于内置模块封装出来的， 提供了更高级、更方便的 API，极大的提高了开发效率
全球最大的包共享平台： https://www.npmjs.com/


包版本号，例：2.24.0
第1位数字：大版本
第2位数字：功能版本
第3位数字：Bug修复版本
版本号提升规则：只要版本号高位数字增长了，低位归0


快速新建 package.json 文件
npm init -y

一次性安装所用依赖: npm install  或 (npm i)
npm 包管理工具会读取package.json 中的 dependencies节点

卸载包, 例:
npm uninstall moment

devDependencies 节点：
如果某些包只在项目开发阶段会用到，在项目上线后不会用到，则建议把这些包记录到 devDependencies 节点中
npm install 包名 --save-dev    (npm i 包名 -D)


查看当前的下包镜像源
npm config get registry
切换为淘宝镜像源
npm config set registry=https://......


nrm工具：
为了更方便切换下包的镜像源，可以安装nrm工具，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源
全局安装： npm i nrm -g
查看所用可用镜像源： nrm ls
将下包的镜源切换为 taobao 镜像： nrm use taobao


项目包：
被安装到项目的 node_modules 目录中的包，都是项目包
项目包分两类：
开发依赖包 （记录到 devDependencies）
核心依赖包 （记录到 dependencies）

全局包：
使用npm i 命令加上 -g 参数，则会把包记录为全局包
npm i 包名 -g
npm uninstall 包名 -g


i5ting_toc: 是一个可以把md文档转换为html的工具
i5ting_toc -f 要转换的md文件路径 -o