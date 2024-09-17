import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/注入全局属性.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/%E6%B3%A8%E5%85%A5%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7.html\",\"title\":\"应用一个全局可用属性\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"app.mixin\",\"slug\":\"app-mixin\",\"link\":\"#app-mixin\",\"children\":[]},{\"level\":2,\"title\":\"app.config.globalProperties\",\"slug\":\"app-config-globalproperties\",\"link\":\"#app-config-globalproperties\",\"children\":[]},{\"level\":2,\"title\":\"app.provide\",\"slug\":\"app-provide\",\"link\":\"#app-provide\",\"children\":[]}],\"git\":{\"updatedTime\":1726534065000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/注入全局属性.md\",\"excerpt\":\"\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">const</span> ZiggyVue <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token function\\\">install</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">app<span class=\\\"token punctuation\\\">,</span> options</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">r</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">name<span class=\\\"token punctuation\\\">,</span> params<span class=\\\"token punctuation\\\">,</span> absolute<span class=\\\"token punctuation\\\">,</span> config <span class=\\\"token operator\\\">=</span> options</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token function\\\">route</span><span class=\\\"token punctuation\\\">(</span>name<span class=\\\"token punctuation\\\">,</span> params<span class=\\\"token punctuation\\\">,</span> absolute<span class=\\\"token punctuation\\\">,</span> config<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">if</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">parseInt</span><span class=\\\"token punctuation\\\">(</span>app<span class=\\\"token punctuation\\\">.</span>version<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">&gt;</span> <span class=\\\"token number\\\">2</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">            app<span class=\\\"token punctuation\\\">.</span>config<span class=\\\"token punctuation\\\">.</span>globalProperties<span class=\\\"token punctuation\\\">.</span>route <span class=\\\"token operator\\\">=</span> r<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">            app<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">provide</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'route'</span><span class=\\\"token punctuation\\\">,</span> r<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">else</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">            app<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">mixin</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">                <span class=\\\"token literal-property property\\\">methods</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">                    <span class=\\\"token literal-property property\\\">route</span><span class=\\\"token operator\\\">:</span> r<span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">                <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span>useDark<span class=\\\"token punctuation\\\">,</span> useToggle<span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'@vueuse/core'</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token doc-comment comment\\\">/** <span class=\\\"token keyword\\\">@type</span> <span class=\\\"token class-name\\\"><span class=\\\"token punctuation\\\">{</span><span class=\\\"token keyword\\\">import</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'vue'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span>Ref<span class=\\\"token punctuation\\\">&lt;</span>boolean<span class=\\\"token punctuation\\\">&gt;</span><span class=\\\"token punctuation\\\">}</span></span> */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> isDarkMode <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">useDark</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">updateDarkMode</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token keyword\\\">if</span> <span class=\\\"token punctuation\\\">(</span>isDarkMode<span class=\\\"token punctuation\\\">.</span>value<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        document<span class=\\\"token punctuation\\\">.</span>documentElement<span class=\\\"token punctuation\\\">.</span>classList<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">add</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'dark'</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">else</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        document<span class=\\\"token punctuation\\\">.</span>documentElement<span class=\\\"token punctuation\\\">.</span>classList<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">remove</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'dark'</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
