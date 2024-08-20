<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>枚举允许开发人员定义一个自定义类型，仅限于离散数量的可能值之一。</p>
<ul>
<li>在 PHP 中，枚举是一种特殊的对象。</li>
<li>枚举本身是一个类，其可能的用例都是该类的单实例对象。这意味着枚举用例是有效的对象，可以在任何可以使用对象的地方使用，包括类型检查。</li>
<li>枚举可以有零个或多个 <code v-pre>case</code> 定义。零情况枚举在语法上有效，但毫无用处。</li>
<li>枚举最流行的示例是内置布尔类型，它是一种具有合法值 <code v-pre>true</code> 和 <code v-pre>false</code> 的枚举类型。</li>
<li>枚举与类类似，与类、接口和特征共享相同的命名空间。它们也可以以相同的方式自动加载。</li>
</ul>
<h2 id="纯枚举" tabindex="-1"><a class="header-anchor" href="#纯枚举"><span>纯枚举</span></a></h2>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">enum</span> <span class="token class-name-definition class-name">Suit</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Hearts</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Diamonds</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Clubs</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Spades</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此声明创建了一个名为 <code v-pre>Suit</code> 的新枚举类型，
它有且只有四个合法值：<code v-pre>Suit::Hearts</code>、<code v-pre>Suit::Diamonds</code>、 <code v-pre>Suit::Clubs</code> 和 <code v-pre>Suit::Spades</code>。变量可以赋给其中一个合法值。</p>
<p>默认情况下，实例本质上不由标量值支持。也就是说，<code v-pre>Suit::Hearts</code> 不等于&quot;0&quot;。相反，每个实例都由该名称的单例对象支持。</p>
<p>所有实例都有一个只读属性 <code v-pre>name</code>，即实例本身的 <strong>区分大小写</strong> 的名称。</p>
<h2 id="支持枚举" tabindex="-1"><a class="header-anchor" href="#支持枚举"><span>支持枚举</span></a></h2>
<p>默认情况下，枚举实例没有标量等效项。它们只是单例对象。
但是，在很多情况下，枚举实例需要能够往返于数据库或类似的数据存储区，因此，定义一个内置的标量等效项是有用的。</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">enum</span> <span class="token class-name-definition class-name">Suit</span><span class="token punctuation">:</span> <span class="token keyword type-declaration">string</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Hearts</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'H'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Diamonds</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'D'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Clubs</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'C'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Spades</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'S'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持枚举可能由 <code v-pre>int</code> 或 <code v-pre>string</code> 类型支持，并且给定枚举一次仅支持一种类型（即不支持 <code v-pre>int|string</code> 的并集）。</p>
<p>支持枚举具有额外的只读属性<code v-pre>value</code>，它是 <strong>定义中指定的值</strong>。</p>
<h2 id="枚举方法" tabindex="-1"><a class="header-anchor" href="#枚举方法"><span>枚举方法</span></a></h2>
<p>枚举（纯枚举和支持枚举）可以包含方法，也可以实现接口。如果枚举实现了接口，则该接口的任何类型检查也将接受该枚举的所有情况。</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name-definition class-name">Colorful</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">enum</span> <span class="token class-name-definition class-name">Suit</span> <span class="token keyword">implements</span> <span class="token class-name">Colorful</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Hearts</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Diamonds</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Clubs</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Spades</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Fulfills the interface contract.</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 在方法内部，$this变量被定义并引用 Case 实例。</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">match</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name static-context">Suit</span><span class="token operator">::</span><span class="token constant">Hearts</span><span class="token punctuation">,</span> <span class="token class-name static-context">Suit</span><span class="token operator">::</span><span class="token constant">Diamonds</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Red'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token class-name static-context">Suit</span><span class="token operator">::</span><span class="token constant">Clubs</span><span class="token punctuation">,</span> <span class="token class-name static-context">Suit</span><span class="token operator">::</span><span class="token constant">Spades</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Black'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Not part of an interface; that's fine.</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string double-quoted-string">"Rectangle"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function-definition function">paint</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Colorful</span> <span class="token variable">$c</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token comment">/* ... */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">paint</span><span class="token punctuation">(</span><span class="token class-name static-context">Suit</span><span class="token operator">::</span><span class="token constant">Clubs</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Works</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span> <span class="token class-name static-context">Suit</span><span class="token operator">::</span><span class="token constant">Diamonds</span><span class="token operator">-></span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints "Rectangle"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中， <code v-pre>Suit</code> 的所有四个实例都具有两个方法 <code v-pre>color()</code> 和 <code v-pre>shape()</code>。就调用代码和类型检查而言，它们的行为与任何其他对象实例完全相同。</p>
<p>方法可以是公共的、私有的或受保护的，但实际上私有的和受保护的方法是等效的，因为不允许继承。</p>
<h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法"><span>静态方法</span></a></h2>
<p>枚举也可能有静态方法。枚举本身的静态方法主要用于替代构造函数。</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">enum</span> <span class="token class-name-definition class-name">Size</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Small</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Medium</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">Large</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">fromLength</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$cm</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">static</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">match</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$cm</span> <span class="token operator">&lt;</span> <span class="token number">50</span> <span class="token operator">=></span> <span class="token keyword static-context">static</span><span class="token operator">::</span><span class="token constant">Small</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$cm</span> <span class="token operator">&lt;</span> <span class="token number">100</span> <span class="token operator">=></span> <span class="token keyword static-context">static</span><span class="token operator">::</span><span class="token constant">Medium</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token keyword">default</span> <span class="token operator">=></span> <span class="token keyword static-context">static</span><span class="token operator">::</span><span class="token constant">Large</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


