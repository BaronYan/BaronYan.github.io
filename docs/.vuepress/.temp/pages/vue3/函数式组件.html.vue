<template><div><p><strong>导入一个组件</strong></p>
<p><img src="@source/images/20240628233202.png" alt="导入一个.vue 组件"></p>
<p><strong>使用组件创建一个 vnode</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>Message<span class="token punctuation">,</span> props<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span><span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">appendToElement<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/images/20240629005159.png" alt="使用组件创建一个 vnode"></p>
<p><RouteLink to="/vue3/vnode.component.html">vnode.component</RouteLink></p>
<p><img src="@source/images/20240629010500.png" alt="vnode.component"></p>
<p><strong>vnode.component.exposed</strong></p>
<p><img src="@source/images/20240629011018.png" alt="vnode.component.exposed"></p>
<p><RouteLink to="/vue3/vnode.component.proxy.html">vnode.component.proxy</RouteLink></p>
<p><img src="@source/images/20240629011202.png" alt="vnode.component.proxy"></p>
</div></template>


