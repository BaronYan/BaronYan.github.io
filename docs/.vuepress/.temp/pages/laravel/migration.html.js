import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/migration.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/migration.html\",\"title\":\"migration 基础认知\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"外键约束\",\"slug\":\"外键约束\",\"link\":\"#外键约束\",\"children\":[{\"level\":3,\"title\":\"foreign()、foreignUlid()\",\"slug\":\"foreign-、foreignulid\",\"link\":\"#foreign-、foreignulid\",\"children\":[]},{\"level\":3,\"title\":\"nullable & cascade\",\"slug\":\"nullable-cascade\",\"link\":\"#nullable-cascade\",\"children\":[]},{\"level\":3,\"title\":\"constrained()\",\"slug\":\"constrained\",\"link\":\"#constrained\",\"children\":[]},{\"level\":3,\"title\":\"foreign、foreignId、foreignUlid 有什么区别\",\"slug\":\"foreign、foreignid、foreignulid-有什么区别\",\"link\":\"#foreign、foreignid、foreignulid-有什么区别\",\"children\":[]}]},{\"level\":2,\"title\":\"联合主键\",\"slug\":\"联合主键\",\"link\":\"#联合主键\",\"children\":[{\"level\":3,\"title\":\"主键\",\"slug\":\"主键\",\"link\":\"#主键\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725678897000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":3}]},\"filePathRelative\":\"laravel/migration.md\",\"excerpt\":\"\\n<h2>外键约束</h2>\\n<div class=\\\"language-php\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"php\\\" data-title=\\\"php\\\"><pre class=\\\"language-php\\\"><code><span class=\\\"line\\\"><span class=\\\"token variable\\\">$table</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">foreign</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string single-quoted-string\\\">'company_id'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">references</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string single-quoted-string\\\">'id'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">on</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string single-quoted-string\\\">'companies'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">onDelete</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string single-quoted-string\\\">'cascade'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">onUpdate</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string single-quoted-string\\\">'cascade'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
