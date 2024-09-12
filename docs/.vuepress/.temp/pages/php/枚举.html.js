import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/php/枚举.html.vue"
const data = JSON.parse("{\"path\":\"/php/%E6%9E%9A%E4%B8%BE.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"纯枚举\",\"slug\":\"纯枚举\",\"link\":\"#纯枚举\",\"children\":[]},{\"level\":2,\"title\":\"支持枚举\",\"slug\":\"支持枚举\",\"link\":\"#支持枚举\",\"children\":[]},{\"level\":2,\"title\":\"枚举方法\",\"slug\":\"枚举方法\",\"link\":\"#枚举方法\",\"children\":[]},{\"level\":2,\"title\":\"静态方法\",\"slug\":\"静态方法\",\"link\":\"#静态方法\",\"children\":[]}],\"git\":{\"updatedTime\":1724167110000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":2}]},\"filePathRelative\":\"php/枚举.md\",\"excerpt\":\"<h2>概述</h2>\\n<p>枚举允许开发人员定义一个自定义类型，仅限于离散数量的可能值之一。</p>\\n<ul>\\n<li>在 PHP 中，枚举是一种特殊的对象。</li>\\n<li>枚举本身是一个类，其可能的用例都是该类的单实例对象。这意味着枚举用例是有效的对象，可以在任何可以使用对象的地方使用，包括类型检查。</li>\\n<li>枚举可以有零个或多个 <code>case</code> 定义。零情况枚举在语法上有效，但毫无用处。</li>\\n<li>枚举最流行的示例是内置布尔类型，它是一种具有合法值 <code>true</code> 和 <code>false</code> 的枚举类型。</li>\\n<li>枚举与类类似，与类、接口和特征共享相同的命名空间。它们也可以以相同的方式自动加载。</li>\\n</ul>\"}")
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
