<template><div><h1 id="常用字符串数组过滤方法" tabindex="-1"><a class="header-anchor" href="#常用字符串数组过滤方法"><span>常用字符串数组过滤方法</span></a></h1>
<h2 id="split" tabindex="-1"><a class="header-anchor" href="#split"><span>split()</span></a></h2>
<p><code v-pre>split()</code> 是字符串的方法，用于将字符串分割成子字符串数组：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 基本语法</span></span>
<span class="line">string<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>separator<span class="token punctuation">,</span> limit<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数：</strong></p>
<ul>
<li>separator：分隔符，可以是字符串或正则表达式</li>
<li>limit（可选）：限制返回数组的长度</li>
</ul>
<p><strong>示例：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 1. 基本使用</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token string">'/manager/warehouses/create'</span></span>
<span class="line"><span class="token keyword">const</span> segments <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>segments<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// ['', 'manager', 'warehouses', 'create']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 使用限制数量</span></span>
<span class="line"><span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">'apple,banana,orange,grape'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// ['apple', 'banana']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 使用空字符串分割</span></span>
<span class="line"><span class="token keyword">const</span> word <span class="token operator">=</span> <span class="token string">'hello'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>word<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// ['h', 'e', 'l', 'l', 'o']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 使用正则表达式</span></span>
<span class="line"><span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token string">'2024-03-20'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-|\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// ['2024', '03', '20']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter()</span></a></h2>
<p><code v-pre>filter()</code> 是数组的方法，用于<strong>创建一个新数组，其中包含通过测试函数的所有元素：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 基本语法</span></span>
<span class="line">array<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数：</strong></p>
<ul>
<li>callback：用于测试数组元素的函数</li>
<li>element：当前元素</li>
<li>index（可选）：当前索引</li>
<li>array（可选）：原数组</li>
</ul>
<p><strong>示例：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 1. 过滤空值</span></span>
<span class="line"><span class="token keyword">const</span> segments <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">'manager'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">'warehouses'</span><span class="token punctuation">,</span> <span class="token string">'create'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> filtered <span class="token operator">=</span> segments<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filtered<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// ['manager', 'warehouses', 'create']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 过滤数字</span></span>
<span class="line"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> evenNumbers <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">num</span> <span class="token operator">=></span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evenNumbers<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// [2, 4, 6]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 过滤对象数组</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jane'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Bob'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> adults <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>age <span class="token operator">>=</span> <span class="token number">18</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>adults<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 使用索引和数组参数</span></span>
<span class="line"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> filtered <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> num <span class="token operator">></span> arr<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// 只保留比前一个数大的数</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filtered<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// [2, 3, 4, 5]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>map()</span></a></h2>
<p><code v-pre>map()</code> 是数组的一个重要方法，用于<strong>创建一个新数组，其结果是对原数组中的每个元素调用提供的函数后的返回值。</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 基本语法：</span></span>
<span class="line">array<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数：</strong></p>
<ul>
<li>callback：转换函数，应用到每个元素</li>
<li>currentValue：当前处理的元素</li>
<li>index（可选）：当前元素的索引</li>
<li>array（可选）：原数组</li>
</ul>
<p><strong>示例：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 1. 基本数字运算</span></span>
<span class="line"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> doubled <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">num</span> <span class="token operator">=></span> num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubled<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// [2, 4, 6, 8, 10]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 字符串转换</span></span>
<span class="line"><span class="token keyword">const</span> words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token string">'world'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> upperCase <span class="token operator">=</span> words<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">word</span> <span class="token operator">=></span> word<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>upperCase<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// ['HELLO', 'WORLD']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 对象数组转换</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jane'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> userNames <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userNames<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// ['John', 'Jane']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 使用索引参数</span></span>
<span class="line"><span class="token keyword">const</span> letters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> indexed <span class="token operator">=</span> letters<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">letter<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>letter<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>indexed<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// ['1: a', '2: b', '3: c']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


