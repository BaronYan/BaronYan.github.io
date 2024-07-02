import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/vnode_vnode.component.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/vnode_vnode.component.html\",\"title\":\"vnode.component\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"vnode.component\",\"description\":\"详细讲解 vnode 和 vnode.component 的区别\",\"date\":\"2024-06-19T00:00:00.000Z\",\"prev\":{\"text\":\"封装Message组件\",\"link\":\"vue3/封装Message组件.md\"}},\"headers\":[{\"level\":2,\"title\":\"vnode.component 介绍\",\"slug\":\"vnode-component-介绍\",\"link\":\"#vnode-component-介绍\",\"children\":[]},{\"level\":2,\"title\":\"createVNode 函数的基本用法\",\"slug\":\"createvnode-函数的基本用法\",\"link\":\"#createvnode-函数的基本用法\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]},{\"level\":2,\"title\":\"访问 VNode 的 component 属性\",\"slug\":\"访问-vnode-的-component-属性\",\"link\":\"#访问-vnode-的-component-属性\",\"children\":[]},{\"level\":2,\"title\":\"注意\",\"slug\":\"注意\",\"link\":\"#注意\",\"children\":[]}],\"git\":{\"updatedTime\":1718885949000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":2}]},\"filePathRelative\":\"vue3/vnode_vnode.component.md\",\"excerpt\":\"<p><strong>相关链接：</strong></p>\\n<ul>\\n<li><a href=\\\"/vue3/%E5%B0%81%E8%A3%85Message%E7%BB%84%E4%BB%B6.html\\\" target=\\\"_blank\\\">封装一个 Message 函数式组件</a></li>\\n</ul>\\n<h2><code>vnode.component</code> 介绍</h2>\\n<p><strong>AppendToElement</strong>  添加到的位置，通过 <code>getAppendToElement</code> 获取：</p>\\n<ul>\\n<li><code>props.appendTo</code>\\n<ul>\\n<li>string</li>\\n<li>function</li>\\n<li>DOM 元素</li>\\n</ul>\\n</li>\\n<li>默认为 <code>document.body</code></li>\\n</ul>\"}")
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
