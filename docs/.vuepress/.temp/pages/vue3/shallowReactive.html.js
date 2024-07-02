import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/shallowReactive.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/shallowReactive.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"ref 和 reactive\",\"slug\":\"ref-和-reactive\",\"link\":\"#ref-和-reactive\",\"children\":[]},{\"level\":2,\"title\":\"shallowRef\",\"slug\":\"shallowref\",\"link\":\"#shallowref\",\"children\":[]},{\"level\":2,\"title\":\"shallowReactive\",\"slug\":\"shallowreactive\",\"link\":\"#shallowreactive\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"vue3/shallowReactive.md\",\"excerpt\":\"<h2>ref 和 reactive</h2>\\n<p>在 Vue 3 中，<code>ref</code> 和 <code>reactive</code> 是用来创建响应式对象的两种不同方式，它们之间的主要区别在于处理的数据类型和使用场景：</p>\\n<p>ref：</p>\\n<p>ref 主要用于创建包含基本类型值（如数字、字符串、布尔值）的响应式引用对象。\\nref 返回的对象具有一个 .value 属性，通过这个属性来访问和修改其值。\\n当给 ref 分配一个新值时，Vue 会确保这个新值是响应式的，并触发视图更新。</p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> ref <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'vue'</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> count <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">ref</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">// 使用</span></span>\\n<span class=\\\"line\\\">console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>count<span class=\\\"token punctuation\\\">.</span>value<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 输出：0</span></span>\\n<span class=\\\"line\\\">count<span class=\\\"token punctuation\\\">.</span>value<span class=\\\"token operator\\\">++</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 触发视图更新</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
