import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/mysql/mysql架构.html.vue"
const data = JSON.parse("{\"path\":\"/mysql/mysql%E6%9E%B6%E6%9E%84.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"读写锁\",\"slug\":\"读写锁\",\"link\":\"#读写锁\",\"children\":[]},{\"level\":2,\"title\":\"事务\",\"slug\":\"事务\",\"link\":\"#事务\",\"children\":[{\"level\":3,\"title\":\"ACID事务的概念\",\"slug\":\"acid事务的概念\",\"link\":\"#acid事务的概念\",\"children\":[]}]},{\"level\":2,\"title\":\"死锁\",\"slug\":\"死锁\",\"link\":\"#死锁\",\"children\":[]}],\"git\":{\"updatedTime\":1722509187000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"mysql/mysql架构.md\",\"excerpt\":\"<h2>读写锁</h2>\\n<p>从电子表格中读取数据不会有什么麻烦，即使很多人同时读取也不会有问题。因为读取操作不会修改数据，所以不太可能出错。\\n如果有人试图删除<code>A25</code>单元格中的内容，而其他人正在读取电子表格，会发生什么情况？\\n这要视情况而定，读取者可能遇到报错退出，也可能得到不一致的数据视图。为安全起见，即使是从电子表格中读取数据也需要特别小心。</p>\\n<p>电子表格就是一张简单的数据库表。修改数据库表中的记录，和删除或者修改电子表格文件中的单元格内容十分类似。</p>\\n<p class=\\\"bg-yellow-200\\\">处理并发 <span class=\\\"font-bold\\\">读/写</span> 访问的系统通常实现一个由两种锁类型组成的锁系统。这两种锁通常被称为 <span class=\\\"font-bold\\\">共享锁(shared lock)</span> 和 <span class=\\\"font-bold\\\">排他锁(exclusive lock)</span>，也叫 <span class=\\\"font-bold\\\">读锁(read lock)</span>和 <span class=\\\"font-bold\\\">写锁(writelock)</span> 。</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
