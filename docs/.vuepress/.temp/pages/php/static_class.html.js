import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/php/static_class.html.vue"
const data = JSON.parse("{\"path\":\"/php/static_class.html\",\"title\":\"$reflection = new ReflectionClass(static::class); 是什么意思？\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"反射\",\"slug\":\"反射\",\"link\":\"#反射\",\"children\":[{\"level\":3,\"title\":\"为什么是 在运行时\\\"反观\\\"代码本身\",\"slug\":\"为什么是-在运行时-反观-代码本身\",\"link\":\"#为什么是-在运行时-反观-代码本身\",\"children\":[]},{\"level\":3,\"title\":\"PHP 的反射 API\",\"slug\":\"php-的反射-api\",\"link\":\"#php-的反射-api\",\"children\":[]},{\"level\":3,\"title\":\"示例用法：\",\"slug\":\"示例用法\",\"link\":\"#示例用法\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"php/static_class.md\",\"excerpt\":\"\\n<p>这行代码使用了 PHP 的反射 API 来创建一个 <code>ReflectionClass</code> 对象。让我详细解释一下：</p>\\n<ol>\\n<li><code>ReflectionClass</code> 是 PHP 反射 API 的一部分。它允许我们在运行时检查和操作类的结构和属性。</li>\\n<li><code>static::class</code> 是一个后期静态绑定的用法。在 trait 中，它指向使用这个 trait 的类。</li>\\n<li><code>new ReflectionClass(static::class)</code> 创建了一个代表使用这个 trait 的类的 <code>ReflectionClass</code> 实例。</li>\\n</ol>\"}")
export { comp, data }
