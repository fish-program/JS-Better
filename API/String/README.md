# String
在底层如C语言，是没有String的概念，只有char[]。
JS把它包装成了String对象，这个对象也可以理解为一种类似于数组的结构。

对于String，核心的API
- 随机访问，长度
- 拼接

和Array有点区别：不支持修改，需要拼接的能力

其他API没不要记忆，甚至没必要用