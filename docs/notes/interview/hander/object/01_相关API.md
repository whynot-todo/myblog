## 自定义new

### API 相关

- 语法: newInstance(Fn, ...args)
- 功能: 创建Fn构造函数的实例对象

### 编码实现

```js
export function newInstance (Fn, ...args) {
  // 创建一个空的object实例对象obj, 作为Fn的实例对象
  const obj = {}
  // 将Fn的prototype属性值赋值给obj的__proto__属性值
  obj.__proto__ = Fn.prototype
  // 调用Fn, 指定this为obj, 参数为args列表
  const result = Fn.call(obj, ...args)
  // 如果Fn返回的是一个对象类型, 那返回的就不再是obj, 而是Fn返回的对象
  // 否则返回obj
  return result instanceof Object ? result : obj
}
```

### 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>自定义new</title>
</head>
<body>
  <script src="../dist/atguigu-utils.js"></script>
  <script>
    function Person(name, age) {
      this.name = name
      this.age = age
      // return {}
      // return []
      // return function (){}
      // return 1
      // return undefined
    }

    const p = new Person('tom', 12)
    console.log(p)

    const p2 = aUtils.newInstance(Person, 'Jack', 13)
    console.log(p2, p2.constructor)
  </script>
</body>
</html>
```

## 自定义instanceof

### API 相关

- 语法: myInstanceOf(obj, Type)
- 功能: 判断obj是否是Type类型的实例
- 实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false

### 编码实现

```js
export function myInstanceOf(obj, Type) {
  // 得到原型对象
  let protoObj = obj.__proto__

  // 只要原型对象存在
  while(protoObj) {
    // 如果原型对象是Type的原型对象, 返回true
    if (protoObj === Type.prototype) {
      return true
    }
    // 指定原型对象的原型对象
    protoObj = protoObj.__proto__
  }
  
  return false
}
```

### 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>自定义instanceof</title>
</head>
<body>
  <script src="../dist/atguigu-utils.js"></script>
  <script>
    function Person(name, age) {
      this.name = name
      this.age = age
    }
    const p = new Person('tom', 12)
    
    console.log(aUtils.myInstanceOf(p, Object), p instanceof Object)
    console.log(aUtils.myInstanceOf(p, Person), p instanceof Person)
    console.log(aUtils.myInstanceOf(p, Function), p instanceof Function)
  </script>
</body>
</html>
```

## 合并多个对象

### API 相关

- 语法: object mergeObject(...objs)
- 功能: 合并多个对象, 返回一个合并后对象(不改变原对象)
- 例子:
  - { a: [{ x: 2 }, { y: 4 }], b: 1}
  - { a: { z: 3}, b: [2, 3], c: 'foo'}
  - 合并后: { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }

### 编码实现

```js
export function mergeObject(...objs) {
  const result = {}

  // 遍历objs
  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      // 如果result还没有key值属性
      if (!result.hasOwnProperty(key)) {
        result[key] = obj[key]
      } else { // 否则 合并属性
        result[key] = [].concat(result[key], obj[key])
      }
    })
  })

  // 可以使用reduce来代替forEach手动添加
  return result
}
```

### 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>合并多个对象</title>
</head>
<body>
  <script src="../dist/atguigu-utils.js"></script>
  <script>
    const object = {
      a: [{ x: 2 }, { y: 4 }],
      b: 1
    }
    const other = {
      a: { z: 3},
      b: [2, 3],
      c: 'foo'
    }
    console.log(aUtils.merge(object, other)) 
  </script>
</body>
</html>
```