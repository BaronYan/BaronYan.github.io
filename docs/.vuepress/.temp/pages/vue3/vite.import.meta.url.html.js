import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/vite.import.meta.url.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/vite.import.meta.url.html\",\"title\":\"import.meta.url 简介\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"URL\",\"slug\":\"url\",\"link\":\"#url\",\"children\":[]}],\"git\":{\"updatedTime\":1725614539000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":2}]},\"filePathRelative\":\"vue3/vite.import.meta.url.md\",\"excerpt\":\"\\n<p><a href=\\\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">import.meta.url</a> 是一个 ESM 的原生功能，会暴露当前模块的 URL。\\n将它与原生的 <a href=\\\"https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">URL</a> 构造器 组合使用，在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL：</p>\"}")
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