<template><div><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Providers</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">AppServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Bootstrap any application services.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name static-context">RateLimiter</span><span class="token operator">::</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'weather'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token class-name static-context">Limit</span><span class="token operator">::</span><span class="token function">perMinute</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token operator">-></span><span class="token function">by</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-></span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?-></span><span class="token property">id</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码是一个 Laravel 项目中的服务提供者（ServiceProvider）代码，具体实现了一个限流（Rate Limiting）功能。下面是对这段代码的详细解释：</p>
<h2 id="代码解析" tabindex="-1"><a class="header-anchor" href="#代码解析"><span>代码解析</span></a></h2>
<ol>
<li>boot 方法<br>
<strong>boot 方法是服务提供者中的一个特殊方法，当所有服务提供者都注册之后，该方法会自动调用。</strong>
通常用来注册事件监听器，或者是其他框架初始化工作。</li>
<li>限流逻辑<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token class-name static-context">RateLimiter</span><span class="token operator">::</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'weather'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token class-name static-context">Limit</span><span class="token operator">::</span><span class="token function">perMinute</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">-></span><span class="token function">by</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-></span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?-></span><span class="token property">id</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>RateLimiter::for('weather'...</code>：定义了一个名为 weather 的速率限制器。</li>
<li><code v-pre>return Limit::perMinute(5)</code>：设置这个操作每分钟只能执行 5 次。</li>
<li><code v-pre>-&gt;by($request-&gt;user()?-&gt;id ?: $request-&gt;ip())</code>：限流依据是用户 ID，如果用户未登录（即没有用户 ID），则使用用户的 IP 地址进行限流。</li>
</ul>
</li>
</ol>
<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2>
<p>这段代码的作用是防止用户频繁请求 weather 接口。每个用户每分钟最多只能请求 5 次这个接口。如果用户未登录，则基于 IP 地址进行限流。这种机制可以有效防止接口被滥用，保护服务器资源。</p>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li>如果需要对 weather 接口进行更细粒度的限流，可以调整 <code v-pre>perMinute(5)</code> 中的数值。</li>
<li>这段代码中的 <code v-pre>$request-&gt;user()?-&gt;id</code> 使用的是 PHP 8.0 引入的安全访问运算符（nullsafe operator），确保即使 <code v-pre>$request-&gt;user()</code> 返回 <code v-pre>null</code>，也不会引发错误。</li>
<li>确保 RateLimiter 和 Limit 已正确引入，通常情况下它们在 <code v-pre>Illuminate\Support\Facades\RateLimiter</code> 和 <code v-pre>Illuminate\Cache\RateLimiting\Limit</code> 中。</li>
</ol>
<p>通过设置合适的限流规则，可以有效保护 API 免受滥用，同时也能保证合法用户的正常使用。</p>
<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h2>
<p>要在 Laravel 应用中使用限流逻辑，可以按照以下步骤进行配置和使用。以下是详细的步骤说明：</p>
<h3 id="_1-更新-appserviceprovider-文件" tabindex="-1"><a class="header-anchor" href="#_1-更新-appserviceprovider-文件"><span>1. 更新 AppServiceProvider 文件</span></a></h3>
<p>首先，需要在 AppServiceProvider 中定义限流逻辑。确保你已经将限流逻辑添加到 boot 方法中，如之前提到的那。</p>
<h3 id="_2-使用限流逻辑" tabindex="-1"><a class="header-anchor" href="#_2-使用限流逻辑"><span>2. 使用限流逻辑</span></a></h3>
<p>接下来，你需要在路由或控制器中应用这个限流逻辑。假设你有一个天气接口，你可以在路由中使用中间件来应用限流。</p>
<h4 id="_2-1-在路由中应用限流" tabindex="-1"><a class="header-anchor" href="#_2-1-在路由中应用限流"><span>2.1 在路由中应用限流</span></a></h4>
<p>在 <code v-pre>routes/web.php</code> 或 <code v-pre>routes/api.php</code> 中，你可以使用 <code v-pre>throttle</code> 中间件来应用限流。</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Facades<span class="token punctuation">\</span>Route</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'throttle:weather'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">group</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'/weather'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'WeatherController@getWeather'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-在控制器中应用限流" tabindex="-1"><a class="header-anchor" href="#_2-在控制器中应用限流"><span>2. 在控制器中应用限流</span></a></h4>
<p>如果你想在控制器中直接应用限流，可以在控制器方法中使用 throttle 中间件：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Controllers</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Routing<span class="token punctuation">\</span>Controller</span> <span class="token keyword">as</span> BaseController<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Request</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">WeatherController</span> <span class="token keyword">extends</span> <span class="token class-name">BaseController</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'throttle:weather'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getWeather</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 获取天气数据的逻辑</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'weather'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'sunny'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-配置-throttle-中间件" tabindex="-1"><a class="header-anchor" href="#_3-配置-throttle-中间件"><span>3. 配置 throttle 中间件</span></a></h4>
<p>在 <code v-pre>app/Http/Kernel.php</code> 文件中，确保 throttle 中间件已注册：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">protected</span> <span class="token variable">$routeMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 其他中间件</span></span>
<span class="line">    <span class="token string single-quoted-string">'throttle'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Illuminate<span class="token punctuation">\</span>Routing<span class="token punctuation">\</span>Middleware<span class="token punctuation">\</span>ThrottleRequests</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-测试限流逻辑" tabindex="-1"><a class="header-anchor" href="#_4-测试限流逻辑"><span>4. 测试限流逻辑</span></a></h4>
<p>通过访问 <code v-pre>/weather</code> 接口进行测试，每分钟超过 5 次请求时，应该会返回 HTTP 429 错误（Too Many Requests）。</p>
<h4 id="_5-自定义错误响应-可选" tabindex="-1"><a class="header-anchor" href="#_5-自定义错误响应-可选"><span>5. 自定义错误响应（可选）</span></a></h4>
<p>你可以自定义限流超出后的错误响应。在 <code v-pre>app/Exceptions/Handler.php</code> 中重写 <code v-pre>prepareResponse</code> 方法：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">prepareResponse</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Throwable</span> <span class="token variable">$e</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$e</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Exceptions<span class="token punctuation">\</span>ThrottleRequestsException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'error'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Too Many Requests'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">429</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">prepareResponse</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token variable">$e</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<p>通过上述步骤，你可以在 Laravel 应用中实现并使用限流逻辑，以防止用户过于频繁地访问某些接口。限流机制可以有效保护你的应用免受滥用，同时保证服务的稳定性和可用性。</p>
</div></template>


