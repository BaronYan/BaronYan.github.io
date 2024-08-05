import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/precognition.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/precognition.html\",\"title\":\"Laravel Precognition 介绍\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"使用 Vue\",\"slug\":\"使用-vue\",\"link\":\"#使用-vue\",\"children\":[{\"level\":3,\"title\":\"使用 Vue 和 Inertia\",\"slug\":\"使用-vue-和-inertia\",\"link\":\"#使用-vue-和-inertia\",\"children\":[]}]}],\"git\":{\"updatedTime\":1720534286000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"laravel/precognition.md\",\"excerpt\":\"\\n<p>使用 <a href=\\\"https://laravel.com/docs/11.x/precognition\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Laravel Precognition</a> ，可以为用户提供实时验证体验，而无需在前端 Vue 应用程序中重复验证。</p>\\n<h2>使用 Vue</h2>\\n<ol>\\n<li>首先，要为路由启用 <code>HandlePrecognitiveRequests</code> 中间件。您还应该创建一个表单请求来容纳路由的验证规则：<div class=\\\"language-php\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"php\\\" data-title=\\\"php\\\"><pre class=\\\"language-php\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">use</span> <span class=\\\"token package\\\">App<span class=\\\"token punctuation\\\">\\\\</span>Http<span class=\\\"token punctuation\\\">\\\\</span>Requests<span class=\\\"token punctuation\\\">\\\\</span>StoreUserRequest</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">use</span> <span class=\\\"token package\\\">Illuminate<span class=\\\"token punctuation\\\">\\\\</span>Foundation<span class=\\\"token punctuation\\\">\\\\</span>Http<span class=\\\"token punctuation\\\">\\\\</span>Middleware<span class=\\\"token punctuation\\\">\\\\</span>HandlePrecognitiveRequests</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">   </span>\\n<span class=\\\"line\\\"><span class=\\\"token class-name static-context\\\">Route</span><span class=\\\"token operator\\\">::</span><span class=\\\"token function\\\">post</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string single-quoted-string\\\">'/users'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name type-declaration\\\">StoreUserRequest</span> <span class=\\\"token variable\\\">$request</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token comment\\\">// ...</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">middleware</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token class-name static-context\\\">HandlePrecognitiveRequests</span><span class=\\\"token operator\\\">::</span><span class=\\\"token keyword\\\">class</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div></li>\\n<li>接下来，您应该为 Vue 安装 <code>Laravel Precognition</code> 前端助手<div class=\\\"language-bash\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"line\\\"><span class=\\\"token function\\\">yarn</span> <span class=\\\"token function\\\">add</span> laravel-precognition-vue</span>\\n<span class=\\\"line\\\"></span></code></pre></div></li>\\n<li>现在可以使用 Precognition 的 <code>useForm</code> 功能创建表单对象,只需为其提供\\n<ul>\\n<li>HTTP 方法（post）</li>\\n<li>目标 URL（/users）</li>\\n<li>和初始表单数据</li>\\n</ul>\\n</li>\\n</ol>\"}")
export { comp, data }
