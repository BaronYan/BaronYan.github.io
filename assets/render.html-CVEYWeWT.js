import{_ as t,r as l,c,a as n,e as a,w as e,d as i,o,b as p}from"./app-B-AS6FMQ.js";const u={},r=n("p",null,[n("strong",null,"相关链接：")],-1),d=i(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>在 Vue.js 中，render 函数是非常重要的一部分，<span class="bg-yellow-200">它负责将虚拟 DOM 渲染成真实 DOM</span>。</p><p>在 Vue.js 3 中，render 函数内部是使用 <code>@vue/runtime-core</code> 中的 <code>h</code> 函数来创建虚拟节点（VNode），然后将这些虚拟节点渲染为真实的 DOM 元素。render 函数可以用来手动创建虚拟节点，也可以在组件的 setup 函数中使用。</p><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h2><p>在 Vue 3 中，render 函数的基本语法如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello, Vue 3!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中：</p><ul><li><code>createApp</code> 函数用于创建一个 Vue 应用实例。</li><li><code>h</code> 函数用来创建虚拟节点（VNode）。 <ul><li>第一个参数是节点的类型，可以是 HTML 标签字符串、组件对象或函数。</li><li>第二个参数是节点的属性对象。</li><li>第三个参数是节点的子节点。</li></ul></li></ul><h3 id="创建带有子节点的虚拟节点" tabindex="-1"><a class="header-anchor" href="#创建带有子节点的虚拟节点"><span>创建带有子节点的虚拟节点</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Content&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码会创建一个 <code>&lt;div class=&quot;container&quot;&gt;</code>，里面包含了一个 <code>&lt;h1&gt;</code> 和一个 <code>&lt;p&gt;</code> 元素。</p><h3 id="创建组件的虚拟节点" tabindex="-1"><a class="header-anchor" href="#创建组件的虚拟节点"><span>创建组件的虚拟节点</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent.vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello from parent&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述示例中，<code>MyComponent</code> 是一个 Vue 组件，可以直接通过 <code>h</code> 函数来创建并渲染它。</p><h3 id="渲染到特定容器中" tabindex="-1"><a class="header-anchor" href="#渲染到特定容器中"><span>渲染到特定容器中</span></a></h3><p>在调用 <code>createApp</code> 后，可以使用 <code>mount</code> 方法将渲染的内容挂载到特定的 HTML 元素中。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello, Vue 3!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><ul><li><strong>手动渲染</strong>：可以使用 render 函数手动创建和渲染虚拟节点，更灵活地控制视图的结构和行为。</li><li><strong>函数式组件</strong>：在函数式组件中，通常会使用 render 函数来返回虚拟节点。</li><li><strong>动态组件</strong>：通过 render 函数可以根据条件动态地选择渲染不同的组件或元素。</li><li><strong>自定义渲染逻辑</strong>：可以在 render 函数中编写复杂的渲染逻辑，根据数据动态生成视图。</li></ul><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ul><li><code>render</code> 函数通常用于高级用法和性能优化，对于简单的应用场景，使用模板语法更为直观和方便。</li><li><code>h</code> 函数的第一个参数可以是字符串（HTML 标签名）或者是一个组件选项对象</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p><code>render</code> 函数是 Vue 3 中用于手动创建和渲染虚拟节点的核心函数，它基于 <code>h</code> 函数创建虚拟节点，然后将这些节点渲染为真实 DOM。通过 <code>render</code> 函数，我们可以实现更高级和灵活的渲染逻辑，适用于需要更细粒度控制的情况下。</p>`,23);function k(v,m){const s=l("RouteLink");return o(),c("div",null,[r,n("ul",null,[n("li",null,[a(s,{to:"/vue3/%E5%B0%81%E8%A3%85Message%E7%BB%84%E4%BB%B6.html"},{default:e(()=>[p("封装一个 Message 函数式组件")]),_:1})]),n("li",null,[a(s,{to:"/vue3/createVNode.html"},{default:e(()=>[p("createVNode函数")]),_:1})]),n("li",null,[a(s,{to:"/vue3/vnode.component.html"},{default:e(()=>[p("虚拟节点介绍")]),_:1})])]),d])}const g=t(u,[["render",k],["__file","render.html.vue"]]),b=JSON.parse('{"path":"/vue3/render.html","title":"render 函数","lang":"en-US","frontmatter":{"title":"render 函数","date":"2024-06-20T00:00:00.000Z","category":["Vue3"],"description":"render 函数的用法"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[{"level":3,"title":"创建带有子节点的虚拟节点","slug":"创建带有子节点的虚拟节点","link":"#创建带有子节点的虚拟节点","children":[]},{"level":3,"title":"创建组件的虚拟节点","slug":"创建组件的虚拟节点","link":"#创建组件的虚拟节点","children":[]},{"level":3,"title":"渲染到特定容器中","slug":"渲染到特定容器中","link":"#渲染到特定容器中","children":[]}]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"updatedTime":1718891745000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"vue3/render.md","excerpt":"<p><strong>相关链接：</strong></p>\\n<ul>\\n<li><a href=\\"/vue3/%E5%B0%81%E8%A3%85Message%E7%BB%84%E4%BB%B6.html\\" target=\\"_blank\\">封装一个 Message 函数式组件</a></li>\\n<li><a href=\\"/vue3/createVNode.html\\" target=\\"_blank\\">createVNode函数</a></li>\\n<li><a href=\\"/vue3/vnode.component.html\\" target=\\"_blank\\">虚拟节点介绍</a></li>\\n</ul>"}');export{g as comp,b as data};
