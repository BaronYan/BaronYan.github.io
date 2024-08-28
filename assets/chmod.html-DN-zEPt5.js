import{_ as s,c as n,o as a,d as e}from"./app-G3uWedL8.js";const c="/assets/20240828001-CguJIgPq.jpg",l="/assets/20240828002-jmlALAXT.png",o={},p=e('<p>chmod (change mode) 命令是控制用户对文件的权限的命令</p><p>Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）。</p><p><img src="'+c+'" alt="chmod"></p><p>只有文件 <strong>所有者和超级用户</strong> 可以修改文件或目录的权限。可以使用绝对模式（八进制数字模式），符号模式指定文件的权限。</p><p><img src="'+l+`" alt="chmod"></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 语法</span></span>
<span class="line"><span class="token function">chmod</span> <span class="token punctuation">[</span>-cfvR<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> mode file<span class="token punctuation">..</span>.</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 参数说明</span></span>
<span class="line"><span class="token comment"># mode : 权限设定字串，格式如下 :</span></span>
<span class="line"><span class="token comment"># [ugoa...][[+-=][rwxX]...][,...]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明</p><ul><li><code>u</code> 表示该文件的拥有者，<code>g</code> 表示与该文件的拥有者属于同一个群体(group)者，<code>o</code> 表示其他以外的人，<code>a</code> 表示这三者皆是。</li><li><code>+</code> 表示增加权限、<code>-</code> 表示取消权限、<code>=</code> 表示唯一设定权限。</li><li><code>r</code> 表示可读取，<code>w</code> 表示可写入，<code>x</code> 表示可执行，<code>X</code> 表示只有当该文件是个子目录或者该文件已经被设定过为可执行。</li></ul><p>其他参数说明</p><ul><li><code>-c</code> : 若该文件权限确实已经更改，才显示其更改动作</li><li><code>-f</code> : 若该文件权限无法被更改也不要显示错误讯息</li><li><code>-v</code> : 显示权限变更的详细资料</li><li><code>-R</code> : 对目前目录下的所有文件与子目录进行相同的权限变更(即以递归的方式逐个变更)</li><li><code>--help</code> : 显示辅助说明</li><li><code>--version</code> : 显示版本</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">chmod</span>  +x ./chsrc</span>
<span class="line"><span class="token comment"># 上面命令 给所有人设置 chsrc 可执行权限</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[p];function i(d,r){return a(),n("div",null,t)}const m=s(o,[["render",i],["__file","chmod.html.vue"]]),h=JSON.parse('{"path":"/linux/chmod.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"updatedTime":1724858153000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"linux/chmod.md","excerpt":"<p>chmod (change mode) 命令是控制用户对文件的权限的命令</p>\\n<p>Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）。</p>\\n<p></p>\\n<p>只有文件 <strong>所有者和超级用户</strong> 可以修改文件或目录的权限。可以使用绝对模式（八进制数字模式），符号模式指定文件的权限。</p>\\n<p></p>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\"><span class=\\"token comment\\"># 语法</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">chmod</span> <span class=\\"token punctuation\\">[</span>-cfvR<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">[</span>--help<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">[</span>--version<span class=\\"token punctuation\\">]</span> mode file<span class=\\"token punctuation\\">..</span>.</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># 参数说明</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># mode : 权限设定字串，格式如下 :</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># [ugoa...][[+-=][rwxX]...][,...]</span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{m as comp,h as data};
