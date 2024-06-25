<template><div><h2 id="虚拟节点介绍" tabindex="-1"><a class="header-anchor" href="#虚拟节点介绍"><span>虚拟节点介绍</span></a></h2>
<p><em>虚拟节点（vnode:Virtual Node）</em></p>
<p>在 Vue 3 中，虚拟节点 (vnode) 是一个
<span class="text-brand-500 font-bold">JavaScript 对象</span>，表示渲染树中的一个节点。虚拟节点用于描述界面的结构，最终由 Vue 渲染成真实的 DOM 元素。</p>
<span class="text-brand-500 font-bold">
虚拟节点（VNode）是对真实 DOM 节点的抽象表示，用于高效地更新和渲染视图。 包含了组件树的状态和结构信息，而不是实际的 DOM 元素。
</span>
<p>一个 <code v-pre>vnode</code> 对象通常包含以下信息：</p>
<ul>
<li><code v-pre>type</code>: 节点的类型，可以是 HTML 标签名、组件对象或异步组件。</li>
<li><code v-pre>props</code>: 节点的属性和属性值。</li>
<li><code v-pre>children</code>: 子节点列表。</li>
<li><code v-pre>key</code>: 节点的唯一标识，用于优化更新。</li>
<li><code v-pre>el</code>: <span class="text-brand-500">对应的真实 DOM 节点，在挂载时会赋值。</span></li>
<li><RouteLink to="/vue3/vnode.component.html">component</RouteLink>: 当虚拟节点表示一个自定义组件时，该属性将指向该组件实例对象。</li>
<li><RouteLink to="/vue3/vnode.component.proxy.html">component.proxy</RouteLink>: 当虚拟节点表示一个自定义组件时，该属性将指向该组件的代理对象。</li>
</ul>
<p>举个例子，使用 <code v-pre>createVNode</code> 创建一个简单的虚拟节点：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createVNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'my-div'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Hello, world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的 <code v-pre>vnode</code> 对象可能类似于：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"props"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"my-div"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"children"</span><span class="token operator">:</span> <span class="token string">"Hello, world!"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"key"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"el"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...其他内部属性</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


