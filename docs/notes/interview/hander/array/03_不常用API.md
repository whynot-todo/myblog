## 数组分块

### API 说明

- 语法: chunk(array, size)
- 功能: 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
- 如: [1, 3, 5, 6, 7, 8] 调用chunk(arr, 4) ==> [[1, 3, 5, 6], [7,8]]

### 编码实现

```js
/* 
将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
*/
export function chunk (array, size) {
  if (array.length===0) {
    return []
  }
  size = size || 1

  const bigArr = []
  let smallArr = []

  array.forEach(item => {
    if (smallArr.length===0) {
      bigArr.push(smallArr)
    }
    smallArr.push(item)
    if (smallArr.length===size) {
      smallArr = []
    }
  })

  return bigArr
}
```

### 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>数组分块</title>
</head>
<body>
  <script src="../dist/atguigu-utils.js"></script>
  <script>
    console.log(aUtils.chunk([1, 2, 3, 4, 5, 6, 7], 3)) // [[1,2,3], [4,5,6],[7]]
    console.log(aUtils.chunk([1, 2, 3, 4, 5, 6, 7]))// [[1],[2],[3],[4],[5],[6],[7]]
    console.log(aUtils.chunk([1, 2, 3, 4, 5, 6, 7], 8))// [[1, 2, 3, 4, 5, 6, 7]]
  </script>
</body>
</html>
```

## 数组取差异

### API 说明

- 语法: difference(arr1, arr2)
- 功能: 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
- 例子: difference([1,3,5,7], [5, 8]) ==> [1, 3, 7]

### 编码实现

```js
/* 
difference(arr1, arr2): 得到arr1中所有不在arr2中的元素组成的数组(不改变原数组)
    如: [1,3,5,7].difference([5, 8])  ==> [1, 3, 7]
*/
export function difference (arr1, arr2) {
  if (arr1.length===0) {
    return []
  } else if (arr2.length===0) {
    return arr1.slice()
  }
  return arr1.filter(item => arr2.indexOf(item)===-1)
}
```

### 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>数组取差异</title>
</head>
<body>
  <script src="../dist/atguigu-utils.js"></script>
  <script>
    console.log(aUtils.difference([1,3,5,7], [5, 8]))
  </script>
</body>
</html>
```

## 删除数组中部分元素

### API相关

- pull(array, ...values):
  - 删除原数组中与value相同的元素, 返回所有删除元素的数组
  - 说明: 原数组发生了改变
  - 如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]
- pullAll(array, values):
  - 功能与pull一致, 只是参数变为数组
  - 如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组1变为[1, 5], 返回值为[3,3,7]

### 编码实现

```js
/* 
1. pull(array, ...values): 
  删除数组中与value相同的元素, 返回所有删除元素的数组
  说明: 数组发生了改变
  如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]
2. pullAll(array, values): 
  功能与pull一致, 只是参数变为数组
  如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1, 5], 返回值为[3,3,7]
*/
export function pull (array, ...values) {
  if (array.length===0 || values.length===0) {
    return []
  }
  
  var result = []
  for (let index = 0; index < array.length; index++) {
    const item = array[index]
     if (values.indexOf(item)!==-1) {
      array.splice(index, 1)
      result.push(item)
      index--
    }
  }

  return result
}

export function pullAll (array, values) {
  if (!values || !Array.isArray(values)) {
    return []
  }
  return pull(array, ...values)
}
```

### 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>删除数组中部分元素</title>
</head>
<body>
  <script src="../dist/atguigu-utils.js"></script>
  <script>
    var arr = [1,3,5,3,7]
    console.log(aUtils.pull(arr, 2, 7, 3, 7), arr)
    var arr2 = [1,3,5,3,7]
    console.log(aUtils.pullAll(arr2, [2, 7, 3, 7]), arr2)
  </script>
</body>
</html>
```

## 得到数组的部分元素

### API 相关

- drop(array, count)
  - 得到当前数组过滤掉左边count个后剩余元素组成的数组
  - 说明: 不改变当前数组, count默认是1
  - 如: drop([1,3,5,7], 2) ===> [5, 7]
- dropRight(array, count)
  - 得到当前数组过滤掉右边count个后剩余元素组成的数组
  - 说明: 不改变当前数组, count默认是1
  - 如: dropRight([1,3,5,7], 2) ===> [1, 3]

### 编码实现

```js
/* 
1. drop(array, count): 
   得到数组过滤掉左边count个后剩余元素组成的数组
   说明: 不改变当前数组, count默认是1
   如: drop([1,3,5,7], 2) ===> [5, 7]
2. dropRight(array, count): 
   得到数组过滤掉右边count个后剩余元素组成的数组
   说明: 不改变数组, count默认是1
   如: dropRight([1,3,5,7], 2) ===> [1, 3]
*/

export function drop (array, count=1) {
  if (array.length === 0 || count >= array.length) {
    return []
  }

  return array.filter((item, index) => index>=count)
}

export function dropRight (array, count=1) {
  if (array.length === 0 || count >= array.length) {
    return []
  }

  return array.filter((item, index) => index < array.length-count)
}
```

### 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>得到数组的部分元素</title>
</head>
<body>
  <script src="../dist/atguigu-utils.js"></script>
  <script>
    console.log(aUtils.drop([1,3,5,7], 2))
    console.log(aUtils.drop([1,3,5,7], 4))
    console.log(aUtils.drop([1,3,5,7]))

    console.log(aUtils.dropRight([1,3,5,7], 2))
    console.log(aUtils.dropRight([1,3,5,7], 4))
    console.log(aUtils.dropRight([1,3,5,7]))
  </script>
</body>
</html>
```

