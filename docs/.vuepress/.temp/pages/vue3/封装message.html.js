import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/封装message.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/%E5%B0%81%E8%A3%85message.html\",\"title\":\"封装一个 Message 组件\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"封装一个 Message 组件\",\"date\":\"2024-07-04T00:00:00.000Z\",\"category\":\"vue3\",\"tag\":[\"vue3\"]},\"headers\":[{\"level\":2,\"title\":\"封装一个 Message 组件\",\"slug\":\"封装一个-message-组件\",\"link\":\"#封装一个-message-组件\",\"children\":[{\"level\":3,\"title\":\"1. 创建 Message 组件\",\"slug\":\"_1-创建-message-组件\",\"link\":\"#_1-创建-message-组件\",\"children\":[]},{\"level\":3,\"title\":\"2. 创建函数式 Message 调用\",\"slug\":\"_2-创建函数式-message-调用\",\"link\":\"#_2-创建函数式-message-调用\",\"children\":[]},{\"level\":3,\"title\":\"3. 调用示例\",\"slug\":\"_3-调用示例\",\"link\":\"#_3-调用示例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1720055030000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/封装message.md\",\"excerpt\":\"<h2>封装一个 Message 组件</h2>\\n<p>封装函数式组件的核心点主要是：</p>\\n<ol>\\n<li>学会熟练使用 <a href=\\\"/vue3/createVNode.html\\\" target=\\\"_blank\\\">createVNode</a> 函数创建 vNode</li>\\n<li>以及使用 <code>render</code>函数将 vNode 渲染成真实DOM。</li>\\n</ol>\\n<p>以下是一个基本的实现步骤，包括创建组件和通过插件安装全局调用的方法。</p>\\n<h3>1. 创建 Message 组件</h3>\\n<p>首先，创建一个 Message.vue 文件，用于显示消息内容：</p>\"}")
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
