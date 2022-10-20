浏览器端通过 <script></script> 标签的 src 属性，请求服务器上的数据，同时，服务器返回一个函数调用。这种请求数据的方式叫做JSONP
特点：
1. JSONP 不属于真正的 ajax 请求，因为他没有 XMLHttpRequest 对象
2. JSONP 仅支持 GET 请求

如果项目中已经配置了 CORS 跨域资源共享，为了防止冲突，必须在配置 CORS 中间件之前声明 JSONP 的接口。否则 JSONP 接口会被处理成开启了 CORS 的接口。