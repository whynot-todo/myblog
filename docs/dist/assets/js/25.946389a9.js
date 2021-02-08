(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{381:function(_,v,t){"use strict";t.r(v);var l=t(25),i=Object(l.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"网络部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络部分"}},[_._v("#")]),_._v(" 网络部分")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_33277654/article/details/112758362",target:"_blank",rel:"noopener noreferrer"}},[_._v("网页链接"),t("OutboundLink")],1)]),_._v(" "),t("p",[_._v("[脑图链接](https://kdocs.cn/l/cbAeeFS33wHF\n[金山文档] 未命名文件.pof)")]),_._v(" "),t("h2",{attrs:{id:"网络模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络模型"}},[_._v("#")]),_._v(" 网络模型")]),_._v(" "),t("h3",{attrs:{id:"网络osi七层模型都有哪些-tcp是哪一层的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络osi七层模型都有哪些-tcp是哪一层的"}},[_._v("#")]),_._v(" 网络OSI七层模型都有哪些？TCP是哪一层的")]),_._v(" "),t("ul",[t("li",[_._v("七层模型\n"),t("ul",[t("li",[_._v("应用层")]),_._v(" "),t("li",[_._v("表示层")]),_._v(" "),t("li",[_._v("会话层")]),_._v(" "),t("li",[_._v("传输层")]),_._v(" "),t("li",[_._v("网络层")]),_._v(" "),t("li",[_._v("数据链路层")]),_._v(" "),t("li",[_._v("物理层")])])]),_._v(" "),t("li",[_._v("TCP属于传输层")])]),_._v(" "),t("blockquote",[t("p",[_._v("助记：物联网传话表示应用")])]),_._v(" "),t("h3",{attrs:{id:"讲一讲三次握手四次挥手-为什么是三次握手四而不是两次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讲一讲三次握手四次挥手-为什么是三次握手四而不是两次握手"}},[_._v("#")]),_._v(" 讲一讲三次握手四次挥手，为什么是三次握手四而不是两次握手")]),_._v(" "),t("ul",[t("li",[_._v("客户端和服务端之间通过三次握手建立连接，四次挥手释放连接")]),_._v(" "),t("li",[_._v("三次握手，客户端先向服务端发起一个SYN包，进入SYN_SENT状态，服务端收到SYN后，给客户端返回一个ACK+SYN包，表示已收到SYN，并进入SYN_RECEIVE状态，最后客户端再向服务端发送一个ACK包表示确认，双方进入establish状态。\n"),t("ul",[t("li",[_._v("之所以是三次握手而不是两次，是因为如果只有两次，在服务端收到SYN后，向客户端返回一个ACK确认就进入establish状态，万一这个请求中间遇到网络情况而没有传给客户端，客户端一直是等待状态，后面服务端发送的信息客户端也接受不到了。")])])]),_._v(" "),t("li",[_._v("四次挥手，首先客户端向服务端发送一个FIN包，进入FIN_WAIT1状态，服务端收到后，向客户端发送ACK确认包，进入CLOSE_WAIT状态，然后客户端收到ACK包后进入FIN_WAIT2状态，然后服务端再把自己剩余没传完的数据发送给客户端，发送完毕后在发送一个FIN+ACK包，进入LAST_ACK（最后确认）状态，客户端收到FIN+ACK包后，再向服务端发送ACK包，在等待两个周期后在关闭连接\n"),t("ul",[t("li",[_._v("之所以等待两个周期是因为最后服务端发送的ACK包可能会丢失，如果不等待2个周期的话，服务端在没收收到ACK包之前，会不停的重复发送FIN包而不关闭，所以得等待两个周期")])])])]),_._v(" "),t("h2",{attrs:{id:"http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[_._v("#")]),_._v(" HTTP")]),_._v(" "),t("h3",{attrs:{id:"http的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http的结构"}},[_._v("#")]),_._v(" HTTP的结构")]),_._v(" "),t("ul",[t("li",[_._v("请求行 请求头 空行 请求体\n"),t("ul",[t("li",[_._v("请求行包括 http版本号，url，请求方式")]),_._v(" "),t("li",[_._v("响应行包括版本号，状态码，原因")])])])]),_._v(" "),t("h3",{attrs:{id:"http头都有哪些字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http头都有哪些字段"}},[_._v("#")]),_._v(" HTTP头都有哪些字段")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("请求头")]),_._v(" "),t("ul",[t("li",[_._v("cache-control 是否使用缓存")]),_._v(" "),t("li",[_._v("Connection：keep-alive 与服务器的连接状态")]),_._v(" "),t("li",[_._v("Host 主机域")])])]),_._v(" "),t("li",[t("p",[_._v("返回头")]),_._v(" "),t("ul",[t("li",[_._v("cache-control")]),_._v(" "),t("li",[_._v("etag 唯一标识，缓存用的")]),_._v(" "),t("li",[_._v("last-modified最后修改时间")])])])]),_._v(" "),t("h3",{attrs:{id:"说说你知道的状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你知道的状态码"}},[_._v("#")]),_._v(" 说说你知道的状态码")]),_._v(" "),t("ul",[t("li",[_._v("2开头的表示成功\n"),t("ul",[t("li",[_._v("一般见到的就是200")])])]),_._v(" "),t("li",[_._v("3开头的表示重定向\n"),t("ul",[t("li",[_._v("301永久重定向")]),_._v(" "),t("li",[_._v("302临时重定向")]),_._v(" "),t("li",[_._v("304表示可以在缓存中取数据（协商缓存）")])])]),_._v(" "),t("li",[_._v("4开头表示客户端错误\n"),t("ul",[t("li",[_._v("401用户权限")]),_._v(" "),t("li",[_._v("403跨域")]),_._v(" "),t("li",[_._v("404请求资源不存在")])])]),_._v(" "),t("li",[_._v("5开头表示服务端错误\n"),t("ul",[t("li",[_._v("500")])])])]),_._v(" "),t("h3",{attrs:{id:"http1-0和http1-1-还有http2有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http1-0和http1-1-还有http2有什么区别"}},[_._v("#")]),_._v(" http1.0和http1.1，还有http2有什么区别？")]),_._v(" "),t("ul",[t("li",[_._v("http0.9只能进行get请求")]),_._v(" "),t("li",[_._v("http1.0添加了POST，HEAD，OPTION，PUT，DELETE等")]),_._v(" "),t("li",[_._v("http1.1增加了长连接keep-alive，增加了host域，而且节约带宽")]),_._v(" "),t("li",[_._v("http2 多路复用，头部压缩，服务器推送")])]),_._v(" "),t("h3",{attrs:{id:"https和http有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https和http有什么区别"}},[_._v("#")]),_._v(" "),t("strong",[_._v("https和http有什么区别")])]),_._v(" "),t("ul",[t("li",[_._v("http无状态无连接，而且是明文传输，不安全")]),_._v(" "),t("li",[_._v("https传输内容加密，身份验证，保证数据完整性")])]),_._v(" "),t("h3",{attrs:{id:"https实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https实现原理"}},[_._v("#")]),_._v(" https实现原理")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/cai_shengfu/picgo/raw/master/img/20210207132058.png",alt:""}})]),_._v(" "),t("ul",[t("li",[_._v("首先客户端向服务端发起一个随机值，以及一个加密算法")]),_._v(" "),t("li",[_._v("服务端收到后返回一个协商好的加密算法，以及另一个随机值")]),_._v(" "),t("li",[_._v("服务端在发送一个公钥CA")]),_._v(" "),t("li",[_._v("客户端收到以后先验证CA是否有效，如果无效则报错弹窗，有过有效则进行下一步操作")]),_._v(" "),t("li",[_._v("客户端使用之前的两个随机值和一个预主密钥组成一个会话密钥，在通过服务端传来的公钥加密把会话密钥发送给服务端")]),_._v(" "),t("li",[_._v("服务端收到后使用私钥解密，得到两个随机值和预主密钥，然后组装成会话密钥")]),_._v(" "),t("li",[_._v("客户端在向服务端发起一条信息，这条信息使用会话秘钥加密，用来验证服务端时候能收到加密的信息")]),_._v(" "),t("li",[_._v("服务端收到信息后返回一个会话秘钥加密的信息")]),_._v(" "),t("li",[_._v("都收到以后SSL层连接建立成功")])]),_._v(" "),t("h3",{attrs:{id:"讲讲-http-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讲讲-http-缓存"}},[_._v("#")]),_._v(" "),t("strong",[_._v("讲讲 http 缓存")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/cai_shengfu/picgo/raw/master/img/20210206120133.png",alt:""}})]),_._v(" "),t("ul",[t("li",[t("p",[_._v("缓存分为强缓存和协商缓存")])]),_._v(" "),t("li",[t("p",[_._v("强缓存")]),_._v(" "),t("ul",[t("li",[_._v("在浏览器加载资源时，先看看"),t("code",[_._v("cache-control")]),_._v("里的"),t("code",[_._v("max-age")]),_._v("，判断数据有没有过期，如果没有直接使用该缓存 ，有些用户可能会在没有过期的时候就点了刷新按钮，这个时候浏览器就回去请求服务端，要想避免这样做，可以在"),t("code",[_._v("cache-control")]),_._v("里面加一个"),t("code",[_._v("immutable")]),_._v(".")]),_._v(" "),t("li",[_._v("public\n"),t("ul",[t("li",[_._v("允许客户端和虚拟服务器缓存该资源，cache-control 中的一个属性")])])]),_._v(" "),t("li",[_._v("private\n"),t("ul",[t("li",[_._v("只允许客户端缓存该资源")])])]),_._v(" "),t("li",[_._v("no-storage\n"),t("ul",[t("li",[_._v("不允许强缓存，可以协商缓存")])])]),_._v(" "),t("li",[_._v("no-cache\n"),t("ul",[t("li",[_._v("不允许缓存")])])])])]),_._v(" "),t("li",[t("p",[_._v("协商缓存")]),_._v(" "),t("ul",[t("li",[_._v("浏览器加载资源时，没有命中强缓存，这时候就去请求服务器，去请求服务器的时候，会带着两个参数，一个是"),t("code",[_._v("If-None-Match")]),_._v("，也就是响应头中的"),t("code",[_._v("etag")]),_._v("属性，每个文件对应一个"),t("code",[_._v("etag")]),_._v(";另一个参数是"),t("code",[_._v("If-Modified-Since")]),_._v(",也就是响应头中的"),t("code",[_._v("Last-Modified")]),_._v("属性，带着这两个参数去检验缓存是否真的过期，如果没有过期，则服务器会给浏览器返回一个 304 状态码，表示缓存没有过期，可以使用旧缓存。")])])])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("etag")]),_._v("的作用")])]),_._v(" "),t("ul",[t("li",[_._v("有时候编辑了文件，但是没有修改，但是"),t("code",[_._v("last-modified")]),_._v("属性的时间就会改变，导致服务器会重新发送资源，但是"),t("code",[_._v("etag")]),_._v("的出现就完美的避免了这个问题，他是文件的唯一标识")])]),_._v(" "),t("p",[_._v("缓存位置：")]),_._v(" "),t("ul",[t("li",[_._v("内存缓存 Memory-Cache")]),_._v(" "),t("li",[_._v("离线缓存 Service-Worker")]),_._v(" "),t("li",[_._v("磁盘缓存 Disk-Cache")]),_._v(" "),t("li",[_._v("推送缓存 Push-Cache")])]),_._v(" "),t("h2",{attrs:{id:"cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[_._v("#")]),_._v(" cookie")]),_._v(" "),t("h3",{attrs:{id:"面试官-localstorage、sessionstorage、cookie、session-之间有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-localstorage、sessionstorage、cookie、session-之间有什么区别"}},[_._v("#")]),_._v(" 面试官：localStorage、SessionStorage、cookie、session 之间有什么区别")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/cai_shengfu/picgo/raw/master/img/20210207101543.png",alt:""}})]),_._v(" "),t("ul",[t("li",[_._v("localStorage\n"),t("ul",[t("li",[_._v("生命周期：关闭浏览器后数据依然保留，除非手动清除，否则一直在")]),_._v(" "),t("li",[_._v("作用域：相同浏览器的不同标签在同源情况下可以共享localStorage")])])]),_._v(" "),t("li",[_._v("sessionStorage\n"),t("ul",[t("li",[_._v("生命周期：关闭浏览器或者标签后即失效")]),_._v(" "),t("li",[_._v("作用域：只在当前标签可用，当前标签的iframe中且同源可以共享")])])]),_._v(" "),t("li",[_._v("cookie\n"),t("ul",[t("li",[_._v("是保存在客户端的，一般由后端设置值，可以设置过期时间")]),_._v(" "),t("li",[_._v("储存大小只有4K")]),_._v(" "),t("li",[_._v("一般用来保存用户的信息的")]),_._v(" "),t("li",[_._v("在http下cookie是明文传输的,较不安全")]),_._v(" "),t("li",[_._v("cookie属性有\n"),t("ul",[t("li",[_._v("http-only:不能被客户端更改访问，防止XSS攻击（保证cookie安全性的操作）")]),_._v(" "),t("li",[_._v("Secure：只允许在https下传输")]),_._v(" "),t("li",[_._v("Max-age: cookie生成后失效的"),t("strong",[_._v("秒数")])]),_._v(" "),t("li",[_._v("expire: cookie的最长有效时间，若不设置则cookie生命期与会话期相同")])])])])]),_._v(" "),t("li",[_._v("session\n"),t("ul",[t("li",[_._v("session是保存在服务端的")]),_._v(" "),t("li",[_._v("session的运行依赖sessionId，而sessionId又保存在cookie中，所以如果禁用的cookie，session也是不能用的，不过硬要用也可以，可以把sessionId保存在URL中")]),_._v(" "),t("li",[_._v("session一般用来跟踪用户的状态")]),_._v(" "),t("li",[_._v("session 的安全性更高，保存在服务端，不过一般为使服务端性能更加，会考虑部分信息保存在cookie中")])])])]),_._v(" "),t("h3",{attrs:{id:"怎么使用cookie保存用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么使用cookie保存用户信息"}},[_._v("#")]),_._v(" 怎么使用cookie保存用户信息")]),_._v(" "),t("ul",[t("li",[_._v("document.cookie(“名字 = 数据;expire=时间”)")])]),_._v(" "),t("h3",{attrs:{id:"怎么删除cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么删除cookie"}},[_._v("#")]),_._v(" 怎么删除cookie")]),_._v(" "),t("ul",[t("li",[_._v("目前没有提供删除的操作，但是可以把它的Max-age设置为0，也就是立马失效，也就是删除了")])]),_._v(" "),t("h3",{attrs:{id:"localstorage存满了怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localstorage存满了怎么办"}},[_._v("#")]),_._v(" localstorage存满了怎么办？")]),_._v(" "),t("ul",[t("li",[_._v("划分域名，各域名下的存储空间由各业务组统一规划使用")]),_._v(" "),t("li",[_._v("跨页面传数据：考虑单页应用、采用url传输数据")]),_._v(" "),t("li",[_._v("最后兜底方案：情调别人的存储")])]),_._v(" "),t("h3",{attrs:{id:"get-和-post-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-的区别"}},[_._v("#")]),_._v(" "),t("strong",[_._v("Get 和 Post 的区别")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/cai_shengfu/picgo/raw/master/img/20210206120632.png",alt:""}})]),_._v(" "),t("ul",[t("li",[_._v("冪等/不冪等（可缓存/不可缓存）\n"),t("ul",[t("li",[_._v("get 请求是冪等的，所以 get 请求的数据是可以缓存的")]),_._v(" "),t("li",[_._v("而 post 请求是不冪等的，查询查询对数据是有副作用的，是不可缓存的")])])]),_._v(" "),t("li",[_._v("传参\n"),t("ul",[t("li",[_._v("get 传参，参数是在 url 中的\n"),t("ul",[t("li",[_._v("准确的说 get 传参也可以放到 body 中，只不过不推荐使用")])])]),_._v(" "),t("li",[_._v("post 传参，参数是在请求体中\n"),t("ul",[t("li",[_._v("准确的说 post 传参也可以放到 url 中，只不过不推荐使用")])])])])]),_._v(" "),t("li",[_._v("安全性\n"),t("ul",[t("li",[_._v("get 较不安全")]),_._v(" "),t("li",[_._v("post 较为安全")]),_._v(" "),t("li",[_._v("准确的说两者都不安全，都是明文传输的，在路过公网的时候都会被访问到，不管是 url 还是 header 还是 body，都会被访问到，要想做到安全，就需要使用 https")])])]),_._v(" "),t("li",[_._v("参数长度\n"),t("ul",[t("li",[_._v("get 参数长度有限，是较小的\n"),t("ul",[t("li",[_._v("准确来说，get 在 url 传参的时候是很小的")])])]),_._v(" "),t("li",[_._v("post 传参长度不受限制")])])]),_._v(" "),t("li",[_._v("发送数据\n"),t("ul",[t("li",[_._v("post 传参发送两个请求包，一个是请求头，一个是请求体，请求头发送后服务器进行验证，要是验证通过的话就会给客户端发送一个 100-continue 的状态码，然后就会发送请求体")])])]),_._v(" "),t("li",[_._v("字符编码\n"),t("ul",[t("li",[_._v("get 在 url 上传输的时候只允许 ASCII(阿斯科)编码")])])])]),_._v(" "),t("h3",{attrs:{id:"tcp-和udp有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-和udp有什么区别"}},[_._v("#")]),_._v(" "),t("strong",[t("code",[_._v("tcp")]),_._v(" 和"),t("code",[_._v("udp")]),_._v("有什么区别")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/cai_shengfu/picgo/raw/master/img/20210207095603.png",alt:""}})]),_._v(" "),t("ul",[t("li",[_._v("连接方面\n"),t("ul",[t("li",[_._v("tcp 面向连接，udp 不需要连接\n"),t("ul",[t("li",[_._v("tcp 需要三次握手四次挥手请求连接")])])])])]),_._v(" "),t("li",[_._v("可靠性\n"),t("ul",[t("li",[_._v("tcp 是可靠传输；一旦传输过程中丢包的话会进行重传")]),_._v(" "),t("li",[_._v("udp 是不可靠传输，但会最大努力交付")])])]),_._v(" "),t("li",[_._v("工作效率\n"),t("ul",[t("li",[_._v("UDP 实时性高，比 TCP 工作效率高\n"),t("ul",[t("li",[_._v("因为不需要建立连接，更不需要复杂的握手挥手以及复杂的算法，也没有重传机制")])])])])]),_._v(" "),t("li",[_._v("是否支持多对多\n"),t("ul",[t("li",[_._v("TCP 是点对点的")]),_._v(" "),t("li",[_._v("UDP 支持一对一，一对多，多对多")])])]),_._v(" "),t("li",[_._v("首部大小\n"),t("ul",[t("li",[_._v("tcp 首部占 20 字节")]),_._v(" "),t("li",[_._v("udp 首部占 8 字节")])])])]),_._v(" "),t("h2",{attrs:{id:"安全问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全问题"}},[_._v("#")]),_._v(" 安全问题")]),_._v(" "),t("h3",{attrs:{id:"什么是-cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-cdn"}},[_._v("#")]),_._v(" 什么是 CDN")]),_._v(" "),t("ul",[t("li",[_._v("CDN 的本质是将媒体资源，动静态图片，HTML，CSS，JS 缓存到离你更近的 IDC(互联网数据中心，也就是数据仓库)，从而让用户共享资源，从而缩小站点间的相应时间")]),_._v(" "),t("li",[_._v("访问速度有保障，稳定性也有保障")]),_._v(" "),t("li",[_._v("你可以省下资源服务器的一部分资源负担，节省空间节省流量")])]),_._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903604596244493",target:"_blank",rel:"noopener noreferrer"}},[_._v("CDN 的过程"),t("OutboundLink")],1)]),_._v(" "),t("h3",{attrs:{id:"什么是-xss-什么是-csrf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-xss-什么是-csrf"}},[_._v("#")]),_._v(" "),t("strong",[_._v("什么是 xss？什么是 csrf？")])]),_._v(" "),t("ul",[t("li",[_._v("xss 脚本注入\n"),t("ul",[t("li",[_._v("不需要你做任何的登录认证，它会通过合法的操作（比如在 url 中输入、在评论框中输入），向你的页面注入脚本（可能是 js、hmtl 代码块等）。")]),_._v(" "),t("li",[_._v("防御\n"),t("ul",[t("li",[_._v("编码：对用户输入的数据进行 HTML Entity 编码。把字符转换成 转义字符。Encode 的作用是将$var 等一些字符进行转化，使得浏览器在最终输出结果上是一样的。")]),_._v(" "),t("li",[_._v("过滤：移除用户输入的和事件相关的属性。")])])])])]),_._v(" "),t("li",[_._v("csrf 跨域请求伪造\n"),t("ul",[t("li",[_._v("在未退出 A 网站的前提下访问 B，B 使用 A 的 cookie 去访问服务器")]),_._v(" "),t("li",[_._v("防御：token，每次用户提交表单时需要带上 token（伪造者访问不到），如果 token 不合法，则服务器拒绝请求")])])])]),_._v(" "),t("h3",{attrs:{id:"owasp-top10-10-项最严重的-web-应用程序安全风险列表-都有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#owasp-top10-10-项最严重的-web-应用程序安全风险列表-都有哪些"}},[_._v("#")]),_._v(" OWASP top10 （10 项最严重的 Web 应用程序安全风险列表）都有哪些?")]),_._v(" "),t("ul",[t("li",[_._v("SQL 注入\n"),t("ul",[t("li",[_._v("在输入框里输入 sql 命令")])])]),_._v(" "),t("li",[_._v("失效的身份验证\n"),t("ul",[t("li",[_._v("拿到别人的 cookie 来向服务端发起请求，就可以做到登陆的目的")])])]),_._v(" "),t("li",[_._v("敏感数据泄露\n"),t("ul",[t("li",[_._v("明文传输状态下可能被抓包拦截，这时候就造成数据泄露\n"),t("ul",[t("li",[_._v("想做到抓包，比如在网吧，共享一个猫上网，这时候抓包就可行，方法网上一搜一大把")])])]),_._v(" "),t("li",[_._v("不过此风险大部分网站都能得到很好的解决，https 或者 md5 加密都可以")])])]),_._v(" "),t("li",[_._v("XML 外部实体")]),_._v(" "),t("li",[_._v("失效的访问控制")]),_._v(" "),t("li",[_._v("安全配置错误")]),_._v(" "),t("li",[_._v("XSS")]),_._v(" "),t("li",[_._v("不安全的反序列化")]),_._v(" "),t("li",[_._v("使用含有已知漏洞的组件")]),_._v(" "),t("li",[_._v("不足的日志记录和监控")])])])}),[],!1,null,null,null);v.default=i.exports}}]);