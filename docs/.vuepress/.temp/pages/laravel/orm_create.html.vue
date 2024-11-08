<template><div><h1 id="laravel-orm-create" tabindex="-1"><a class="header-anchor" href="#laravel-orm-create"><span>Laravel ORM create()</span></a></h1>
<p>我来详细介绍 Laravel 中 create() 方法的用法：</p>
<h2 id="_1-基本用法" tabindex="-1"><a class="header-anchor" href="#_1-基本用法"><span>1. 基本用法</span></a></h2>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token class-name static-context">Model</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">/* 需要插入的数据 */</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 最简单的创建方式</span></span>
<span class="line"><span class="token variable">$warehouse</span> <span class="token operator">=</span> <span class="token class-name static-context">Warehouse</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'北京仓库'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string single-quoted-string">'address'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'北京市朝阳区'</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


