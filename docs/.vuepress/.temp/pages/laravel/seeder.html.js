import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/seeder.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/seeder.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"执行单个 seeder\",\"slug\":\"执行单个-seeder\",\"link\":\"#执行单个-seeder\",\"children\":[]},{\"level\":2,\"title\":\"运行所有的 seeders\",\"slug\":\"运行所有的-seeders\",\"link\":\"#运行所有的-seeders\",\"children\":[]}],\"git\":{\"updatedTime\":1725757698000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":2}]},\"filePathRelative\":\"laravel/seeder.md\",\"excerpt\":\"<div class=\\\"language-php\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"php\\\" data-title=\\\"php\\\"><pre class=\\\"language-php\\\"><code><span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"># seeder 基础知识</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token php language-php\\\"><span class=\\\"token delimiter important\\\">&lt;?php</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">namespace</span> <span class=\\\"token package\\\">Database<span class=\\\"token punctuation\\\">\\\\</span>Seeders</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">use</span> <span class=\\\"token package\\\">App<span class=\\\"token punctuation\\\">\\\\</span>Models<span class=\\\"token punctuation\\\">\\\\</span>Company</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">use</span> <span class=\\\"token package\\\">Illuminate<span class=\\\"token punctuation\\\">\\\\</span>Database<span class=\\\"token punctuation\\\">\\\\</span>Seeder</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name-definition class-name\\\">CompanySeeder</span> <span class=\\\"token keyword\\\">extends</span> <span class=\\\"token class-name\\\">Seeder</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token doc-comment comment\\\">/**</span>\\n<span class=\\\"line\\\">     * Run the database seeds.</span>\\n<span class=\\\"line\\\">     */</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token function-definition function\\\">run</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token keyword return-type\\\">void</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token class-name static-context\\\">Company</span><span class=\\\"token operator\\\">::</span><span class=\\\"token function\\\">create</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">[</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token string single-quoted-string\\\">'name'</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token string single-quoted-string\\\">'广州勤快货运代理有限公司'</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token string single-quoted-string\\\">'suffix_domain'</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token string single-quoted-string\\\">'qkcargo'</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token string single-quoted-string\\\">'email'</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token string single-quoted-string\\\">'admin@qkcargo.com'</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token string single-quoted-string\\\">'phone'</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token string single-quoted-string\\\">'020-88888888'</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></span></code></pre></div>\"}")
export { comp, data }