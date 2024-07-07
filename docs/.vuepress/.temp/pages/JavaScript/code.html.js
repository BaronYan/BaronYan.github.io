import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/code.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/code.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1719594779000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"JavaScript/code.md\",\"excerpt\":\"<p><strong>hasOwnProperty</strong></p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">hasOwn</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">obj<span class=\\\"token punctuation\\\">,</span> key</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token class-name\\\">Object</span><span class=\\\"token punctuation\\\">.</span>prototype<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">hasOwnProperty</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">call</span><span class=\\\"token punctuation\\\">(</span>obj<span class=\\\"token punctuation\\\">,</span> key<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">hasOwn</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">obj<span class=\\\"token punctuation\\\">,</span> key</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> Object<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">hasOwn</span><span class=\\\"token punctuation\\\">(</span>obj<span class=\\\"token punctuation\\\">,</span> key<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
