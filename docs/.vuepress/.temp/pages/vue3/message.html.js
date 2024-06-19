import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/message.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/message.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"createVNode 函数的基本用法\",\"slug\":\"createvnode-函数的基本用法\",\"link\":\"#createvnode-函数的基本用法\",\"children\":[]},{\"level\":2,\"title\":\"vnode.component\",\"slug\":\"vnode-component\",\"link\":\"#vnode-component\",\"children\":[{\"level\":3,\"title\":\"vnode\",\"slug\":\"vnode\",\"link\":\"#vnode\",\"children\":[]},{\"level\":3,\"title\":\"vnode.component\",\"slug\":\"vnode-component-1\",\"link\":\"#vnode-component-1\",\"children\":[]}]},{\"level\":2,\"title\":\"区别总结\",\"slug\":\"区别总结\",\"link\":\"#区别总结\",\"children\":[]},{\"level\":2,\"title\":\"应用场景\",\"slug\":\"应用场景\",\"link\":\"#应用场景\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"vue3/message.md\",\"excerpt\":\"<p><strong>AppendToElement</strong>  添加到的位置，通过 <code>getAppendToElement</code> 获取：</p>\\n<ul>\\n<li><code>props.appendTo</code>\\n<ul>\\n<li>string</li>\\n<li>function</li>\\n<li>DOM 元素</li>\\n</ul>\\n</li>\\n<li>默认为 <code>document.body</code></li>\\n</ul>\\n<p><strong>Container</strong> 附加到的容器，通过 <code>genContainer</code> 获取,默认为 <code>div</code></p>\"}")
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
