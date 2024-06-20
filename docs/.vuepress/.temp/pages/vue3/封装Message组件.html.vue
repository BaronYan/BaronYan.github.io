<template><div><p><strong>相关链接：</strong></p>
<ul>
<li><RouteLink to="/vue3/vnode.component.html">虚拟节点介绍</RouteLink></li>
<li><RouteLink to="/vue3/createVNode.html">createVNode函数</RouteLink></li>
<li><RouteLink to="/vue3/render.html">render函数</RouteLink></li>
</ul>
<h2 id="封装一个-message-组件" tabindex="-1"><a class="header-anchor" href="#封装一个-message-组件"><span>封装一个 Message 组件</span></a></h2>
<p>封装函数式组件的核心点主要是：</p>
<ol>
<li>学会熟练使用 <RouteLink to="/vue3/createVNode.html">createVNode</RouteLink> 函数创建 vNode</li>
<li>以及使用 <code v-pre>render</code>函数将 vNode 渲染成真实DOM。</li>
</ol>
<p>以下是一个基本的实现步骤，包括创建组件和通过插件安装全局调用的方法。</p>
<h3 id="_1-创建-message-组件" tabindex="-1"><a class="header-anchor" href="#_1-创建-message-组件"><span>1. 创建 Message 组件</span></a></h3>
<p>首先，创建一个 Message.vue 文件，用于显示消息内容：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    {{ content }}</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'info'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">3000</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建函数式-message-调用" tabindex="-1"><a class="header-anchor" href="#_2-创建函数式-message-调用"><span>2. 创建函数式 Message 调用</span></a></h3>
<p>接下来，创建一个 JavaScript 文件，例如 <code v-pre>message.js</code>，用于封装函数式调用方法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>createVNode<span class="token punctuation">,</span> render<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Message <span class="token keyword">from</span> <span class="token string">'./Message.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> instances <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">MessageFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token literal-property property">content</span><span class="token operator">:</span> options<span class="token punctuation">}</span> <span class="token operator">:</span> options<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>Message<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        vnode<span class="token punctuation">,</span></span>
<span class="line">        container<span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    instances<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 自动关闭消息</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        instance<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>duration <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> instance<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> MessageFunction<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-在组件中使用" tabindex="-1"><a class="header-anchor" href="#_3-在组件中使用"><span>3. 在组件中使用</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">import</span> MessageFunction <span class="token keyword">from</span> <span class="token string">'./message.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">MessageFunction</span><span class="token punctuation">(</span><span class="token string">'This is an info message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">MessageFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'This is a success message'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">5000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="createvnode-介绍" tabindex="-1"><a class="header-anchor" href="#createvnode-介绍"><span>createVNode 介绍</span></a></h2>
<p><code v-pre>createVNode</code> 函数是 Vue 3 中用于创建虚拟节点（VNode）的核心函数之一。<br>
<code v-pre>VNode</code> 是 Vue 的虚拟 DOM 表示，用于描述视图结构。<br>
通过 <code v-pre>createVNode</code>，可以手动创建和操作虚拟节点，从而实现更灵活的组件逻辑和渲染控制。</p>
<h3 id="createvnode-的基本用法" tabindex="-1"><a class="header-anchor" href="#createvnode-的基本用法"><span>createVNode 的基本用法</span></a></h3>
<p><code v-pre>createVNode</code> 函数可以接受以下参数：</p>
<ol>
<li><code v-pre>type</code>: 组件对象、HTML 标签或异步组件对象。</li>
<li><code v-pre>props</code>: 节点的属性对象，包括类名、样式、事件处理程序等。</li>
<li><code v-pre>children</code>: 子节点，可以是字符串、数组或对象。</li>
</ol>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<p>下面是一些使用 createVNode 的示例。</p>
<p><strong>创建一个简单的 HTML 元素节点</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>createVNode<span class="token punctuation">,</span> render<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'my-div'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Hello, world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


