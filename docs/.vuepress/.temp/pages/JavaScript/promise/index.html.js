import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/promise/index.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/promise/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1719327802000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":3}]},\"filePathRelative\":\"JavaScript/promise/index.md\",\"excerpt\":\"<ul>\\n<li><a href=\\\"/JavaScript/promise/promise.html\\\" target=\\\"_blank\\\">Promise</a></li>\\n<li><a href=\\\"/JavaScript/promise/%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95.html\\\" target=\\\"_blank\\\">Promise.resolve() 和 Promise.reject()</a></li>\\n</ul>\\n\"}")
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
