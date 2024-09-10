<template><div><h1 id="如何将用户定位到他的前缀域名" tabindex="-1"><a class="header-anchor" href="#如何将用户定位到他的前缀域名"><span>如何将用户定位到他的前缀域名？</span></a></h1>
<h2 id="_1-解析域名" tabindex="-1"><a class="header-anchor" href="#_1-解析域名"><span>1. 解析域名</span></a></h2>
<p>在域名管理后台(例如阿里云域名管理后台)解析域名设置里添加一条 主机记录为 <code v-pre>*</code>，记录类型为 CNAME 域名，例如：<code v-pre>*.yourdomain.com</code></p>
<h2 id="_2-配置-nginx" tabindex="-1"><a class="header-anchor" href="#_2-配置-nginx"><span>2. 配置 Nginx</span></a></h2>
<p>确保你的 Nginx 配置支持子域名。在 Nginx 配置中，通常需要设置 server 块来处理不同的子域名。你可以设置一个通配符子域名以便处理所有用户的子域名请求。</p>
<div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre v-pre class="language-conf"><code><span class="line">server {</span>
<span class="line">    listen 80;</span>
<span class="line"></span>
<span class="line">    server_name *.yourdomain.com; # 主要是这一条</span>
<span class="line"></span>
<span class="line">    root /var/www/your-laravel-app/public;</span>
<span class="line"></span>
<span class="line">    index index.php index.html index.htm;</span>
<span class="line"></span>
<span class="line">    location / {</span>
<span class="line">        try_files $uri $uri/ /index.php?$query_string;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    location ~ \.php$ {</span>
<span class="line">        include snippets/fastcgi-php.conf;</span>
<span class="line">        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock; # 或者对应的 PHP 版本</span>
<span class="line">        fastcgi_index index.php;</span>
<span class="line">        include fastcgi_params;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    location ~ /\.ht {</span>
<span class="line">        deny all;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-配置-laravel" tabindex="-1"><a class="header-anchor" href="#_3-配置-laravel"><span>3. 配置 Laravel</span></a></h2>
<p>在 Laravel 中，你需要设置中间件来处理子域名的重定向。假设每个用户有一个唯一的子域名，你可以在用户登录后进行重定向。</p>
<h3 id="_3-1-设置-env" tabindex="-1"><a class="header-anchor" href="#_3-1-设置-env"><span>3.1 设置 <code v-pre>.env</code></span></a></h3>
<p>添加一个子域名的配置到 <code v-pre>.env</code> 文件：</p>
<div class="language-env line-numbers-mode" data-highlighter="prismjs" data-ext="env" data-title="env"><pre v-pre class="language-env"><code><span class="line">SESSION_DOMAIN=yourdomain.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-2-创建中间件" tabindex="-1"><a class="header-anchor" href="#_3-2-创建中间件"><span>3.2 创建中间件</span></a></h3>
<p>生成一个新的中间件来处理重定向：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">php artisan make:middleware RedirectToSubdomain</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在 <code v-pre>app/Http/Middleware/RedirectToSubdomain.php</code> 中，添加逻辑来处理子域名重定向：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Middleware</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Closure</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Facades<span class="token punctuation">\</span>Auth</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">RedirectToSubdomain</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Closure</span> <span class="token variable">$next</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$subdomain</span> <span class="token operator">=</span> <span class="token variable">$user</span><span class="token operator">-></span><span class="token property">subdomain</span><span class="token punctuation">;</span> <span class="token comment">// 假设用户模型有一个 `subdomain` 属性</span></span>
<span class="line"></span>
<span class="line">            <span class="token variable">$host</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$host</span> <span class="token operator">!==</span> <span class="token string double-quoted-string">"<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$subdomain</span><span class="token punctuation">}</span></span>.yourdomain.com"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token variable">$url</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">getScheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'://'</span> <span class="token operator">.</span> <span class="token variable">$subdomain</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'.yourdomain.com'</span> <span class="token operator">.</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">getRequestUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">away</span><span class="token punctuation">(</span><span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$next</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-注册中间件" tabindex="-1"><a class="header-anchor" href="#_3-3-注册中间件"><span>3.3 注册中间件</span></a></h3>
<p>在 <code v-pre>app/Http/Kernel.php</code> 中注册你的中间件：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">protected</span> <span class="token variable">$middlewareGroups</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string single-quoted-string">'web'</span> <span class="token operator">=></span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token comment">// 其他中间件...</span></span>
<span class="line">        <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>App<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Middleware<span class="token punctuation">\</span>RedirectToSubdomain</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-在用户登录后设置子域名" tabindex="-1"><a class="header-anchor" href="#_3-4-在用户登录后设置子域名"><span>3.4 在用户登录后设置子域名</span></a></h3>
<p>在登录控制器中，设置用户的子域名（假设你在 users 表中有一个 subdomain 列）：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">authenticated</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$subdomain</span> <span class="token operator">=</span> <span class="token variable">$user</span><span class="token operator">-></span><span class="token property">subdomain</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">to</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"http://<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$subdomain</span><span class="token punctuation">}</span></span>.yourdomain.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-确保用户的子域名" tabindex="-1"><a class="header-anchor" href="#_4-确保用户的子域名"><span>4. 确保用户的子域名</span></a></h2>
<p>确保你的用户模型有一个 subdomain 属性，并且在用户注册时或用户资料更新时，为每个用户设置一个唯一的子域名。</p>
<p>这样，你就可以根据用户登录后的信息将他们重定向到各自的子域名了。</p>
</div></template>


