import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/frond_plugs/index.html.vue"
const data = JSON.parse("{\"path\":\"/frond_plugs/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1723215330000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"frond_plugs/index.md\",\"excerpt\":\"<p>前端常用插件</p>\\n<p><strong>拖拽有关</strong></p>\\n<ul>\\n<li><a href=\\\"https://interactjs.io/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">interact.js</a> 适用于现代浏览器（以及 IE9+）的 JavaScript 拖放、调整大小和多点触控手势</li>\\n</ul>\\n\"}")
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
