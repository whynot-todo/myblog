# VueRouter

### 路由之间跳转

1. 声明式（标签跳转）
2. 编程式（ js 跳转）

### vue-router 是什么?它有哪些组件

1. vue 用来写路由一个插件。
2. router-link、router-view

### .active-class 是哪个组件的属性？

1. vue-router 模块的 router-link 组件。
2. children 数组来定义子路由

### 怎么定义 vue-router 的动态路由? 怎么获取传过来的值？

1. 在 router 目录下的`index.js`文件中，对`path`属性加上/`:id`
2. 使用`router`对象的 `params.id`

### vue-router 有哪几种导航钩子?

**三种**

1. 全局导航钩子：`router.beforeEach(to,from,next)`
    - 作用：跳转前进行判断拦截。
2. 组件内的钩子
3. 单独路由独享组件

[路由导航钩子的详细解释](https://www.jianshu.com/p/5528c30f866b)
[路由导航钩子的详细解释 2](https://www.jianshu.com/p/da05dd6a39a3)

### vue-router 的两种模式

1. `hash`模式：即地址栏 `URL` 中的 `#`符号；
2. `history`模式：`window.history`对象打印出来可以看到里边提供的方法和记录长度。利用了`HTML5 History Interface`中新增的`pushState()`和 `replaceState()` 方法。**（需要特定浏览器支持）。**

### vue-router 实现路由懒加载（ 动态加载路由 ）

**三种方式**

1. 第一种：vue 异步组件技术 ==== 异步加载，vue-router 配置路由 , 使用 vue 的异步组件技术 , 可以实现按需加载 .但是,这种情况下一个组件生成一个 js 文件。
2. 第二种：路由懒加载(使用 import)。
3. 第三种：webpack 提供的 require.ensure()，vue-router 配置路由，使用 webpack 的 require.ensure 技术，也可以实现按需加载。这种情况下，多个路由指定相同的 chunkName，会合并打包成一个 js 文件。

### Vue-router 跳转和 location.href 有什么区别

-   使用 location.href='/url'来跳转，简单方便，但是刷新了页面；
-   使用 history.pushState('/url')，无刷新页面，静态跳转；
    -   引进 router，然后使用 router.push('/url')来跳转，
    -   使用了 diff 算法，实现了按需加载，减少了 dom 的消耗。
    -   其实使用 router 跳转和使用 history.pushState()没什么差别的，因为 vue-router 就是用了 history.pushState()，尤其是在 history 模式下

### 完整的导航解析流程

1、导航被触发
2、在失活的组件里调用离开守卫
3、调用全局的 beforeEach 守卫
4、在重用的组件里调用 beforeRouteUpdate 守卫
5、在路由配置里调用 beforEnter
6、解析异步路由组件
7、在被激活的组件里调用 beforeRouteEnter
8、调用全局的 beforeResolve 守卫
9、导航被确认
10、调用全局的 afterEach 钩子
11、触发 DOM 更新
12、在创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数

### Vue2 中注册在 router-link 上事件无效解决方法

使用`@click.native`。原因：`router-link`会阻止`click`事件，`.native`指直接监听一个原生事件

### Vue 里面 router-link 在电脑上有用，在安卓上没反应怎么解决？

Vue 路由在 Android 机上有问题，babel 问题，安装 babel polypill 插件解决。

### RouterLink 在 IE 和 Firefox 中不起作用（路由不跳转）的问题

答: 方法一：只用 a 标签，不适用 button 标签；方法二：使用 button 标签和 Router.navigate 方法

### `$route`和 `$router` 的区别

1. `$router`是`VueRoute`r 的实例，在`script`标签中想要导航到不同的 URL,使用`$router.push`方法。返回上一个历史`history`用`$router.to(-1)`
2. `$route`为当前`router`跳转对象。里面可以获取当前路由的`name,path,query,parmas`等。

### params 和 query 的区别

1. 用法：`query`要用`path`来引入，`params`要用`name`来引入，接收参数都是类似的，分别是`this.$route.query.name`和`this.$route.params.name。`
2. url 地址显示：`query`更加类似于我们`ajax`中`get`传参，`params`则类似于`post`，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示
3. 注意点：`query`刷新不会丢失`query`里面的数据,`params`刷新 会 丢失`params`里面的数据
