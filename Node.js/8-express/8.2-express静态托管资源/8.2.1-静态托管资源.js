const express = require('express');
const app = express();

// 调用 express.static()
app.use(express.static('./repositories'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});