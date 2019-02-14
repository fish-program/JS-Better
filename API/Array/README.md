# Array
核心：
- 通过下标访问数组中的元素：arr[i] 
- 得到数组的长度：arr.length
- 删增元素：Array.prototype.splice ( start, deleteCount, ...items )
  - 删除第n个元素: arr.splice(n-1, 1)
  - 在第n个元素后面添加一个元素 arr.splice(n, 0, item)
  - 操作是在第start个元素前面的交点计算的，不要记混淆了


可用的，用他们的话语义化强，记不住也没关系。但是要能够通过上面的API来自己设计
- .pop .push .shift .unshif
- .filter .map: 返回新的数组
- .slice

记住这是面对对象式的设计，是对原来的数组进行的修改。

同时这些函数都是有返回值的，但是没必要记忆，真的浪费时间。记住上面的函数都是对数组自身的修改，而它们的返回值？滚远一点，不用记！

- for index 自然的过程式设计思想
- for of  迭代器设计模式
- forEach 面对对象的思维