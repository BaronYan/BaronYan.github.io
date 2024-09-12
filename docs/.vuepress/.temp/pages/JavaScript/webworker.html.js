import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/webworker.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/webworker.html\",\"title\":\"Web Worker\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"如何使用\",\"slug\":\"如何使用\",\"link\":\"#如何使用\",\"children\":[]},{\"level\":2,\"title\":\"传参\",\"slug\":\"传参\",\"link\":\"#传参\",\"children\":[]},{\"level\":2,\"title\":\"self\",\"slug\":\"self\",\"link\":\"#self\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"JavaScript/webworker.md\",\"excerpt\":\"\\n<p>Web Worker 是一种在 Web 应用程序中实现多线程的技术。以下是对 Web Worker 的详细介绍：</p>\\n<ol>\\n<li>作用：\\n<ul>\\n<li>允许在后台运行脚本，不影响主线程的性能</li>\\n<li>执行耗时的计算或处理大量数据，而不会阻塞用户界面</li>\\n<li>提高 Web 应用的响应性和性能</li>\\n</ul>\\n</li>\\n<li>工作原理：\\n<ul>\\n<li>Web Worker 在独立于主线程的后台线程中运行</li>\\n<li>与主线程通过消息传递进行通信</li>\\n<li>无法直接访问 DOM 或 window 对象，但可以使用许多 Web API</li>\\n</ul>\\n</li>\\n</ol>\"}")
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
