<template><div><p>PHP 支持多种类型转换操作符，用于在不同数据类型之间进行转换。以下是 PHP 中常用的类型转换操作符和方法：</p>
<h3 id="强制类型转换-casting" tabindex="-1"><a class="header-anchor" href="#强制类型转换-casting"><span>强制类型转换（Casting）</span></a></h3>
<p>强制类型转换使用类型名称作为前缀，将值转换为指定类型。支持的类型包括 <code v-pre>(int)</code>, <code v-pre>(bool)</code>, <code v-pre>(float)</code>, <code v-pre>(string)</code>, <code v-pre>(array)</code>, <code v-pre>(object)</code>, <code v-pre>(unset)</code>。</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$value</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"123"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为整数</span></span>
<span class="line"><span class="token variable">$int_value</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span> <span class="token variable">$value</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为布尔值</span></span>
<span class="line"><span class="token variable">$bool_value</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">bool</span><span class="token punctuation">)</span> <span class="token variable">$value</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为浮点数</span></span>
<span class="line"><span class="token variable">$float_value</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">float</span><span class="token punctuation">)</span> <span class="token variable">$value</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为字符串</span></span>
<span class="line"><span class="token variable">$string_value</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">string</span><span class="token punctuation">)</span> <span class="token variable">$value</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为数组</span></span>
<span class="line"><span class="token variable">$array_value</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span> <span class="token variable">$value</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为对象</span></span>
<span class="line"><span class="token variable">$object_value</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">object</span><span class="token punctuation">)</span> <span class="token variable">$value</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为 NULL</span></span>
<span class="line"><span class="token variable">$unset_value</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">unset</span><span class="token punctuation">)</span> <span class="token variable">$value</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型函数" tabindex="-1"><a class="header-anchor" href="#类型函数"><span>类型函数</span></a></h3>
<p>PHP 提供了一些函数来进行类型转换：</p>
<ul>
<li><code v-pre>intval()</code>: 转换为整数</li>
<li><code v-pre>floatval()</code> 或 <code v-pre>doubleval()</code>: 转换为浮点数</li>
<li><code v-pre>strval()</code>: 转换为字符串</li>
<li><code v-pre>boolval()</code>: 转换为布尔值</li>
<li><code v-pre>settype()</code>: 设置变量的类型</li>
</ul>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$value</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"123"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为整数</span></span>
<span class="line"><span class="token variable">$int_value</span> <span class="token operator">=</span> <span class="token function">intval</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为浮点数</span></span>
<span class="line"><span class="token variable">$float_value</span> <span class="token operator">=</span> <span class="token function">floatval</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为字符串</span></span>
<span class="line"><span class="token variable">$string_value</span> <span class="token operator">=</span> <span class="token function">strval</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 转换为布尔值</span></span>
<span class="line"><span class="token variable">$bool_value</span> <span class="token operator">=</span> <span class="token function">boolval</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 设置变量的类型</span></span>
<span class="line"><span class="token function">settype</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"int"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $value 现在是整数类型</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动类型转换" tabindex="-1"><a class="header-anchor" href="#自动类型转换"><span>自动类型转换</span></a></h3>
<p>PHP 会在需要的时候自动转换变量的类型。例如，在算术运算中，如果参与运算的变量类型不匹配，PHP 会自动进行转换。</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$number</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"10"</span> <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// $number 现在是 30，PHP 自动将 "10" 转换为整数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="gettype-函数" tabindex="-1"><a class="header-anchor" href="#gettype-函数"><span><code v-pre>gettype()</code> 函数</span></a></h3>
<p>虽然不是转换操作符，但 <code v-pre>gettype()</code> 函数可以获取变量的类型，帮助我们在调试时了解变量的当前类型。</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$value</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$type</span> <span class="token operator">=</span> <span class="token function">gettype</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $type 是 "integer"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他相关函数" tabindex="-1"><a class="header-anchor" href="#其他相关函数"><span>其他相关函数</span></a></h3>
<p><code v-pre>is_int()</code>, <code v-pre>is_string()</code>, <code v-pre>is_bool()</code>, <code v-pre>is_float()</code>, <code v-pre>is_array()</code>, <code v-pre>is_object()</code>, <code v-pre>is_null()</code>: 这些函数用于检查变量是否为指定类型。</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$value</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_int</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token string double-quoted-string">"This is an integer"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些类型转换操作符和方法可以帮助你在 PHP 中处理和转换数据类型，以满足不同的编程需求。</p>
<h3 id="在-laravel-中" tabindex="-1"><a class="header-anchor" href="#在-laravel-中"><span>在 laravel 中</span></a></h3>
<p><strong>在 laravel 中，有哪些可用的类型转换函数？</strong></p>
<p>在 Laravel 中，类型转换通常通过模型的 <code v-pre>$casts</code> 属性来实现，这个属性允许你定义模型属性的类型转换。以下是 Laravel 中一些常用的类型转换类型：</p>
<h4 id="模型的-casts-属性" tabindex="-1"><a class="header-anchor" href="#模型的-casts-属性"><span>模型的 <code v-pre>$casts</code> 属性</span></a></h4>
<p>在模型中，你可以使用 <code v-pre>$casts</code> 属性来定义类型转换：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Eloquent<span class="token punctuation">\</span>Model</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$casts</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string single-quoted-string">'is_admin'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'boolean'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string single-quoted-string">'created_at'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'datetime'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string single-quoted-string">'updated_at'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'datetime'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string single-quoted-string">'points'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'integer'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string single-quoted-string">'options'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'array'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string single-quoted-string">'amount'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'float'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string single-quoted-string">'metadata'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'json'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是 Laravel 支持的类型转换：</p>
<ul>
<li><code v-pre>integer</code>: 转换为整数</li>
<li><code v-pre>real</code>, <code v-pre>float</code>, <code v-pre>double</code>: 转换为浮点数</li>
<li><code v-pre>string</code>: 转换为字符串</li>
<li><code v-pre>boolean</code>: 转换为布尔值</li>
<li><code v-pre>object</code>: 转换为对象</li>
<li><code v-pre>array</code>: 转换为数组</li>
<li><code v-pre>collection</code>: 转换为 <code v-pre>Illuminate\Support\Collection</code> 实例</li>
<li><code v-pre>date</code>: 转换为 <code v-pre>Illuminate\Support\Carbon</code> 实例（日期）</li>
<li><code v-pre>datetime</code>: 转换为 <code v-pre>Illuminate\Support\Carbon</code> 实例（日期和时间）</li>
<li><code v-pre>timestamp</code>: 转换为时间戳（整数）</li>
<li><code v-pre>json</code>: 转换为 JSON 数据类型</li>
</ul>
<h4 id="自定义类型转换" tabindex="-1"><a class="header-anchor" href="#自定义类型转换"><span>自定义类型转换</span></a></h4>
<p>你可以通过实现 <code v-pre>CastsAttributes</code> 接口来自定义类型转换器：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Eloquent<span class="token punctuation">\</span>CastsAttributes</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Json</span> <span class="token keyword">implements</span> <span class="token class-name">CastsAttributes</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token variable">$model</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$key</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$attributes</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">set</span><span class="token punctuation">(</span><span class="token variable">$model</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$key</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$attributes</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在模型中使用自定义类型转换器：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Casts<span class="token punctuation">\</span>Json</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$casts</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string single-quoted-string">'options'</span> <span class="token operator">=></span> <span class="token class-name static-context">Json</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原始类型转换" tabindex="-1"><a class="header-anchor" href="#原始类型转换"><span>原始类型转换</span></a></h3>
<p>除了使用 <code v-pre>$casts</code> 属性，你还可以在属性访问器（Accessor）和修改器（Mutator）中手动进行类型转换：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Eloquent<span class="token punctuation">\</span>Model</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 访问器</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getIsAdminAttribute</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword type-casting">bool</span><span class="token punctuation">)</span> <span class="token variable">$value</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 修改器</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setIsAdminAttribute</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">attributes</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'is_admin'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">bool</span><span class="token punctuation">)</span> <span class="token variable">$value</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些类型转换方法和功能可以帮助你更方便地管理和处理 Laravel 应用程序中的数据类型转换，确保数据以正确的类型存储和检索。</p>
</div></template>


