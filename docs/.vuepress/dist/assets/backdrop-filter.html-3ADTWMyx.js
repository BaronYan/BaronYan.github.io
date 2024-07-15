import{_ as n,c as s,o as a,e as t}from"./app-f1hjKqFW.js";const p={},e=t(`<p>backdrop-filter 是 CSS 中的一个属性， 用于在元素的背景上应用图形效果（如模糊或颜色变化）。 它主要用于创造玻璃效果或其他复杂的视觉效果。 以下是一些关于 backdrop-filter 属性的详细介绍：</p><p>https://www.youtube.com/watch?v=PL3Odw-k8W4</p><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">.element</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> &lt;filter-function&gt; [&lt;filter-function&gt;]*<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见的过滤器函数" tabindex="-1"><a class="header-anchor" href="#常见的过滤器函数"><span>常见的过滤器函数</span></a></h3><ul><li><code>blur(&lt;length&gt;)</code>：应用模糊效果。<code>&lt;length&gt;</code> 指定模糊的半径，如 <code>blur(5px)</code>。</li><li><code>brightness(&lt;number&gt;)</code>：调整亮度。<code>&lt;number&gt;</code> 为亮度值，如 <code>brightness(0.5)</code> 使图像变暗，<code>brightness(1.5)</code> 使图像变亮。</li><li><code>contrast(&lt;number&gt;)</code>：调整对比度。<code>&lt;number&gt;</code> 为对比度值，如 <code>contrast(2)</code> 将对比度加倍。</li><li><code>grayscale(&lt;percentage&gt;)</code>：应用灰度效果。<code>&lt;percentage&gt;</code> 指定灰度的百分比，如 <code>grayscale(50%)</code>。</li><li><code>invert(&lt;percentage&gt;)</code>：反转颜色。<code>&lt;percentage&gt;</code> 指定反转的百分比，如 <code>invert(100%)</code> 完全反转颜色。</li><li><code>opacity(&lt;percentage&gt;)</code>：调整不透明度。<code>&lt;percentage&gt;</code> 指定不透明度的百分比，如 <code>opacity(50%)</code>。</li><li><code>sepia(&lt;percentage&gt;)</code>：应用棕褐色效果。<code>&lt;percentage&gt;</code> 指定效果的百分比，如 <code>sepia(100%)</code>。</li><li><code>saturate(&lt;number&gt;)</code>：调整饱和度。<code>&lt;number&gt;</code> 为饱和度值，如 <code>saturate(2)</code> 将饱和度加倍。</li><li><code>hue-rotate(&lt;angle&gt;)</code>：调整色相。<code>&lt;angle&gt;</code> 指定旋转的角度，如 <code>hue-rotate(90deg)</code>。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token comment">/* 应用模糊和亮度调整 */</span></span>
<span class="line"><span class="token selector">.example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span> <span class="token function">brightness</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性"><span>兼容性</span></a></h2><p>backdrop-filter 在一些现代浏览器中已经得到了支持，但在较旧的浏览器中可能不完全支持。为确保跨浏览器兼容性，可以使用适当的前缀或备用方案。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><ol><li><strong>模糊背景</strong>：常用于弹出窗口、对话框等，以突出前景内容，同时提供模糊背景。</li><li><strong>玻璃效果</strong>：在一些 UI 设计中，通过结合透明度和模糊效果，模拟玻璃材质的外观。</li><li><strong>视觉效果增强</strong>：通过颜色调整、对比度增强等方式，提升视觉效果。</li></ol><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h3><p>以下是一个完整的示例，展示如何使用 backdrop-filter 创建模糊背景效果：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Backdrop Filter Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;background.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello, World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，.box 元素应用了 backdrop-filter 属性，通过模糊效果突出其内容，同时模糊背景图像。</p><div class="container"><div class="box">Hello, World!</div></div>`,17),l=[e];function c(o,i){return a(),s("div",null,l)}const r=n(p,[["render",c],["__file","backdrop-filter.html.vue"]]),d=JSON.parse('{"path":"/css/backdrop-filter.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[{"level":3,"title":"常见的过滤器函数","slug":"常见的过滤器函数","link":"#常见的过滤器函数","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[{"level":3,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"css/backdrop-filter.md","excerpt":"<p>backdrop-filter 是 CSS 中的一个属性，\\n用于在元素的背景上应用图形效果（如模糊或颜色变化）。\\n它主要用于创造玻璃效果或其他复杂的视觉效果。\\n以下是一些关于 backdrop-filter 属性的详细介绍：</p>\\n<p>https://www.youtube.com/watch?v=PL3Odw-k8W4</p>\\n<h2>基本语法</h2>\\n<div class=\\"language-css\\" data-highlighter=\\"prismjs\\" data-ext=\\"css\\" data-title=\\"css\\"><pre class=\\"language-css\\"><code><span class=\\"line\\"><span class=\\"token selector\\">.element</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  <span class=\\"token property\\">backdrop-filter</span><span class=\\"token punctuation\\">:</span> &lt;filter-function&gt; [&lt;filter-function&gt;]*<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{r as comp,d as data};
