<template><div><p>我们在 CSS 中只使用“px”（像素）的日子已经一去不复返了。如今，我们有很多选择。选择什么单位取决于上下文，有些应该用于文本，有些用于容器，有些用于打印。</p>
<table>
<thead>
<tr>
<th>单位</th>
<th>Name</th>
<th>相当于</th>
<th>关系到</th>
</tr>
</thead>
<tbody>
<tr>
<td>em</td>
<td>parent font size</td>
<td>1em = parent font size</td>
<td>Font</td>
</tr>
<tr>
<td>rem</td>
<td>font size of the root element</td>
<td>1rem = size of root element</td>
<td>Font</td>
</tr>
<tr>
<td>cap</td>
<td>height of root capital letters</td>
<td>1cap = height of a root element capital letter</td>
<td>Font</td>
</tr>
<tr>
<td>rcap</td>
<td>height of root capital letters</td>
<td>1cap = height of a root element capital letter</td>
<td>Font</td>
</tr>
<tr>
<td>vw</td>
<td>default viewport width</td>
<td>1vw = 1% of the default viewport’s width</td>
<td>Viewport</td>
</tr>
<tr>
<td>vh</td>
<td>default viewport height</td>
<td>1vh = 1% of the default viewport’s height</td>
<td>Viewport</td>
</tr>
</tbody>
</table>
<p>https://www.raresportan.com/css-units/</p>
<h3 id="css-常用函数" tabindex="-1"><a class="header-anchor" href="#css-常用函数"><span>CSS 常用函数</span></a></h3>
<p>CSS 有一些非常有用的函数，可以使用单个单位或多个单位来确定值。以下是一些示例：</p>
<h4 id="calc" tabindex="-1"><a class="header-anchor" href="#calc"><span>calc</span></a></h4>
<p>您可以使用 <code v-pre>calc()</code> 函数来确定使用多个单位的尺寸：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">.container</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 2em<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>clamp()
clamp()函数接受最小值、理想值和最大值。如果需要，所有这些单位都可以不同：</p>
</div></template>


