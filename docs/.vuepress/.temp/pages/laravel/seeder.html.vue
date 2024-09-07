<template><div><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"></span>
<span class="line"># seeder 基础知识</span>
<span class="line"></span>
<span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">Database<span class="token punctuation">\</span>Seeders</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Company</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeder</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CompanySeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Run the database seeds.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'广州勤快货运代理有限公司'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">'suffix_domain'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'qkcargo'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">'email'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'admin@qkcargo.com'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">'phone'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'020-88888888'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 seeder 会创建一条新的公司记录，包含您指定的所有信息。几点说明：</p>
<ol>
<li>我们使用 <code v-pre>Company::create()</code> 方法来创建新记录。这假设您的 Company 模型中已经设置了正确的 <code v-pre>$fillable</code> 或 <code v-pre>$guarded</code> 属性。</li>
<li>如果 Company 模型有其他必填字段，您需要在这里也提供这些字段的值。</li>
<li>如果您想在每次运行 seeder 时都确保只创建一次这条记录（避免重复），可以使用 <code v-pre>firstOrCreate</code> 方法：</li>
<li>如果您需要创建多个公司记录，可以在这个方法中添加更多的 <code v-pre>Company::create()</code> 调用。</li>
<li>记得在 DatabaseSeeder 类中调用这个 seeder：<code v-pre>$this-&gt;call([CompanySeeder::class]);</code></li>
</ol>
<h2 id="执行单个-seeder" tabindex="-1"><a class="header-anchor" href="#执行单个-seeder"><span>执行单个 seeder</span></a></h2>
<p>完成后，您可以通过运行以下命令来执行这个 seeder：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">php artisan db:seed <span class="token parameter variable">--class</span><span class="token operator">=</span>CompanySeeder</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="运行所有的-seeders" tabindex="-1"><a class="header-anchor" href="#运行所有的-seeders"><span>运行所有的 seeders</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">php artisan db:seed</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


