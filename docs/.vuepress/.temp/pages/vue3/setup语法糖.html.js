import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/setup语法糖.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/setup%E8%AF%AD%E6%B3%95%E7%B3%96.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"简介\",\"slug\":\"简介\",\"link\":\"#简介\",\"children\":[{\"level\":3,\"title\":\"使用组件\",\"slug\":\"使用组件\",\"link\":\"#使用组件\",\"children\":[]},{\"level\":3,\"title\":\"递归组件\",\"slug\":\"递归组件\",\"link\":\"#递归组件\",\"children\":[]},{\"level\":3,\"title\":\"命名空间组件\",\"slug\":\"命名空间组件\",\"link\":\"#命名空间组件\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719594779000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/setup语法糖.md\",\"excerpt\":\"<p><strong>相关链接</strong></p>\\n<ul>\\n<li><a href=\\\"https://cn.vuejs.org/api/sfc-script-setup\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">setup语法糖</a></li>\\n</ul>\\n<h2>简介</h2>\\n<p><code>&lt;script setup&gt;</code> 是在单文件组件 (SFC) 中使用组合式 API 的<strong>编译时语法糖</strong>。\\n当同时使用 SFC 与组合式 API 时，该语法是默认推荐。相比于普通的 <code>&lt;script&gt;</code> 语法，它具有更多优势：</p>\"}")
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
