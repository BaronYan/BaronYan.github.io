import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/promise/promise.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/promise/promise.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Promise\",\"slug\":\"promise\",\"link\":\"#promise\",\"children\":[{\"level\":3,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":3,\"title\":\"特点和优势\",\"slug\":\"特点和优势\",\"link\":\"#特点和优势\",\"children\":[]},{\"level\":3,\"title\":\"示例用法\",\"slug\":\"示例用法\",\"link\":\"#示例用法\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719327802000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"JavaScript/promise/promise.md\",\"excerpt\":\"<h2>Promise</h2>\\n<h3>介绍</h3>\\n<p>Promise 是 JavaScript 中用于处理异步操作的一种机制， 它提供了一种更加优雅和可靠的方式来处理异步代码， 避免了传统的回调地狱（callback hell）问题。<br>\\n<span class=\\\"bg-yellow-200\\\"> Promise 对象可以有三种状态：</span></p>\\n<ul>\\n<li>pending（进行中）</li>\\n<li>fulfilled（已成功）</li>\\n<li>rejected（已失败）</li>\\n</ul>\\n<p><span class=\\\"bg-yellow-200\\\">并且状态只能从 pending 转变为 fulfilled 或 rejected，转变后不可逆。</span></p>\"}")
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
