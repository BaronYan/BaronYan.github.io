<template><div><p><strong>相关链接：</strong></p>
<ul>
<li><RouteLink to="/vue3/%E5%B0%81%E8%A3%85Message%E7%BB%84%E4%BB%B6.html">封装一个 Message 函数式组件</RouteLink></li>
</ul>
<h2 id="vnode-component-介绍" tabindex="-1"><a class="header-anchor" href="#vnode-component-介绍"><span><code v-pre>vnode.component</code> 介绍</span></a></h2>
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
<p>在这个上下文中，component 属性是 VNode 的一个重要部分，特别是在处理组件时。</p>
<p>具体来说，component 属性用于存储与 VNode 关联的组件实例。它包含了与该 VNode 对应的 Vue 组件的所有信息和方法。下面是一些相关细节：</p>
<p>关注点：在大多数情况下，我们更关心组件实例而不是虚拟节点本身。</p>
<ol>
<li><strong>API 设计</strong>：
<ul>
<li>这可能是框架设计者有意为之，以提供更直接的组件实例访问方式。</li>
</ul>
</li>
<li><strong>组件实例</strong>：
<ul>
<li><code v-pre>vnode.component</code> 属性持有的是一个组件实例，它包含了组件的所有状态、方法、生命周期钩子等等。</li>
</ul>
</li>
<li><strong>访问性</strong>
<ul>
<li>通过返回 <code v-pre>vnode.component</code>，我们可以直接访问和操作组件实例，而不需要通过 vnode 来间接访问。</li>
</ul>
</li>
<li><strong>动态组件</strong>：
<ul>
<li>当使用动态组件时，<code v-pre>component</code> 属性会被更新以反映当前渲染的组件。</li>
</ul>
</li>
<li><strong>访问组件实例</strong>：
<ul>
<li>可以通过访问 <code v-pre>vnode.component</code> 属性来获得与之关联的 Vue 组件实例。这对于一些高级操作或自定义渲染逻辑非常有用。</li>
</ul>
</li>
<li><strong>组件内部状态</strong>：
<ul>
<li><code v-pre>vnode.component</code> 属性中的组件实例包含了组件的内部状态（如 data、props、computed 等），这可以用来调试或者执行一些复杂的状态管理。</li>
</ul>
</li>
</ol>
<p>总的来说，返回 <code v-pre>vnode.component</code> 提供了更直接、更有用的组件实例访问，这在大多数使用场景中可能更为合适。但具体原因可能还需要查看框架的设计文档或源码来确认。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<p>假设你有一个简单的 Vue 组件结构，并希望通过 VNode 来访问组件实例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div>&lt;my-component>&lt;/my-component>&lt;/div>'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">MyComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div>Hello, World!&lt;/div>'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello from MyComponent'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>&lt;my-component&gt;</code> 是一个自定义组件。当它被渲染成 VNode 时，component 属性会持有这个组件的实例。</p>
<h2 id="访问-vnode-的-component-属性" tabindex="-1"><a class="header-anchor" href="#访问-vnode-的-component-属性"><span>访问 VNode 的 component 属性</span></a></h2>
<p>在 Vue 3 中，通过 Vue 的内部 API 或者调试工具，可以访问 VNode 的 component 属性。例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 获取应用的根实例</span></span>
<span class="line"><span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span>_instance<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取根实例的 VNode</span></span>
<span class="line"><span class="token keyword">const</span> rootVNode <span class="token operator">=</span> vm<span class="token punctuation">.</span>vnode<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 假设 `my-component` 是根 VNode 的第一个子节点</span></span>
<span class="line"><span class="token keyword">const</span> myComponentVNode <span class="token operator">=</span> rootVNode<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 访问 `my-component` 的组件实例</span></span>
<span class="line"><span class="token keyword">const</span> myComponentInstance <span class="token operator">=</span> myComponentVNode<span class="token punctuation">.</span>component<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 现在可以访问组件实例上的所有数据和方法</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myComponentInstance<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "Hello from MyComponent"</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2>
<p>直接操作 VNode 和组件实例是高级特性，通常在编写自定义渲染器或者进行深度调试时使用。在一般的应用开发中，Vue 提供的模板语法和组合式 API 足以满足大多数需求。</p>
<p>通过理解 VNode 的 component 属性，你可以更深入地了解 Vue 3 的内部工作原理，并在需要时进行更加复杂的操作。</p>
</div></template>


