# API
JS 或者说动态语言，总是写各种没用的API。
ES6 -> ES2018，多了那么多没用的语法糖，有什么意义？
社区中同一个功能提供很多种接口，axois.() axois.get() ..我觉得这种没意义，真的很累。 koa express 就那么喜欢发明改造native的接口？

记很多API，cpu（大脑）占用率搞，用到的时候快
少记一点，cpu的空间用来工作。

能用babel模仿的api都不是好API

1. 必备的API，没它不行的。通过必备API可以模拟其他所有API的，就想三原色一样
2. 可用的，没必要强行记忆，但是有时候用一下确实挺方便的
3. 完全没必要的，有记这个API的功夫，都手写一万次了。

## Array
对于任何语言的数组而言，最重要的：
- 通过下标访问数组中的元素：arr[i] 
- 得到数组的长度：arr.length
- 删增元素：arr.splice(from, to, insertItems)

可用的，没必要
- .pop .push .shift .unshif
- .filter .map
- .slice

