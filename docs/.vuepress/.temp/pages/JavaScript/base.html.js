import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/JavaScript/base.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/base.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"JavaScript/base.md\",\"excerpt\":\"<p><strong>在 JS中，|| 和 ?? 有什么区别？</strong></p>\\n<p>在 JavaScript 中，<code>||</code> 和 <code>??</code> 运算符的区别在于它们处理不同的假值：</p>\\n<ol>\\n<li><code>||</code> (逻辑或运算符):\\n<ul>\\n<li>返回第一个真值（truthy）操作数。</li>\\n<li>如果第一个操作数为假值（falsy，如 <code>0</code>、<code>\\\"\\\"</code>、<code>false</code>、<code>NaN</code>、<code>null</code>、<code>undefined</code>），则返回第二个操作数。</li>\\n</ul>\\n</li>\\n<li><code>??</code> (空值合并运算符):\\n<ul>\\n<li>仅在第一个操作数为 <code>null</code> 或 <code>undefined</code> 时返回第二个操作数。</li>\\n<li>不会对 <code>0</code>、<code>\\\"\\\"</code>、<code>false</code> 等其他假值触发。</li>\\n</ul>\\n</li>\\n</ol>\"}")
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
