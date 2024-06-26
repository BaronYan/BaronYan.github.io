<template><div><p><strong>相关链接：</strong></p>
<ul>
<li><RouteLink to="/vue3/%E5%B0%81%E8%A3%85Message%E7%BB%84%E4%BB%B6.html">封装一个 Message 函数式组件</RouteLink></li>
<li><RouteLink to="/vue3/vnode.component.html">虚拟节点介绍</RouteLink></li>
<li><RouteLink to="/vue3/render.html">render函数</RouteLink></li>
</ul>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p><code v-pre>createVNode</code> 函数是 Vue 3 中用于创建虚拟节点（VNode）的核心函数之一。
通过 createVNode，可以手动创建和操作虚拟节点，从而实现更灵活的组件逻辑和渲染控制。</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createVNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> props<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>createVNode 函数可以接受以下参数：</p>
<ul>
<li><code v-pre>type</code>: 组件的类型，可以是组件构造函数、动态/异步组件对象或 HTML 标签字符串。</li>
<li><code v-pre>props</code>: 传递给组件的属性对象。</li>
<li><code v-pre>children</code>: 虚拟节点的子节点，既可以是单个节点也可以是节点数组，或者是插槽对象。</li>
</ul>
<p>对于 <code v-pre>createVNode(Message, props, children)</code>：</p>
<ul>
<li>Message 是组件的类型。</li>
<li>props 是传递给 Message 组件的属性。</li>
<li>children 是 Message 组件的子节点或插槽。</li>
</ul>
<p>在以下代码中，第三个参数 children 是一个插槽对象 <code v-pre>{ default: ... }</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>Message<span class="token punctuation">,</span> props<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">isFunction</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isVNode</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token operator">?</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token operator">?</span> props<span class="token punctuation">.</span><span class="token function-variable function">message</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>message <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<p><strong>创建一个简单的 HTML 元素节点</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createVNode<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'my-div'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Hello, world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建一个带有子节点的元素节点</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createVNode<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'div'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'parent-div'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">createVNode</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'child-span'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Child 1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">createVNode</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">'child-span'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Child 2'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建一个组件节点</strong></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token comment">&lt;!--假设有一个 MyComponent 组件--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">message</span><span class="token operator">:</span> String</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 createVNode 创建这个组件的节点：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createVNode<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'./MyComponent.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello from component'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在函数式组件中的应用</strong></p>
<p>在封装函数式组件时，createVNode 非常有用。例如，前面提到的函数式 Message 组件：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createVNode<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Message <span class="token keyword">from</span> <span class="token string">'./Message.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">MessageFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> options <span class="token punctuation">}</span> <span class="token operator">:</span> options<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>Message<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    vnode<span class="token punctuation">,</span></span>
<span class="line">    container<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    instance<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>duration <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> instance<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> MessageFunction<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当第三个参数为对象时" tabindex="-1"><a class="header-anchor" href="#当第三个参数为对象时"><span>当第三个参数为对象时</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>Message<span class="token punctuation">,</span> props<span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">isFunction</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isVNode</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">                <span class="token operator">?</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                   <span class="token keyword">default</span><span class="token operator">:</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">                           <span class="token operator">?</span> props<span class="token punctuation">.</span><span class="token function-variable function">message</span></span>
<span class="line">                           <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>message</span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Vue 3 中，<code v-pre>default</code> 是一个插槽（Slot）的名称。如上代码中，<code v-pre>default</code> 是作为插槽名称用于创建虚拟节点（VNode）。</p>
<ol>
<li>createVNode 函数：这是 Vue 3 提供的一个用于创建虚拟节点的函数。</li>
<li>Message：这是一个组件或者组件选项，用于创建虚拟节点。</li>
<li>props：这是传递给组件的属性对象。</li>
<li>isFunction(props.message) || isVNode(props.message)：这是一个条件判断，用于检查 props.message 是否是一个函数或者已经是一个 VNode。</li>
<li>条件判断中的对象：
<ul>
<li>如果 <code v-pre>props.message</code> 是一个函数 (isFunction(props.message) 返回 true)，那么 { default: props.message } 将作为插槽对象传递给 createVNode。</li>
<li>如果 <code v-pre>props.message</code> 不是一个函数，而是一个值，将使用一个匿名函数 <code v-pre>() =&gt; props.message</code> 作为插槽内容，然后 { default: ... } 将作为插槽对象传递给 createVNode。</li>
<li>如果 <code v-pre>props.message</code> 既不是函数也不是 VNode，插槽对象将设置为 null，这将意味着没有插槽被传递给 createVNode。</li>
</ul>
</li>
</ol>
<p><strong>关于 default 插槽</strong></p>
<p>在 Vue 中，插槽（Slot）是一种机制，用于在父组件中向子组件传递内容。在这里，default 是一个插槽的名称，用于指定默认插槽。默认插槽是没有具体名称的插槽，用于接收没有被具名插槽接收的内容。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>createVNode 是 Vue 3 中创建虚拟节点的核心工具，通过它可以手动控制组件和元素的创建和渲染。它提供了强大的灵活性，使得我们可以更灵活地操作 DOM，并在函数式组件和插件开发中发挥重要作用。</p>
</div></template>


