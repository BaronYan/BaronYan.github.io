import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/php/类与对象.html.vue"
const data = JSON.parse("{\"path\":\"/php/%E7%B1%BB%E4%B8%8E%E5%AF%B9%E8%B1%A1.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"简介\",\"slug\":\"简介\",\"link\":\"#简介\",\"children\":[]}],\"git\":{\"updatedTime\":1720352800000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"php/类与对象.md\",\"excerpt\":\"<h2>简介</h2>\\n<ul>\\n<li>PHP 对待对象的方式等同于引用或句柄，即每个变量都持有对象的引用，而不是整个对象的复制。</li>\\n<li>每个类的定义都以关键字 class 开头，后面跟着类名，后面跟着一对花括号，里面包含有类的属性与方法的定义。</li>\\n<li>一个类可以包含有属于自己的 常量，变量（称为“属性”）以及函数（称为“方法”）。</li>\\n<li>当一个方法在类定义内部被调用时，有一个可用的伪变量 <code>$this</code>。<code>$this</code> 是一个到当前对象的引用。</li>\\n<li>以静态方式去调用一个非静态方法，将会抛出一个 Error。同时 <code>$this</code> 将会被声明为未定义。</li>\\n</ul>\"}")
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
