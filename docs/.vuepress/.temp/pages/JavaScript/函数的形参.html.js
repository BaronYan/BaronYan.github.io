import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/函数的形参.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/%E5%87%BD%E6%95%B0%E7%9A%84%E5%BD%A2%E5%8F%82.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"函数的形参在函数体内可以被重新赋值吗？\",\"slug\":\"函数的形参在函数体内可以被重新赋值吗\",\"link\":\"#函数的形参在函数体内可以被重新赋值吗\",\"children\":[]}],\"git\":{\"updatedTime\":1719150668000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"JavaScript/函数的形参.md\",\"excerpt\":\"<h2>函数的形参在函数体内可以被重新赋值吗？</h2>\\n<p>在JavaScript中，<span class=\\\"bg-yellow-200\\\">函数的形参在函数体内可以被重新赋值</span>，但重新赋值只会影响函数体内的局部变量，不会影响传递给函数的实际参数值。</p>\\n<p>这是因为在函数被调用时，JavaScript引擎会创建一个活动对象（activation object，也称为变量对象），用来保存函数的局部变量、参数和内部函数等信息。函数的形参被视为该活动对象的一个属性，可以被函数体内的代码修改。</p>\\n<p>\\n举个例子：</p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">add</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">a<span class=\\\"token punctuation\\\">,</span> b</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    a <span class=\\\"token operator\\\">=</span> a <span class=\\\"token operator\\\">+</span> <span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">;</span>  <span class=\\\"token comment\\\">// 对形参a重新赋值</span></span>\\n<span class=\\\"line\\\">    console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>a<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>  <span class=\\\"token comment\\\">// 输出：6</span></span>\\n<span class=\\\"line\\\">    console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>b<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>  <span class=\\\"token comment\\\">// 输出：2</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">add</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">5</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">2</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
