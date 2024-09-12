import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/index.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/\",\"title\":\"vue3\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"vue3\",\"date\":\"2024年6月17日\",\"category\":[\"Vue3\"],\"description\":\"Description of this page\",\"toc\":true},\"headers\":[],\"git\":{\"updatedTime\":1719930400000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":5}]},\"filePathRelative\":\"vue3/index.md\",\"excerpt\":\"<p><a href=\\\"/vue3/%E5%B0%81%E8%A3%85Message%E7%BB%84%E4%BB%B6.html\\\" target=\\\"_blank\\\">封装一个 Message 组件</a></p>\\n<p><strong>虚拟节点</strong></p>\\n<ul>\\n<li><a href=\\\"/vue3/vnode.html\\\" target=\\\"_blank\\\">虚拟节点介绍</a></li>\\n<li><a href=\\\"/vue3/vnode.component.html\\\" target=\\\"_blank\\\">虚拟节点的 component 属性</a></li>\\n<li><a href=\\\"/vue3/vnode.component.proxy.html\\\" target=\\\"_blank\\\">虚拟节点的component.proxy 属性</a></li>\\n<li><a href=\\\"/vue3/slot.html\\\" target=\\\"_blank\\\">插槽</a></li>\\n<li><a href=\\\"/vue3/setup%E8%AF%AD%E6%B3%95%E7%B3%96.html\\\" target=\\\"_blank\\\">setup语法糖</a></li>\\n<li><a href=\\\"/vue3/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6.html\\\" target=\\\"_blank\\\">函数式组件</a></li>\\n</ul>\"}")
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
