import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/global_objects/objects.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/global_objects/objects.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"Object.assign()\",\"slug\":\"object-assign\",\"link\":\"#object-assign\",\"children\":[]}],\"git\":{\"updatedTime\":1720055030000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"JavaScript/global_objects/objects.md\",\"excerpt\":\"<h3>Object.assign()</h3>\\n<p><code>Object.assign()</code> 静态方法将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。</p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\">Object<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">assign</span><span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">Object<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">assign</span><span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">,</span> source1<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">Object<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">assign</span><span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">,</span> source1<span class=\\\"token punctuation\\\">,</span> source2<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">Object<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">assign</span><span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">,</span> source1<span class=\\\"token punctuation\\\">,</span> source2<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token comment\\\">/* …, */</span> sourceN<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
