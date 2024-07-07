import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/linux/index.html.vue"
const data = JSON.parse("{\"path\":\"/linux/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"linux/index.md\",\"excerpt\":\"<p><a href=\\\"https://www.digitalocean.com/community/tutorials/linux-commands\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">你必须要知道的50个linux命令</a></p>\\n<p></p>\\n\"}")
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
