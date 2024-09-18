import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/服务类仓储类查询类.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/%E6%9C%8D%E5%8A%A1%E7%B1%BB%E4%BB%93%E5%82%A8%E7%B1%BB%E6%9F%A5%E8%AF%A2%E7%B1%BB.html\",\"title\":\"服务类 仓库类 查询类 这些类之间的逻辑关系\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"逻辑关系:\",\"slug\":\"逻辑关系\",\"link\":\"#逻辑关系\",\"children\":[]}],\"git\":{\"updatedTime\":1726583444000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"laravel/服务类仓储类查询类.md\",\"excerpt\":\"\\n<p>服务类、仓库类和查询类之间的逻辑关系是一种分层架构,每一层都有其特定的职责。让我为您详细解释它们之间的关系:</p>\\n<ol>\\n<li><strong>仓库类 (Repository)</strong>:\\n<ul>\\n<li>主要职责是处理数据持久化逻辑。</li>\\n<li>直接与数据库或其他数据存储交互。</li>\\n<li>提供基本的CRUD(创建、读取、更新、删除)操作。</li>\\n<li>封装复杂的数据库查询。</li>\\n<li>示例: CompanyRepository</li>\\n</ul>\\n</li>\\n<li><strong>查询类 (Query)</strong>:\\n<ul>\\n<li>专注于构建复杂的数据库查询。</li>\\n<li>通常用于封装特定的、可重用的查询逻辑。</li>\\n<li>可以被仓库类使用,也可以直接被服务类使用。</li>\\n<li>示例: CompanyQuery</li>\\n</ul>\\n</li>\\n<li><strong>服务类 (Service)</strong>:\\n<ul>\\n<li>包含业务逻辑。</li>\\n<li>协调多个仓库或查询类的操作。</li>\\n<li>处理跨越多个领域的复杂操作。</li>\\n<li>可以调用仓库类和查询类。</li>\\n<li>示例: CompanyService</li>\\n</ul>\\n</li>\\n</ol>\"}")
export { comp, data }
