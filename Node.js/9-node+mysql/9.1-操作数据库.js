const mysql = require('mysql');

// 配置 mysql
const db = mysql.createPool({
    host: '127.0.0.1',   // ip地址
    user: 'root',        // 登录数据库的账号
    password: '123123',  // 登录数据库的密码
    database: 'db1'      // 指定要操作哪个数据库
});

// 检查 mysql 模块能否正常工作
db.query('SELECT 1', (err, results) => {
    if(err) return console.log(err.message);
    console.log(results);  // 只要能打印出 [ RowDataPacket { '1': 1 } ] 的结果，就表示数据库连接正常
});

// 1. 查询数据
var sqlStr = 'select * from tb_user';
db.query(sqlStr, (err, results) => {
    if(err) return console.log(err.message);
    console.log(results);  // 注意：如果执行的是 select 查询语句， 则执行的结果是数组
})

// 2. 插入数据
var user = { name: 'zs', age: '20', gender: '男'};
var sqlStr2 = 'insert into tb_user (name, age, gender) values (?, ?, ?)';  // 待执行的 sql 语句，其中英文的 ? 表示占位符
// 使用数组的形式，依次为占位符指定具体的值
db.query(sqlStr2, [user.name, user.age, user.gender], (err, results) => {
    if(err) return console.log(err.message); // fail
    if(results.affectedRows === 1) { console.log('插入数据成功') }; // success
});

// 3. 新增数据便捷方式， 如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据：
var newUser = { name: 'zs', age: '20', gender: '男'};
var sqlStr3 = 'insert into tb_user set ?';
db.query(sqlStr3, newUser, (err, results) => {
    if(err) return console.log(err.message); // fail
    if(results.affectedRows === 1) { console.log('插入数据成功') }; // success
});

// 4. 更新、修改 数据
var user = { id: 3, name: 'aaa', age: 22, gender: '女' };  // 新数据
var sqlStr = 'update users set name=?, age=?, gender=? where id=?'; // 要执行的 sql 语句
db.query(sqlStr, [user.name, user.age, user.gender, user.id], (err, results) => {
    if(err) return console.log(err.message); // fail
    if(results.affectedRows === 1) { console.log('更新数据成功') }; // success
});

// 5. 更新数据便捷方式，  如果数据对象的每个属性和数据表的字段一一对应
var user = { id: 3, name: 'aaa', age: 22, gender: '女' };  // 新数据
var sqlStr = 'update users set ? where id=?'; // 要执行的 sql 语句
db.query(sqlStr, [user, user.id], (err, results) => {
    if(err) return console.log(err.message); // fail
    if(results.affectedRows === 1) { console.log('更新数据成功') }; // success
});

// 6. 删除数据
var sqlStr = 'delete from tb_user where id=?'; // 要执行的 sql 语句
db.query(sqlStr, 3, (err, results) => {  // 3  表示 id 值
    if(err) return console.log(err.message); // fail
    if(results.affectedRows === 1) { console.log('删除数据成功') }; // success
})

// 7.标记删除
// 使用 delete  语句，会把真正的数据从表中删除。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作
// 所谓标记删除，就是在表中设置类似与 status 这样的状态字段，来标记当前这条数据是否被删除。
// 当用户执行了删除的动作时，并没有执行 delete 语句把数据删除，而是执行了 update 语句，将这条数据对应的 status 字段标记为删除即可
var sqlStr = 'update tb_user set status=? where id=?';
db.query(sqlStr, [1, 3], (err, results) => {  // 其中 1 表示 status 值， 3 表示 id 值
    if(err) return console.log(err.message); // fail
    if(results.affectedRows === 1) { console.log('标记删除数据成功') }; // success
})