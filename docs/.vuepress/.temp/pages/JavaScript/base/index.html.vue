<template><div><h3 id="逻辑或-空值合并" tabindex="-1"><a class="header-anchor" href="#逻辑或-空值合并"><span>逻辑或&amp;空值合并</span></a></h3>
<div class="bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400">|| 和 ?? 有什么区别？</div>
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
<h3 id="获取对象的类型" tabindex="-1"><a class="header-anchor" href="#获取对象的类型"><span>获取对象的类型</span></a></h3>
<div class="bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400">除了 `typeof` 之外，还有什么方法能知道一个对象的类型</div>
<p>除了 <code v-pre>typeof</code> 之外，可以使用以下方法来获取对象的类型：</p>
<ol>
<li><code v-pre>instanceof</code> 运算符：
<ul>
<li>检查一个对象是否是某个构造函数的实例。<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"> <span class="token comment">// true if obj is an array</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li><code v-pre>Object.prototype.toString.call()</code>：
<ul>
<li>返回一个对象的类型字符串，常用于判断内置对象类型。<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [object Array]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li><code v-pre>constructor</code> 属性：
<ul>
<li>可以获取对象的构造函数。<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true if obj is an array</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li><code v-pre>Array.isArray()</code>：
<ul>
<li>专门用于判断是否为数组<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true if obj is an array</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<p>这些方法可以帮助更准确地识别对象的类型，尤其是在复杂数据结构中。</p>
<h3 id="void-0" tabindex="-1"><a class="header-anchor" href="#void-0"><span>void 0</span></a></h3>
<div class="bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400">void 0; 是什么意思</div>
<p>在 JavaScript 中，<code v-pre>void 0</code> 返回 <code v-pre>undefined</code>。这是因为 <code v-pre>void</code> 运算符会对其后面的表达式求值并返回 <code v-pre>undefined</code>。</p>
<p><strong>用途：</strong></p>
<ol>
<li>防止返回值：
<ul>
<li>在某些上下文中使用 <code v-pre>void</code> 来确保一个表达式不返回任何值。</li>
</ul>
</li>
<li>安全地获取 <code v-pre>undefined</code>：
<ul>
<li><code v-pre>void 0</code> 可以用来获取 <code v-pre>undefined</code> 值，而不用担心变量名 <code v-pre>undefined</code> 被重写（虽然现代 JavaScript 不推荐重写 undefined）。</li>
</ul>
</li>
<li>简洁性：
<ul>
<li>在一些代码中，可以用 <code v-pre>void 0</code> 来代替 <code v-pre>undefined</code>，以避免变量被篡改的风险。</li>
</ul>
</li>
</ol>
<p>总的来说，<code v-pre>void 0</code> 是一种简洁、安全的方式来表示 <code v-pre>undefined</code>。</p>
</div></template>


