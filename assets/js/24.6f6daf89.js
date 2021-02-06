(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{383:function(_,v,t){"use strict";t.r(v);var l=t(25),i=Object(l.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"网络部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络部分"}},[_._v("#")]),_._v(" 网络部分")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_33277654/article/details/112758362",target:"_blank",rel:"noopener noreferrer"}},[_._v("网页链接"),t("OutboundLink")],1)]),_._v(" "),t("p",[_._v("[脑图链接](https://kdocs.cn/l/cbAeeFS33wHF\n[金山文档] 未命名文件.pof)")]),_._v(" "),t("h3",{attrs:{id:"get-和-post-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-的区别"}},[_._v("#")]),_._v(" "),t("strong",[_._v("Get 和 Post 的区别")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/cai_shengfu/picgo/raw/master/img/20210206120632.png",alt:""}})]),_._v(" "),t("ul",[t("li",[_._v("冪等/不冪等（可缓存/不可缓存）\n"),t("ul",[t("li",[_._v("get 请求是冪等的，所以 get 请求的数据是可以缓存的")]),_._v(" "),t("li",[_._v("而 post 请求是不冪等的，查询查询对数据是有副作用的，是不可缓存的")])])]),_._v(" "),t("li",[_._v("传参\n"),t("ul",[t("li",[_._v("get 传参，参数是在 url 中的\n"),t("ul",[t("li",[_._v("准确的说 get 传参也可以放到 body 中，只不过不推荐使用")])])]),_._v(" "),t("li",[_._v("post 传参，参数是在请求体中\n"),t("ul",[t("li",[_._v("准确的说 post 传参也可以放到 url 中，只不过不推荐使用")])])])])]),_._v(" "),t("li",[_._v("安全性\n"),t("ul",[t("li",[_._v("get 较不安全")]),_._v(" "),t("li",[_._v("post 较为安全")]),_._v(" "),t("li",[_._v("准确的说两者都不安全，都是明文传输的，在路过公网的时候都会被访问到，不管是 url 还是 header 还是 body，都会被访问到，要想做到安全，就需要使用 https")])])]),_._v(" "),t("li",[_._v("参数长度\n"),t("ul",[t("li",[_._v("get 参数长度有限，是较小的\n"),t("ul",[t("li",[_._v("准确来说，get 在 url 传参的时候是很小的")])])]),_._v(" "),t("li",[_._v("post 传参长度不受限制")])])]),_._v(" "),t("li",[_._v("发送数据\n"),t("ul",[t("li",[_._v("post 传参发送两个请求包，一个是请求头，一个是请求体，请求头发送后服务器进行验证，要是验证通过的话就会给客户端发送一个 100-continue 的状态码，然后就会发送请求体")])])]),_._v(" "),t("li",[_._v("字符编码\n"),t("ul",[t("li",[_._v("get 在 url 上传输的时候只允许 ASCII(阿斯科)编码")])])])]),_._v(" "),t("h3",{attrs:{id:"讲讲-http-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讲讲-http-缓存"}},[_._v("#")]),_._v(" "),t("strong",[_._v("讲讲 http 缓存")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/cai_shengfu/picgo/raw/master/img/20210206120133.png",alt:""}})]),_._v(" "),t("ul",[t("li",[t("p",[_._v("缓存分为强缓存和协商缓存")])]),_._v(" "),t("li",[t("p",[_._v("强缓存")]),_._v(" "),t("ul",[t("li",[_._v("在浏览器加载资源时，先看看"),t("code",[_._v("cache-control")]),_._v("里的"),t("code",[_._v("max-age")]),_._v("，判断数据有没有过期，如果没有直接使用该缓存 ，有些用户可能会在没有过期的时候就点了刷新按钮，这个时候浏览器就回去请求服务端，要想避免这样做，可以在"),t("code",[_._v("cache-control")]),_._v("里面加一个"),t("code",[_._v("immutable")]),_._v(".")]),_._v(" "),t("li",[_._v("public\n"),t("ul",[t("li",[_._v("允许客户端和虚拟服务器缓存该资源，cache-control 中的一个属性")])])]),_._v(" "),t("li",[_._v("private\n"),t("ul",[t("li",[_._v("只允许客户端缓存该资源")])])]),_._v(" "),t("li",[_._v("no-storage\n"),t("ul",[t("li",[_._v("不允许强缓存，可以协商缓存")])])]),_._v(" "),t("li",[_._v("no-cache\n"),t("ul",[t("li",[_._v("不允许缓存")])])])])]),_._v(" "),t("li",[t("p",[_._v("协商缓存")]),_._v(" "),t("ul",[t("li",[_._v("浏览器加载资源时，没有命中强缓存，这时候就去请求服务器，去请求服务器的时候，会带着两个参数，一个是"),t("code",[_._v("If-None-Match")]),_._v("，也就是响应头中的"),t("code",[_._v("etag")]),_._v("属性，每个文件对应一个"),t("code",[_._v("etag")]),_._v(";另一个参数是"),t("code",[_._v("If-Modified-Since")]),_._v(",也就是响应头中的"),t("code",[_._v("Last-Modified")]),_._v("属性，带着这两个参数去检验缓存是否真的过期，如果没有过期，则服务器会给浏览器返回一个 304 状态码，表示缓存没有过期，可以使用旧缓存。")])])])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("etag")]),_._v("的作用")])]),_._v(" "),t("ul",[t("li",[_._v("有时候编辑了文件，但是没有修改，但是"),t("code",[_._v("last-modified")]),_._v("属性的时间就会改变，导致服务器会重新发送资源，但是"),t("code",[_._v("etag")]),_._v("的出现就完美的避免了这个问题，他是文件的唯一标识")])]),_._v(" "),t("p",[_._v("缓存位置：")]),_._v(" "),t("ul",[t("li",[_._v("内存缓存 Memory-Cache")]),_._v(" "),t("li",[_._v("离线缓存 Service-Worker")]),_._v(" "),t("li",[_._v("磁盘缓存 Disk-Cache")]),_._v(" "),t("li",[_._v("推送缓存 Push-Cache")])]),_._v(" "),t("h3",{attrs:{id:"tcp-和udp有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-和udp有什么区别"}},[_._v("#")]),_._v(" "),t("strong",[t("code",[_._v("tcp")]),_._v(" 和"),t("code",[_._v("udp")]),_._v("有什么区别")])]),_._v(" "),t("ul",[t("li",[_._v("连接方面\n"),t("ul",[t("li",[_._v("tcp 面向连接，udp 不需要连接\n"),t("ul",[t("li",[_._v("tcp 需要三次握手四次挥手请求连接")])])])])]),_._v(" "),t("li",[_._v("可靠性\n"),t("ul",[t("li",[_._v("tcp 是可靠传输；一旦传输过程中丢包的话会进行重传")]),_._v(" "),t("li",[_._v("udp 是不可靠传输，但会最大努力交付")])])]),_._v(" "),t("li",[_._v("工作效率\n"),t("ul",[t("li",[_._v("UDP 实时性高，比 TCP 工作效率高\n"),t("ul",[t("li",[_._v("因为不需要建立连接，更不需要复杂的握手挥手以及复杂的算法，也没有重传机制")])])])])]),_._v(" "),t("li",[_._v("是否支持多对多\n"),t("ul",[t("li",[_._v("TCP 是点对点的")]),_._v(" "),t("li",[_._v("UDP 支持一对一，一对多，多对多")])])]),_._v(" "),t("li",[_._v("首部大小\n"),t("ul",[t("li",[_._v("tcp 首部占 20 字节")]),_._v(" "),t("li",[_._v("udp 首部占 8 字节")])])])]),_._v(" "),t("h2",{attrs:{id:"安全问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全问题"}},[_._v("#")]),_._v(" 安全问题")]),_._v(" "),t("h3",{attrs:{id:"什么是-cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-cdn"}},[_._v("#")]),_._v(" 什么是 CDN")]),_._v(" "),t("ul",[t("li",[_._v("CDN 的本质是将媒体资源，动静态图片，HTML，CSS，JS 缓存到离你更近的 IDC(互联网数据中心，也就是数据仓库)，从而让用户共享资源，从而缩小站点间的相应时间")]),_._v(" "),t("li",[_._v("访问速度有保障，稳定性也有保障")]),_._v(" "),t("li",[_._v("你可以省下资源服务器的一部分资源负担，节省空间节省流量")])]),_._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903604596244493",target:"_blank",rel:"noopener noreferrer"}},[_._v("CDN 的过程"),t("OutboundLink")],1)]),_._v(" "),t("h3",{attrs:{id:"什么是-xss-什么是-csrf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-xss-什么是-csrf"}},[_._v("#")]),_._v(" "),t("strong",[_._v("什么是 xss？什么是 csrf？")])]),_._v(" "),t("ul",[t("li",[_._v("xss 脚本注入\n"),t("ul",[t("li",[_._v("不需要你做任何的登录认证，它会通过合法的操作（比如在 url 中输入、在评论框中输入），向你的页面注入脚本（可能是 js、hmtl 代码块等）。")]),_._v(" "),t("li",[_._v("防御\n"),t("ul",[t("li",[_._v("编码：对用户输入的数据进行 HTML Entity 编码。把字符转换成 转义字符。Encode 的作用是将$var 等一些字符进行转化，使得浏览器在最终输出结果上是一样的。")]),_._v(" "),t("li",[_._v("过滤：移除用户输入的和事件相关的属性。")])])])])]),_._v(" "),t("li",[_._v("csrf 跨域请求伪造\n"),t("ul",[t("li",[_._v("在未退出 A 网站的前提下访问 B，B 使用 A 的 cookie 去访问服务器")]),_._v(" "),t("li",[_._v("防御：token，每次用户提交表单时需要带上 token（伪造者访问不到），如果 token 不合法，则服务器拒绝请求")])])])]),_._v(" "),t("h3",{attrs:{id:"owasp-top10-10-项最严重的-web-应用程序安全风险列表-都有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#owasp-top10-10-项最严重的-web-应用程序安全风险列表-都有哪些"}},[_._v("#")]),_._v(" OWASP top10 （10 项最严重的 Web 应用程序安全风险列表）都有哪些?")]),_._v(" "),t("ul",[t("li",[_._v("SQL 注入\n"),t("ul",[t("li",[_._v("在输入框里输入 sql 命令")])])]),_._v(" "),t("li",[_._v("失效的身份验证\n"),t("ul",[t("li",[_._v("拿到别人的 cookie 来向服务端发起请求，就可以做到登陆的目的")])])]),_._v(" "),t("li",[_._v("敏感数据泄露\n"),t("ul",[t("li",[_._v("明文传输状态下可能被抓包拦截，这时候就造成数据泄露\n"),t("ul",[t("li",[_._v("想做到抓包，比如在网吧，共享一个猫上网，这时候抓包就可行，方法网上一搜一大把")])])]),_._v(" "),t("li",[_._v("不过此风险大部分网站都能得到很好的解决，https 或者 md5 加密都可以")])])]),_._v(" "),t("li",[_._v("XML 外部实体")]),_._v(" "),t("li",[_._v("失效的访问控制")]),_._v(" "),t("li",[_._v("安全配置错误")]),_._v(" "),t("li",[_._v("XSS")]),_._v(" "),t("li",[_._v("不安全的反序列化")]),_._v(" "),t("li",[_._v("使用含有已知漏洞的组件")]),_._v(" "),t("li",[_._v("不足的日志记录和监控")])])])}),[],!1,null,null,null);v.default=i.exports}}]);