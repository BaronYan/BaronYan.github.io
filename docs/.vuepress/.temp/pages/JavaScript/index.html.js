import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/index.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1719327802000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":2}]},\"filePathRelative\":\"JavaScript/index.md\",\"excerpt\":\"<p><a href=\\\"/JavaScript/%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E5%8F%82.html\\\" target=\\\"_blank\\\">函数的形参在函数体内可以被重新赋值吗？</a></p>\\n<p><a href=\\\"/JavaScript/%E5%87%BD%E6%95%B0%E7%9A%84%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE.html\\\" target=\\\"_blank\\\">函数的作用域链</a></p>\\n<p><a href=\\\"/JavaScript/promise/\\\" target=\\\"_blank\\\">Promise</a></p>\"}")
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
