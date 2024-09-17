import{_ as n,c as s,o as a,d as p}from"./app-CsXK-RUq.js";const t={},e=p(`<h1 id="应用一个全局可用属性" tabindex="-1"><a class="header-anchor" href="#应用一个全局可用属性"><span>应用一个全局可用属性</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> ZiggyVue <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token function-variable function">r</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> params<span class="token punctuation">,</span> absolute<span class="token punctuation">,</span> config <span class="token operator">=</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span>
<span class="line">            <span class="token function">route</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> params<span class="token punctuation">,</span> absolute<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>version<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>route <span class="token operator">=</span> r<span class="token punctuation">;</span></span>
<span class="line">            app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;route&#39;</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">route</span><span class="token operator">:</span> r<span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-mixin" tabindex="-1"><a class="header-anchor" href="#app-mixin"><span>app.mixin</span></a></h2><p>应用一个全局 mixin (适用于该应用的范围)。一个全局的 mixin 会作用于应用中的每个组件实例。</p><p><strong>不推荐</strong></p><blockquote><p>Mixins 在 Vue 3 支持主要是为了向后兼容，因为生态中有许多库使用到。在新的应用中应尽量避免使用 mixin，特别是全局 mixin。<br> 若要进行逻辑复用，推荐用组合式函数来替代。</p></blockquote><h2 id="app-config-globalproperties" tabindex="-1"><a class="header-anchor" href="#app-config-globalproperties"><span>app.config.globalProperties</span></a></h2><p>一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。</p><ul><li>这是对 Vue 2 中 <code>Vue.prototype</code> 使用方式的一种替代，此写法在 Vue 3 已经不存在了。与任何全局的东西一样，应该谨慎使用。</li><li>如果全局属性与组件自己的属性冲突，组件自己的属性将具有更高的优先级。</li></ul><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这使得 <code>msg</code> 在应用的任意组件模板上都可用，并且也可以通过任意组件实例的 this 访问到：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span> <span class="token comment">// &#39;hello&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-provide" tabindex="-1"><a class="header-anchor" href="#app-provide"><span>app.provide</span></a></h2><p>应用层 Provide,除了在一个组件中提供依赖，我们还可以在整个应用层面提供依赖：</p><ul><li>提供一个值，可以在应用中的所有后代组件中注入使用。</li><li>第一个参数应当是注入的 key，</li><li>第二个参数则是提供的值。返回应用实例本身。</li><li>在应用级别提供的数据在该应用内的所有组件中都可以注入。这在你编写插件时会特别有用，因为插件一般都不会使用组件形式来提供值。</li><li>要注入上层组件提供的数据，需使用 <code>inject()</code> 函数</li></ul><p><strong>示例</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在应用的某个组件中：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;hello&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(l,i){return a(),s("div",null,o)}const r=n(t,[["render",c],["__file","注入全局属性.html.vue"]]),k=JSON.parse(`{"path":"/vue3/%E6%B3%A8%E5%85%A5%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7.html","title":"应用一个全局可用属性","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"app.mixin","slug":"app-mixin","link":"#app-mixin","children":[]},{"level":2,"title":"app.config.globalProperties","slug":"app-config-globalproperties","link":"#app-config-globalproperties","children":[]},{"level":2,"title":"app.provide","slug":"app-provide","link":"#app-provide","children":[]}],"git":{"updatedTime":1726534065000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"vue3/注入全局属性.md","excerpt":"\\n<div class=\\"language-javascript\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> ZiggyVue <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token function\\">install</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">app<span class=\\"token punctuation\\">,</span> options</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">r</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">name<span class=\\"token punctuation\\">,</span> params<span class=\\"token punctuation\\">,</span> absolute<span class=\\"token punctuation\\">,</span> config <span class=\\"token operator\\">=</span> options</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span></span>\\n<span class=\\"line\\">            <span class=\\"token function\\">route</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span> params<span class=\\"token punctuation\\">,</span> absolute<span class=\\"token punctuation\\">,</span> config<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token function\\">parseInt</span><span class=\\"token punctuation\\">(</span>app<span class=\\"token punctuation\\">.</span>version<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">            app<span class=\\"token punctuation\\">.</span>config<span class=\\"token punctuation\\">.</span>globalProperties<span class=\\"token punctuation\\">.</span>route <span class=\\"token operator\\">=</span> r<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">            app<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">provide</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'route'</span><span class=\\"token punctuation\\">,</span> r<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">            app<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">mixin</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">                <span class=\\"token literal-property property\\">methods</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">                    <span class=\\"token literal-property property\\">route</span><span class=\\"token operator\\">:</span> r<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">                <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">            <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}`);export{r as comp,k as data};
