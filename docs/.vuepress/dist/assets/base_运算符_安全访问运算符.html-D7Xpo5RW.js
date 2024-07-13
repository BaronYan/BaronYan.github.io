import{_ as s,c as n,o as a,e}from"./app-BDRY8CIz.js";const p={},l=e(`<h2 id="全访问运算符" tabindex="-1"><a class="header-anchor" href="#全访问运算符"><span>全访问运算符</span></a></h2><p>PHP 中的安全访问运算符（Nullsafe Operator）是 PHP 8.0 引入的一个新特性，用于处理链式调用中的空值（null）问题。</p><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3><p><strong>安全访问运算符</strong>（<code>?-&gt;</code>）允许你在调用对象方法或访问对象属性时， 安全地处理可能为 <code>null</code> 的对象。 在链式调用中，如果某个对象为 <code>null</code>，安全访问运算符会直接返回 <code>null</code>，而不会引发错误。这简化了代码的编写，减少了显式的 <code>null</code> 检查。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$variable</span><span class="token operator">?-&gt;</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$variable</span><span class="token operator">?-&gt;</span><span class="token property">property</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理"><span>工作原理</span></a></h3><p>当使用安全访问运算符时：</p><ul><li>如果 <code>$variable</code> 是一个对象，调用其方法或访问其属性。</li><li>如果 <code>$variable</code> 是 null，整个表达式返回 null，而不会产生错误。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;John Doe&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">?-&gt;</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: John Doe</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">?-&gt;</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: (null)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Address</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;New York&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">?-&gt;</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?-&gt;</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: New York</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">?-&gt;</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?-&gt;</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: (null)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token variable">$profile</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">Profile</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">profile</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">?-&gt;</span><span class="token property">profile</span><span class="token operator">?-&gt;</span><span class="token property">age</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 30</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">profile</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">?-&gt;</span><span class="token property">profile</span><span class="token operator">?-&gt;</span><span class="token property">age</span><span class="token punctuation">;</span> <span class="token comment">// 输出: (null)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3><p>安全访问运算符非常适用于以下情况：</p><ul><li>避免嵌套 <code>null</code> 检查：在调用链中，如果每个对象或属性都可能为 <code>null</code>，使用安全访问运算符可以简化代码，避免嵌套的 if 语句。</li><li>增强代码可读性：通过减少显式的 null 检查，代码变得更加简洁和可读。</li></ul><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token comment">// Without nullsafe operator</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span> <span class="token operator">!==</span> <span class="token constant">null</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token constant">null</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// With nullsafe operator</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">?-&gt;</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?-&gt;</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ol><li><strong>只适用于对象</strong>：安全访问运算符只能用于对象。对于数组或其他类型的数据，仍需使用传统的 null 检查方法。</li><li><strong>慎用过度</strong>：虽然安全访问运算符简化了 null 检查，但在设计对象时，仍应尽量保证对象的完整性和一致性，避免过度依赖安全访问运算符。</li></ol><p>通过安全访问运算符，PHP 进一步增强了对空值的处理能力，使代码更加简洁和健壮。</p>`,18),t=[l];function c(o,i){return a(),n("div",null,t)}const r=s(p,[["render",c],["__file","base_运算符_安全访问运算符.html.vue"]]),d=JSON.parse('{"path":"/php/base_%E8%BF%90%E7%AE%97%E7%AC%A6_%E5%AE%89%E5%85%A8%E8%AE%BF%E9%97%AE%E8%BF%90%E7%AE%97%E7%AC%A6.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"全访问运算符","slug":"全访问运算符","link":"#全访问运算符","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"php/base_运算符_安全访问运算符.md","excerpt":"<h2>全访问运算符</h2>\\n<p>PHP 中的安全访问运算符（Nullsafe Operator）是 PHP 8.0 引入的一个新特性，用于处理链式调用中的空值（null）问题。</p>\\n<h3>介绍</h3>\\n<p><strong>安全访问运算符</strong>（<code>?-&gt;</code>）允许你在调用对象方法或访问对象属性时，\\n安全地处理可能为 <code>null</code> 的对象。\\n在链式调用中，如果某个对象为 <code>null</code>，安全访问运算符会直接返回 <code>null</code>，而不会引发错误。这简化了代码的编写，减少了显式的 <code>null</code> 检查。</p>"}');export{r as comp,d as data};
