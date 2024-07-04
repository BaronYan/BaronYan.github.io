<template><div><h3 id="array-prototype-filter" tabindex="-1"><a class="header-anchor" href="#array-prototype-filter"><span>Array.prototype.filter()</span></a></h3>
<p><code v-pre>filter()</code> 创建一个新数组，其中包含通过指定函数测试的所有元素。这个方法不会改变原始数组，而是返回一个新的数组。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> newArray <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 返回 true 表示保留当前元素，false 表示移除当前元素</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> thisArg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


