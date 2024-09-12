import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/php/静态类.html.vue"
const data = JSON.parse("{\"path\":\"/php/%E9%9D%99%E6%80%81%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720534286000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"php/静态类.md\",\"excerpt\":\"<p>在 PHP 中，静态类通常指的是一个包含静态方法和属性的类。\\n然而，<code>__construct</code> 方法是<strong>对象构造函数</strong>，它用于实例化对象时初始化属性和执行其他初始化任务。\\n由于静态类通常不实例化对象，因此在这些类中定义 <code>__construct</code> 方法没有实际用途。</p>\\n<p>静态类的一些关键点包括：</p>\\n<ul>\\n<li><strong>静态方法和属性</strong>：静态方法和属性不需要实例化类就可以调用，使用类名加双冒号 <code>::</code>  调用，例如 <code>ClassName::staticMethod()</code>。</li>\\n<li><strong>单例模式</strong>：有时静态类会使用单例模式，确保类只有一个实例。这种模式中可能会使用 <code>__construct</code> 方法，但通常会将其设为 <code>private</code>，防止直接实例化。</li>\\n</ul>\"}")
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
