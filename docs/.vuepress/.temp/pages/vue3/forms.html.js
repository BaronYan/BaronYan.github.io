import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/forms.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/forms.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720072503000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/forms.md\",\"excerpt\":\"<p>在处理前端表单时，经常需要<strong>将表单输入元素与 JavaScript 中的相应状态同步</strong>。\\n手动连接值和更改事件监听器可能会造成麻烦：</p>\\n<div class=\\\"language-vue\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token attr-name\\\">:value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>text<span class=\\\"token punctuation\\\">\\\"</span></span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token attr-name\\\">@input</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>event =&gt; text = event.target.value<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
