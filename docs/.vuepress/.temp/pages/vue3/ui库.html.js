import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/ui库.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/ui%E5%BA%93.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"shadcn\",\"slug\":\"shadcn\",\"link\":\"#shadcn\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"vue3/ui库.md\",\"excerpt\":\"<h2>shadcn</h2>\\n<p><a href=\\\"https://ui.shadcn.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">shadcn</a> 不是一个组件库。 它是一个用于 React 可重复使用的组件集合(另一个Vue版本的是 <a href=\\\"https://www.shadcn-vue.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">shadcn-vue</a>)，您可以将其复制并粘贴到您的应用程序中。</p>\\n<p>你不能将其作为依赖项来安装。 你可以选择需要的组件。 将代码复制并粘贴到你的项目中，然后根据你的需要进行定制。 代码归您所有，请将其作为构建自己的组件库的参考。</p>\"}")
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
