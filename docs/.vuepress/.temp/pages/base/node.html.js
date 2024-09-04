import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/base/node.html.vue"
const data = JSON.parse("{\"path\":\"/base/node.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"base/node.md\",\"excerpt\":\"<p><code>process.cwd()</code> 和 <code>__dirname</code> 有什么区别?</p>\\n<ul>\\n<li><code>process.cwd()</code> 返回 Node.js 进程的当前工作目录，如果从其他目录运行该进程，该目录可能会发生变化。</li>\\n<li><code>__dirname</code> 给出当前模块文件的目录名称，该名称是固定的，不会根据工作目录而变化。</li>\\n</ul>\\n\"}")
export { comp, data }
