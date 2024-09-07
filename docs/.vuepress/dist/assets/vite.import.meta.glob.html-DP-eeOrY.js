import{_ as s,c as n,o as a,d as p}from"./app-ZzRDGa0q.js";const t={},e=p(`<h1 id="glob-导入" tabindex="-1"><a class="header-anchor" href="#glob-导入"><span>Glob 导入</span></a></h1><p>https://cn.vitejs.dev/guide/features#glob-import</p><p>Vite 支持使用 <code>import.meta.glob</code> 函数从文件系统导入多个模块：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;./dir/*.js&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// vite 生成的代码</span></span>
<span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&#39;./dir/foo.js&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./dir/foo.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;./dir/bar.js&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./dir/bar.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 你可以遍历 modules 对象的 key 值来访问相应的模块：</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> path <span class="token keyword">in</span> modules<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  modules<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mod</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> mod<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="直接引入" tabindex="-1"><a class="header-anchor" href="#直接引入"><span>直接引入</span></a></h2><p>匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块，你可以传入 <code>{ eager: true }</code> 作为第二个参数：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;./dir/*.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">eager</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// vite 生成的代码</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> __glob__0_0 <span class="token keyword">from</span> <span class="token string">&#39;./dir/foo.js&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> __glob__0_1 <span class="token keyword">from</span> <span class="token string">&#39;./dir/bar.js&#39;</span></span>
<span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&#39;./dir/foo.js&#39;</span><span class="token operator">:</span> __glob__0_0<span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;./dir/bar.js&#39;</span><span class="token operator">:</span> __glob__0_1<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多个匹配模式" tabindex="-1"><a class="header-anchor" href="#多个匹配模式"><span>多个匹配模式</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 第一个参数可以是一个 glob 数组，例如：</span></span>
<span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./dir/*.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./another/*.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反面匹配模式" tabindex="-1"><a class="header-anchor" href="#反面匹配模式"><span>反面匹配模式</span></a></h2><p>同样也支持反面 glob 匹配模式（以 <code>!</code> 作为前缀）。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./dir/*.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!**/bar.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="具名导入" tabindex="-1"><a class="header-anchor" href="#具名导入"><span>具名导入</span></a></h2><p>也可能你只想要导入模块中的部分内容，那么可以利用 <code>import</code> 选项。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;./dir/*.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&#39;setup&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// vite 生成的代码</span></span>
<span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&#39;./dir/foo.js&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./dir/foo.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>setup<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;./dir/bar.js&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./dir/bar.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>setup<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 设置 import 为 default 可以加载默认导出。</span></span>
<span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;./dir/*.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">eager</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// vite 生成的代码</span></span>
<span class="line"><span class="token keyword">import</span> __glob__0_0 <span class="token keyword">from</span> <span class="token string">&#39;./dir/foo.js&#39;</span></span>
<span class="line"><span class="token keyword">import</span> __glob__0_1 <span class="token keyword">from</span> <span class="token string">&#39;./dir/bar.js&#39;</span></span>
<span class="line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&#39;./dir/foo.js&#39;</span><span class="token operator">:</span> __glob__0_0<span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;./dir/bar.js&#39;</span><span class="token operator">:</span> __glob__0_1<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(l,i){return a(),n("div",null,o)}const u=s(t,[["render",c],["__file","vite.import.meta.glob.html.vue"]]),k=JSON.parse(`{"path":"/vue3/vite.import.meta.glob.html","title":"Glob 导入","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"直接引入","slug":"直接引入","link":"#直接引入","children":[]},{"level":2,"title":"多个匹配模式","slug":"多个匹配模式","link":"#多个匹配模式","children":[]},{"level":2,"title":"反面匹配模式","slug":"反面匹配模式","link":"#反面匹配模式","children":[]},{"level":2,"title":"具名导入","slug":"具名导入","link":"#具名导入","children":[]}],"git":{"updatedTime":1725425675000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"vue3/vite.import.meta.glob.md","excerpt":"\\n<p>https://cn.vitejs.dev/guide/features#glob-import</p>\\n<p>Vite 支持使用 <code>import.meta.glob</code> 函数从文件系统导入多个模块：</p>\\n<div class=\\"language-javascript\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">const</span> modules <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">import</span><span class=\\"token punctuation\\">.</span>meta<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">glob</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'./dir/*.js'</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">// vite 生成的代码</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> modules <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  <span class=\\"token string-property property\\">'./dir/foo.js'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">import</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'./dir/foo.js'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">  <span class=\\"token string-property property\\">'./dir/bar.js'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">import</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'./dir/bar.js'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">// 你可以遍历 modules 对象的 key 值来访问相应的模块：</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">const</span> path <span class=\\"token keyword\\">in</span> modules<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  modules<span class=\\"token punctuation\\">[</span>path<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">then</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">mod</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">,</span> mod<span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}`);export{u as comp,k as data};