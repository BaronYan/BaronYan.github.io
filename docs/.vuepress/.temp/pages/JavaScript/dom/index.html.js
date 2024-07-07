import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/dom/index.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/dom/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1719930400000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"JavaScript/dom/index.md\",\"excerpt\":\"<p><strong>Element.firstElementChild 和 Node.firstChild 有什么区别?</strong></p>\\n<p><code>Element.firstElementChild</code> 和 <code>Node.firstChild</code> 之间的区别在于<strong>它们返回的节点类型不同</strong>：</p>\\n<ol>\\n<li><code>Element.firstElementChild</code>:\\n<ul>\\n<li>返回的是第一个子元素节点（Element），忽略文本节点、注释节点等。</li>\\n<li>如果没有子元素，返回 <code>null</code>。</li>\\n</ul>\\n</li>\\n<li><code>Node.firstChild</code>:\\n<ul>\\n<li>返回的是第一个子节点，可以是元素节点、文本节点、注释节点等。</li>\\n<li>如果没有子节点，返回 <code>null</code>。</li>\\n</ul>\\n</li>\\n</ol>\"}")
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
