<template><div><h2 id="request-path" tabindex="-1"><a class="header-anchor" href="#request-path"><span><code v-pre>$request-&gt;path()</code></span></a></h2>
<p>这行代码会获取当前请求的 URL 路径。让我为您详细解释一下：</p>
<p><code v-pre>$request-&gt;path()</code> 方法会返回当前请求的 URL 路径，不包括域名和查询字符串。例如：</p>
<ol>
<li>如果完整 URL 是 https://example.com/user/profile?id=123，$path 将会是 &quot;user/profile&quot;。</li>
<li>如果 URL 是 https://example.com/admin/dashboard，$path 将会是 &quot;admin/dashboard&quot;。</li>
<li>对于网站的根路径，如 https://example.com，$path 将会是空字符串 &quot;&quot;。</li>
</ol>
<h2 id="redirect-guest" tabindex="-1"><a class="header-anchor" href="#redirect-guest"><span><code v-pre>redirect()-&gt;guest()</code></span></a></h2>
<p><code v-pre>redirect()-&gt;guest()</code> 方法在 Laravel 中的行为确实需要一些解释。让我为您详细说明：</p>
<ol>
<li><code v-pre>redirect()-&gt;guest()</code> 的作用：
<ul>
<li>这个方法主要用于将未认证的用户重定向到登录页面。</li>
</ul>
</li>
<li>对不同 guards 的影响：
<ul>
<li>默认情况下，<code v-pre>redirect()-&gt;guest()</code> 主要针对默认的 guard（通常是 'web' guard）。</li>
<li>它不会自动适应所有自定义的 guards。</li>
</ul>
</li>
<li>自定义 guards 的处理：
<ul>
<li>对于自定义 guards，您可能需要额外的配置或自定义逻辑来实现类似的功能。</li>
</ul>
</li>
</ol>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案：</span></a></h3>
<p>如果您需要为不同的 guards 实现类似的功能，可以考虑以下方法：</p>
<ol>
<li>使用 <code v-pre>Auth::guard()</code> 指定 guard：</li>
</ol>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">guard</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'admin'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">guest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'admin.login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>自定义中间件：
<ul>
<li>为每个 guard 创建专门的中间件，在其中实现相应的重定向逻辑。</li>
</ul>
</li>
<li>扩展 Authenticate 中间件：
<ul>
<li>您可以扩展 Laravel 的 Authenticate 中间件，为不同的 guards 定制重定向行为。</li>
</ul>
</li>
</ol>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Middleware</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Auth<span class="token punctuation">\</span>Middleware<span class="token punctuation">\</span>Authenticate</span> <span class="token keyword">as</span> Middleware<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CustomAuthenticate</span> <span class="token keyword">extends</span> <span class="token class-name">Middleware</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">redirectTo</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">expectsJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-></span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'admin/*'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'admin.login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践：</span></a></h3>
<ul>
<li>为不同的 guards 设置不同的登录路由和重定向逻辑。</li>
<li>在 RouteServiceProvider 或相关的路由文件中明确指定使用的 guard。</li>
<li>使用命名路由来管理不同 guards 的登录页面。</li>
</ul>
<p>总结：虽然 redirect()-&gt;guest() 本身不会自动适应所有 guards，但通过适当的配置和自定义，您可以为不同的 guards 实现类似的功能。这样可以确保不同类型的用户（如普通用户、管理员等）在未认证时被正确地重定向到相应的登录页面。</p>
</div></template>


