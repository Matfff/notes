const { application, urlencoded } = require("express");

// 配置解析 application/json 数据格式的内置中间件
app.use(express.json());

// 配置解析 application/x-www-form-urlencoded 格式数据的中间件
app.use(express.urlencoded({ extended: false }))