// 路由模块

// 1. 导入 express
const express = require('express');
// 2. 创建路由对象
const router = express.Router();

// 3. 挂载具体的路由
router.get('/user/list', (req, res) => {
    res.send('get user list');
});

router.post('/user/add', (req, res) => {
    res.send('add new user');
});

// 4. 向外导入路由对象
module.exports = router;