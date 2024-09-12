import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/Vuejs的设计与实现/3.Vue.js的设计思路.html.vue"
const data = JSON.parse("{\"path\":\"/Vuejs%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0/3.Vue.js%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2024年6月18日\",\"category\":[\"Vuejs的设计与实现\"],\"tag\":[\"Vnode\"],\"archive\":true},\"headers\":[{\"level\":2,\"title\":\"1. 声明式地描述 UI\",\"slug\":\"_1-声明式地描述-ui\",\"link\":\"#_1-声明式地描述-ui\",\"children\":[{\"level\":3,\"title\":\"1.1 声明式地描述 UI\",\"slug\":\"_1-1-声明式地描述-ui\",\"link\":\"#_1-1-声明式地描述-ui\",\"children\":[]},{\"level\":3,\"title\":\"1.2 使用 JS 对象描述 UI\",\"slug\":\"_1-2-使用-js-对象描述-ui\",\"link\":\"#_1-2-使用-js-对象描述-ui\",\"children\":[]},{\"level\":3,\"title\":\"1.3 模板和 JS 对象有何不同\",\"slug\":\"_1-3-模板和-js-对象有何不同\",\"link\":\"#_1-3-模板和-js-对象有何不同\",\"children\":[]}]},{\"level\":2,\"title\":\"2. 初识渲染器\",\"slug\":\"_2-初识渲染器\",\"link\":\"#_2-初识渲染器\",\"children\":[{\"level\":3,\"title\":\"2.1 编写一个渲染器\",\"slug\":\"_2-1-编写一个渲染器\",\"link\":\"#_2-1-编写一个渲染器\",\"children\":[]}]},{\"level\":2,\"title\":\"3. 组件的本质\",\"slug\":\"_3-组件的本质\",\"link\":\"#_3-组件的本质\",\"children\":[]},{\"level\":2,\"title\":\"4. 模板的工作原理\",\"slug\":\"_4-模板的工作原理\",\"link\":\"#_4-模板的工作原理\",\"children\":[]}],\"git\":{\"updatedTime\":1718723406000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"Vuejs的设计与实现/3.Vue.js的设计思路.md\",\"excerpt\":\"<h2>1. 声明式地描述 UI</h2>\\n<h3>1.1 声明式地描述 UI</h3>\\n<ul>\\n<li>使用与 HTML 标签一致的方式来描述 DOM 元素，例如描述一个 div 标签时可以使用 <code>&lt;div&gt;&lt;/div&gt;</code></li>\\n<li>使用与 HTML 标签一致的方式来描述属性，例如 <code>&lt;div id=\\\"app\\\"&gt;&lt;/div&gt;</code></li>\\n<li>使用 <code>:</code> 或 <code>v-bind</code> 来描述动态绑定的属性，例如 <code>&lt;div :id=\\\"dynamicId\\\"&gt;&lt;/div&gt;</code></li>\\n<li>使用 <code>@</code> 或 <code>v-on</code> 来描述事件，例如点击事件 <code>&lt;div @click=\\\"handler\\\"&gt;&lt;/div&gt;</code></li>\\n<li>使用与 HTML 标签一致的方式来描述层级结构，例如一个具有 span 子节点的 div 标签 <code>&lt;div&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;</code></li>\\n</ul>\"}")
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
