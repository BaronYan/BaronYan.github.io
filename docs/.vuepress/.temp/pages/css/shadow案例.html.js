import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/css/shadow案例.html.vue"
const data = JSON.parse("{\"path\":\"/css/shadow%E6%A1%88%E4%BE%8B.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1721056834000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"css/shadow案例.md\",\"excerpt\":\"<div class=\\\"container flex flex-col justify-center items-center p-2 gap-2\\\" style=\\\"width: 300px; margin:20px auto;\\\">\\n    <div class=\\\"element rounded-md flex justify-center items-center\\\" style=\\\"width: 100px;height: 100px;\\\">hover me</div>\\n    <div class=\\\"element-2 rounded-md flex justify-center items-center\\\" style=\\\"width: 100px;height: 100px;\\\">hover me</div>\\n</div>\"}")
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
