<template><div><h2 id="响应系统的作用与实现" tabindex="-1"><a class="header-anchor" href="#响应系统的作用与实现"><span>响应系统的作用与实现</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'hello vue3'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 effect 函数执行时，它会设置 body 的文本内容，但除了effect 函数之外的任何函数都可以读取或设置 body 的文本内容。
也就是说，effect 函数的执行会直接或间接影响其他函数的执行，这时我们说 effect 函数产生了副作用。
副作用很容易产生，例如一个函数修改了全局变量，这其实也是一个副作用，如下面的代码所示：</p>
</div></template>


