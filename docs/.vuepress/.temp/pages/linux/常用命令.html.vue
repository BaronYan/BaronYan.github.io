<template><div><ul>
<li><code v-pre>which php</code>  ：显示 php 的路径</li>
</ul>
<p>环境变量</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 查看环境变量</span></span>
<span class="line"><span class="token function">env</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看所有环境变量</span></span>
<span class="line"><span class="token function">env</span> <span class="token parameter variable">-0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看某个环境变量</span></span>
<span class="line"><span class="token function">env</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> proxy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看当前环境变量</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$http_proxy</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$https_proxy</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$no_proxy</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置环境变量</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">"http://127.0.0.1:1080"</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">"http://127.0.0.1:1080"</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">no_proxy</span><span class="token operator">=</span><span class="token string">"localhost,127.0.0.1,localaddress,.localdomain.com"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 永久设置环境变量</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"export http_proxy=<span class="token entity" title="\&quot;">\"</span>http://127.0.0.1:1080<span class="token entity" title="\&quot;">\"</span>"</span> <span class="token operator">>></span> ~/.bashrc</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"export https_proxy=<span class="token entity" title="\&quot;">\"</span>http://127.0.0.1:1080<span class="token entity" title="\&quot;">\"</span>"</span> <span class="token operator">>></span> ~/.bashrc</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"export no_proxy=<span class="token entity" title="\&quot;">\"</span>localhost,127.0.0.1,localaddress,.localdomain.com<span class="token entity" title="\&quot;">\"</span>"</span> <span class="token operator">>></span> ~/.bashrc</span>
<span class="line"><span class="token comment"># 然后,运行以下命令使更改生效:</span></span>
<span class="line"><span class="token builtin class-name">source</span> ~/.bashrc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除环境变量</span></span>
<span class="line"><span class="token builtin class-name">unset</span> http_proxy</span>
<span class="line"><span class="token builtin class-name">unset</span> https_proxy</span>
<span class="line"><span class="token builtin class-name">unset</span> no_proxy</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


