<template><div><p><strong>相关链接：</strong></p>
<ul>
<li><RouteLink to="/vue3/%E5%B0%81%E8%A3%85Message%E7%BB%84%E4%BB%B6.html">封装一个 Message 函数式组件</RouteLink></li>
</ul>
<h2 id="vnode-component-介绍" tabindex="-1"><a class="header-anchor" href="#vnode-component-介绍"><span><code v-pre>vnode.component</code> 介绍</span></a></h2>
<p>在 Vue 3 中，虚拟节点（VNode）是对真实 DOM 节点的抽象表示。VNode 包含了组件树的状态和结构信息，而不是实际的 DOM 元素。在这个上下文中，component 属性是 VNode 的一个重要部分，特别是在处理组件时。</p>
<p>具体来说，component 属性用于存储与 VNode 关联的组件实例。它包含了与该 VNode 对应的 Vue 组件的所有信息和方法。下面是一些相关细节：</p>
<ol>
<li><strong>组件实例</strong>：<br>
component 属性持有的是一个组件实例，它包含了组件的所有状态、方法、生命周期钩子等等。</li>
<li><strong>动态组件</strong>：<br>
当使用动态组件时，component 属性会被更新以反映当前渲染的组件。</li>
<li><strong>访问组件实例</strong>：<br>
可以通过访问 VNode 的 component 属性来获得与之关联的 Vue 组件实例。这对于一些高级操作或自定义渲染逻辑非常有用。</li>
<li><strong>组件内部状态</strong>：<br>
component 属性中的组件实例包含了组件的内部状态（如 data、props、computed 等），这可以用来调试或者执行一些复杂的状态管理。</li>
</ol>
<p><strong>AppendToElement</strong>  添加到的位置，通过 <code v-pre>getAppendToElement</code> 获取：</p>
<ul>
<li><code v-pre>props.appendTo</code>
<ul>
<li>string</li>
<li>function</li>
<li>DOM 元素</li>
</ul>
</li>
<li>默认为 <code v-pre>document.body</code></li>
</ul>
<p><strong>Container</strong> 附加到的容器，通过 <code v-pre>genContainer</code> 获取,默认为 <code v-pre>div</code></p>
<h2 id="createvnode-函数的基本用法" tabindex="-1"><a class="header-anchor" href="#createvnode-函数的基本用法"><span><code v-pre>createVNode</code> 函数的基本用法</span></a></h2>
<p>createVNode 函数可以接受以下参数：</p>
<ul>
<li><code v-pre>type</code>: 组件、HTML 标签或异步组件对象。</li>
<li><code v-pre>props</code>: 节点的属性对象。</li>
<li><code v-pre>children</code>: 子节点，可以是字符串、数组或对象。</li>
</ul>
<h2 id="vnode-component" tabindex="-1"><a class="header-anchor" href="#vnode-component"><span><code v-pre>vnode.component</code></span></a></h2>
<p>在 Vue 3 中，<code v-pre>vnode</code> 和 <code v-pre>vnode.component</code> 是两个不同的概念，分别代表了不同的对象和用途。</p>
<h3 id="vnode" tabindex="-1"><a class="header-anchor" href="#vnode"><span><code v-pre>vnode</code></span></a></h3>
<p><code v-pre>vnode</code> 是虚拟节点（Virtual Node）的简称。
它是 Vue 的虚拟 DOM 的基本单元，用于描述组件树中的一个节点。虚拟节点是对真实 DOM 的抽象表示，用于高效地更新和渲染视图。</p>
<p>一个 <code v-pre>vnode</code> 对象通常包含以下信息：</p>
<ul>
<li><code v-pre>type</code>: 节点的类型，可以是 HTML 标签名、组件对象或异步组件。</li>
<li><code v-pre>props</code>: 节点的属性和属性值。</li>
<li><code v-pre>children</code>: 子节点列表。</li>
<li><code v-pre>key</code>: 节点的唯一标识，用于优化更新。</li>
<li><code v-pre>el</code>: 对应的真实 DOM 节点，在挂载时会赋值。</li>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vnode-component-1" tabindex="-1"><a class="header-anchor" href="#vnode-component-1"><span><code v-pre>vnode.component</code></span></a></h3>
<p><code v-pre>vnode.component</code> 是与<strong>组件实例</strong>相关的属性，
当 <code v-pre>vnode</code> 表示的是一个组件节点时，<code v-pre>vnode.component</code> 会指向这个组件的实例对象（Component Instance）。</p>
<p>组件实例对象包含了组件的状态、生命周期钩子、方法等信息。它是 Vue 组件的实际运行实例。</p>
<p>比如，当你使用 <code v-pre>createVNode</code> 创建一个组件的虚拟节点时，<code v-pre>vnode.component</code> 会在组件挂载时被赋值：</p>
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
<span class="line">  <span class="token property">"props"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Hello from component"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"methods"</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"computed"</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"watch"</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...其他组件实例相关的属性和方法</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区别总结" tabindex="-1"><a class="header-anchor" href="#区别总结"><span>区别总结</span></a></h2>
<ul>
<li><code v-pre>vnode</code>: 是虚拟节点对象，用于描述组件树中的节点结构，包括 HTML 元素节点和组件节点。</li>
<li><code v-pre>vnode.component</code>: 当 <code v-pre>vnode</code> 表示一个组件节点时，<code v-pre>vnode.component</code> 指向该组件的实例对象，包含了组件的状态和方法。</li>
</ul>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2>
<p>在实际开发中，理解 <code v-pre>vnode</code> 和 <code v-pre>vnode.component</code> 的区别可以帮助我们更好地进行以下操作：</p>
<ul>
<li><strong>自定义渲染逻辑</strong>：通过 <code v-pre>vnode</code> 可以操作虚拟 DOM，从而实现自定义的渲染逻辑。</li>
<li><strong>访问组件实例</strong>：通过 <code v-pre>vnode.component</code> 可以访问组件实例，从而调用组件的方法或访问其数据。</li>
</ul>
<p>例如，在上面的函数式 <code v-pre>Message</code> 组件中，我们可以利用 <code v-pre>vnode</code> 创建和渲染消息组件，并通过 <code v-pre>vnode.component</code> 控制消息的关闭和其他交互逻辑。</p>
</div></template>


