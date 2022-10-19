在网络节点中，负责消费资源的电脑，叫客户端；负责对外提供网络资源的电脑，叫服务器。
服务器和普通电脑的区别在于，服务器上安装了web服务器软件，例如：IIS、Apache等。
在nodejs中可以通过http模块创建服务器，无需第三方web服务器软件。
http模块是nodejs官方提供的、用来创建web服务器的模块。通过http模块提供的http.createServer()方法，就能方便的把一台普通的电脑，变成一台Web服务器，从而对外提供Web资源服务。

导入：
const http = require('http')