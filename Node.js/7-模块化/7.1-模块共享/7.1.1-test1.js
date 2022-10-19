// 在一个自定义模块中， 默认情况下 module.exports = {}
let str = '123';


// module.exports = {
//     username : '123',
//     sayHi() {
//         console.log('~~~~')
//     }
// }

module.exports.username = '123';
exports = {
    username : '',
    gender : 'nan'
}
// exports.username = '';
// exports.gender = 'nan';