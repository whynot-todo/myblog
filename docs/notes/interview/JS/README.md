# 数据类型

###  **JavaScript中什么是基本数据类型什么是引用数据类型？以及各个数据类型是如何存储的？** 

基本数据类型有

- Number
- String
- Boolean
- Null
- Undefined
- Symbol（ES6新增数据类型）
- bigInt

引用数据类型统称为Object类型，细分的话有

- Object
- Array
- Date
- Function
- RegExp

**基本数据类型的数据直接存储在栈中**；而**引用数据类型的数据存储在堆中**，每个对象在堆中有一个引用地址。**引用类型在栈中会保存他的引用地址**，以便快速查找到堆内存中的对象。

顺便提一句，**栈内存是自动分配内存的**。而**堆内存是动态分配内存的，不会自动释放**。所以每次使用完对象的时候都要把它设置为null，从而减少无用内存的消耗



# 类型转换

#### **面试官：在JS中为什么0.2+0.1>0.3?**⭐⭐⭐⭐

+ 因为在JS中，浮点数是使用64位固定长度来表示的，其中的**1位表示符号位**，**11位用来表示指数位**，剩下的**52位尾数位**，由于只有**52位表示尾数位**。

+ 而`0.1`转为二进制是一个无限循环数`0.0001100110011001100......`(1100循环)

> 小数的十进制转二进制方法：https://jingyan.baidu.com/article/425e69e6e93ca9be15fc1626.html
> 要知道，小数的十进制转二进制的方法是和整数不一样的，推荐看一看

由于**只能存储52位尾数位**，所以会出现**精度缺失**，把它存到内存中再取出来转换成十进制就不是原来的`0.1`了，就变成了`0.100000000000000005551115123126`,而为什么02+0.1是因为

```js
// 0.1 和 0.2 都转化成二进制后再进行运算,满二进一，从后往前
0.00011001100110011001100110011001100110011001100110011010 +
0.0011001100110011001100110011001100110011001100110011010 =
0.0100110011001100110011001100110011001100110011001100111

// 转成十进制正好是 0.30000000000000004
123456
```

#### **面试官：那为什么0.2+0.3=0.5呢?**⭐⭐⭐⭐

```js
// 0.2 和 0.3 都转化为二进制后再进行计算
0.001100110011001100110011001100110011001100110011001101 +
0.0100110011001100110011001100110011001100110011001101 = 
0.10000000000000000000000000000000000000000000000000001 //尾数为大于52位

// 而实际取值只取52位尾数位，就变成了
0.1000000000000000000000000000000000000000000000000000   //0.5
1234567
```

**答：**`0.2` 和`0.3`分别转换为二进制进行计算：在内存中，它们的尾数位都是等于52位的，而他们相加必定大于52位，而他们相加又恰巧前52位尾数都是`0`，截取后恰好是`0.1000000000000000000000000000000000000000000000000000`也就是0.5

#### **面试官：那既然0.1不是0.1了，为什么在console.log(0.1)的时候还是0.1呢?**⭐⭐⭐

**答：\**在`console.log`的时候会\**二进制转换为十进制，十进制再会转为字符串**的形式，在转换的过程中发生了取近似值，所以打印出来的是一个近似值的字符串





#### **面试官：判断数据类型有几种方法**⭐⭐⭐⭐⭐

- `typeof`

  - 缺点：`typeof null`的值为`Object`，无法分辨是`null`还是`Object`

- `instanceof`

  - 缺点：只能判断对象是否存在于目标对象的原型链上

- `constructor`

- `Object.prototype.toString.call()`

  - 一种最好的基本类型检测方式 `Object.prototype.toString.call()` ;它可以区分 null 、 string 、

    boolean 、 number 、 undefined 、 array 、 function 、 object 、 date 、 math 数据类型。

  - 缺点：不能细分为谁谁的实例

```js
    // -----------------------------------------typeof
    typeof undefined // 'undefined' 
    typeof '10' // 'String' 
    typeof 10 // 'Number' 
    typeof false // 'Boolean' 
    typeof Symbol() // 'Symbol' 
    typeof Function // ‘function' 
    typeof null // ‘Object’ 
    typeof [] // 'Object' 
    typeof {} // 'Object'


    // -----------------------------------------instanceof
    function Foo() { }
    var f1 = new Foo();
    var d = new Number(1)


    console.log(f1 instanceof Foo);// true
    console.log(d instanceof Number); //true
    console.log(123 instanceof Number); //false   -->不能判断字面量的基本数据类型


    // -----------------------------------------constructor
    var d = new Number(1)
    var e = 1
    function fn() {
      console.log("ming");
    }
    var date = new Date();
    var arr = [1, 2, 3];
    var reg = /[hbc]at/gi;

    console.log(e.constructor);//ƒ Number() { [native code] }
    console.log(e.constructor.name);//Number
    console.log(fn.constructor.name) // Function 
    console.log(date.constructor.name)// Date 
    console.log(arr.constructor.name) // Array 
    console.log(reg.constructor.name) // RegExp


    //-----------------------------------------Object.prototype.toString.call()
    console.log(Object.prototype.toString.call(undefined)); // "[object Undefined]" 
    console.log(Object.prototype.toString.call(null)); // "[object Null]" 
    console.log(Object.prototype.toString.call(123)); // "[object Number]" 
    console.log(Object.prototype.toString.call("abc")); // "[object String]" 
    console.log(Object.prototype.toString.call(true)); // "[object Boolean]" 


    function fn() {
      console.log("ming");
    }
    var date = new Date();
    var arr = [1, 2, 3];
    var reg = /[hbc]at/gi;
    console.log(Object.prototype.toString.call(fn));// "[object Function]" 
    console.log(Object.prototype.toString.call(date));// "[object Date]" 
    console.log(Object.prototype.toString.call(arr)); // "[object Array]"
    console.log(Object.prototype.toString.call(reg));// "[object RegExp]"
12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061
```

#### **面试官：为什么typeof null是Object**⭐⭐⭐⭐

**答：**

因为在`JavaScript`中，不同的对象都是使用二进制存储的，如果**二进制前三位都是0的话**，系统会判断为是`Object`类型，而null的二进制全是0，自然也就判断为`Object`

这个bug是初版本的JavaScript中留下的，扩展一下其他五种标识位：

- `000` 对象
- `1` 整型
- `010` 双精度类型
- `100`字符串
- `110`布尔类型



#### **面试官：`==`和`===`有什么区别**⭐⭐⭐⭐⭐

**答：**

`===`是严格意义上的相等，会比较两边的数据类型和值大小

- 数据类型不同返回false
- 数据类型相同，但值大小不同，返回false

`==`是非严格意义上的相等，

- 两边类型相同，比较大小
- 两边类型不同，根据下方表格，再进一步进行比较。
  - Null == Undefined ->true
  - String == Number ->先将String转为Number，在比较大小
  - Boolean == Number ->现将Boolean转为Number，在进行比较
  - Object == String，Number，Symbol -> Object 转化为原始类型

#### **面试官：字面量new出来的对象和 `Object.create(null)`创建出来的对象有什么区别**⭐⭐⭐

**答：**

- 字面量和new创建出来的对象会**继承Object的方法和属性**，他们的隐式原型会指向Object的显式原型，
- 而 `Object.create(null)`创建出来的对象原型为null，作为原型链的顶端，自然也没**有继承Object的方法和属性**

# 执行栈和执行上下文

#### **面试官：什么是作用域，什么是作用域链？**⭐⭐⭐⭐

- 规定变量和函数的可使用范围称作作用域
- 每个函数都有一个作用域链，查找变量或者函数时，需要从局部作用域到全局作用域依次查找，这些作用域的集合称作作用域链。

#### **面试官：什么是执行栈，什么是执行上下文？**⭐⭐⭐⭐

执行上下文分为：

- 全局执行上下文
  - 创建一个全局的window对象，并规定this指向window，执行js的时候就压入栈底，关闭浏览器的时候才弹出
- 函数执行上下文
  - 每次函数调用时，都会新创建一个函数执行上下文
  - 执行上下文分为创建阶段和执行阶段
    - 创建阶段：函数环境会创建变量对象：arguments对象（并赋值）、函数声明（并赋值）、变量声明（不赋值），函数表达式声明（不赋值）；会确定this指向；会确定作用域
    - 执行阶段：变量赋值、函数表达式赋值，使变量对象编程活跃对象
- eval执行上下文

执行栈：

- 首先栈特点：先进后出
- 当进入一个执行环境，就会创建出它的执行上下文，然后进行压栈，当程序执行完成时，它的执行上下文就会被销毁，进行弹栈。
- 栈底永远是全局环境的执行上下文，栈顶永远是正在执行函数的执行上下文
- 只有浏览器关闭的时候全局执行上下文才会弹出

# 闭包

> 很多人都吃不透js闭包，这里推荐一篇文章：[彻底理解js中的闭包](https://blog.csdn.net/dovlie/article/details/76339244)

#### 什么是闭包？闭包的作用？闭包的应用？⭐⭐⭐⭐⭐

函数执行，形成私有的执行上下文，使内部私有变量不受外界干扰，起到**保护**和**保存**的作用

作用：

- 保护
  - 避免命名冲突
- 保存
  - 解决循环绑定引发的索引问题
- 变量不会销毁
  - 可以使用函数内部的变量，使变量不会被垃圾回收机制回收

应用：

- 设计模式中的单例模式
- for循环中的保留i的操作
- 防抖和节流
- 函数柯里化

缺点

- 会出现内存泄漏的问题

# 原型和原型链

#### **面试官：什么是原型？什么是原型链？如何理解**⭐⭐⭐⭐⭐

**答：**

**原型：** 原型分为隐式原型和显式原型，每个对象都有一个隐式原型，它指向自己的构造函数的显式原型。

**原型链：** 多个`__proto__`组成的集合成为原型链

- 所有实例的`__proto__`都指向他们构造函数的`prototype`
- 所有的`prototype`都是对象，自然它的`__proto__`指向的是`Object()`的`prototype`
- 所有的构造函数的隐式原型指向的都是`Function()`的显示原型
- Object的隐式原型是null

# 继承

#### **面试官：说一说 JS 中的常用的继承方式有哪些？以及各个继承方式的优缺点。**⭐⭐⭐⭐⭐

**答：**

原型继承、组合继承、**寄生组合继承**、ES6的extend

原型继承

```js
    // ----------------------方法一：原型继承
    // 原型继承
    // 把父类的实例作为子类的原型
    // 缺点：子类的实例共享了父类构造函数的引用属性   不能传参

    var person = {
      friends: ["a", "b", "c", "d"]
    }

    var p1 = Object.create(person)

    p1.friends.push("aaa")//缺点：子类的实例共享了父类构造函数的引用属性

    console.log(p1);
    console.log(person);//缺点：子类的实例共享了父类构造函数的引用属性

12345678910111213141516
```

组合继承

```js
    // ----------------------方法二：组合继承
    // 在子函数中运行父函数，但是要利用call把this改变一下，
    // 再在子函数的prototype里面new Father() ,使Father的原型中的方法也得到继承，最后改变Son的原型中的constructor

    // 缺点：调用了两次父类的构造函数，造成了不必要的消耗，父类方法可以复用
    // 优点可传参，不共享父类引用属性
    function Father(name) {
      this.name = name
      this.hobby = ["篮球", "足球", "乒乓球"]
    }

    Father.prototype.getName = function () {
      console.log(this.name);
    }

    function Son(name, age) {
      Father.call(this, name)
      this.age = age
    }

    Son.prototype = new Father()
    Son.prototype.constructor = Son


    var s = new Son("ming", 20)

    console.log(s);
123456789101112131415161718192021222324252627
```

寄生组合继承

```js
    // ----------------------方法三：寄生组合继承
    function Father(name) {
      this.name = name
      this.hobby = ["篮球", "足球", "乒乓球"]
    }

    Father.prototype.getName = function () {
      console.log(this.name);
    }

    function Son(name, age) {
      Father.call(this, name)
      this.age = age
    }

    Son.prototype = Object.create(Father.prototype)// 这里与组合继承不同
    Son.prototype.constructor = Son

    var s2 = new Son("ming", 18)
    console.log(s2);
1234567891011121314151617181920
```

extend

```js
    // ----------------------方法四：ES6的extend（寄生组合继承的语法糖）
    //     子类只要继承父类，可以不写 constructor ，一旦写了，则在 constructor 中的第一句话
    // 必须是 super 。

    class Son3 extends Father { // Son.prototype.__proto__ = Father.prototype
      constructor(y) {
        super(200)  // super(200) => Father.call(this,200)
        this.y = y
      }
    }
12345678910
```

# 内存泄露、垃圾回收机制

#### **面试官：什么是内存泄漏**⭐⭐⭐⭐⭐

 内存泄露是指不再用的内存没有被及时释放出来，导致该段内存无法被使用就是内存泄漏

#### **面试官：为什么会导致的内存泄漏**⭐⭐⭐⭐⭐

内存泄漏指我们无法在通过js访问某个对象，而垃圾回收机制却认为该对象还在被引用，因此垃圾回收机制不会释放该对象，导致该块内存永远无法释放，积少成多，系统会越来越卡以至于崩溃

#### **面试官：垃圾回收机制都有哪些策略？**⭐⭐⭐⭐⭐

- 标记清除法
  - 垃圾回收机制获取根并标记他们，然后访问并标记所有来自它们的引用，然后在访问这些对象并标记它们的引用…如此递进结束后若发现有没有标记的（不可达的）进行删除，进入执行环境的不能进行删除
- 引用计数法
  - 当声明一个变量并给该变量赋值一个引用类型的值时候，该值的计数+1，当该值赋值给另一个变量的时候，该计数+1，当该值被其他值取代的时候，该计数-1，当计数变为0的时候，说明无法访问该值了，垃圾回收机制清除该对象


# 单线程，同步异步

#### **面试官：为什么JS是单线程的？**⭐⭐⭐⭐⭐

**答：**因为JS里面有可视的Dom，如果是多线程的话，这个线程正在删除DOM节点，另一个线程正在编辑Dom节点，导致浏览器不知道该听谁的

#### **面试官：如何实现异步编程？**

**答：**回调函数

#### **面试官：Generator是怎么样使用的以及各个阶段的变化如何？**⭐⭐⭐

**答：**

- 首先生成器是一个函数，用来返回迭代器的
- 调用生成器后不会立即执行，而是通过返回的迭代器来控制这个生成器的一步一步执行的
- 通过调用迭代器的next方法来请求一个一个的值，返回的对象有两个属性，一个是value，也就是值；另一个是`done`，是个布尔类型，done为true说明生成器函数执行完毕，没有可返回的值了，
- `done`为`true`后继续调用迭代器的next方法，返回值的`value`为`undefined`

状态变化：

- 每当执行到`yield`属性的时候，都会返回一个对象
- 这时候生成器处于一个非阻塞的挂起状态
- 调用迭代器的next方法的时候，生成器又从挂起状态改为执行状态，继续上一次的执行位置执行
- 直到遇到下一次`yield`依次循环
- 直到代码没有`yield`了，就会返回一个结果对象`done`为`true`，`value`为`undefined`

**面试官：以下代码的执行顺序是什么**⭐⭐⭐⭐⭐

**答：**

```js
  async function async1() {
   console.log('async1 start')
   await async2()
   console.log('async1 end')
  }
  async function async2() {
   console.log('async2')
  }
  async1()
  console.log('script start')

//执行到await时，如果返回的不是一个promise对象，await会阻塞下面代码(当前async代码块的代码)，会先执行async外的同步代码(在这之前先看看await中函数的同步代码，先把同步代码执行完)，等待同步代码执行完之后，再回到async内部继续执行
//执行到await时，如果返回的是一个promise对象，await会阻塞下面代码(当前async代码块的代码)，会先执行async外的同步代码(在这之前先看看await中函数的同步代码，先把同步代码执行完)，等待同步代码执行完之后，再回到async内部等promise状态达到fulfill的时候再继续执行下面的代码
//所以结果为
//async1 start
//async2
//script start
//async1 end
```

#### **面试官：宏任务和微任务都有哪些**⭐⭐⭐⭐⭐

**答：**

- 宏任务：`script`、`setTimeOut`、`setInterval`、`setImmediate`
- 微任务:`promise.then`,`process.nextTick`、`Object.observe`、`MutationObserver`
- **注意：Promise是同步任务**

#### **面试官：宏任务和微任务都是怎样执行的**⭐⭐⭐⭐⭐

**答：**

- 执行宏任务script，
- 进入script后，所有的同步任务主线程执行
- 所有宏任务放入宏任务执行队列
- 所有微任务放入微任务执行队列
- 先清空微任务队列，
- 再取一个宏任务，执行，再清空微任务队列
- 依次循环

**例题1**

```js
setTimeout(function(){
    console.log('1')
});
new Promise(function(resolve){
    console.log('2');
    resolve();
}).then(function(){
    console.log('3')
});
console.log('4');
new Promise(function(resolve){
    console.log('5');
    resolve();
}).then(function(){
    console.log('6')
});
setTimeout(function(){
    console.log('7')
});
function bar(){
    console.log('8')
    foo()
}
function foo(){
    console.log('9')
}
console.log('10')
bar()
12345678910111213141516171819202122232425262728
```

**解析**

1. 首先浏览器执行Js代码由上至下顺序，遇到setTimeout，把setTimeout分发到宏任务Event Queue中
2. new Promise属于主线程任务直接执行打印2
3. Promis下的then方法属于微任务，把then分到微任务 Event Queue中
4. console.log(‘4’)属于主线程任务，直接执行打印4
5. 又遇到new Promise也是直接执行打印5，Promise 下到then分发到微任务Event Queue中
6. 又遇到setTimouse也是直接分发到宏任务Event Queue中，等待执行
7. console.log(‘10’)属于主线程任务直接执行
8. 遇到bar()函数调用，执行构造函数内到代码，打印8，在bar函数中调用foo函数，执行foo函数到中代码，打印9
9. 主线程中任务执行完后，就要执行分发到微任务Event Queue中代码，实行先进先出，所以依次打印3，6
10. 微任务Event Queue中代码执行完，就执行宏任务Event Queue中代码，也是先进先出，依次打印1，7。

- 最终结果：2，4，5，10，8，9，3，6，1，7

**例题2**

```js
    setTimeout(() => {
      console.log('1');
      new Promise(function (resolve, reject) {
        console.log('2');
        setTimeout(() => {
          console.log('3');
        }, 0);
        resolve();
      }).then(function () {
        console.log('4')
      })
    }, 0);
    console.log('5'); //5 7 10 8 1 2 4 6 3
    setTimeout(() => {
      console.log('6');
    }, 0);
    new Promise(function (resolve, reject) {
      console.log('7');
      // reject();
      resolve();
    }).then(function () {
      console.log('8')
    }).catch(function () {
      console.log('9')
    })
    console.log('10');
1234567891011121314151617181920212223242526
```

**运行结果： 5 7 10 8 1 2 4 6 3**

## 变量提升

#### **面试官：变量和函数怎么进行提升的？优先级是怎么样的？**⭐⭐⭐⭐

**答：**

- 对所有函数声明进行提升（除了函数表达式和箭头函数），引用类型的赋值
  - 开辟堆空间
  - 存储内容
  - 将地址赋给变量
- 对变量进行提升，只声明，不赋值，值为`undefined`

#### **面试官：var let const 有什么区别**⭐⭐⭐⭐⭐

**答：**

- var
  - var声明的变量可进行变量提升，let和const不会
  - var可以重复声明
  - var在非函数作用域中定义是挂在到window上的
- let
  - let声明的变量只在局部起作用
  - let防止变量污染
  - 不可在声明
- const
  - 具有let的所有特征
  - 不可被改变
    - 如果使用const声明的是对象的话，是可以修改对象里面的值的

#### **面试官：箭头函数和普通函数的区别？箭头函数可以当做构造函数 new 吗？**⭐⭐⭐⭐⭐

- 箭头函数是普通函数的简写，但是它不具备很多普通函数的特性
- 第一点，this指向问题，箭头函数的this指向它定义时所在的对象，而不是调用时所在的对象
- 不会进行函数提升
- 没有arguments对象，不能使用arguments，如果要获取参数的话可以使用`rest`运算符
- 没有`yield`属性，不能作为生成器Generator使用
- 不能new
  - 没有自己的this，不能调用call和apply
  - 没有prototype，new关键字内部需要把新对象的`_proto_`指向函数的prototype

#### **面试官：说说你对代理的理解**⭐⭐⭐

- 代理有几种定义方式
  - 字面量定义，对象里面的 get和set
  - 类定义， class 中的`get`和`set`
  - Proxy对象，里面传两个对象，第一个对象是目标对象target，第二个对象是专门放get和set的`handler`对象。Proxy和上面两个的区别在于Proxy专门对对象的属性进行get和set
- 代理的实际应用有
  - Vue的双向绑定 vue2用的是`Object.defineProperty`，vue3用的是`proxy`
  - 校验值
  - 计算属性值（get的时候加以修饰）

#### **面试官：为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？**⭐⭐⭐

- 为什么要使用模块化
  - 防止命名冲突
  - 更好的分离，按需加载
  - 更好的复用性
  - 更高的维护性

#### **面试官：`exports`和`module.exports`有什么区别？**⭐⭐⭐

- 导出方式不一样
  - `exports.xxx='xxx'`
  - `module.export = {}`
- `exports`是`module.exports`的引用，两个指向的是用一个地址，而require能看到的只有`module.exports`

#### **面试官：JS模块包装格式有哪些？**⭐⭐⭐

- commonjs
  - 同步运行，不适合前端
- `AMD`
  - 异步运行
  - 异步模块定义，主要采用异步的方式加载模块，模块的加载不影响后面代码的执行。所有依赖这个模块的语句都写在一个回调函数中，模块加载完毕，再执行回调函数
- `CMD`
  - 异步运行
  - seajs 规范

#### **面试官：ES6和commonjs的区别**⭐⭐⭐

- `commonjs`模块输出的是值的拷贝，而ES6输出的值是值的引用
- `commonjs`是在运行时加载，是一个对象，ES6是在编译时加载，是一个代码块
- `commonjs`的this指向当前模块，ES6的this指向undefined
