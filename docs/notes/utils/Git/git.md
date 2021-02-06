## git基础知识
### 一、添加到版本库
1. `git add ./`将所有的文件添加到**暂存区**
2. `git commit -m 'msg'`将**暂存区**的文件添加到**版本库**
### 二、远程操作
#### 1.克隆
**`git clone url`将远程的仓库克隆到本地**
**`git clone -b name url` 单独克隆某一分支的内容** 
+ 对于`url`的说明
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200520012224354.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70#pic_center )
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200520012645443.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70#pic_center)
+ 复制之后，粘贴执行命令
#### 2.链接到远程仓库
**`git remote add [shortname] [url]`链接远程的仓库**	

对于`shortname`,`url`的说明
+ 如何获取`shortname`，`url`
	+ `shortname`你的远程仓库的名字,默认`origin`
	+ `url`是你github项目的地址，**就是上面的第二张图**https
	+ 你也可以用SSH，点击一下`Use SSH`
#### 3.查看链接的远程仓库
**`git remote`查看链接的远程仓库**	
**`git remote -v`查看链接的远程仓库的地址**	
#### 4.从远程仓库拉取最新信息并合并到本地
**前提**：==你已经链接到了远程仓库==
**`git fetch`拉取最新信息**	
+ 执行完`git fetch`之后必须执行`git merge `

**`git merge`合并到本地**	
#### 5.将所写推送到远程仓库
**`git push <远程仓库名> <本地分支> : <远程分支>`**	

+ 一定要注意写的时候本地分支不能省略，如果省略了就相当于删除远程分支。可以使用`git push origin master`保险
    + 他表示将本地的`master`分支，推送到远程`master`分支上，如果没有，则会创建。
+ ==当第一次使用push的时候，建议加上 `-u` 参数,这样的话第二次push的时候直接使用  git push(本地与远程仓库的master分支已关联，且最终提交的一定是master分支)==
	+ 也就相当于是远程新建与本地相同的分支并关联
+ 如果当前分支只有一个远程分支，可直接使用`git push`
#### 6. 新建远程仓库
1. 点击 + 号，选择`New repository`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200612230629921.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70)
2. 输入相应的信息，进行创建

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200612230813163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70)
### 三、历史穿梭

> 没有加入到`git`版本库中的文件一般是无法通过`git`来进行操作的,如果想要回退到此版本，最好`commit`一下

####  1.版本回退
**`git reset --hard HEAD ^`  回退到上一个版本**	
**`git reset --hard HEAD ^^`  回退到上两个版本**	
**`git reset --hard HEAD ~100`  回退到上100个版本**	

**情况**
1. 当你运行`git add`之后运行`git status`发现暂存区有我们不需要的文件可以运行
	+ `git reset HEAD -- . `撤回刚刚`git add`的所有文件
	+ `git reset HEAD -- fliename` 撤回特定的文件
	+ `git rm -cached filepath` 将文件从缓存中删除


####  2.回退到固定的版本
**`git reset --hard 版本号`  回退某一个版本**	

+ 查看版本(**每一次提交后的哈希值**)
	+ **`git reflog`**
####  3.查看历史记录
**`git log --oneline`**

### 四、分支
一般来说我们不在`master`分支上直接写代码，而是新建一个分支，比如说`dev`,在这个分支上写代码，当写完检查无误后，合并分支,然后可以删除分支
+ `git branch name`新建分支
+ `git branch`查看分支（本地），`git branch -a`查看远程分支(红色标注)和本地分支，`git branch -r`只查看远程分支
+ `git checkout name` 切换分支
+ `git checkout -b name`新建分支，并切换到这个分支
+ `git merge name`合并某个分支到当前分支下
+ `git branch -D name` 删除分支(本地)`git branch -r -d origin/name`删除远程分支
### 五、git忽略文件
+ 在根目录下新建`.gitignore`
	+ ` * `代表所有文件，比如说 ` *.js `就是或略所有的js文件
	+ ` / `开头代表的是值忽略根目录下的文件
	+ 写上文件名，则表示，只要是这个文件名都会被忽略