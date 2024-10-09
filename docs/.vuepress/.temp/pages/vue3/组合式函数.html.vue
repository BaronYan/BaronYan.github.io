<template><div><h1 id="组合式函数" tabindex="-1"><a class="header-anchor" href="#组合式函数"><span>组合式函数</span></a></h1>
<p>组合式函数”(Composables) 是一个利用组合式 API 来封装和复用有状态逻辑的函数。</p>
<ul>
<li>按照惯例，组合式函数名以“use”开头</li>
<li>并返回需要暴露的状态。</li>
<li>可以在组合式函数中使用所有的<a href="https://cn.vuejs.org/api/#composition-api" target="_blank" rel="noopener noreferrer">组合式 API</a></li>
<li>一个组合式函数可以调用一个或多个其他的组合式函数</li>
<li>每一个调用组合式函数的组件实例会创建其独有的状态拷贝，因此他们不会互相影响。</li>
<li><strong>将响应式状态传入组合式函数,组合式函数才能成为侦听器</strong>。</li>
<li></li>
</ul>
<h2 id="接收响应式状态" tabindex="-1"><a class="header-anchor" href="#接收响应式状态"><span>接收响应式状态</span></a></h2>
<p><strong>在vue3中，将响应式状态传入组合式函数,组合式函数才能成为侦听器</strong>。</p>
<p>举例来说，<code v-pre>useFetch()</code> 应该能够接收一个 <code v-pre>ref</code>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'/initial-url'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 这将会重新触发 fetch</span></span>
<span class="line">url<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'/new-url'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者接收一个 getter 函数：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 当 props.id 改变时重新 fetch</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以用 <code v-pre>watchEffect()</code> 和 <code v-pre>toValue()</code> API 来重构我们现有的实现：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// fetch.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">json</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>value <span class="token operator">=</span> json<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>value <span class="token operator">=</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>watchEffect()</code> 重构我们的实现：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// fetch.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watchEffect<span class="token punctuation">,</span> toValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// reset state before fetching..</span></span>
<span class="line">    data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">    error<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token function">toValue</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">json</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>value <span class="token operator">=</span> json<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>value <span class="token operator">=</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>toValue()</code> 的设计目的是将 <code v-pre>ref</code> 或 <code v-pre>getter</code> 规范化为值。如果参数是 <code v-pre>ref</code>，它会返回 <code v-pre>ref</code> 的值；如果参数是函数，它会调用函数并返回其返回值。否则，它会原样返回参数。它的工作方式类似于 <code v-pre>unref()</code>，但对函数有特殊处理。</p>
<p>注意<code v-pre> toValue(url)</code> 是在 <code v-pre>watchEffect</code> 回调函数的内部调用的。这确保了在 <code v-pre>toValue()</code> 规范化期间访问的任何响应式依赖项都会被侦听器跟踪。</p>
<p>这个版本的 <code v-pre>useFetch()</code> 现在能接收静态 URL 字符串、ref 和 getter，使其更加灵活。watch effect 会立即运行，并且会跟踪 toValue(url) 期间访问的任何依赖项。如果没有跟踪到依赖项 (例如 url 已经是字符串)，则 effect 只会运行一次；否则，它将在跟踪到的任何依赖项更改时重新运行。</p>
<p><strong>如果你的组合式函数在输入参数是 ref 或 getter 的情况下创建了响应式 effect，为了让它能够被正确追踪，请确保要么使用 watch() 显式地监视 ref 或 getter，要么在 watchEffect() 中调用 toValue()。</strong></p>
</div></template>


