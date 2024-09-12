import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/white-space.html.vue"
const data = JSON.parse("{\"path\":\"/css/white-space.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1721056834000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"css/white-space.md\",\"excerpt\":\"<p>CSS 的 <code>white-space</code> 属性用于控制元素内如何处理空白字符和换行。</p>\\n<p>该属性有以下几种常用的值：</p>\\n<ol>\\n<li><code>normal</code>：默认值。连续的空白字符会被合并，文本会换行。</li>\\n<li><code>nowrap</code>：文本不会换行，所有的文本会在一行显示，除非使用 <code>&lt;br&gt;</code> 标签手动换行。</li>\\n<li><code>pre</code>：文本会保留空白字符和换行符，就像在 <code>&lt;pre&gt;</code> 标签中一样。</li>\\n<li><code>pre-wrap</code>：保留空白字符和换行符，同时允许长的文本在必要时换行。</li>\\n<li><code>pre-line</code>：合并连续的空白字符，但保留换行符。</li>\\n</ol>\"}")
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
