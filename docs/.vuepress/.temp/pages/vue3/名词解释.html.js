import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/名词解释.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/%E5%90%8D%E8%AF%8D%E8%A7%A3%E9%87%8A.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1719594779000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/名词解释.md\",\"excerpt\":\"<p><strong>sfc</strong></p>\\n<p>在 Vue 3 中， SFC 代表的是 \\\"Single File Component\\\"（单文件组件）。</p>\\n\"}")
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
