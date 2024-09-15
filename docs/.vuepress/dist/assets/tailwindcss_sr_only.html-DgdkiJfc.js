import{_ as n,c as s,o as a,d as t}from"./app-BkC144zv.js";const p={},e=t(`<h1 id="sr-only" tabindex="-1"><a class="header-anchor" href="#sr-only"><span>sr-only</span></a></h1><p><code>sr-only</code> 是一个常用的 CSS 类名，主要用于提高网页的可访问性（accessibility）。</p><p>它的全称是 &quot;screen reader only&quot;，意思是&quot;仅供屏幕阅读器使用&quot;。</p><p>这个类的主要作用如下：</p><ul><li><strong>隐藏视觉元素</strong>：使用 <code>sr-only</code> 类的元素在视觉上是不可见的，但仍然存在于 DOM 中。</li><li><strong>保留语义信息</strong>：虽然视觉上不可见，但这些元素的内容仍然可以被屏幕阅读器读取，从而为使用辅助技术的用户提供重要信息。</li><li><strong>提供上下文</strong>：可以用来为某些视觉元素添加额外的描述性文本，这些文本对视力正常的用户来说可能是多余的，但对使用屏幕阅读器的用户却很有帮助。</li><li><strong>改善导航</strong>：可以用来为导航元素添加更详细的描述，帮助使用屏幕阅读器的用户更好地理解页面结构。</li></ul><p>典型的 <code>sr-only</code> CSS 实现可能如下：</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">.sr-only</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-delete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sr-only<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>删除项目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，视力正常的用户会看到一个删除图标，而使用屏幕阅读器的用户会听到&quot;删除项目&quot;这个描述，从而理解按钮的功能。</p><p>总之，<code>sr-only</code> 是一个重要的辅助工具，用于提高网站的可访问性，确保所有用户，包括那些依赖辅助技术的用户，都能获得良好的用户体验。</p>`,11),l=[e];function o(c,i){return a(),s("div",null,l)}const r=n(p,[["render",o],["__file","tailwindcss_sr_only.html.vue"]]),d=JSON.parse('{"path":"/css/tailwindcss_sr_only.html","title":"sr-only","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"css/tailwindcss_sr_only.md","excerpt":"\\n<p><code>sr-only</code> 是一个常用的 CSS 类名，主要用于提高网页的可访问性（accessibility）。</p>\\n<p>它的全称是 \\"screen reader only\\"，意思是\\"仅供屏幕阅读器使用\\"。</p>\\n<p>这个类的主要作用如下：</p>\\n<ul>\\n<li><strong>隐藏视觉元素</strong>：使用 <code>sr-only</code> 类的元素在视觉上是不可见的，但仍然存在于 DOM 中。</li>\\n<li><strong>保留语义信息</strong>：虽然视觉上不可见，但这些元素的内容仍然可以被屏幕阅读器读取，从而为使用辅助技术的用户提供重要信息。</li>\\n<li><strong>提供上下文</strong>：可以用来为某些视觉元素添加额外的描述性文本，这些文本对视力正常的用户来说可能是多余的，但对使用屏幕阅读器的用户却很有帮助。</li>\\n<li><strong>改善导航</strong>：可以用来为导航元素添加更详细的描述，帮助使用屏幕阅读器的用户更好地理解页面结构。</li>\\n</ul>"}');export{r as comp,d as data};
