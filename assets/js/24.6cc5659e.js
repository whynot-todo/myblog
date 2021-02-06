(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{379:function(_,t,v){"use strict";v.r(t);var e=v(42),r=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"git基础知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git基础知识"}},[_._v("#")]),_._v(" git基础知识")]),_._v(" "),v("h3",{attrs:{id:"一、添加到版本库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、添加到版本库"}},[_._v("#")]),_._v(" 一、添加到版本库")]),_._v(" "),v("ol",[v("li",[v("code",[_._v("git add ./")]),_._v("将所有的文件添加到"),v("strong",[_._v("暂存区")])]),_._v(" "),v("li",[v("code",[_._v("git commit -m 'msg'")]),_._v("将"),v("strong",[_._v("暂存区")]),_._v("的文件添加到"),v("strong",[_._v("版本库")])])]),_._v(" "),v("h3",{attrs:{id:"二、远程操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、远程操作"}},[_._v("#")]),_._v(" 二、远程操作")]),_._v(" "),v("h4",{attrs:{id:"_1-克隆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-克隆"}},[_._v("#")]),_._v(" 1.克隆")]),_._v(" "),v("p",[v("strong",[v("code",[_._v("git clone url")]),_._v("将远程的仓库克隆到本地")]),_._v(" "),v("strong",[v("code",[_._v("git clone -b name url")]),_._v(" 单独克隆某一分支的内容")])]),_._v(" "),v("ul",[v("li",[_._v("对于"),v("code",[_._v("url")]),_._v("的说明\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200520012224354.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),_._v(" "),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200520012645443.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),v("li",[_._v("复制之后，粘贴执行命令")])]),_._v(" "),v("h4",{attrs:{id:"_2-链接到远程仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-链接到远程仓库"}},[_._v("#")]),_._v(" 2.链接到远程仓库")]),_._v(" "),v("p",[v("strong",[v("code",[_._v("git remote add [shortname] [url]")]),_._v("链接远程的仓库")])]),_._v(" "),v("p",[_._v("对于"),v("code",[_._v("shortname")]),_._v(","),v("code",[_._v("url")]),_._v("的说明")]),_._v(" "),v("ul",[v("li",[_._v("如何获取"),v("code",[_._v("shortname")]),_._v("，"),v("code",[_._v("url")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("shortname")]),_._v("你的远程仓库的名字,默认"),v("code",[_._v("origin")])]),_._v(" "),v("li",[v("code",[_._v("url")]),_._v("是你github项目的地址，"),v("strong",[_._v("就是上面的第二张图")]),_._v("https")]),_._v(" "),v("li",[_._v("你也可以用SSH，点击一下"),v("code",[_._v("Use SSH")])])])])]),_._v(" "),v("h4",{attrs:{id:"_3-查看链接的远程仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看链接的远程仓库"}},[_._v("#")]),_._v(" 3.查看链接的远程仓库")]),_._v(" "),v("p",[v("strong",[v("code",[_._v("git remote")]),_._v("查看链接的远程仓库")]),_._v(" "),v("strong",[v("code",[_._v("git remote -v")]),_._v("查看链接的远程仓库的地址")])]),_._v(" "),v("h4",{attrs:{id:"_4-从远程仓库拉取最新信息并合并到本地"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-从远程仓库拉取最新信息并合并到本地"}},[_._v("#")]),_._v(" 4.从远程仓库拉取最新信息并合并到本地")]),_._v(" "),v("p",[v("strong",[_._v("前提")]),_._v("：==你已经链接到了远程仓库==\n"),v("strong",[v("code",[_._v("git fetch")]),_._v("拉取最新信息")])]),_._v(" "),v("ul",[v("li",[_._v("执行完"),v("code",[_._v("git fetch")]),_._v("之后必须执行"),v("code",[_._v("git merge")])])]),_._v(" "),v("p",[v("strong",[v("code",[_._v("git merge")]),_._v("合并到本地")])]),_._v(" "),v("h4",{attrs:{id:"_5-将所写推送到远程仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-将所写推送到远程仓库"}},[_._v("#")]),_._v(" 5.将所写推送到远程仓库")]),_._v(" "),v("p",[v("strong",[v("code",[_._v("git push <远程仓库名> <本地分支> : <远程分支>")])])]),_._v(" "),v("ul",[v("li",[_._v("一定要注意写的时候本地分支不能省略，如果省略了就相当于删除远程分支。可以使用"),v("code",[_._v("git push origin master")]),_._v("保险\n"),v("ul",[v("li",[_._v("他表示将本地的"),v("code",[_._v("master")]),_._v("分支，推送到远程"),v("code",[_._v("master")]),_._v("分支上，如果没有，则会创建。")])])]),_._v(" "),v("li",[_._v("==当第一次使用push的时候，建议加上 "),v("code",[_._v("-u")]),_._v(" 参数,这样的话第二次push的时候直接使用  git push(本地与远程仓库的master分支已关联，且最终提交的一定是master分支)==\n"),v("ul",[v("li",[_._v("也就相当于是远程新建与本地相同的分支并关联")])])]),_._v(" "),v("li",[_._v("如果当前分支只有一个远程分支，可直接使用"),v("code",[_._v("git push")])])]),_._v(" "),v("h4",{attrs:{id:"_6-新建远程仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-新建远程仓库"}},[_._v("#")]),_._v(" 6. 新建远程仓库")]),_._v(" "),v("ol",[v("li",[_._v("点击 + 号，选择"),v("code",[_._v("New repository")])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200612230629921.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),_._v("\n2. 输入相应的信息，进行创建")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200612230813163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),_._v(" "),v("h3",{attrs:{id:"三、历史穿梭"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、历史穿梭"}},[_._v("#")]),_._v(" 三、历史穿梭")]),_._v(" "),v("blockquote",[v("p",[_._v("没有加入到"),v("code",[_._v("git")]),_._v("版本库中的文件一般是无法通过"),v("code",[_._v("git")]),_._v("来进行操作的,如果想要回退到此版本，最好"),v("code",[_._v("commit")]),_._v("一下")])]),_._v(" "),v("h4",{attrs:{id:"_1-版本回退"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-版本回退"}},[_._v("#")]),_._v(" 1.版本回退")]),_._v(" "),v("p",[v("strong",[v("code",[_._v("git reset --hard HEAD ^")]),_._v("  回退到上一个版本")]),_._v(" "),v("strong",[v("code",[_._v("git reset --hard HEAD ^^")]),_._v("  回退到上两个版本")]),_._v(" "),v("strong",[v("code",[_._v("git reset --hard HEAD ~100")]),_._v("  回退到上100个版本")])]),_._v(" "),v("p",[v("strong",[_._v("情况")])]),_._v(" "),v("ol",[v("li",[_._v("当你运行"),v("code",[_._v("git add")]),_._v("之后运行"),v("code",[_._v("git status")]),_._v("发现暂存区有我们不需要的文件可以运行\n"),v("ul",[v("li",[v("code",[_._v("git reset HEAD -- .")]),_._v("撤回刚刚"),v("code",[_._v("git add")]),_._v("的所有文件")]),_._v(" "),v("li",[v("code",[_._v("git reset HEAD -- fliename")]),_._v(" 撤回特定的文件")]),_._v(" "),v("li",[v("code",[_._v("git rm -cached filepath")]),_._v(" 将文件从缓存中删除")])])])]),_._v(" "),v("h4",{attrs:{id:"_2-回退到固定的版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-回退到固定的版本"}},[_._v("#")]),_._v(" 2.回退到固定的版本")]),_._v(" "),v("p",[v("strong",[v("code",[_._v("git reset --hard 版本号")]),_._v("  回退某一个版本")])]),_._v(" "),v("ul",[v("li",[_._v("查看版本("),v("strong",[_._v("每一次提交后的哈希值")]),_._v(")\n"),v("ul",[v("li",[v("strong",[v("code",[_._v("git reflog")])])])])])]),_._v(" "),v("h4",{attrs:{id:"_3-查看历史记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看历史记录"}},[_._v("#")]),_._v(" 3.查看历史记录")]),_._v(" "),v("p",[v("strong",[v("code",[_._v("git log --oneline")])])]),_._v(" "),v("h3",{attrs:{id:"四、分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、分支"}},[_._v("#")]),_._v(" 四、分支")]),_._v(" "),v("p",[_._v("一般来说我们不在"),v("code",[_._v("master")]),_._v("分支上直接写代码，而是新建一个分支，比如说"),v("code",[_._v("dev")]),_._v(",在这个分支上写代码，当写完检查无误后，合并分支,然后可以删除分支")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("git branch name")]),_._v("新建分支")]),_._v(" "),v("li",[v("code",[_._v("git branch")]),_._v("查看分支（本地），"),v("code",[_._v("git branch -a")]),_._v("查看远程分支(红色标注)和本地分支，"),v("code",[_._v("git branch -r")]),_._v("只查看远程分支")]),_._v(" "),v("li",[v("code",[_._v("git checkout name")]),_._v(" 切换分支")]),_._v(" "),v("li",[v("code",[_._v("git checkout -b name")]),_._v("新建分支，并切换到这个分支")]),_._v(" "),v("li",[v("code",[_._v("git merge name")]),_._v("合并某个分支到当前分支下")]),_._v(" "),v("li",[v("code",[_._v("git branch -D name")]),_._v(" 删除分支(本地)"),v("code",[_._v("git branch -r -d origin/name")]),_._v("删除远程分支")])]),_._v(" "),v("h3",{attrs:{id:"五、git忽略文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、git忽略文件"}},[_._v("#")]),_._v(" 五、git忽略文件")]),_._v(" "),v("ul",[v("li",[_._v("在根目录下新建"),v("code",[_._v(".gitignore")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("*")]),_._v("代表所有文件，比如说 "),v("code",[_._v("*.js")]),_._v("就是或略所有的js文件")]),_._v(" "),v("li",[v("code",[_._v("/")]),_._v("开头代表的是值忽略根目录下的文件")]),_._v(" "),v("li",[_._v("写上文件名，则表示，只要是这个文件名都会被忽略")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);