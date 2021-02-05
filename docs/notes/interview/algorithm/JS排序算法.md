## 冒泡排序

```js
function bubbleSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
```

## 快速排序

```js
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var middle = Math.floor(arr.length / 2)
    var middleData = arr.splice(middle, 1)[0]

    var left = []
    var right = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < middleData) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([middleData], quickSort(right))
}

var Arr = [3, 5, 74, 64, 64, 3, 1, 8, 3, 49, 16, 161, 9, 4]
console.log(Arr, "before");
var newArr = quickSort(Arr)
console.log(newArr, "after");

```

+ 注意种类对于数轴的寻找：他是去中间的数，进行向下取整
+ 声明了两个数组，来区分左右
+ 注意递归调用时，链接两个数组

##  **插入排序** 

```js
function insertSort(arr) {
    // 默认第一个排好序了
    for (var i = 1; i < arr.length; i++) {
        // 如果后面的小于前面的直接把后面的插到前边正确的位置
        if (arr[i] < arr[i - 1]) {
            var el = arr[i]
            arr[i] = arr[i - 1]
            var j = i - 1
            while (j >= 0 && arr[j] > el) {
                arr[j+1] = arr[j]
                j--
            }
            arr[j+1] = el
        }
    }
}

var Arr = [3, 5, 74, 64, 64, 3, 1, 8, 3, 49, 16, 161, 9, 4]
console.log(Arr, "before");
insertSort(Arr)
console.log(Arr, "after");
```

