import comp from "/home/yanbeirong/www/myblog/docs/.vuepress/.temp/pages/JavaScript/str_arr_fun.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/str_arr_fun.html\",\"title\":\"常用字符串数组过滤方法\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"split()\",\"slug\":\"split\",\"link\":\"#split\",\"children\":[]},{\"level\":2,\"title\":\"filter()\",\"slug\":\"filter\",\"link\":\"#filter\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"JavaScript/str_arr_fun.md\",\"excerpt\":\"\\n<h2>split()</h2>\\n<p><code>split()</code> 是字符串的方法，用于将字符串分割成子字符串数组：</p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">// 基本语法</span></span>\\n<span class=\\\"line\\\">string<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">split</span><span class=\\\"token punctuation\\\">(</span>separator<span class=\\\"token punctuation\\\">,</span> limit<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
