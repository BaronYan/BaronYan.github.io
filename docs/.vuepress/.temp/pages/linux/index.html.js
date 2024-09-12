import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/linux/index.html.vue"
const data = JSON.parse("{\"path\":\"/linux/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"常用命令\",\"slug\":\"常用命令\",\"link\":\"#常用命令\",\"children\":[]},{\"level\":2,\"title\":\"其他文章\",\"slug\":\"其他文章\",\"link\":\"#其他文章\",\"children\":[]}],\"git\":{\"updatedTime\":1724858153000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":4}]},\"filePathRelative\":\"linux/index.md\",\"excerpt\":\"<p><a href=\\\"https://www.digitalocean.com/community/tutorials/linux-commands\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">你必须要知道的50个linux命令</a></p>\\n<p></p>\\n<p></p>\\n<h2>常用命令</h2>\\n<ul>\\n<li><a href=\\\"/linux/chmod.html\\\" target=\\\"_blank\\\">chmod</a></li>\\n<li><a href=\\\"/linux/curl.html\\\" target=\\\"_blank\\\">curl</a></li>\\n</ul>\"}")
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
