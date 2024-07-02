<template><div><p><strong>在 JS中，|| 和 ?? 有什么区别？</strong></p>
<p>在 JavaScript 中，<code v-pre>||</code> 和 <code v-pre>??</code> 运算符的区别在于它们处理不同的假值：</p>
<ol>
<li><code v-pre>||</code> (逻辑或运算符):
<ul>
<li>返回第一个真值（truthy）操作数。</li>
<li>如果第一个操作数为假值（falsy，如 <code v-pre>0</code>、<code v-pre>&quot;&quot;</code>、<code v-pre>false</code>、<code v-pre>NaN</code>、<code v-pre>null</code>、<code v-pre>undefined</code>），则返回第二个操作数。</li>
</ul>
</li>
<li><code v-pre>??</code> (空值合并运算符):
<ul>
<li>仅在第一个操作数为 <code v-pre>null</code> 或 <code v-pre>undefined</code> 时返回第二个操作数。</li>
<li>不会对 <code v-pre>0</code>、<code v-pre>&quot;&quot;</code>、<code v-pre>false</code> 等其他假值触发。</li>
</ul>
</li>
</ol>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">||</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 5，因为 0 是假值</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">??</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 0，因为 0 不是 null 或 undefined</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b <span class="token operator">||</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 5，因为 null 是假值</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b <span class="token operator">??</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 5，因为 b 是 null</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>||</code> 用于处理一般的假值，而 <code v-pre>??</code> 专门用于处理 <code v-pre>null</code> 和 <code v-pre>undefined</code>。</p>
</div></template>


