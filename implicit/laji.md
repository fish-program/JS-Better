# JS 中的垃圾
## 变量提升
var function 的变量提升有什么意义？
``` js
module.exports = fn
function fn(){
  // ...
}
```
有些傻逼就是喜欢这种写法
``` js
fn()

// ...

function fn(){
  // ...
}
```
使用函数变量提升的，都是傻逼，没有例外

## 隐式类型转换
都是傻逼，真的需要跨越类型装换的时候自己手写一下不行嘛? 非要规定乱七八糟的规则。

### ==
这个设定，真的是滑宇宙之大稽。傻逼中的战斗机。有什么意义？ES委员会我看你们他妈的谁能把这个表记下来？我草你妈的也不知道这个规则有什么用。

### 装箱
string -> String  各种装箱，其实我是很讨厌这种的，我不用！！！

### 乱起八糟 的require
const a = require('b')
b.js
b.json
b/index.js
b/index.json
这种implicit rules真的很讨厌

