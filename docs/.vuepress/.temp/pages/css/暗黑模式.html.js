import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/暗黑模式.html.vue"
const data = JSON.parse("{\"path\":\"/css/%E6%9A%97%E9%BB%91%E6%A8%A1%E5%BC%8F.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1722820331000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"css/暗黑模式.md\",\"excerpt\":\"<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> toggleDarkCheckBox <span class=\\\"token operator\\\">=</span> document<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getElementById</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'toggleDark'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">toggleDarkCheckBox<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">addEventListener</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'change'</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">=&gt;</span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    document<span class=\\\"token punctuation\\\">.</span>body<span class=\\\"token punctuation\\\">.</span>classList<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">toggle</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'dark'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
