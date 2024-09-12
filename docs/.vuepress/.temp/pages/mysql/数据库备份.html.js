import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/mysql/数据库备份.html.vue"
const data = JSON.parse("{\"path\":\"/mysql/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%A4%87%E4%BB%BD.html\",\"title\":\"数据库维护\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"刷新未写数据\",\"slug\":\"刷新未写数据\",\"link\":\"#刷新未写数据\",\"children\":[]},{\"level\":2,\"title\":\"数据库维护\",\"slug\":\"数据库维护-1\",\"link\":\"#数据库维护-1\",\"children\":[]}],\"git\":{\"updatedTime\":1724077484000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"mysql/数据库备份.md\",\"excerpt\":\"\\n<h2>刷新未写数据</h2>\\n<p>像所有数据一样，MySQL的数据也必须经常备份。\\n由于MySQL数据库是基于磁盘的文件，普通的备份系统和例程就能备份MySQL的数据。\\n但是，由于这些文件总是处于打开和使用状态，普通的文件副本备份不一定总是有效。</p>\\n<p>下面列出这个问题的可能解决方案。</p>\\n<ul>\\n<li>❑ 使用命令行实用程序 <code>mysqldump</code> 转储所有数据库内容到某个外部文件。在进行常规备份前这个实用程序应该正常运行，以便能正确地备份转储文件。</li>\\n<li>❑ 可用命令行实用程序 <code>mysqlhotcopy</code> 从一个数据库复制所有数据（并非所有数据库引擎都支持这个实用程序）​。</li>\\n<li>❑ 可以使用 MySQL的 <code>BACKUP TABLE</code> 或 <code>SELECT INTO OUTFILE</code> 转储所有数据到某个外部文件。这两条语句都接受将要创建的系统文件名，此系统文件必须不存在，否则会出错。数据可以用 <code>RESTORE TABLE</code> 来复原。</li>\\n<li>❑ 为了保证所有数据被写到磁盘（包括索引数据）​，可能需要在进行备份前使用 <code>FLUSH TABLES</code> 语句刷新未写数据。</li>\\n</ul>\"}")
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
