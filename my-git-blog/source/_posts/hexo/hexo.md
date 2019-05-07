---
title: "hexo d命令报错 ERROR Deployer not found git"
date: 2019-05-07 11:32:53
tags: 
---

## 问题描述
已经在站点配置文件中写入了：
```yml
deploy:
  type: git
  repo: git@github.com:lanlan2017/lanlan2017.github.io.git  # Github pages地址
  branch: master
```
但是执行，hexo d报错：
```yml
ERROR Deployer not found: git
```
## 解决方案
这是因为没安装 `hexo-deployer-git` 插件，输入下面的插件安装就好了：
```yml
npm install hexo-deployer-git --save
```
然后在使用Hexo -d命令就可以推送了。