import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/php/面向对象.html.vue"
const data = JSON.parse("{\"path\":\"/php/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"对象\",\"slug\":\"对象\",\"link\":\"#对象\",\"children\":[]}],\"git\":{\"updatedTime\":1720352800000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"php/面向对象.md\",\"excerpt\":\"<h2>对象</h2>\\n<p>PHP 对待对象的方式等同于引用或句柄，即每个变量都持有对象的引用，而不是整个对象的复制。参见 对象和引用。</p>\\n<ul>\\n<li><a href=\\\"https://www.php.net/manual/zh/language.oop5.visibility.php\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">访问控制</a> 对属性或方法的访问控制（PHP 7.1.0 以后支持常量），是通过在前面添加关键字 public（公有），protected（受保护）或 private（私有）来实现的。\\n<ul>\\n<li>被定义为公有的类成员可以在任何地方被访问。</li>\\n<li>被定义为受保护的类成员则可以被其自身以及其子类和父类访问。</li>\\n<li>被定义为私有的类成员则只能被其定义所在的类访问。</li>\\n</ul>\\n</li>\\n<li><a href=\\\"https://www.php.net/manual/zh/language.oop5.abstract.php\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">抽象类</a> PHP 有抽象类和抽象方法。定义为抽象的类不能被实例化。任何一个类，如果它里面至少有一个方法是被声明为抽象的，那么这个类就必须被声明为抽象的。被定义为抽象的方法只是声明了其调用方式（参数），不能定义其具体的功能实现。</li>\\n<li><a href=\\\"https://www.php.net/manual/zh/language.oop5.final.php\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">final 类</a> final 关键字通过在定义方法和常量之前加上 final 来防止被子类覆盖。 如果一个类被声明为 final，则不能被继承。\\n<ul>\\n<li>注意: 属性和常量不能被定义为 final，只有类、方法、常量（PHP 8.1.0 起）才能被定义为 final。 从 PHP 8.0.0 起，除了构造函数之外，私有方法也不能声明为 final 。</li>\\n</ul>\\n</li>\\n<li><a href=\\\"https://www.php.net/manual/zh/language.oop5.magic.php\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">魔术方法</a> 魔术方法是一种特殊的方法，当对对象执行某些操作时会覆盖 PHP 的默认操作。\\n<ul>\\n<li><span class=\\\"bg-yellow-200\\\">警告 PHP 保留所有以 <code>__</code> 开头的方法名称。 因此，除非覆盖 PHP 的行为，否则不建议使用此类方法名称。</span></li>\\n</ul>\\n</li>\\n<li><a href=\\\"https://www.php.net/manual/zh/language.oop5.interfaces.php\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">接口</a> 使用接口（interface），可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容。 由于接口（interface）和类（class）、trait 共享了命名空间，所以它们不能重名。\\n<ul>\\n<li>接口就像定义一个标准的类一样，通过 interface 关键字替换掉 class 关键字来定义，但其中所有的方法都是空的。</li>\\n<li>接口中定义的所有方法都必须是 public ，这是接口的特性。</li>\\n<li>接口可以定义魔术方法，以便要求类（class）实现这些方法。</li>\\n</ul>\\n</li>\\n</ul>\"}")
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
