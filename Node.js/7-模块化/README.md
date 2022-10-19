模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干个模块的过程。对于整个系统来说，模块是可组合、分解和更换的单元。
编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并相互依赖的多个小模块：
1. 提高了代码的服用性
2. 提高了代码的可维护性
3. 可以实现按需加载

nodejs中根据模块来源不同，将模块分为三大类：
1. 内置模块（如 fs、 path、 http 等）
2. 自定义模块（.js文件)
3. 第三方模块

模块作用域：
和函数作用域类型，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域。
好处：
防止了全局变量污染的问题

向外共享模块作用域中的成员：
1. module 对象
    在每个.js自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息
    console.log(module)
2. module.exports 对象
    在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用
    外界用 require() 方法导入自定义模块时，得到的就是 moudle.exports 所指的对象
3. require() 方法导入模块时，导入的结果，永远以 module.exports 指向对象为准
4. exports 对象
    为了简化向外共享成员的代码，node提供了 exports 对象。默认情况下，exports 和 module.exports 指向同一个对象。最终共享的结果，还是以 module.exports 指向的对象为准。

建议：不要在同一个模块中同时使用 exports 和 module.exports


nodejs 遵循 CommonJS 模块化规范：
1. 每个模块内部， module 变量代表当前模块。
2. module 变量是一个对象，它的 exports 属性（即module.exports）是对外的接口。
3. 加载某个模块，其实就是加载该模块的 module.exports 属性，require() 方法用于加载模块。