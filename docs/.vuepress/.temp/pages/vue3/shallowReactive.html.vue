<template><div><h2 id="ref-和-reactive" tabindex="-1"><a class="header-anchor" href="#ref-和-reactive"><span>ref 和 reactive</span></a></h2>
<p>在 Vue 3 中，<code v-pre>ref</code> 和 <code v-pre>reactive</code> 是用来创建响应式对象的两种不同方式，它们之间的主要区别在于处理的数据类型和使用场景：</p>
<p>ref：</p>
<p>ref 主要用于创建包含基本类型值（如数字、字符串、布尔值）的响应式引用对象。
ref 返回的对象具有一个 .value 属性，通过这个属性来访问和修改其值。
当给 ref 分配一个新值时，Vue 会确保这个新值是响应式的，并触发视图更新。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：0</span></span>
<span class="line">count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 触发视图更新</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，count 是一个响应式的引用对象，通过 count.value 来访问和修改其值。</p>
<p>reactive：</p>
<p>reactive 用于创建包含对象类型值的响应式对象，可以处理复杂的对象结构和嵌套属性。
reactive 返回的对象及其嵌套属性都会被递归地转换为响应式对象，即对象的所有层级都可以监听到变化。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：0</span></span>
<span class="line">state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 触发视图更新</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，state 是一个响应式的对象，直接访问和修改 state.count 会触发视图更新。</p>
<p>选择使用 ref 还是 reactive 取决于你的数据结构和需要：</p>
<p>如果你需要处理基本类型值或单一的对象属性，并且希望通过 .value 访问和修改，应该使用 ref。
如果你处理的是复杂的对象结构，需要监听对象内部的多个属性或嵌套属性的变化，应该使用 reactive。
总之，ref 和 reactive 提供了根据具体数据类型和使用场景来选择响应式处理的选项，使得 Vue 3 中的数据管理更加灵活和高效。</p>
<h2 id="shallowref" tabindex="-1"><a class="header-anchor" href="#shallowref"><span>shallowRef</span></a></h2>
<p>在 Vue 3 中，ref 和 shallowRef 都用于创建响应式的引用对象，但它们之间有一些关键的区别：</p>
<ol>
<li><code v-pre>ref</code>：
<ul>
<li><code v-pre>ref</code> 可以用来创建包含基本类型值（如数字、字符串、布尔值）的响应式引用对象。</li>
<li>当给 <code v-pre>ref</code> 分配一个新值时，Vue 会确保这个新值是响应式的，并触发视图更新。</li>
<li>通过 <code v-pre>[*].value</code> 来访问和修改其值。</li>
</ul>
</li>
<li><code v-pre>shallowRef</code>：
<ul>
<li><code v-pre>shallowRef</code> 与 <code v-pre>ref</code> 类似，但它主要用于创建包含对象类型值的浅响应式引用对象。</li>
<li>当给 <code v-pre>shallowRef</code> 分配一个新对象时，只有该对象本身是响应式的，而不会递归地将其属性转换为响应式。</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>value<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：0</span></span>
<span class="line">state<span class="token punctuation">.</span>value<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 不会触发视图更新</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>state.value</code> 是一个浅响应式的对象引用，即 <code v-pre>state.value</code> 是响应式的，但是 <code v-pre>state.value.count</code> 并不是响应式的，修改 <code v-pre>count</code> 不会触发视图更新。</p>
<p>选择使用 <code v-pre>ref</code> 还是 <code v-pre>shallowRef</code> 取决于你的需求：</p>
<ul>
<li>如果你需要确保对象内部的所有属性都是响应式的，应该使用 <code v-pre>ref</code>。</li>
<li>如果你只需要对象本身是响应式的，并且不希望递归地转换其内部属性为响应式，可以使用 <code v-pre>shallowRef</code>。</li>
</ul>
<p>总之，<code v-pre>ref</code> 和 <code v-pre>shallowRef</code> 提供了根据具体需求来选择响应式处理的灵活性，确保你可以高效地管理和使用 Vue 3 中的响应式数据。</p>
<h2 id="shallowreactive" tabindex="-1"><a class="header-anchor" href="#shallowreactive"><span>shallowReactive</span></a></h2>
<p>在Vue 3中，<code v-pre>shallowReactive</code> 和 <code v-pre>reactive</code> 是用来创建响应式对象的两种方式，它们的主要区别在于<span class="bg-yellow-200">如何处理对象的嵌套</span>。</p>
<ol>
<li><code v-pre>reactive</code>：
<ul>
<li><code v-pre>reactive</code> 函数<span class="bg-yellow-200">会递归地将对象及其嵌套属性转换为响应式对象</span>。这意味着对象的所有嵌套属性都会被转换为响应式的，可以监听到其内部属性的变化。</li>
</ul>
</li>
<li><code v-pre>shallowReactive</code>：
<ul>
<li><code v-pre>shallowReactive</code> 函数<span class="bg-yellow-200">只会将对象的顶层属性转换为响应式对象，而不会递归转换嵌套属性</span>。这意味着对象内部的嵌套属性不会被转换为响应式，只有顶层属性是响应式的。<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> shallowReactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">       <span class="token literal-property property">nested</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">           <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">       <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>在这个例子中，<code v-pre>state.nested</code> 不是响应式的，只有 <code v-pre>state</code> 的顶层属性是响应式的。这意味着当 <code v-pre>state.nested.count</code> 变化时，不会触发视图更新。</li>
</ul>
</li>
</ol>
<p>选择使用 <code v-pre>shallowReactive</code> 还是 <code v-pre>reactive</code> 取决于你的数据结构和需要：</p>
<ul>
<li>如果你需要监听对象的所有嵌套属性的变化，应该使用 <code v-pre>reactive</code>。</li>
<li>如果你只需要监听对象的顶层属性的变化，可以使用 <code v-pre>shallowReactive</code>，这样可以提高性能并减少不必要的响应式处理。</li>
</ul>
<p>总之，<code v-pre>shallowReactive</code> 和 <code v-pre>reactive</code> 提供了灵活的选择，使你可以根据具体需求来决定如何创建响应式对象。</p>
</div></template>


