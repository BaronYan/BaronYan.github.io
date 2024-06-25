<template><div><p><strong>相关链接：</strong></p>
<ul>
<li><RouteLink to="/vue3/%E5%B0%81%E8%A3%85Message%E7%BB%84%E4%BB%B6.html">封装一个 Message 函数式组件</RouteLink></li>
<li><RouteLink to="/vue3/createVNode.html">createVNode函数</RouteLink></li>
<li><RouteLink to="/vue3/render.html">render函数</RouteLink></li>
</ul>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>虚拟节点有许多属性，其中 component 属性是一个比较特殊且重要的属性。
component 属性主要用于表示当前虚拟节点对应的组件实例。
在 Vue 3 中，虚拟节点不仅可以表示普通的 HTML 元素，还可以表示自定义组件。
当虚拟节点表示一个自定义组件时，component 属性将指向该组件的实例。</p>
<h2 id="vnode-component" tabindex="-1"><a class="header-anchor" href="#vnode-component"><span>vnode.component</span></a></h2>
<p>在Vue3中，虚拟节点（<code v-pre>vnode</code>）的 <code v-pre>component</code> 属性<strong>用于存放与该虚拟节点关联的组件实例信息</strong>。</p>
<p>具体来说，<span class="bg-green-200"> 当一个虚拟节点表示一个<strong>组件</strong>时，component 属性会引用这个组件实例对象。</span>
这个组件实例对象包含了组件的状态、方法等信息，是组件生命周期、渲染和更新机制的重要部分。
这意味着，通过component属性，Vue框架获得了维护和管理组件实例所需要的一切信息，这对于组件的挂载、更新和销毁过程至关重要。<br>
简而言之，component属性是虚拟节点与其表示的组件实例之间的桥梁。</p>
<ul>
<li><code v-pre>vnode.component</code> 是与组件实例相关的属性</li>
<li>当 vnode 表示的是一个组件节点时，<code v-pre>vnode.component</code> 会指向这个组件的实例对象（Component Instance）。</li>
<li>组件实例对象包含了组件的状态、生命周期钩子、方法等信息。</li>
<li>它是 Vue 组件的实际运行实例。</li>
<li>当你使用 <code v-pre>createVNode</code> 创建一个组件的虚拟节点时，<code v-pre>vnode.component</code> <span class="bg-yellow-200">会在组件挂载时被赋值</span>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createVNode<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'./MyComponent.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello from component'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined, 因为组件还没有挂载</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 组件实例对象</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件被挂载之后，<code v-pre>vnode.component</code> 会包含如下信息：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"props"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Hello from component"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"methods"</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"computed"</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"watch"</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token comment">// ...其他组件实例相关的属性和方法</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区别总结" tabindex="-1"><a class="header-anchor" href="#区别总结"><span>区别总结</span></a></h2>
<ul>
<li><code v-pre>vnode</code>: 是虚拟节点对象，用于描述组件树中的节点结构，包括 HTML 元素节点和组件节点。</li>
<li><code v-pre>vnode.component</code>: 当 <code v-pre>vnode</code> 表示一个组件节点时，<code v-pre>vnode.component</code> 指向该组件的实例对象，包含了组件的状态和方法。</li>
</ul>
<h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3>
<p>在实际开发中，理解 <code v-pre>vnode</code> 和 <code v-pre>vnode.component</code> 的区别可以帮助我们更好地进行以下操作：</p>
<ul>
<li><strong>自定义渲染逻辑</strong>：通过 <code v-pre>vnode</code> 可以操作虚拟 DOM，从而实现自定义的渲染逻辑。</li>
<li><strong>访问组件实例</strong>：通过 <code v-pre>vnode.component</code> 可以访问组件实例，从而调用组件的方法或访问其数据。</li>
</ul>
<p>例如，在上面的函数式 <code v-pre>Message</code> 组件中，我们可以利用 <code v-pre>vnode</code> 创建和渲染消息组件，并通过 <code v-pre>vnode.component</code> 控制消息的关闭和其他交互逻辑。</p>
</div></template>


