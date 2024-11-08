import{_ as a,c as n,o as s,d as e}from"./app-Jjiyxt7X.js";const l={},i=e(`<h1 id="fail-函数" tabindex="-1"><a class="header-anchor" href="#fail-函数"><span>$fail 函数</span></a></h1><p><code>$fail</code> 函数是 Laravel 验证系统中自定义验证规则时使用的一个重要工具。</p><p>它主要用在闭包验证规则或自定义验证规则中，用于标记验证失败并提供错误消息。</p><p>以下是关于 <code>$fail</code> 函数的一些重要信息：</p><ul><li><code>$fail</code> 函数用于指示当前验证规则失败。当调用 <code>$fail</code> 函数时，Laravel 会将该字段标记为验证失败，并添加相应的错误消息。</li><li><code>$fail</code> 函数通常作为闭包验证规则的参数之一。您可以调用它并传入一个字符串参数，这个字符串将作为错误消息。</li><li>您可以根据需要多次调用 <code>$fail</code> 函数，每次调用都会添加一个新的错误消息。</li><li><code>$fail</code> 函数可以与 Laravel 的本地化功能结合使用，允许您传入翻译后的错误消息。</li><li>使用 <code>$fail</code> 函数，您可以实现复杂的条件验证逻辑，这在标准验证规则难以表达时特别有用。</li><li>在闭包中，您可以访问请求的其他数据，这使得基于多个字段或复杂逻辑的验证成为可能。</li></ul><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token string single-quoted-string">&#39;field&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$attribute</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$fail</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token comment">/* 某些条件 */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// $fail(&#39;错误消息&#39;);</span></span>
<span class="line">            <span class="token variable">$fail</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">messages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name.unique&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token string single-quoted-string">&#39;仓库名称已存在&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[i];function t(c,o){return s(),n("div",null,p)}const u=a(l,[["render",t],["__file","fail.html.vue"]]),r=JSON.parse('{"path":"/laravel/fail.html","title":"$fail 函数","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1727004899000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"laravel/fail.md","excerpt":"\\n<p><code>$fail</code> 函数是 Laravel 验证系统中自定义验证规则时使用的一个重要工具。</p>\\n<p>它主要用在闭包验证规则或自定义验证规则中，用于标记验证失败并提供错误消息。</p>\\n<p>以下是关于 <code>$fail</code> 函数的一些重要信息：</p>\\n<ul>\\n<li><code>$fail</code> 函数用于指示当前验证规则失败。当调用 <code>$fail</code> 函数时，Laravel 会将该字段标记为验证失败，并添加相应的错误消息。</li>\\n<li><code>$fail</code> 函数通常作为闭包验证规则的参数之一。您可以调用它并传入一个字符串参数，这个字符串将作为错误消息。</li>\\n<li>您可以根据需要多次调用 <code>$fail</code> 函数，每次调用都会添加一个新的错误消息。</li>\\n<li><code>$fail</code> 函数可以与 Laravel 的本地化功能结合使用，允许您传入翻译后的错误消息。</li>\\n<li>使用 <code>$fail</code> 函数，您可以实现复杂的条件验证逻辑，这在标准验证规则难以表达时特别有用。</li>\\n<li>在闭包中，您可以访问请求的其他数据，这使得基于多个字段或复杂逻辑的验证成为可能。</li>\\n</ul>"}');export{u as comp,r as data};