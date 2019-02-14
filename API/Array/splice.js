// 这几个API都可以看作是 .splice的简写

Array.prototype._pop = function(){
  this.splice(this.length - 1, 1)
}
Array.prototype._push = function(item){
  this.splice(this.length, 0, item)
}
Array.prototype._shift = function(){
  this.splice(0, 1)
}
Array.prototype._unshift = function(item){
  this.splice(0, 0, item)
}

let a = [1, 2, 3]

a._pop()
console.log(a)
// [ 1, 2 ]

a._push('a')
console.log(a)
// [ 1, 2, 'a' ]

a._shift()
console.log(a)
// [ 2, 'a' ]

a._unshift('b')
console.log(a)
// [ 'b', 2, 'a' ]