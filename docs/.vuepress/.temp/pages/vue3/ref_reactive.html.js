import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/ref_reactive.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/ref_reactive.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"ref 和 reactive\",\"slug\":\"ref-和-reactive\",\"link\":\"#ref-和-reactive\",\"children\":[]},{\"level\":2,\"title\":\"shallowRef\",\"slug\":\"shallowref\",\"link\":\"#shallowref\",\"children\":[]},{\"level\":2,\"title\":\"shallowReactive\",\"slug\":\"shallowreactive\",\"link\":\"#shallowreactive\",\"children\":[]}],\"git\":{\"updatedTime\":1719930400000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/ref&reactive.md\",\"excerpt\":\"<h2>ref 和 reactive</h2>\\n<p>Vue 3 引入了Composition API，\\n其中 <code>ref</code> 和 <code>reactive</code> 是这套API中的两个基本响应式引用类型，\\n用于处理组件中的响应式数据。\\n它们都是构建 Vue 应用中响应式系统的基础部件，但它们适用于不同的场景，并且在内部实现上也有所不同。</p>\\n<ol>\\n<li>\\n<p><code>ref</code>：</p>\\n<ul>\\n<li>主要用于处理基本数据类型（如String、Number、Boolean等）的响应式。</li>\\n<li>当将一个基本数据类型包裹在 <code>ref()</code> 函数中时，Vue内部会通过 <code>RefImpl</code> 类来处理这个值，使其成为一个响应式对象。</li>\\n<li>这个对象拥有 <code>.value</code> 属性，通过这个属性可以获取到原始值，并在修改该值时保持响应性。</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>reactive</code>：</p>\\n<ul>\\n<li>用于创建一个响应式的复杂类型数据对象（如Object、Array）。</li>\\n<li><code>reactive</code> 函数内部使用 <code>ReactiveEffect</code> 类来处理这些复杂类型的数据，使得这些数据的任何嵌套属性变化时都能触发响应。</li>\\n<li>与 <code>ref</code> 创建的响应式对象不同，<code>reactive</code> 返回的响应式对象，可以直接像操作普通对象一样操作它们，不需要通过 <code>.value</code> 访问。</li>\\n</ul>\\n</li>\\n</ol>\"}")
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
