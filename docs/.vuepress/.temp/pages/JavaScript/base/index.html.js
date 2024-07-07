import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/base/index.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/base/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"逻辑或&空值合并\",\"slug\":\"逻辑或-空值合并\",\"link\":\"#逻辑或-空值合并\",\"children\":[]},{\"level\":3,\"title\":\"获取对象的类型\",\"slug\":\"获取对象的类型\",\"link\":\"#获取对象的类型\",\"children\":[]},{\"level\":3,\"title\":\"void 0\",\"slug\":\"void-0\",\"link\":\"#void-0\",\"children\":[]}],\"git\":{\"updatedTime\":1719930400000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"JavaScript/base/index.md\",\"excerpt\":\"<h3>逻辑或&amp;空值合并</h3>\\n<div class=\\\"bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400\\\">|| 和 ?? 有什么区别？</div>\\n<p>在 JavaScript 中，<code>||</code> 和 <code>??</code> 运算符的区别在于它们处理不同的假值：</p>\\n<ol>\\n<li><code>||</code> (逻辑或运算符):\\n<ul>\\n<li>返回第一个真值（truthy）操作数。</li>\\n<li>如果第一个操作数为假值（falsy，如 <code>0</code>、<code>\\\"\\\"</code>、<code>false</code>、<code>NaN</code>、<code>null</code>、<code>undefined</code>），则返回第二个操作数。</li>\\n</ul>\\n</li>\\n<li><code>??</code> (空值合并运算符):\\n<ul>\\n<li>仅在第一个操作数为 <code>null</code> 或 <code>undefined</code> 时返回第二个操作数。</li>\\n<li>不会对 <code>0</code>、<code>\\\"\\\"</code>、<code>false</code> 等其他假值触发。</li>\\n</ul>\\n</li>\\n</ol>\"}")
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
