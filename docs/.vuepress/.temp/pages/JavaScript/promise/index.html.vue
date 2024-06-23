<template><div><h2 id="promise-resolve" tabindex="-1"><a class="header-anchor" href="#promise-resolve"><span>Promise.resolve()</span></a></h2>
<p><code v-pre>Promise.resolve()</code> <span class="bg-fuchsia-300"> 是 JavaScript 中 Promise 对象的一个静态方法，
用于创建一个状态为 resolved 的 Promise 对象，并且可以指定解决（即成功）的值。</span></p>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h4>
<ul>
<li>value：可选参数，表示 Promise 解决（成功）时的返回值。可以是任意 JavaScript 值，包括对象、数组、原始值等。</li>
</ul>
<h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h4>
<p>一个新的 Promise 对象，状态为 resolved，并且解决值为指定的 value。</p>
<h3 id="示例用法" tabindex="-1"><a class="header-anchor" href="#示例用法"><span>示例用法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 使用普通值作为解决值</span></span>
<span class="line"><span class="token keyword">const</span> resolvedPromise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">resolvedPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Promise resolved with value: 42</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Promise resolved with value:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 使用对象作为解决值：</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello, Promise!'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> resolvedPromise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">resolvedPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Promise resolved with data: { message: 'Hello, Promise!' }</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Promise resolved with data:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 使用另一个 Promise 对象作为解决值（Promise chaining）</span></span>
<span class="line"><span class="token keyword">const</span> otherPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'Resolved from another Promise'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> resolvedPromise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>otherPromise<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">resolvedPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Resolved Promise resolved with: Resolved from another Promise</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Resolved Promise resolved with:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3>
<ul>
<li>如果 value 是一个 Promise 对象，则返回的 Promise 对象会直接采用该 Promise 的状态和值。</li>
<li>如果不提供任何参数，则 <code v-pre>Promise.resolve()</code> 返回一个立即解决的 Promise，解决值为 undefined。</li>
<li><code v-pre>Promise.resolve()</code> 方法使得创建 Promise 对象的过程更加简洁，特别是当需要处理已有值或者需要将某些值转化为 Promise 时，可以方便地使用该方法。</li>
<li>这个方法通常用于在异步操作中显式地解决 Promise，以便控制流程或者将已有值转化为 Promise。</li>
</ul>
<h2 id="promise-reject" tabindex="-1"><a class="header-anchor" href="#promise-reject"><span>Promise.reject()</span></a></h2>
<p><code v-pre>Promise.reject()</code> <span class="bg-fuchsia-300">  是 JavaScript 中 Promise 对象的一个静态方法，
用于创建一个状态为 rejected 的 Promise 对象，并且可以指定拒绝的原因（即拒绝的理由）。</span></p>
<p>reject /rɪˈdʒekt/</p>
<h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1"><span>参数</span></a></h4>
<ul>
<li><code v-pre>reason</code>：可选参数，表示 Promise 被拒绝的原因。通常是一个任意类型的值，用来描述拒绝的具体原因，比如一个 Error 对象、一个字符串或者其他任何值。</li>
</ul>
<h4 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1"><span>返回值</span></a></h4>
<p>一个新的 Promise 对象，状态为 rejected，并且拒绝原因为指定的 <code v-pre>reason</code>。</p>
<h3 id="示例用法-1" tabindex="-1"><a class="header-anchor" href="#示例用法-1"><span>示例用法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 使用字符串作为拒绝原因：</span></span>
<span class="line"><span class="token keyword">const</span> reason <span class="token operator">=</span> <span class="token string">'Something went wrong'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> rejectedPromise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">rejectedPromise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Promise rejected with reason: Something went wrong</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Promise rejected with reason:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 使用 Error 对象作为拒绝原因：</span></span>
<span class="line"><span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Custom error message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> rejectedPromise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">rejectedPromise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Promise rejected with error: Error: Custom error message</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Promise rejected with error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1"><span>注意事项</span></a></h3>
<p><code v-pre>Promise.reject()</code> 返回的 Promise 对象的状态为 rejected，这意味着</p>
<ul>
<li>它的 <code v-pre>.then()</code> 方法<span class="bg-fuchsia-300">会立即调用其第二个参数（即 rejected 状态的处理函数），而不会调用第一个参数（resolved 状态的处理函数）。</span></li>
<li>如果不提供 <code v-pre>reason</code> 参数，<code v-pre>Promise.reject()</code> 会创建一个带有 <code v-pre>undefined</code> 原因的 rejected Promise。</li>
<li>这个方法通常用于在异步操作中显式地拒绝 Promise，以便捕获错误或者控制流程。</li>
</ul>
</div></template>


