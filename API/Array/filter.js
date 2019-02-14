let a = [1, 2, 3, 4]

let result = a.filter((value, index) => {
  return (value + index) > 3
})
console.log(a)
// [ 1, 2, 3, 4 ]

console.log(result)
// [ 3, 4 ]

Array.prototype._filter = function(cb){
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      result.push(this[i])
    }
  }
  return result
}

let b = [1, 2, 3, 4]

let result2 = b._filter((value, index) => {
  return (value + index) > 5
})
console.log(b)
// [ 1, 2, 3, 4 ]

console.log(result2)
// [ 4 ]
