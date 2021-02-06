(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{515:function(e,r,t){"use strict";t.r(r);var v=t(6),_=Object(v.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"路由之间跳转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由之间跳转"}},[e._v("#")]),e._v(" 路由之间跳转")]),e._v(" "),t("ol",[t("li",[e._v("声明式（标签跳转）")]),e._v(" "),t("li",[e._v("编程式（ js跳转）")])]),e._v(" "),t("h3",{attrs:{id:"vue-router-是什么-它有哪些组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-是什么-它有哪些组件"}},[e._v("#")]),e._v(" vue-router 是什么?它有哪些组件")]),e._v(" "),t("ol",[t("li",[e._v("vue用来写路由一个插件。")]),e._v(" "),t("li",[e._v("router-link、router-view")])]),e._v(" "),t("h3",{attrs:{id:"active-class-是哪个组件的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#active-class-是哪个组件的属性"}},[e._v("#")]),e._v(" .active-class 是哪个组件的属性？")]),e._v(" "),t("ol",[t("li",[e._v("vue-router模块的router-link组件。")]),e._v(" "),t("li",[e._v("children数组来定义子路由")])]),e._v(" "),t("h3",{attrs:{id:"怎么定义-vue-router-的动态路由-怎么获取传过来的值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么定义-vue-router-的动态路由-怎么获取传过来的值"}},[e._v("#")]),e._v(" 怎么定义 vue-router 的动态路由? 怎么获取传过来的值？")]),e._v(" "),t("ol",[t("li",[e._v("在router目录下的"),t("code",[e._v("index.js")]),e._v("文件中，对"),t("code",[e._v("path")]),e._v("属性加上/"),t("code",[e._v(":id")])]),e._v(" "),t("li",[e._v("使用"),t("code",[e._v("router")]),e._v("对象的 "),t("code",[e._v("params.id")])])]),e._v(" "),t("h3",{attrs:{id:"vue-router-有哪几种导航钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-有哪几种导航钩子"}},[e._v("#")]),e._v(" vue-router 有哪几种导航钩子?")]),e._v(" "),t("p",[t("strong",[e._v("三种")])]),e._v(" "),t("ol",[t("li",[e._v("全局导航钩子："),t("code",[e._v("router.beforeEach(to,from,next)")]),e._v(" "),t("ul",[t("li",[e._v("作用：跳转前进行判断拦截。")])])]),e._v(" "),t("li",[e._v("组件内的钩子")]),e._v(" "),t("li",[e._v("单独路由独享组件")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/5528c30f866b",target:"_blank",rel:"noopener noreferrer"}},[e._v("路由导航钩子的详细解释"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/da05dd6a39a3",target:"_blank",rel:"noopener noreferrer"}},[e._v("路由导航钩子的详细解释2"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"vue-router的两种模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router的两种模式"}},[e._v("#")]),e._v(" vue-router的两种模式")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("hash")]),e._v("模式：即地址栏 "),t("code",[e._v("URL")]),e._v(" 中的 "),t("code",[e._v("#")]),e._v("符号；")]),e._v(" "),t("li",[t("code",[e._v("history")]),e._v("模式："),t("code",[e._v("window.history")]),e._v("对象打印出来可以看到里边提供的方法和记录长度。利用了"),t("code",[e._v("HTML5 History Interface")]),e._v("中新增的"),t("code",[e._v("pushState()")]),e._v("和 "),t("code",[e._v("replaceState()")]),e._v(" 方法。"),t("strong",[e._v("（需要特定浏览器支持）。")])])]),e._v(" "),t("h3",{attrs:{id:"vue-router实现路由懒加载-动态加载路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router实现路由懒加载-动态加载路由"}},[e._v("#")]),e._v(" vue-router实现路由懒加载（ 动态加载路由 ）")]),e._v(" "),t("p",[t("strong",[e._v("三种方式")])]),e._v(" "),t("ol",[t("li",[e._v("第一种：vue异步组件技术 ==== 异步加载，vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 .但是,这种情况下一个组件生成一个js文件。")]),e._v(" "),t("li",[e._v("第二种：路由懒加载(使用import)。")]),e._v(" "),t("li",[e._v("第三种：webpack提供的require.ensure()，vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。")])]),e._v(" "),t("h3",{attrs:{id:"vue-router跳转和location-href有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router跳转和location-href有什么区别"}},[e._v("#")]),e._v(" Vue-router跳转和location.href有什么区别")]),e._v(" "),t("ul",[t("li",[e._v("使用location.href='/url'来跳转，简单方便，但是刷新了页面；")]),e._v(" "),t("li",[e._v("使用history.pushState('/url')，无刷新页面，静态跳转；\n"),t("ul",[t("li",[e._v("引进router，然后使用router.push('/url')来跳转，")]),e._v(" "),t("li",[e._v("使用了diff算法，实现了按需加载，减少了dom的消耗。")]),e._v(" "),t("li",[e._v("其实使用router跳转和使用history.pushState()没什么差别的，因为vue-router就是用了history.pushState()，尤其是在history模式下")])])])]),e._v(" "),t("h3",{attrs:{id:"完整的导航解析流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整的导航解析流程"}},[e._v("#")]),e._v(" 完整的导航解析流程")]),e._v(" "),t("p",[e._v("1、导航被触发\n2、在失活的组件里调用离开守卫\n3、调用全局的 beforeEach 守卫\n4、在重用的组件里调用 beforeRouteUpdate 守卫\n5、在路由配置里调用 beforEnter\n6、解析异步路由组件\n7、在被激活的组件里调用 beforeRouteEnter\n8、调用全局的 beforeResolve 守卫\n9、导航被确认\n10、调用全局的 afterEach 钩子\n11、触发 DOM 更新\n12、在创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数")]),e._v(" "),t("h3",{attrs:{id:"vue2中注册在router-link上事件无效解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2中注册在router-link上事件无效解决方法"}},[e._v("#")]),e._v(" Vue2中注册在router-link上事件无效解决方法")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("@click.native")]),e._v("。原因："),t("code",[e._v("router-link")]),e._v("会阻止"),t("code",[e._v("click")]),e._v("事件，"),t("code",[e._v(".native")]),e._v("指直接监听一个原生事件")]),e._v(" "),t("h3",{attrs:{id:"vue里面router-link在电脑上有用-在安卓上没反应怎么解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue里面router-link在电脑上有用-在安卓上没反应怎么解决"}},[e._v("#")]),e._v(" Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？")]),e._v(" "),t("p",[e._v("Vue路由在Android机上有问题，babel问题，安装babel polypill插件解决。")]),e._v(" "),t("h3",{attrs:{id:"routerlink在ie和firefox中不起作用-路由不跳转-的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routerlink在ie和firefox中不起作用-路由不跳转-的问题"}},[e._v("#")]),e._v(" RouterLink在IE和Firefox中不起作用（路由不跳转）的问题")]),e._v(" "),t("p",[e._v("答: 方法一：只用a标签，不适用button标签；方法二：使用button标签和Router.navigate方法")]),e._v(" "),t("h3",{attrs:{id:"route和-router-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#route和-router-的区别"}},[e._v("#")]),e._v(" "),t("code",[e._v("$route")]),e._v("和 "),t("code",[e._v("$router")]),e._v(" 的区别")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("$router")]),e._v("是"),t("code",[e._v("VueRoute")]),e._v("r的实例，在"),t("code",[e._v("script")]),e._v("标签中想要导航到不同的URL,使用"),t("code",[e._v("$router.push")]),e._v("方法。返回上一个历史"),t("code",[e._v("history")]),e._v("用"),t("code",[e._v("$router.to(-1)")])]),e._v(" "),t("li",[t("code",[e._v("$route")]),e._v("为当前"),t("code",[e._v("router")]),e._v("跳转对象。里面可以获取当前路由的"),t("code",[e._v("name,path,query,parmas")]),e._v("等。")])]),e._v(" "),t("h3",{attrs:{id:"params和query的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#params和query的区别"}},[e._v("#")]),e._v(" params和query的区别")]),e._v(" "),t("ol",[t("li",[e._v("用法："),t("code",[e._v("query")]),e._v("要用"),t("code",[e._v("path")]),e._v("来引入，"),t("code",[e._v("params")]),e._v("要用"),t("code",[e._v("name")]),e._v("来引入，接收参数都是类似的，分别是"),t("code",[e._v("this.$route.query.name")]),e._v("和"),t("code",[e._v("this.$route.params.name。")])]),e._v(" "),t("li",[e._v("url地址显示："),t("code",[e._v("query")]),e._v("更加类似于我们"),t("code",[e._v("ajax")]),e._v("中"),t("code",[e._v("get")]),e._v("传参，"),t("code",[e._v("params")]),e._v("则类似于"),t("code",[e._v("post")]),e._v("，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示")]),e._v(" "),t("li",[e._v("注意点："),t("code",[e._v("query")]),e._v("刷新不会丢失"),t("code",[e._v("query")]),e._v("里面的数据,"),t("code",[e._v("params")]),e._v("刷新 会 丢失"),t("code",[e._v("params")]),e._v("里面的数据")])])])}),[],!1,null,null,null);r.default=_.exports}}]);