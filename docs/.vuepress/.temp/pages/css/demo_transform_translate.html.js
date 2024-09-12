import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/demo_transform_translate.html.vue"
const data = JSON.parse("{\"path\":\"/css/demo_transform_translate.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1722350112000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"css/demo_transform_translate.md\",\"excerpt\":\"<div class=\\\"language-css\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"css\\\" data-title=\\\"css\\\"><pre class=\\\"language-css\\\"><code><span class=\\\"line\\\"><span class=\\\"token selector\\\">.card</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token property\\\">transform</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token function\\\">translate</span><span class=\\\"token punctuation\\\">(</span>45px<span class=\\\"token punctuation\\\">,</span>45px<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
