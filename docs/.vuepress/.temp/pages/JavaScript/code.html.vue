<template><div><p><strong>hasOwnProperty</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasOwn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasOwn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> Object<span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>Object.hasOwn()</code>:静态方法,如果指定的对象自身有指定的属性，则返回 <code v-pre>true</code>。如果属性是继承的或者不存在，该方法返回 <code v-pre>false</code>。</li>
<li><code v-pre>Object.prototype.hasOwnProperty()</code>:实例方法</li>
<li><code v-pre>Object.hasOwn()</code> 旨在取代 <code v-pre>Object.prototype.hasOwnProperty()</code></li>
<li><code v-pre>Function.prototype.call()</code>: 实例方法,以给定的 this 值和逐个提供的参数调用该函数</li>
</ul>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">Object<span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> prop<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">object1<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token comment">/* …, */</span> argN<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


