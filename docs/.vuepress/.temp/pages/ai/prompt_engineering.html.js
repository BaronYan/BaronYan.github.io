import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/ai/prompt_engineering.html.vue"
const data = JSON.parse("{\"path\":\"/ai/prompt_engineering.html\",\"title\":\"Prompt Engineering(提示工程)\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1725757698000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"ai/prompt_engineering.md\",\"excerpt\":\"\\n<ul>\\n<li><a href=\\\"https://www.promptingguide.ai/zh\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">提示工程指南</a></li>\\n<li><a href=\\\"https://platform.openai.com/docs/guides/prompt-engineering\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">取得更好结果的六大策略</a></li>\\n</ul>\\n\"}")
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