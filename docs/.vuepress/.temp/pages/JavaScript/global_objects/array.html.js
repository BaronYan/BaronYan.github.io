import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/global_objects/array.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/global_objects/array.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"Array.prototype.filter()\",\"slug\":\"array-prototype-filter\",\"link\":\"#array-prototype-filter\",\"children\":[]}],\"git\":{\"updatedTime\":1720072503000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"JavaScript/global_objects/array.md\",\"excerpt\":\"<h3>Array.prototype.filter()</h3>\\n<p><code>filter()</code> 创建一个新数组，其中包含通过指定函数测试的所有元素。这个方法不会改变原始数组，而是返回一个新的数组。</p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> newArray <span class=\\\"token operator\\\">=</span> array<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">filter</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">callback</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">currentValue<span class=\\\"token punctuation\\\">,</span> index<span class=\\\"token punctuation\\\">,</span> array</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">// 返回 true 表示保留当前元素，false 表示移除当前元素</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span> thisArg<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
