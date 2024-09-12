import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/html/增强网页内容的可访问性.html.vue"
const data = JSON.parse("{\"path\":\"/html/%E5%A2%9E%E5%BC%BA%E7%BD%91%E9%A1%B5%E5%86%85%E5%AE%B9%E7%9A%84%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"role 属性\",\"slug\":\"role-属性\",\"link\":\"#role-属性\",\"children\":[]},{\"level\":2,\"title\":\"aria-* 属性\",\"slug\":\"aria-属性\",\"link\":\"#aria-属性\",\"children\":[]}],\"git\":{\"updatedTime\":1720352800000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"html/增强网页内容的可访问性.md\",\"excerpt\":\"<p>HTML 中的 <code>role</code> 和 <code>aria-*</code> 属性通常用于增强网页内容的可访问性（Accessibility，简称A11y）。\\n这些属性通常用于描述网页元素的语义信息和交互行为，以帮助辅助技术（如屏幕阅读器）理解和解释网页内容。</p>\\n<h2><code>role</code> 属性</h2>\\n<p><code>role</code> 属性<strong>用于指定元素在页面中扮演的角色</strong>，它可以将一个普通的 HTML 元素标记为具有特定语义的角色。例如，一个 <code>div</code> 元素可以通过 <code>role=\\\"navigation\\\"</code> 表示它是一个导航区域，即使它不是一个 <code>nav</code> 元素。</p>\"}")
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
