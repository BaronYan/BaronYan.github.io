<template><div><h1 id="eloquent-基本知识" tabindex="-1"><a class="header-anchor" href="#eloquent-基本知识"><span>Eloquent 基本知识</span></a></h1>
<h2 id="批量分配" tabindex="-1"><a class="header-anchor" href="#批量分配"><span>批量分配</span></a></h2>
<h3 id="create-和-firstorcreate-有哪些区别" tabindex="-1"><a class="header-anchor" href="#create-和-firstorcreate-有哪些区别"><span>create 和 firstOrCreate 有哪些区别</span></a></h3>
<p><code v-pre>create</code> 和 <code v-pre>firstOrCreate</code> 是 Laravel Eloquent ORM 中用于创建新记录的两个不同方法。它们有以下主要区别：</p>
<ol>
<li><code v-pre>create</code> 方法：
<ul>
<li>总是创建一个新记录。</li>
<li>如果记录已存在，会创建一个重复的记录。</li>
<li>更快，因为它不需要先查询数据库。</li>
</ul>
</li>
<li><code v-pre>firstOrCreate</code> 方法：
<ul>
<li>首先尝试查找匹配的记录。</li>
<li>如果找到匹配的记录，返回该记录。</li>
<li>如果没有找到匹配的记录，则创建一个新记录。</li>
<li>可以防止创建重复记录。</li>
<li>firstOrCreate 允许您分别指定用于查找的属性和用于创建的属性。</li>
</ul>
</li>
</ol>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$company</span> <span class="token operator">=</span> <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'广州勤快货运代理有限公司'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string single-quoted-string">'suffix_domain'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'qkcargo'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ...其他字段</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$company</span> <span class="token operator">=</span> <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">firstOrCreate</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string single-quoted-string">'suffix_domain'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'qkcargo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 用于查找的条件</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'广州勤快货运代理有限公司'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// ...其他字段</span></span>
<span class="line">    <span class="token punctuation">]</span> <span class="token comment">// 用于创建的属性</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


