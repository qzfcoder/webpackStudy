# git

### git基本概念

git是一个免费的开源分布式版本控制系统，目的是快速高效的处理小型到大型项目的所有事务

git他能帮助我们记录每次文件的改动，在工作的时候能够协同开发，能够查看某一次的改动，有效的提高工作效率

### git的安装

git下载安装地址：[Git (git-scm.com)](https://git-scm.com/) （下载安装完成后，桌面右键出现git bash，就代表安装成功）

配置一下信息

```
$git config --global user.name "你的名字"
$git config --global user.email "你的邮箱"
```

### git 基础操作

git init ：初始化创建仓库

​			会常见出一个隐藏的**.git**文件，所有操作历史都会存入这个文件中

git status：查看当前仓库坐在目录的文件状态

​				Untracked未追踪的 （告诉我们什么文件并没有被追踪）

git add filename - 使文件加入追踪  （ 我使用git add .）

git commit -m ' xxxx' 提交文件进入暂存区， 并写文件信息

git push 提交到远程仓库

git log 查看提交记录



文件有三种状态  已修改  已暂存  已提交

git commit 将文件提交进入 stage中 文件状态变更为已暂存 

### git基本图解

![image-20210829144813420.png](https://i.loli.net/2021/09/15/5RcKuZW8JyxLsYG.png)

本地仓库书相对于远程仓库而言的

本地仓库 = 工作区 + 版本区

工作区，就是你当前写的文件

版本区 一般就是.git文件，git文件中存储了提交的版本信息等等

**github中**

```git
git init 原本本地仓库只包含着工作区，这是最常见的工作状态。此时，git init一下，表示在本地区域创建了一个.git文件,版本区建立。
git add . 表示把工作区的所有文件全部提交到版本区里面的暂存区
当然你也可以通过 git add ./xxx/ 一条一条分批添加到暂存区。
git commit -m "xxx" 把暂存区的所有文件提交到仓库区，暂存区空空荡荡。
git remote add origin https://github.com/name/name_cangku.git 把本地仓库与远程仓库连接起来。
git push -u origin master 把仓库区的文件提交到远程仓库里。
一旦提交后，如果你又没有对工作区做任何修改，那么工作区就是“干净”的。会有这样的信息nothing to commit, working tree clean
```

### 版本的回溯与前进

提交一个文件，有时候我们会提交很多次，在提交历史中，这样就产生了不同的版本。每次提交，Git会把他们串成一条时间线。如何回溯到我们提交的上一个版本，用`git reset --hard + 版本号`即可。 版本号可以用`git log`来查看，每一次的版本都会产生不一样的版本号。回溯之后，`git log`查看一下发现离我们最近的那个版本已经不见了。但是我还想要前进到最近的版本应该如何？只要`git reset --hard + 版本号`就行。退一步来讲，虽然我们可以通过`git reset --hard + 版本号`,靠记住版本号来可以在不同的版本之间来回穿梭。**但是**,有时候把版本号弄丢了怎么办？`git reflog`帮你记录了每一次的命令，这样就可以找到版本号了，这样你又可以通过`git reset`来版本穿梭了。

### 撤销

- 场景1：在工作区时，你修改了一个东西，你想撤销修改，`git checkout -- file`。廖雪峰老师指出撤销修改就回到和版本库一模一样的状态，即用版本库里的版本替换工作区的版本。
- 场景2：你修改了一个内容，并且已经`git add`到暂存区了。想撤销怎么办？回溯版本，`git reset --hard + 版本号`,再`git checkout -- file`,替换工作区的版本。
- 场景3：你修改了一个内容，并且已经`git commit`到了`master`。跟场景2一样，版本回溯，再进行撤销。

### 删除

- 如果你`git add`一个文件到暂存区，然后在工作区又把文件删除了，Git会知道你删除了文件。如果你要把版本库里的文件删除，`git rm` 并且`git commit -m "xxx"`.
- 如果你误删了工作区的文件，怎么办？使用撤销命令，`git checkout --<file>`就可以。**这再次证明了撤销命令其实就是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。**

### 分支

分支，就像平行宇宙，廖雪峰老师如是说。你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。

## 创建与合并分支



![image-20210829150833271.png](https://i.loli.net/2021/09/15/L21kOQPi38Cvecl.png)

在没有其他分支插进来时，只有一个master主分支。每次你`git push -u origin master` 提交就是增加一条时间轴，master也会跟着移动。





![image-20210829150859292.png](https://i.loli.net/2021/09/15/2omS8Yja6PMDzfJ.png)

通过git branch命令可以查看当前目录下有什么分支，通过git branch xxxx 可以来创建一个新的分支。我们通过git branch other来创建一个other的分支，通过other提交，虽然时间轴向前走了，但是主分支master还在原来的位置。这时候我们也可以通过 git push origin 分支名字来提交代码推送到远端服务器上





![image-20210829151056944.png](https://i.loli.net/2021/09/15/flhjYwxH1VJO7Ug.png)



理论分析完，看一下命令怎么写。

- 创建分支`other`,切换到`other`分支。

```
git branch other
git checkout other
复制代码
```

- 查看当前所有分支

```
git branch
复制代码
* other
  master
复制代码
```

当前的分支会有一个`*`

- 用`other`提交

```
git add ./xxx/
git commit -m "xxx"
复制代码
```

- `other`分支完成，切换回`master`

```
git checkout master
复制代码
```

- 此时，master分支上并没有`other`的文件，因为分支还没有合并。
- **合并分支**

```
git merge other
复制代码
```

- 合并完成之后，就可以在master分支上查看到文件了。
- 删除`other`分支。

```
git branch -d other
复制代码
```

- 我由此想到，在以后工作中，应该是一个开放小组共同开发一个项目，组长会创建很多分支，每一个分支可以交给一个人去开发某一个功能，一个小组共同开发而且不会相互干扰。谁的功能完成了，可以由组长合并一下完成了的分支。哦，完美！

## 解决合并分支问题



![image-20210829151037546.png](https://i.loli.net/2021/09/15/XRlAEIyfqQVSpaC.png)

假如有这样一种情况，分支`other`已经`commit`了，**但是**此时指针指回`master`时，并且`master`没有合并，而是`git add / commit` 提交了。这样，就产生了冲突，主分支`master`文件内容与`other`分支的内容不一样。合并不起来！所以，



- 修改文件的内容，让其保持一致。

- `git add` `git commit` 提交。

- 分支合并了。

  ![image-20210829151056944.png](https://i.loli.net/2021/09/15/flhjYwxH1VJO7Ug.png)

- `git log --graph` 查看分支合并图

- `git branch -d other` 删除分支，任务结束。

## 分支管理策略

- `git merge --no-ff other` 禁用`Fast forward`模式，因为使用`Fast forward`模式，删除分支后，分支历史信息会丢失。

### BUG分支

> 廖雪峰老师提到，工作中每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。但如果你手上有分支在工作中，你的上级要你改另外的分支的BUG。你要把现在正在工作的分支保存下来，`git stash`,把当前工作现场“存储”起来，等以后恢复后继续工作。当你解决BUG后，`git checkout other`回到自己的分支。用`git stash list`查看你刚刚“存放”起来的工作去哪里了。此时你要恢复工作：

- `git stash apply`恢复却不删除`stash`内容，`git stash drop`删除`stash`内容。
- `git stash pop`恢复的同时把stash内容也删了.
- 此时，用`git stash list`查看，看不到任何`stash` 内容。
   **总结：修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；当手头工作没有完成时，先把工作现场git stash一下，然后去修复bug，修复后，再git stash pop，回到工作现场**

### 删除分支

- `git branch -d + 分支`有可能会删除失败，因为Git会保护没有被合并的分支。
- `git branch -D + 分支` 强行删除，丢弃没被合并的分支。

### 多人协作

- `git remote` 查看远程库的信息，会显示`origin`，远程仓库默认名称为`origin`
- `git remote -v`显示更详细的信息
- `git push -u origin master`推送`master`分支到`origin`远程仓库。
- `git push -u origin other` 推送`other`到`origin`远程仓库。

### 抓取分支



![image-20210829151109524.png](https://i.loli.net/2021/09/15/sNf6dQ1GcxVKAS3.png)

产生上图的冲突时，



- `git pull` 把最新的提交从远程仓库中抓取下来，在本地合并，解决冲突。在进行`git pull`

- 如果

  ```
  git pull
  ```

   也失败了，还要指定分支之间的链接，这一步Git会提醒你怎么做。然后再

  ```
  git pull
  ```

  。

  > **廖雪峰老师的总结：多人协作的工作模式通常是这样：**

  - 首先，可以试图用`git push origin <branch-name>`推送自己的修改；
  - 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
  - 如果合并有冲突，则解决冲突，并在本地提交；
  - 没有冲突或者解决掉冲突后，再用`git push origin <branch-name>` 推送就能成功！
  - 如果`git pull`提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream-to <branch-name> origin/<branch-name>`。

  ### Rebase

- `git rebase` 把分叉的提交历史“整理”成一条直线，看上去更直观.缺点是本地的分叉提交已经被修改过了。

- 最后在进行`git push -u origin master`

- `rebase`的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

# 标签管理

> **标签作用:** 在开发的一些关键时期,使用标签来记录这些关键时刻, 例如发布版本, 有重大修改, 升级的时候, 会使用标签记录这些时刻, 来永久标记项目中的关键历史时刻;
>  Git的标签虽然是版本库的快照，但其实它就是指向某个commit的指针。
>  `tag`其实就是一个让人容易记住的有意义的名字，它跟某个commit绑在一起。比如`tag v2.1`就是把历史上的一个版本的东西叫做`v2.1`

### 创建标签

步骤：

- `git branch`查看当前分支,`git checkout master`切换到`master`分支。
- `git tag <name>` 打标签，默认为`HEAD`。比如`git tag v1.0`
- 默认标签是打在最新提交的`commit`上的。如果想要打标签在以前的`commit`上，要`git log`找到历史提交的`commit` id.
- 如果一个`commt id`是`du2n2d9`,执行`git tag v1.0 du2n2d9`就把这个版本打上了`v1.0`的标签了。
- `git tag` 查看所有标签，可以知道历史版本的`tag`
- 标签不是按时间顺序列出，而是按字母排序的。
- `git show <tagname>` 查看标签信息。
- `git tag -a <标签名> -m "<说明>"`,创建带说明的标签。 `-a`指定标签名，`-m`指定说明文字。用`show`可以查看说明。

### 操作标签

- `git tag -d v1.0` 删除标签。因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。
- `git push origin <tagname>` 推送某个标签到远程
- `git push origin --tags` 一次性推送全部尚未推送到远程的本地标签
- 如果标签推送到远程。`git tag -d v1.0` 先删除本地标签v1.0。`git push origin :refs/tags/v1.0`删除远程标签v1.0

### 常用Git命令

- `git config --global user.name "你的名字"` 让你全部的`Git`仓库绑定你的名字
- `git config --global user.email "你的邮箱"` 让你全部的`Git`仓库绑定你的邮箱
- `git init` 初始化你的仓库
- `git add .` 把工作区的文件全部提交到暂存区
- `git add ./<file>/` 把工作区的`<file>`文件提交到暂存区
- `git commit -m "xxx"` 把暂存区的所有文件提交到仓库区，**暂存区空空荡荡**
- `git remote add origin https://github.com/name/name_cangku.git` 把本地仓库与远程仓库连接起来
- `git push -u origin master` 把仓库区的主分支`master`提交到远程仓库里
- `git push -u origin <其他分支>` 把其他分支提交到远程仓库
- `git status`查看当前仓库的状态
- `git diff` 查看文件修改的具体内容
- `git log` 显示从最近到最远的提交历史
- `git clone + 仓库地址`下载克隆文件
- `git reset --hard + 版本号` 回溯版本，版本号在`commit`的时候与`master`跟随在一起
- `git reflog` 显示命令历史
- `git checkout -- <file>` 撤销命令，用版本库里的文件替换掉工作区的文件。我觉得就像是`Git`世界的`ctrl + z`
- `git rm` 删除版本库的文件
- `git branch` 查看当前所有分支
- `git branch <分支名字>` 创建分支
- `git checkout <分支名字>` 切换到分支
- `git merge <分支名字>` 合并分支
- `git branch -d <分支名字>` 删除分支,有可能会删除失败，因为`Git`会保护没有被合并的分支
- `git branch -D + <分支名字>` 强行删除，丢弃没被合并的分支
- `git log --graph` 查看分支合并图
- `git merge --no-ff <分支名字>` 合并分支的时候禁用`Fast forward`模式,因为这个模式会丢失分支历史信息
- `git stash` 当有其他任务插进来时，把当前工作现场“存储”起来,以后恢复后继续工作
- `git stash list` 查看你刚刚“存放”起来的工作去哪里了
- `git stash apply` 恢复却不删除`stash`内容
- `git stash drop` 删除`stash`内容
- `git stash pop` 恢复的同时把stash内容也删了
- `git remote` 查看远程库的信息，会显示`origin`，远程仓库默认名称为`origin`
- `git remote -v` 显示更详细的信息
- `git pull` 把最新的提交从远程仓库中抓取下来，在本地合并,和`git push`相反
- `git rebase` 把分叉的提交历史“整理”成一条直线，看上去更直观
- `git tag` 查看所有标签，可以知道历史版本的tag
- `git tag <name>` 打标签，默认为`HEAD`。比如`git tag v1.0`
- `git tag <tagName> <版本号>` 把版本号打上标签，版本号就是`commit`时，跟在旁边的一串字母数字
- `git show <tagName>` 查看标签信息
- `git tag -a <tagName> -m "<说明>"` 创建带说明的标签。 `-a`指定标签名，`-m`指定说明文字
- `git tag -d <tagName>` 删除标签
- `git push origin <tagname>` 推送某个标签到远程
- `git push origin --tags` 一次性推送全部尚未推送到远程的本地标签
- `git push origin :refs/tags/<tagname>` 删除远程标签`<tagname>`
- `git config --global color.ui true` 让Git显示颜色，会让命令输出看起来更醒目
- `git add -f <file>` 强制提交已忽略的的文件
- `git check-ignore -v <file>` 检查为什么Git会忽略该文件

