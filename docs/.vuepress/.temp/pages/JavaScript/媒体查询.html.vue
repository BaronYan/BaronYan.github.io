<template><div><h2 id="window-matchmedia" tabindex="-1"><a class="header-anchor" href="#window-matchmedia"><span>window.matchMedia</span></a></h2>
<p>Window 接口的 <code v-pre>matchMedia()</code> 方法返回一个新 <code v-pre>MediaQueryList</code> 对象，用于确定是否与媒体查询字符串匹配，以及监视文档以检测它何时匹配（或停止匹配）该媒体查询。</p>
<p><code v-pre>matchMedia()</code> 返回一个新的 <code v-pre>MediaQueryList</code> 对象，表示指定的媒体查询字符串解析后的结果。</p>
<p><code v-pre>matchMedia()</code> 方法的值可以是任何一个 CSS <code v-pre>@media</code> 规则 的特性, 如 <code v-pre>min-height</code>, <code v-pre>min-width</code>, <code v-pre>orientation</code> 等。</p>
<h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">matchMedia</span><span class="token punctuation">(</span>mediaQueryString<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参数</p>
<ul>
<li><code v-pre>mediaQueryString</code> 必需，一个字符串，指定要解析为 <code v-pre>MediaQueryList</code> 的媒体查询的字符串。</li>
</ul>
<p>MediaQueryList 对象有以下两个属性：</p>
<ol>
<li><code v-pre>media</code> ：查询语句的内容。</li>
<li><code v-pre>matches</code> ：用于检测查询结果，如果文档匹配 media query 列表，值为 true，否则为 false。</li>
</ol>
<p>MediaQueryList 对象还可以监听事件。通过监听，在查询结果发生变化时，就调用指定的回调函数。</p>
<ul>
<li><code v-pre>addListener(functionref)</code>	添加一个新的监听器函数，该函数在媒体查询的结果发生变化时执行。</li>
<li><code v-pre>removeListener(functionref)</code>	从媒体查询列表中删除之前添加的监听器。如果指定的监听器不在列表中，则不执行任何操作。</li>
</ul>
</div></template>


