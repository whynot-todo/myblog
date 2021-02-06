# 数组遍历系列方法

- **map**(): 返回一个由回调函数的返回值组成的新数组
- **reduce**(): 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
- **filter**(): 将所有在过滤函数中返回 `true` 的数组元素放进一个新数组中并返回
- **find**(): 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 `undefined`。
- **findIndex**(): 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 `-1`。
- **every**(): 如果数组中的每个元素都满足测试函数，则返回 `true`，否则返回 `false。`
- **some**(): 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。

##  编码实现

```js
/* 
实现map()
*/
export function map (array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    // 将callback的执行结果添加到结果数组中
    arr.push(callback(array[index], index))
  }
  return arr
}

/*
实现reduce() 
*/
export function reduce (array, callback, initValue) {
  let result = initValue
  for (let index = 0; index < array.length; index++) {
    // 调用回调函数将返回的结果赋值给result
    result = callback(result, array[index], index)
  }
  return result
}

/* 
实现filter()
*/
export function filter(array, callback) {

  const arr = []
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      arr.push(array[index])
    }
  }
  return arr
}

/* 
实现find()
*/
export function find (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return array[index]
    }
  }
  return undefined
}

/* 
实现findIndex()
*/
export function findIndex (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return index
    }
  }
  return -1
}

 /* 
 实现every()
 */
 export function every (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index)) { // 只有一个结果为false, 直接返回false
      return false
    }
  }
  return true
}

/* 
实现some()
*/
export function some (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) { // 只有一个结果为true, 直接返回true
      return true
    }
  }
  return false
}
```

## 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>数组声明式系列方法</title>
</head>
<body>
  <script src="../dist/atguigu-utils.js"></script>
  <script>
    /* 
    需求:
    1. 产生一个每个元素都比原来大10的新数组
    2. 得到所有奇数的和
    3. 得到值大于8且下标是偶数位的元素组成的数组
    4. 找出一个值大于8且下标是偶数位的元素
    5. 找出一个值大于8且下标是偶数位的元素的下标
    6. 判断下标为偶数的元素是否都为奇数
    7. 判断是否有下标为偶数的元素值为奇数
    */

    const arr = [1, 3, 6, 9, 15, 19, 16]

    /* 使用数组内置方法 */
    // console.log(arr.map((item, index) => item + 10))
    // console.log(arr.reduce((preTotal, item, index) => {
    //   return preTotal + (item%2===1 ? item : 0)
    // }, 0))
    // console.log(arr.filter((item, index) => item>8 && index%2===0))
    // console.log(arr.find((item, index) => item>8 && index%2===0))
    // console.log(arr.findIndex((item, index) => item>8 && index%2===0))
    // console.log(arr.every((item, index) => index%2===1 || item%2===1))
    // console.log(arr.some((item, index) => index%2===0 && item%2===1))


    /* 使用自定义工具函数 */
    console.log(aUtils.map(arr, (item, index) => item + 10))
    console.log(aUtils.reduce(arr, (preTotal, item, index) => {
      return preTotal + (item%2===1 ? item : 0)
    }, 0))
    console.log(aUtils.filter(arr, (item, index) => item>8 && index%2===0))
    console.log(aUtils.find(arr, (item, index) => item>8 && index%2===0))
    console.log(aUtils.findIndex(arr, (item, index) => item>8 && index%2===0))
    console.log(aUtils.every(arr, (item, index) => index%2===1 || item%2===1))
    console.log(aUtils.some(arr, (item, index) => index%2===0 && item%2===1))
  </script>
</body>
</html>
```

# 数组API

## 数组合并与切片

### API 说明

- concat(): 合并
  - 语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]])
  - 功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变
- slice(): 切片
  - 语法: var new_array = slice(array, [begin[, end]])
  - 功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变

### 编码实现

- `src/array/concat.js`: 自定义数组合并

```js
/* 
语法: var new_array = concat(old_array, value1[, value2[, ...[, valueN]]]) 
功能: 将n个数组或值与当前数组合并生成一个新数组
*/
export function concat (array, ...values) {
  const arr = [...array]
  values.forEach(value => {
    if (Array.isArray(value)) {
      arr.push(...value)
    } else {
      arr.push(value)
    }
  })
  return arr
}
```

- `src/array/slice.js`: 自定义数组切片

```js
/* 
  语法: var new_array = slice(oldArr, [begin[, end]])
  功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变
*/
export function slice (array, begin, end) {
  // 如果当前数组是[], 直接返回[]
  if (array.length === 0) {
    return []
  }

  // 如果begin超过最大下标, 直接返回[]
  begin = begin || 0
  if (begin >= array.length) {
    return []
  }

  // 如果end不大于begin, 直接返回[]
  end = end || array.length
  if (end > array.length) {
    end = array.length
  }
  if (end <= begin) {
    return []
  }

  // 取出下标在[begin, end)区间的元素, 并保存到最终的数组中
  const arr = []
  for (let index = begin; index < end; index++) {
    arr.push(array[index])
  }

  return arr
}
```

### 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>数组合并与切片</title>
</head>
<body>

  <script src="../dist/atguigu-utils.js"></script>
  <script>
    console.log(aUtils.concat([1, 2], [3, 4], 6))  // [1, 2, 3, 4, 6]

    console.log(aUtils.slice([1, 3, 5, 7, 9]))  // [1, 3, 5, 7, 9]
    console.log(aUtils.slice([1, 3, 5, 7, 9], 1, 3)) // [3, 5]
    console.log(aUtils.slice([1, 3, 5, 7, 9], 1, 10)) // [3, 5, 7, 9]
  </script>
</body>
</html>
```

