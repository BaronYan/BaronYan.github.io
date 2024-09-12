import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/base/webview.html.vue"
const data = JSON.parse("{\"path\":\"/base/webview.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720534286000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"base/webview.md\",\"excerpt\":\"<p>Webview 是一种嵌入式浏览器组件，\\n用于在移动应用程序或桌面应用程序中显示网页内容。\\n它允许开发者在应用程序内嵌入和显示网页，而无需切换到独立的浏览器应用程序。\\nWebview 常用于展示静态网页、动态内容、或者与服务器交互的内容。</p>\\n<p><strong>主要特点和用途</strong></p>\\n<ul>\\n<li><strong>嵌入网页内容</strong>: 开发者可以在应用程序内嵌入网页，无需打开外部浏览器。</li>\\n<li><strong>跨平台支持</strong>: Webview 在 Android、iOS、Windows 和 macOS 等平台上都得到广泛支持。</li>\\n<li><strong>与原生代码交互</strong>: Webview 可以通过 JavaScript 与应用程序的原生代码交互，允许双向通信。</li>\\n<li><strong>展示动态内容</strong>: 适用于需要展示实时更新内容的场景，如新闻、社交媒体、数据可视化等。</li>\\n</ul>\"}")
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
