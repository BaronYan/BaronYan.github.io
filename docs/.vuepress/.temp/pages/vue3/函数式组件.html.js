import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/函数式组件.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1719594779000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/函数式组件.md\",\"excerpt\":\"<p><strong>导入一个组件</strong></p>\\n<p></p>\\n<p><strong>使用组件创建一个 vnode</strong></p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> vnode <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">createVNode</span><span class=\\\"token punctuation\\\">(</span>Message<span class=\\\"token punctuation\\\">,</span> props<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token keyword\\\">default</span><span class=\\\"token operator\\\">:</span><span class=\\\"token keyword\\\">null</span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">render</span><span class=\\\"token punctuation\\\">(</span>vnode<span class=\\\"token punctuation\\\">,</span> container<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">appendToElement<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">appendChild</span><span class=\\\"token punctuation\\\">(</span>container<span class=\\\"token punctuation\\\">.</span>firstElementChild<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
