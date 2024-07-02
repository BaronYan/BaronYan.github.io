import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/vnode.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/vnode.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"虚拟节点介绍\",\"slug\":\"虚拟节点介绍\",\"link\":\"#虚拟节点介绍\",\"children\":[]}],\"git\":{\"updatedTime\":1719327802000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/vnode.md\",\"excerpt\":\"<h2>虚拟节点介绍</h2>\\n<p><em>虚拟节点（vnode:Virtual Node）</em></p>\\n<p>在 Vue 3 中，虚拟节点 (vnode) 是一个\\n<span class=\\\"text-brand-500 font-bold\\\">JavaScript 对象</span>，表示渲染树中的一个节点。虚拟节点用于描述界面的结构，最终由 Vue 渲染成真实的 DOM 元素。</p>\\n<span class=\\\"text-brand-500 font-bold\\\">\\n虚拟节点（VNode）是对真实 DOM 节点的抽象表示，用于高效地更新和渲染视图。 包含了组件树的状态和结构信息，而不是实际的 DOM 元素。\\n</span>\"}")
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
