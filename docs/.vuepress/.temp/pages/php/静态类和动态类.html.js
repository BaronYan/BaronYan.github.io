import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/php/静态类和动态类.html.vue"
const data = JSON.parse("{\"path\":\"/php/%E9%9D%99%E6%80%81%E7%B1%BB%E5%92%8C%E5%8A%A8%E6%80%81%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"选择静态类or动态类\",\"slug\":\"选择静态类or动态类\",\"link\":\"#选择静态类or动态类\",\"children\":[{\"level\":3,\"title\":\"静态类（Static Class）\",\"slug\":\"静态类-static-class\",\"link\":\"#静态类-static-class\",\"children\":[]},{\"level\":3,\"title\":\"动态类（Dynamic Class）\",\"slug\":\"动态类-dynamic-class\",\"link\":\"#动态类-dynamic-class\",\"children\":[]},{\"level\":3,\"title\":\"如何选择\",\"slug\":\"如何选择\",\"link\":\"#如何选择\",\"children\":[]}]}],\"git\":{\"updatedTime\":1720626799000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"php/静态类和动态类.md\",\"excerpt\":\"<h2>选择静态类or动态类</h2>\\n<p>在 PHP 中，静态类和动态类的选择主要取决于具体的应用场景，而不仅仅是效率问题。以下是两者的对比及其适用场景：</p>\\n<h3>静态类（Static Class）</h3>\\n<p><strong>特点：</strong></p>\\n<ul>\\n<li>不能实例化，直接通过类名调用其方法和属性。</li>\\n<li>通常用于工具类和辅助类，提供一组通用的功能或常量。</li>\\n<li>所有方法和属性都是静态的，用 self 或 static 关键字引用。</li>\\n</ul>\\n<p><strong>适用场景：</strong></p>\\n<ul>\\n<li>需要全局访问的工具类（例如：日志记录、配置管理）。</li>\\n<li>不需要保存状态的功能模块。</li>\\n<li>一些常量定义和静态方法。</li>\\n</ul>\"}")
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
