import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/响应式数据与副作用函数.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/%E5%93%8D%E5%BA%94%E5%BC%8F%E6%95%B0%E6%8D%AE%E4%B8%8E%E5%89%AF%E4%BD%9C%E7%94%A8%E5%87%BD%E6%95%B0.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"响应系统的作用与实现\",\"slug\":\"响应系统的作用与实现\",\"link\":\"#响应系统的作用与实现\",\"children\":[]}],\"git\":{\"updatedTime\":1722350112000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/响应式数据与副作用函数.md\",\"excerpt\":\"<h2>响应系统的作用与实现</h2>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">effect</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    document<span class=\\\"token punctuation\\\">.</span>body<span class=\\\"token punctuation\\\">.</span>innerText <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'hello vue3'</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
