import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/precognition.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/precognition.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Precognition\",\"slug\":\"precognition\",\"link\":\"#precognition\",\"children\":[{\"level\":3,\"title\":\"使用 Vue\",\"slug\":\"使用-vue\",\"link\":\"#使用-vue\",\"children\":[]},{\"level\":3,\"title\":\"使用 Vue 和 Inertia\",\"slug\":\"使用-vue-和-inertia\",\"link\":\"#使用-vue-和-inertia\",\"children\":[]}]}],\"git\":{\"updatedTime\":1720534286000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"laravel/precognition.md\",\"excerpt\":\"<h2>Precognition</h2>\\n<p><a href=\\\"https://laravel.com/docs/11.x/precognition\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Precognition</a> 为用户提供实时验证体验，而无需在前端 Vue 应用程序中重复验证规则。</p>\\n<h3>使用 Vue</h3>\\n<ol>\\n<li>首先，要为路由启用 <code>HandlePrecognitiveRequests</code> 中间件。您还应该创建一个表单请求来容纳路由的验证规则：<div class=\\\"language-php\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"php\\\" data-title=\\\"php\\\"><pre class=\\\"language-php\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">use</span> <span class=\\\"token package\\\">App<span class=\\\"token punctuation\\\">\\\\</span>Http<span class=\\\"token punctuation\\\">\\\\</span>Requests<span class=\\\"token punctuation\\\">\\\\</span>StoreUserRequest</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">use</span> <span class=\\\"token package\\\">Illuminate<span class=\\\"token punctuation\\\">\\\\</span>Foundation<span class=\\\"token punctuation\\\">\\\\</span>Http<span class=\\\"token punctuation\\\">\\\\</span>Middleware<span class=\\\"token punctuation\\\">\\\\</span>HandlePrecognitiveRequests</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"> </span>\\n<span class=\\\"line\\\"><span class=\\\"token class-name static-context\\\">Route</span><span class=\\\"token operator\\\">::</span><span class=\\\"token function\\\">post</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string single-quoted-string\\\">'/users'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name type-declaration\\\">StoreUserRequest</span> <span class=\\\"token variable\\\">$request</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token comment\\\">// ...</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">middleware</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token class-name static-context\\\">HandlePrecognitiveRequests</span><span class=\\\"token operator\\\">::</span><span class=\\\"token keyword\\\">class</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div></li>\\n<li>接下来，您应该为 Vue 安装 <code>Laravel Precognition</code> 前端助手<div class=\\\"language-bash\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"line\\\"><span class=\\\"token function\\\">yarn</span> <span class=\\\"token function\\\">add</span> laravel-precognition-vue</span>\\n<span class=\\\"line\\\"></span></code></pre></div></li>\\n<li>现在可以使用 Precognition 的<code>useForm</code>功能创建表单对象<div class=\\\"language-vue\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">setup</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> useForm <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'laravel-precognition-vue'</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"> </span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> form <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">useForm</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'post'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">'/users'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token literal-property property\\\">name</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">''</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token literal-property property\\\">email</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">''</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"> </span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">submit</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> form<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">submit</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"> </span>\\n<span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>template</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>form</span> <span class=\\\"token attr-name\\\">@submit.prevent</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>submit<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>label</span> <span class=\\\"token attr-name\\\">for</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>name<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>Name<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>label</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>name<span class=\\\"token punctuation\\\">\\\"</span></span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token attr-name\\\">v-model</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>form.name<span class=\\\"token punctuation\\\">\\\"</span></span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token attr-name\\\">@change</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>form.validate('name')<span class=\\\"token punctuation\\\">\\\"</span></span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token punctuation\\\">/&gt;</span></span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">v-if</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>form.invalid('name')<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">            {{ form.errors.name }}</span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"> </span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>label</span> <span class=\\\"token attr-name\\\">for</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>email<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>Email<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>label</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>email<span class=\\\"token punctuation\\\">\\\"</span></span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>email<span class=\\\"token punctuation\\\">\\\"</span></span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token attr-name\\\">v-model</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>form.email<span class=\\\"token punctuation\\\">\\\"</span></span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token attr-name\\\">@change</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>form.validate('email')<span class=\\\"token punctuation\\\">\\\"</span></span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token punctuation\\\">/&gt;</span></span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">v-if</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>form.invalid('email')<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">            {{ form.errors.email }}</span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"> </span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>button</span> <span class=\\\"token attr-name\\\">:disabled</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>form.processing<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">            Create User</span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>button</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>form</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>template</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre></div></li>\\n</ol>\"}")
export { comp, data }
