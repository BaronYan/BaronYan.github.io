import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/mysql/index.html.vue"
const data = JSON.parse("{\"path\":\"/mysql/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"MySQL语句的语法\",\"slug\":\"mysql语句的语法\",\"link\":\"#mysql语句的语法\",\"children\":[]}],\"git\":{\"updatedTime\":1725615225000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":3}]},\"filePathRelative\":\"mysql/index.md\",\"excerpt\":\"<p><a href=\\\"/mysql/mysql%E6%9E%B6%E6%9E%84.html\\\" target=\\\"_blank\\\">mysql架构</a></p>\\n<h2>MySQL语句的语法</h2>\\n<ul>\\n<li><code>ALTER TABLE</code> 用来更新已存在表的模式。为了创建新表，应该使用 <code>CREATE TABLE</code>。</li>\\n<li><code>CREATE TABLE</code> 用于创建新数据库表。为更新已经存在的表的结构，使用ALTERTABLE。</li>\\n<li><code>COMMIT</code> 用来将事务处理写到数据库。</li>\\n<li><code>CREATE INDEX</code> 用于在一个或多个列上创建索引。</li>\\n<li><code>CREATE PROCEDURE</code> 用于创建存储过程。</li>\\n<li><code>CREATE USER</code> 用于向系统中添加新的用户账户</li>\\n<li><code>CREATE VIEW</code> 用来创建一个或多个表上的新视图。</li>\\n<li><code>DELETE</code> 从表中删除一行或多行。</li>\\n<li><code>DROP</code> 永久地删除数据库对象（表、视图、索引等）​。</li>\\n<li><code>INSERT</code> 给表增加一行</li>\\n<li><code>INSERT SELECT</code> 插入 SELECT 的结果到一个表。</li>\\n<li><code>ROLLBACK</code> 用于撤销一个事务处理块。</li>\\n<li><code>SAVEPOINT</code> 为使用 ROLLBACK 语句设立保留点。</li>\\n<li><code>SELECT</code> 用于从一个或多个表（视图）中检索数据。</li>\\n<li><code>START TRANSACTION</code> 表示一个新的事务处理块的开始。</li>\\n<li><code>UPDATE</code> 更新表中一行或多行。</li>\\n</ul>\"}")
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
