import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/vnode_appContent.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/vnode_appContent.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1726384809000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/vnode_appContent.md\",\"excerpt\":\"<p>appContext有什么用？</p>\\n<p>appContext 在 Vue 3 中是一个非常重要的概念。它代表了应用程序的上下文，包含了许多全局配置和资源。</p>\\n<p>以下是 appContext 的主要用途：</p>\\n<ol>\\n<li>全局组件注册：\\n<ul>\\n<li><code>appContext</code> 包含了在应用程序级别注册的所有全局组件。</li>\\n</ul>\\n</li>\\n<li>全局指令：\\n<ul>\\n<li>它也包含了所有全局注册的自定义指令。</li>\\n</ul>\\n</li>\\n<li>全局混入（Mixins）：\\n<ul>\\n<li>应用级别的混入也存储在 <code>appContext</code> 中。</li>\\n</ul>\\n</li>\\n<li>插件：\\n<ul>\\n<li>通过 <code>app.use()</code> 安装的插件会修改 <code>appContext</code>。</li>\\n</ul>\\n</li>\\n<li>全局属性：\\n<ul>\\n<li>使用 <code>app.config.globalProperties</code> 定义的全局属性也是 <code>appContext</code> 的一部分。</li>\\n</ul>\\n</li>\\n<li>全局配置：\\n<ul>\\n<li>如错误处理器、性能追踪设置等全局配置也存储在这里。</li>\\n</ul>\\n</li>\\n<li>提供/注入系统：\\n<ul>\\n<li><code>provide</code> 和 <code>inject</code> API 使用的数据也存储在 <code>appContext</code> 中。</li>\\n</ul>\\n</li>\\n</ol>\"}")
export { comp, data }
