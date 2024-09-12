import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/php/implements.html.vue"
const data = JSON.parse("{\"path\":\"/php/implements.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720534286000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"php/implements.md\",\"excerpt\":\"<p>在 PHP 中，<code>implements</code> 关键字用于类定义中来实现一个或多个接口。</p>\\n<ul>\\n<li>接口（interface）定义了一组方法，这些方法必须由实现该接口的类来定义。</li>\\n<li>接口只声明方法签名，而不包含方法的实现。</li>\\n<li>通过接口，PHP 实现了一种多继承的机制，使类可以从多个接口中继承方法签名。</li>\\n</ul>\\n<p>使用接口和 <code>implements</code> 关键字的一些关键点：</p>\\n<ul>\\n<li><strong>接口声明</strong>：接口使用 <code>interface</code> 关键字来声明，<strong>接口中的所有方法都是公有的</strong>。</li>\\n<li><strong>接口实现</strong>：类使用 <code>implements</code> 关键字来实现一个或多个接口。</li>\\n<li><strong>多接口实现</strong>：一个类可以实现多个接口，接口之间用逗号分隔。</li>\\n</ul>\"}")
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
