import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/常见错误.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/%E5%B8%B8%E8%A7%81%E9%94%99%E8%AF%AF.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1722350112000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/常见错误.md\",\"excerpt\":\"<p><strong>Unhandled error during execution of native event handler</strong></p>\\n<p>执行本机事件处理程序期间未处理的错误</p>\\n\"}")
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
