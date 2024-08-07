<template><div><p><a href="https://laravel.com/docs/11.x/requests" target="_blank" rel="noopener noreferrer">requests</a></p>
<p>Laravel 的 <code v-pre>Illuminate\Http\Request</code> 类提供了一种面向对象的方式，可以与应用程序正在处理的当前 HTTP 请求进行交互，并检索与请求一起提交的输入、cookie 和文件。</p>
<p><a href="https://laravel.com/docs/11.x/validation#creating-form-requests" target="_blank" rel="noopener noreferrer">表单请求验证</a> 表单请求是封装了自己的验证和授权逻辑的自定义请求类。</p>
<h2 id="表单请求验证" tabindex="-1"><a class="header-anchor" href="#表单请求验证"><span>表单请求验证</span></a></h2>
<p>创建表单请求类的命令如下所示：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">php artisan make:request StorePostRequest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Laravel 生成的每个表单请求都有两个方法：<code v-pre>authorize</code> 和 <code v-pre>rules</code> :</p>
<ul>
<li><code v-pre>authorize</code> 方法负责确定当前经过身份验证的用户是否可以执行请求所代表的操作</li>
<li><code v-pre>rules</code> 方法返回应适用于请求数据的验证规则
<ul>
<li>如果验证失败，将生成重定向响应以将用户送回其之前的位置。错误还将闪现到会话中，以便显示。</li>
<li>如果请求是 XHR 请求，将向用户返回带有 422 状态代码的 HTTP 响应，其中包括验证错误的 JSON 表示。</li>
</ul>
</li>
</ul>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string single-quoted-string">'title'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'required|unique:posts|max:255'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string single-quoted-string">'body'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://laravel.com/docs/11.x/precognition" target="_blank" rel="noopener noreferrer">Laravel Precognition</a> 可以为用户提供实时验证体验，而无需在前端 Vue 应用程序中重复验证规则。</p>
<ul>
<li>首先，要为路由启用预识别，HandlePrecognitiveRequests应将中间件添加到路由定义中。您还应该创建一个表单请求来容纳路由的验证规则：</li>
</ul>
</div></template>


