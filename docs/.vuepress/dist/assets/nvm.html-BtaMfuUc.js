import{_ as n,c as s,o as a,d as e}from"./app-DQ970TdL.js";const l={},p=e(`<h1 id="npm管理工具-nvm-以及-npm-换源工具-chsrc" tabindex="-1"><a class="header-anchor" href="#npm管理工具-nvm-以及-npm-换源工具-chsrc"><span>npm管理工具 nvm 以及 npm 换源工具 chsrc</span></a></h1><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm"><span>nvm</span></a></h2><p>nvm-cn 解决的是 NodeJS 自身的国内下载问题。</p><p>https://gitee.com/RubyMetric/nvm-cn?_from=gitee_search</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/RubyMetric/nvm-cn/raw/main/install.sh<span class="token variable">)</span></span>&quot;</span></span>
<span class="line"><span class="token comment"># 卸载</span></span>
<span class="line"><span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/RubyMetric/nvm-cn/raw/main/uninstall.sh<span class="token variable">)</span></span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用</span></span>
<span class="line"></span>
<span class="line">nvm <span class="token function">ls</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出所有可安装版本</span></span>
<span class="line">nvm ls-remote</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装某个版本Node</span></span>
<span class="line">nvm <span class="token function">install</span> lts/fermium</span>
<span class="line">nvm <span class="token function">install</span> v12.20.1</span>
<span class="line">nvm <span class="token function">install</span> v15.5.1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换Node版本</span></span>
<span class="line">nvm use system</span>
<span class="line">nvm use <span class="token number">14.15</span>    <span class="token comment"># 不用全部打出版本号</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新nvm</span></span>
<span class="line">nvm-update</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-换源" tabindex="-1"><a class="header-anchor" href="#npm-换源"><span>npm 换源</span></a></h2><p>推荐您使用C语言编写的全平台换源工具 <code>RubyMetric/chsrc</code></p><p>https://gitee.com/RubyMetric/chsrc</p><p>全平台命令行换源工具，目标支持 Linux, Windows, macOS, BSD 等尽可能多的操作系统，龙芯、飞腾、RISC-V 等尽可能多的 CPU。</p><p>我们使用 C99 来完成上述目标。我们并不使用 Python 或 JS 等解释语言，因为一个简单的换源工具，不应该强行塞给用户一个庞大的解释器和数十、数百 MB 其他文件。</p><p>chsrc 不仅是一个命令行工具，同时也是一个换源框架，它甚至使你能够在不了解C语言的情况下编写出新的换源方法(recipe)。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux <span class="token parameter variable">-o</span> chsrc<span class="token punctuation">;</span> <span class="token function">chmod</span> +x ./chsrc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用</span></span>
<span class="line"><span class="token comment"># chsrc &lt;command&gt; [options] [target] [mirror]</span></span>
<span class="line"></span>
<span class="line">chsrc <span class="token builtin class-name">set</span> <span class="token function">npm</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[p];function i(t,m){return a(),s("div",null,c)}const o=n(l,[["render",i],["__file","nvm.html.vue"]]),v=JSON.parse('{"path":"/devenv/nvm.html","title":"npm管理工具 nvm 以及 npm 换源工具 chsrc","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"nvm","slug":"nvm","link":"#nvm","children":[]},{"level":2,"title":"npm 换源","slug":"npm-换源","link":"#npm-换源","children":[]}],"git":{"updatedTime":1724859858000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"devenv/nvm.md","excerpt":"\\n<h2>nvm</h2>\\n<p>nvm-cn 解决的是 NodeJS 自身的国内下载问题。</p>\\n<p>https://gitee.com/RubyMetric/nvm-cn?_from=gitee_search</p>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 安装</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">bash</span> <span class=\\"token parameter variable\\">-c</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-fsSL</span> https://gitee.com/RubyMetric/nvm-cn/raw/main/install.sh<span class=\\"token variable\\">)</span></span>\\"</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 卸载</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">bash</span> <span class=\\"token parameter variable\\">-c</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-fsSL</span> https://gitee.com/RubyMetric/nvm-cn/raw/main/uninstall.sh<span class=\\"token variable\\">)</span></span>\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 使用</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">nvm <span class=\\"token function\\">ls</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 列出所有可安装版本</span></span>\\n<span class=\\"line\\">nvm ls-remote</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 安装某个版本Node</span></span>\\n<span class=\\"line\\">nvm <span class=\\"token function\\">install</span> lts/fermium</span>\\n<span class=\\"line\\">nvm <span class=\\"token function\\">install</span> v12.20.1</span>\\n<span class=\\"line\\">nvm <span class=\\"token function\\">install</span> v15.5.1</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 切换Node版本</span></span>\\n<span class=\\"line\\">nvm use system</span>\\n<span class=\\"line\\">nvm use <span class=\\"token number\\">14.15</span>    <span class=\\"token comment\\"># 不用全部打出版本号</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 更新nvm</span></span>\\n<span class=\\"line\\">nvm-update</span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{o as comp,v as data};