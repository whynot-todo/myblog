## 理解事件冒泡与事件委托

- 事件冒泡的流程
  - 基于DOM树形结构
  - 事件在目标元素上处理后, 会由内向外(上)逐层传递
  - 应用场景: 事件代理/委托/委派

![image-20201215141059095](https://zxfjd3g.github.io/atguigu_utils-docs/assets/img/image-20201215141059095.a3dce0aa.png)

- 事件委托/代理
  - 将多个子元素的同类事件监听委托给(绑定在)共同的一个父组件上
  - 好处：
    - 减少内存占用(事件监听回调从n变为
    - 动态添加的内部元素也能响应

## API 相关

- 语法：addEventListener(element, type, fn, selector)
- 说明：如果selector没有，直接给element绑定事件，如果selector有，将selector对应的多个元素的事件委托绑定给父元素element

## 编码实现

```js
/* 
语法：addEventListener(element, type, fn, selector)
说明：如果selector没有，直接给element绑定事件，
  如果selector有，将selector对应的多个元素的事件委托绑定给父元素element
*/
export function addEventListener(element, type, fn, selector) {
  // 如果没有指定selector, 普通的事件绑定
  if (!selector) {
    element.addEventListener(type, fn)
  } else {// 否则是代委托的事件绑定
    element.addEventListener(type, function (event) {
      // 得到真正发生事件的目标元素
      const target = event.target
      // 如果与选择器匹配
      if (target.matches(selector)) {
        // 调用处理事件的回调fn, 并指定this为目标元素, 参数为event
        fn.call(target, event)
      }
    })
  }
}
```

## 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>自定义事件监听</title>
</head>
<body>

  <ul>
    <li>AAA1</li>
    <li>AAA2</li>
    <li>AAA3</li>
    <li>AAA4</li>
  </ul>

  <!-- 功能: 点击每行提示对应的文本 -->
  <script src="../dist/atguigu-utils.js"></script>
  <script>
    // 不使用事件委托
    // document.querySelectorAll('ul>li').forEach(li => {
    //   // li.addEventListener('click', function (event) {
    //   //   alert(this.innerHTML)
    //   // })
    //   aUtils.addEventListener(li, 'click', function (event) {
    //     // alert(event.target.innerHTML)
    //     alert(this.innerHTML)
    //   })
    // })

    // 使用事件委托
    const ul = document.querySelector('ul')
    aUtils.addEventListener(ul, 'click', function (event) {
      // alert(this.innerHTML)
      alert(event.target.innerHTML)
    }, 'li')

  </script>
</body>
</html>
```

## 小插曲

### `event.target`与`event.currentTarget`的区别

通过事件冒泡和事件委托我们很容易就能得出结论

+ `event.target`是触发事件的元素
+ `event.currentTarget`是绑定事件的元素