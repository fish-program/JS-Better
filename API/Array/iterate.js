let arr = [1, 2, 3, 4]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

console.log('----')

for (let item of arr) {
  console.log(item)
}

console.log('----')

/*
不存在的写法
for (let [item, index] of arr) {
  console.log(item, index)
}
*/

