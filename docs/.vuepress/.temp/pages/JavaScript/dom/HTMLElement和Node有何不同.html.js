import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/dom/HTMLElement和Node有何不同.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/dom/HTMLElement%E5%92%8CNode%E6%9C%89%E4%BD%95%E4%B8%8D%E5%90%8C.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Node\",\"slug\":\"node\",\"link\":\"#node\",\"children\":[]},{\"level\":2,\"title\":\"HTMLElement\",\"slug\":\"htmlelement\",\"link\":\"#htmlelement\",\"children\":[]},{\"level\":2,\"title\":\"区别总结\",\"slug\":\"区别总结\",\"link\":\"#区别总结\",\"children\":[]}],\"git\":{\"updatedTime\":1721396443000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"JavaScript/dom/HTMLElement和Node有何不同.md\",\"excerpt\":\"<p>HTMLElement 和 Node分别表示什么，它们有何不同？</p>\\n<p>在HTML和DOM（文档对象模型）中，<code>Node</code> 和 <code>HTMLElement</code> 是两个重要的接口，它们在构建和操作HTML文档时扮演着不同的角色。</p>\\n<h2>Node</h2>\\n<p>Node 是 DOM 中的基本类型，它表示DOM树中的每个节点。\\n<strong>所有的DOM节点类型都继承自 Node 接口。</strong>\\nNode 包含了一些通用的属性和方法，适用于各种不同类型的节点。\\n以下是一些常见的节点类型：</p>\\n<ul>\\n<li><code>Element</code>: 表示元素节点，例如 <code>&lt;div&gt;</code>，<code>&lt;p&gt;</code> 等。</li>\\n<li><code>Text</code>: 表示文本节点，即元素中的文本内容。</li>\\n<li><code>Comment</code>: 表示注释节点，即 <code>&lt;!-- 注释 --&gt;</code>。</li>\\n<li><code>Document</code>: 表示整个文档节点，即 <code>document</code> 对象。</li>\\n<li><code>DocumentFragment</code>: 表示文档片段节点，可以包含一组节点。</li>\\n</ul>\"}")
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
