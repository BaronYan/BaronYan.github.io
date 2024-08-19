import{_ as e,c as l,o as c,e as o}from"./app-BuumBsf4.js";const d={},i=o('<h1 id="数据库维护" tabindex="-1"><a class="header-anchor" href="#数据库维护"><span>数据库维护</span></a></h1><h2 id="刷新未写数据" tabindex="-1"><a class="header-anchor" href="#刷新未写数据"><span>刷新未写数据</span></a></h2><p>像所有数据一样，MySQL的数据也必须经常备份。 由于MySQL数据库是基于磁盘的文件，普通的备份系统和例程就能备份MySQL的数据。 但是，由于这些文件总是处于打开和使用状态，普通的文件副本备份不一定总是有效。</p><p>下面列出这个问题的可能解决方案。</p><ul><li>❑ 使用命令行实用程序 <code>mysqldump</code> 转储所有数据库内容到某个外部文件。在进行常规备份前这个实用程序应该正常运行，以便能正确地备份转储文件。</li><li>❑ 可用命令行实用程序 <code>mysqlhotcopy</code> 从一个数据库复制所有数据（并非所有数据库引擎都支持这个实用程序）​。</li><li>❑ 可以使用 MySQL的 <code>BACKUP TABLE</code> 或 <code>SELECT INTO OUTFILE</code> 转储所有数据到某个外部文件。这两条语句都接受将要创建的系统文件名，此系统文件必须不存在，否则会出错。数据可以用 <code>RESTORE TABLE</code> 来复原。</li><li>❑ 为了保证所有数据被写到磁盘（包括索引数据）​，可能需要在进行备份前使用 <code>FLUSH TABLES</code> 语句刷新未写数据。</li></ul><h2 id="数据库维护-1" tabindex="-1"><a class="header-anchor" href="#数据库维护-1"><span>数据库维护</span></a></h2><p>MySQL提供了一系列的语句，可以（应该）用来保证数据库正确和正常运行。以下是你应该知道的一些语句。</p><ul><li><code>ANALYZE TABLE</code>，用来检查表键是否正确。<code>ANALYZE TABLE orders;</code></li><li><code>CHECK TABLE</code> 用来针对许多问题对表进行检查。在 MyISAM 表上还对索引进行检查。<code>CHECK TABLE</code> 支持一系列的用于MyISAM表的方式。 <ul><li>CHANGED 检查自最后一次检查以来改动过的表。</li><li>EXTENDED 执行最彻底的检查，</li><li>FAST 只检查未正常关闭的表，</li><li>MEDIUM 检查所有被删除的链接并进行键检验，</li><li>QUICK 只进行快速扫描</li></ul></li></ul>',8),n=[i];function a(t,s){return c(),l("div",null,n)}const r=e(d,[["render",a],["__file","数据库备份.html.vue"]]),h=JSON.parse('{"path":"/mysql/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%A4%87%E4%BB%BD.html","title":"数据库维护","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"刷新未写数据","slug":"刷新未写数据","link":"#刷新未写数据","children":[]},{"level":2,"title":"数据库维护","slug":"数据库维护-1","link":"#数据库维护-1","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"mysql/数据库备份.md","excerpt":"\\n<h2>刷新未写数据</h2>\\n<p>像所有数据一样，MySQL的数据也必须经常备份。\\n由于MySQL数据库是基于磁盘的文件，普通的备份系统和例程就能备份MySQL的数据。\\n但是，由于这些文件总是处于打开和使用状态，普通的文件副本备份不一定总是有效。</p>\\n<p>下面列出这个问题的可能解决方案。</p>\\n<ul>\\n<li>❑ 使用命令行实用程序 <code>mysqldump</code> 转储所有数据库内容到某个外部文件。在进行常规备份前这个实用程序应该正常运行，以便能正确地备份转储文件。</li>\\n<li>❑ 可用命令行实用程序 <code>mysqlhotcopy</code> 从一个数据库复制所有数据（并非所有数据库引擎都支持这个实用程序）​。</li>\\n<li>❑ 可以使用 MySQL的 <code>BACKUP TABLE</code> 或 <code>SELECT INTO OUTFILE</code> 转储所有数据到某个外部文件。这两条语句都接受将要创建的系统文件名，此系统文件必须不存在，否则会出错。数据可以用 <code>RESTORE TABLE</code> 来复原。</li>\\n<li>❑ 为了保证所有数据被写到磁盘（包括索引数据）​，可能需要在进行备份前使用 <code>FLUSH TABLES</code> 语句刷新未写数据。</li>\\n</ul>"}');export{r as comp,h as data};
