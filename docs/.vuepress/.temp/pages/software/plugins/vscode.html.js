import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/software/plugins/vscode.html.vue"
const data = JSON.parse("{\"path\":\"/software/plugins/vscode.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"aaa\",\"slug\":\"aaa\",\"link\":\"#aaa\",\"children\":[]}],\"git\":{\"updatedTime\":1723729092000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"software/plugins/vscode.md\",\"excerpt\":\"<h2>aaa</h2>\\n<ul>\\n<li>Composer All-in-One composer integration, quick actions, commands, automatic installation, tasks, code lenses, diagnostics, and composer.json IntelliSense.</li>\\n<li>Auto Close Tag</li>\\n<li>Auto Rename Tag</li>\\n<li>Codeium</li>\\n<li>Chinese</li>\\n</ul>\\n\"}")
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
