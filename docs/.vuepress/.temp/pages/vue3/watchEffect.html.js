import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/vue3/watchEffect.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/watchEffect.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"简介\",\"slug\":\"简介\",\"link\":\"#简介\",\"children\":[{\"level\":3,\"title\":\"基本用法\",\"slug\":\"基本用法\",\"link\":\"#基本用法\",\"children\":[]},{\"level\":3,\"title\":\"特性与优点\",\"slug\":\"特性与优点\",\"link\":\"#特性与优点\",\"children\":[]},{\"level\":3,\"title\":\"与 watch 的比较\",\"slug\":\"与-watch-的比较\",\"link\":\"#与-watch-的比较\",\"children\":[]},{\"level\":3,\"title\":\"结论\",\"slug\":\"结论\",\"link\":\"#结论\",\"children\":[]}]}],\"git\":{\"updatedTime\":1721487377000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue3/watchEffect.md\",\"excerpt\":\"<h2>简介</h2>\\n<p>watchEffect 是 Vue 3 中一个新的响应性 API，属于 Composition API 的一部分。\\n它提供了一种简单的方法来自动跟踪响应式状态的变化，并在这些变化发生时执行副作用。\\n相比于传统的 watch 选项，watchEffect 更加直接和易于使用，特别是当你只需要执行一些简单的副作用时。</p>\\n<h3>基本用法</h3>\\n<h4>创建一个简单的副作用</h4>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> ref<span class=\\\"token punctuation\\\">,</span> watchEffect <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'vue'</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> count <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">ref</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">watchEffect</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token template-string\\\"><span class=\\\"token template-punctuation string\\\">`</span><span class=\\\"token string\\\">count has changed to: </span><span class=\\\"token interpolation\\\"><span class=\\\"token interpolation-punctuation punctuation\\\">${</span>count<span class=\\\"token punctuation\\\">.</span>value<span class=\\\"token interpolation-punctuation punctuation\\\">}</span></span><span class=\\\"token template-punctuation string\\\">`</span></span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">count<span class=\\\"token punctuation\\\">.</span>value<span class=\\\"token operator\\\">++</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
