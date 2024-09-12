import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/node/path.resolve.html.vue"
const data = JSON.parse("{\"path\":\"/node/path.resolve.html\",\"title\":\"path.resolve\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":2,\"title\":\"工作原理\",\"slug\":\"工作原理\",\"link\":\"#工作原理\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{\"updatedTime\":1725412198000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"node/path.resolve.md\",\"excerpt\":\"\\n<p><code>path.resolve()</code> 是 Node.js 中 <code>path</code> 模块提供的方法，用于将一系列路径段解析为绝对路径。下面是其工作原理的详细分解：</p>\\n<h2>语法</h2>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\">path<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">resolve</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token operator\\\">...</span>paths<span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
