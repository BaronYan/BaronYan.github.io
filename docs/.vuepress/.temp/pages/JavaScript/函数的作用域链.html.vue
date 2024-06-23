<template><div><p>来看看下面的代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"Lydia"</span></span>
<span class="line"><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">21</span></span>
<span class="line"><span class="token keyword">const</span> city <span class="token operator">=</span> <span class="token string">"San Francisco"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getPersonInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"Sarah"</span></span>
<span class="line">  <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">22</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and lives in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>city<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getPersonInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We're invoking the <code v-pre>getPersonInfo</code> function, which returns a string containing the values of the <code v-pre>name</code>, <code v-pre>age</code> and <code v-pre>city</code> variables:<br>
我们正在调用 getPersonInfo 函数，该函数将返回一个包含姓名、年龄和城市变量值的字符串：<code v-pre>Sarah is 22 and lives in San Francisco</code>.</p>
<p>But, the <code v-pre>getPersonInfo</code> function doesn't contain a variable named city 🤨? How did it know the value of city?</p>
<p>First, memory space is set up for the different contexts.<br>
首先，为不同的上下文设置内存空间。</p>
<p>We have the default global context (<code v-pre>window</code> in a browser, <code v-pre>global</code> in Node),<br>
我们有默认的全局上下文（浏览器中的<code v-pre>window</code>，Node 中的 <code v-pre>global</code>上下文），</p>
<p>and a local context for the <code v-pre>getPersonInfo</code> function which has been invoked.<br>
以及用于调用 <code v-pre>getPersonInfo</code> 函数的本地上下文。</p>
<p>Each context also has a scope chain.<br>
每个上下文还有一个作用域链。</p>
<p>For the <code v-pre>getPersonInfo</code> function, the scope chain looks something like this :<br>
对于 <code v-pre>getPersonInfo</code> 函数，作用域链看起来是这样的：</p>
<p>local execution context -&gt; local scope chain
本地执行上下文 -&gt; 本地作用域链</p>
<p><img src="@source/images/20240623001.png" alt="作用域链"></p>
<p>The scope chain is basically a &quot;chain of references&quot; to objects<br>
作用域链基本上是对象的 &quot;引用链&quot;，</p>
<p>that contain references to values (and other scopes)
that are referencable in that execution context.<br>
其中包含对该执行上下文中可引用的值（和其他作用域）的引用。</p>
<p>In the following examples,<br>
在下面的示例中，</p>
<p>the <code v-pre>key/value</code> pairs in the execution contexts represent the references that the scope chain has to the variables.<br>
执行上下文中的键/值对表示作用域链对变量的引用。</p>
<p><img src="@source/images/20240623002.png" alt="作用域链对变量的引用"></p>
<p>The scope chain of the global execution context has a reference to 3 variables: name with the value Lydia, age with the value 21, and city with the value San Francisco.<br>
全局执行上下文的作用域链引用了 3 个变量：姓名（值为 Lydia）、年龄（值为 21）和城市（值为旧金山）。</p>
<p>In the local context, we have a reference to 2 variables: name with the value Sarah, and age with the value 22.<br>
在本地上下文中，我们引用了 2 个变量：姓名（值为 Sarah）和年龄（值为 22）。</p>
<p>When we try to access the variables in the <code v-pre>getPersonInfo</code> function, the engine first checks the local scope chain.<br>
当我们尝试访问 <code v-pre>getPersonInfo</code> 函数中的变量时，引擎会首先检查本地作用域链。</p>
<p><img src="@source/images/20240623003.gif" alt="本地作用域链"></p>
<p>In the global context,<br>
在全局上下文中，</p>
<p>we declared the variable city with the value of San Francisco,<br>
我们声明了值为 San Francisco 的变量 city，</p>
<p>thus has a reference to the variable city.<br>
因此有了对变量 city 的引用。</p>
<p>Now that we have a value for the variable,<br>
现在我们有了变量的值，</p>
<p>the function <code v-pre>getPersonInfo</code> can return the string Sarah is 22 and lives in San Francisco 🎉<br>
函数 <code v-pre>getPersonInfo</code> 可以返回字符串 Sarah is 22 and lives in San Francisco 🎉</p>
<p>We can go down the scope chain, but we can't go up the scope chain.<br>
我们可以向下移动作用域链，但不能向上移动作用域链。</p>
<p><a href="https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd" target="_blank" rel="noopener noreferrer">JavaScript Visualized: Scope (Chain)</a></p>
</div></template>


