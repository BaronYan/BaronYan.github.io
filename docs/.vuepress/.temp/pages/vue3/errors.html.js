import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/errors.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/errors.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1719594779000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/errors.md\",\"excerpt\":\"<p>SyntaxError: The requested module '/src/components/message/index.js?t=1719474198860' does not provide an export named 'default'</p>\\n<p>语法错误：请求的模块 <code>“/src/components/message/index.js?t=1719474198860”</code> 不提供名为“default” 的导出</p>\\n\"}")
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
