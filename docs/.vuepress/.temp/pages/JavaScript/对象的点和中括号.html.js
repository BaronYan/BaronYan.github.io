import comp from "/home/yanbeirong/www/myblog/docs/.vuepress/.temp/pages/JavaScript/对象的点和中括号.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%82%B9%E5%92%8C%E4%B8%AD%E6%8B%AC%E5%8F%B7.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1728483186000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"JavaScript/对象的点和中括号.md\",\"excerpt\":\"<p>JavaScript 中对象的点（.）语法和方括号（[]）语法都用于访问对象的属性，但它们有一些重要的区别：</p>\\n<ol>\\n<li>语法形式：\\n<ul>\\n<li>点语法：<code>object.property</code></li>\\n<li>方括号语法：<code>object['property']</code></li>\\n</ul>\\n</li>\\n<li>属性名称限制：\\n<ul>\\n<li>点语法只能用于有效的 JavaScript 标识符。这意味着属性名必须以字母、下划线（_）或美元符号（$）开头，后面可以跟字母、数字、下划线或美元符号。</li>\\n<li>方括号语法可以使用任何字符串作为属性名，包括包含空格或特殊字符的字符串。</li>\\n</ul>\\n</li>\\n<li>动态属性访问：\\n<ul>\\n<li>点语法不能用于动态属性名（即在运行时确定的属性名）。</li>\\n<li>方括号语法可以使用变量或表达式来动态确定属性名。</li>\\n</ul>\\n</li>\\n<li>数字属性名：\\n<ul>\\n<li>对于数字属性名，点语法会将其解释为浮点数，而方括号语法允许使用整数索引。</li>\\n</ul>\\n</li>\\n<li>保留字：\\n<ul>\\n<li>点语法不能用于 JavaScript 的保留字（如 class、function 等）。</li>\\n<li>方括号语法可以使用保留字作为属性名。</li>\\n</ul>\\n</li>\\n</ol>\"}")
export { comp, data }
