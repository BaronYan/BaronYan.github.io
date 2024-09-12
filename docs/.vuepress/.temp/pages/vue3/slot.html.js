import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/slot.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/slot.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"包装虚拟节点为函数的具体原因\",\"slug\":\"包装虚拟节点为函数的具体原因\",\"link\":\"#包装虚拟节点为函数的具体原因\",\"children\":[]},{\"level\":3,\"title\":\"具体例子说明\",\"slug\":\"具体例子说明\",\"link\":\"#具体例子说明\",\"children\":[]},{\"level\":3,\"title\":\"代码优化\",\"slug\":\"代码优化\",\"link\":\"#代码优化\",\"children\":[]}],\"git\":{\"updatedTime\":1719594779000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/slot.md\",\"excerpt\":\"<p>在 Vue 3 中，插槽的内容是以函数形式定义的，这样做有几个关键的原因：</p>\\n<ol>\\n<li><strong>延迟计算</strong>：通过使用函数，插槽内容的计算和渲染可以被延迟到实际需要的时候。这意味着如果插槽内容在创建虚拟节点时不需要被立即渲染，它可以在插槽被访问时才进行计算。这样可以提高性能，尤其是在插槽内容复杂且仅在某些条件下才需要渲染时。</li>\\n<li><strong>动态性</strong>：插槽函数允许插槽内容在父组件的状态变化时动态更新。例如，如果插槽内容依赖于父组件的某些数据，使用函数形式可以确保每次渲染时插槽内容都能正确反映最新的状态。</li>\\n<li><strong>灵活性</strong>：使用函数可以让插槽内容更加灵活。插槽函数可以接受参数，这样子组件可以向父组件提供数据或事件回调，从而实现复杂的交互逻辑。</li>\\n</ol>\"}")
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
