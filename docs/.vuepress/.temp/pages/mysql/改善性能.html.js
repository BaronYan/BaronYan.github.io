import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/mysql/改善性能.html.vue"
const data = JSON.parse("{\"path\":\"/mysql/%E6%94%B9%E5%96%84%E6%80%A7%E8%83%BD.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1724077484000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"mysql/改善性能.md\",\"excerpt\":\"<p>MySQL是一个多用户多线程的DBMS，换言之，它经常同时执行多个任务。\\n如果这些任务中的某一个执行缓慢，则所有请求都会执行缓慢。\\n如果你遇到显著的性能不良，可使用 <code>SHOW PROCESSLIST</code> 显示所有活动进程（以及它们的线程ID和执行时间）​。\\n你还可以用 <code>KILL</code> 命令终结某个特定的进程（使用这个命令需要作为管理员登录）​。</p>\\n<ul>\\n<li>总是有不止一种方法编写同一条 SELECT 语句。应该试验联结、并、子查询等，找出最佳的方法。</li>\\n<li>使用 EXPLAIN 语句让 MySQL 解释它将如何执行一条 SELECT 语句。</li>\\n<li>一般来说，存储过程执行得比一条一条地执行其中的各条MySQL语句快。</li>\\n<li>应该总是使用正确的数据类型。</li>\\n<li>决不要检索比需求还要多的数据。换言之，不要用SELECT *（除非你真正需要每个列）​。</li>\\n<li>有的操作（包括INSERT）支持一个可选的 DELAYED 关键字，如果使用它，将把控制立即返回给调用程序，并且一旦有可能就实际执行该操作。</li>\\n<li>在导入数据时，应该关闭自动提交。你可能还想删除索引（包括FULLTEXT索引）​，然后在导入完成后再重建它们。</li>\\n<li>必须索引数据库表以改善数据检索的性能。确定索引什么不是一件微不足道的任务，需要分析使用的 SELECT 语句以找出重复的 WHERE 和 ORDER BY 子句。如果一个简单的 WHERE 子句返回结果所花的时间太长，则可以断定其中使用的列（或几个列）就是需要索引的对象。</li>\\n<li>你的 SELECT 语句中有一系列复杂的 OR 条件吗？通过使用多条 SELECT 语句和连接它们的 UNION 语句，你能看到极大的性能改进。</li>\\n<li>索引改善数据检索的性能，但损害数据插入、删除和更新的性能。如果你有一些表，它们收集数据且不经常被搜索，则在有必要之前不要索引它们。​（索引可根据需要添加和删除。​）</li>\\n<li>LIKE很慢。一般来说，最好是使用 FULLTEXT 而不是 LIKE 。</li>\\n<li>数据库是不断变化的实体。一组优化良好的表一会儿后可能就面目全非了。由于表的使用和内容的更改，理想的优化和配置也会改变。</li>\\n<li>最重要的规则就是，每条规则在某些条件下都会被打破。</li>\\n</ul>\"}")
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
