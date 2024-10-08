import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/base/npm.html.vue"
const data = JSON.parse("{\"path\":\"/base/npm.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1723457180000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"base/npm.md\",\"excerpt\":\"<p>解决npm install时卡在sill idealTree buildDeps的问题</p>\\n<div class=\\\"language-bash\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"line\\\"><span class=\\\"token comment\\\"># 查看配置</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> config <span class=\\\"token function\\\">ls</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 查看当前源 https://registry.npmjs.org/</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> config get registry</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\"># 设置为 npmmirror 源</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> config <span class=\\\"token builtin class-name\\\">set</span> registry https://registry.npmmirror.com</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
