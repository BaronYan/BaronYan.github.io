import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/php/base_运算符_安全访问运算符.html.vue"
const data = JSON.parse("{\"path\":\"/php/base_%E8%BF%90%E7%AE%97%E7%AC%A6_%E5%AE%89%E5%85%A8%E8%AE%BF%E9%97%AE%E8%BF%90%E7%AE%97%E7%AC%A6.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"全访问运算符\",\"slug\":\"全访问运算符\",\"link\":\"#全访问运算符\",\"children\":[{\"level\":3,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":3,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":3,\"title\":\"工作原理\",\"slug\":\"工作原理\",\"link\":\"#工作原理\",\"children\":[]},{\"level\":3,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]},{\"level\":3,\"title\":\"使用场景\",\"slug\":\"使用场景\",\"link\":\"#使用场景\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1720882067000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"php/base_运算符_安全访问运算符.md\",\"excerpt\":\"<h2>全访问运算符</h2>\\n<p>PHP 中的安全访问运算符（Nullsafe Operator）是 PHP 8.0 引入的一个新特性，用于处理链式调用中的空值（null）问题。</p>\\n<h3>介绍</h3>\\n<p><strong>安全访问运算符</strong>（<code>?-&gt;</code>）允许你在调用对象方法或访问对象属性时，\\n安全地处理可能为 <code>null</code> 的对象。\\n在链式调用中，如果某个对象为 <code>null</code>，安全访问运算符会直接返回 <code>null</code>，而不会引发错误。这简化了代码的编写，减少了显式的 <code>null</code> 检查。</p>\"}")
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
