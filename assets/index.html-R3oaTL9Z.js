import{_ as n,c as s,o as a,d as e}from"./app-CcU32nL5.js";const o={},c=e(`<h3 id="逻辑或-空值合并" tabindex="-1"><a class="header-anchor" href="#逻辑或-空值合并"><span>逻辑或&amp;空值合并</span></a></h3><div class="bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400">|| 和 ?? 有什么区别？</div><p>在 JavaScript 中，<code>||</code> 和 <code>??</code> 运算符的区别在于它们处理不同的假值：</p><ol><li><code>||</code> (逻辑或运算符): <ul><li>返回第一个真值（truthy）操作数。</li><li>如果第一个操作数为假值（falsy，如 <code>0</code>、<code>&quot;&quot;</code>、<code>false</code>、<code>NaN</code>、<code>null</code>、<code>undefined</code>），则返回第二个操作数。</li></ul></li><li><code>??</code> (空值合并运算符): <ul><li>仅在第一个操作数为 <code>null</code> 或 <code>undefined</code> 时返回第二个操作数。</li><li>不会对 <code>0</code>、<code>&quot;&quot;</code>、<code>false</code> 等其他假值触发。</li></ul></li></ol><p>示例：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">||</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 5，因为 0 是假值</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">??</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 0，因为 0 不是 null 或 undefined</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b <span class="token operator">||</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 5，因为 null 是假值</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b <span class="token operator">??</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 5，因为 b 是 null</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>||</code> 用于处理一般的假值，而 <code>??</code> 专门用于处理 <code>null</code> 和 <code>undefined</code>。</p><h3 id="获取对象的类型" tabindex="-1"><a class="header-anchor" href="#获取对象的类型"><span>获取对象的类型</span></a></h3><div class="bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400">除了 \`typeof\` 之外，还有什么方法能知道一个对象的类型</div><p>除了 <code>typeof</code> 之外，可以使用以下方法来获取对象的类型：</p><ol><li><code>instanceof</code> 运算符： <ul><li>检查一个对象是否是某个构造函数的实例。<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> <span class="token comment">// true if obj is an array</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><code>Object.prototype.toString.call()</code>： <ul><li>返回一个对象的类型字符串，常用于判断内置对象类型。<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [object Array]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><code>constructor</code> 属性： <ul><li>可以获取对象的构造函数。<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true if obj is an array</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><code>Array.isArray()</code>： <ul><li>专门用于判断是否为数组<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true if obj is an array</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li></ol><p>这些方法可以帮助更准确地识别对象的类型，尤其是在复杂数据结构中。</p><h3 id="void-0" tabindex="-1"><a class="header-anchor" href="#void-0"><span>void 0</span></a></h3><div class="bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400">void 0; 是什么意思</div><p>在 JavaScript 中，<code>void 0</code> 返回 <code>undefined</code>。这是因为 <code>void</code> 运算符会对其后面的表达式求值并返回 <code>undefined</code>。</p><p><strong>用途：</strong></p><ol><li>防止返回值： <ul><li>在某些上下文中使用 <code>void</code> 来确保一个表达式不返回任何值。</li></ul></li><li>安全地获取 <code>undefined</code>： <ul><li><code>void 0</code> 可以用来获取 <code>undefined</code> 值，而不用担心变量名 <code>undefined</code> 被重写（虽然现代 JavaScript 不推荐重写 undefined）。</li></ul></li><li>简洁性： <ul><li>在一些代码中，可以用 <code>void 0</code> 来代替 <code>undefined</code>，以避免变量被篡改的风险。</li></ul></li></ol><p>总的来说，<code>void 0</code> 是一种简洁、安全的方式来表示 <code>undefined</code>。</p>`,18),l=[c];function t(i,p){return a(),s("div",null,l)}const u=n(o,[["render",t],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/JavaScript/base/","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"逻辑或&空值合并","slug":"逻辑或-空值合并","link":"#逻辑或-空值合并","children":[]},{"level":3,"title":"获取对象的类型","slug":"获取对象的类型","link":"#获取对象的类型","children":[]},{"level":3,"title":"void 0","slug":"void-0","link":"#void-0","children":[]}],"git":{"updatedTime":1719930400000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"JavaScript/base/index.md","excerpt":"<h3>逻辑或&amp;空值合并</h3>\\n<div class=\\"bg-green-200 p-2 font-bold border-0 border-l-4 border-solid border-green-400\\">|| 和 ?? 有什么区别？</div>\\n<p>在 JavaScript 中，<code>||</code> 和 <code>??</code> 运算符的区别在于它们处理不同的假值：</p>\\n<ol>\\n<li><code>||</code> (逻辑或运算符):\\n<ul>\\n<li>返回第一个真值（truthy）操作数。</li>\\n<li>如果第一个操作数为假值（falsy，如 <code>0</code>、<code>\\"\\"</code>、<code>false</code>、<code>NaN</code>、<code>null</code>、<code>undefined</code>），则返回第二个操作数。</li>\\n</ul>\\n</li>\\n<li><code>??</code> (空值合并运算符):\\n<ul>\\n<li>仅在第一个操作数为 <code>null</code> 或 <code>undefined</code> 时返回第二个操作数。</li>\\n<li>不会对 <code>0</code>、<code>\\"\\"</code>、<code>false</code> 等其他假值触发。</li>\\n</ul>\\n</li>\\n</ol>"}');export{u as comp,r as data};
