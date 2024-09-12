import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/UI/index.html.vue"
const data = JSON.parse("{\"path\":\"/UI/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"UI 设计颜色参考\",\"slug\":\"ui-设计颜色参考\",\"link\":\"#ui-设计颜色参考\",\"children\":[]},{\"level\":2,\"title\":\"UI 组件&库\",\"slug\":\"ui-组件-库\",\"link\":\"#ui-组件-库\",\"children\":[{\"level\":3,\"title\":\"shadcn\",\"slug\":\"shadcn\",\"link\":\"#shadcn\",\"children\":[]}]}],\"git\":{\"updatedTime\":1720797534000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"UI/index.md\",\"excerpt\":\"<h2>UI 设计颜色参考</h2>\\n<p><a href=\\\"https://uicolors.app/create\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Tailwind CSS Color Generator</a> 创建自定义色阶</p>\\n<p></p>\\n<h2>UI 组件&amp;库</h2>\\n<h3>shadcn</h3>\\n<p><a href=\\\"https://ui.shadcn.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">shadcn</a> 不是一个组件库。 它是一个用于 React 可重复使用的组件集合(另一个Vue版本的是 <a href=\\\"https://www.shadcn-vue.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">shadcn-vue</a>)，您可以将其复制并粘贴到您的应用程序中。</p>\"}")
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
