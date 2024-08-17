<template><div><p>解决npm install时卡在sill idealTree buildDeps的问题</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 查看配置</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token function">ls</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看当前源 https://registry.npmjs.org/</span></span>
<span class="line"><span class="token function">npm</span> config get registry</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置为 npmmirror 源</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


