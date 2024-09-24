import{_ as n,c as s,o as a,d as e}from"./app-CJMzYWoP.js";const p={},t=e(`<h1 id="什么是多态关系" tabindex="-1"><a class="header-anchor" href="#什么是多态关系"><span>什么是多态关系？</span></a></h1><p>在 Laravel 中，<code>$table-&gt;morphs(&#39;tokenable&#39;)</code> 是一种快捷方法，用于创建多态关系的字段。 具体来说，它会在数据库表中创建两个字段：<code>tokenable_id</code> 和 <code>tokenable_type</code>，用于存储多态关系的 ID 和类型。</p><h2 id="多态关系简介" tabindex="-1"><a class="header-anchor" href="#多态关系简介"><span>多态关系简介</span></a></h2><p>多态关系允许一个模型在单个关联中属于多个其他模型。</p><p>例如，一个 Comment 模型可以属于 Post 模型或 Video 模型。通过多态关系，可以在同一个表中存储不同类型的关联。</p><h2 id="morphs-方法" tabindex="-1"><a class="header-anchor" href="#morphs-方法"><span>morphs 方法</span></a></h2><p><code>$table-&gt;morphs(&#39;tokenable&#39;)</code> 是 Blueprint 类中的一个方法，用于创建多态关系所需的字段。它会创建以下两个字段：</p><ol><li><code>tokenable_id</code>：存储关联模型的 ID。</li><li><code>tokenable_type</code>：存储关联模型的类名。</li></ol><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>在你的迁移文件中，<code>$table-&gt;morphs(&#39;tokenable&#39;)</code> 用于创建 <code>personal_access_tokens</code> 表的多态关系字段。</p><p>以下是一个完整的示例：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>Migration</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>Blueprint</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Schema</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">extends</span> <span class="token class-name">Migration</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Run the migrations.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;personal_access_tokens&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">morphs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;tokenable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建 tokenable_id 和 tokenable_type 字段</span></span>
<span class="line">            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;token&#39;</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;abilities&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamp</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;last_used_at&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamp</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;expires_at&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Reverse the migrations.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">dropIfExists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;personal_access_tokens&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用多态关系" tabindex="-1"><a class="header-anchor" href="#使用多态关系"><span>使用多态关系</span></a></h2><p>在模型中，可以使用 morphTo 方法定义多态关系。例如：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">PersonalAccessToken</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">tokenable</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">morphTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，<code>PersonalAccessToken</code> 模型就可以与多个不同类型的模型建立关联。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结：</span></a></h2><p><code>$table-&gt;morphs(&#39;tokenable&#39;)</code> 创建多态关系所需的字段。 它会生成 <code>tokenable_id</code> 和 <code>tokenable_type</code> 字段，用于存储关联模型的 ID 和类型。</p>`,18),l=[t];function c(o,i){return a(),s("div",null,l)}const r=n(p,[["render",c],["__file","多态.html.vue"]]),d=JSON.parse(`{"path":"/laravel/%E5%A4%9A%E6%80%81.html","title":"什么是多态关系？","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"多态关系简介","slug":"多态关系简介","link":"#多态关系简介","children":[]},{"level":2,"title":"morphs 方法","slug":"morphs-方法","link":"#morphs-方法","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"使用多态关系","slug":"使用多态关系","link":"#使用多态关系","children":[]},{"level":2,"title":"总结：","slug":"总结","link":"#总结","children":[]}],"git":{"updatedTime":1727187215000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"laravel/多态.md","excerpt":"\\n<p>在 Laravel 中，<code>$table-&gt;morphs('tokenable')</code> 是一种快捷方法，用于创建多态关系的字段。\\n具体来说，它会在数据库表中创建两个字段：<code>tokenable_id</code> 和 <code>tokenable_type</code>，用于存储多态关系的 ID 和类型。</p>\\n<h2>多态关系简介</h2>\\n<p>多态关系允许一个模型在单个关联中属于多个其他模型。</p>\\n<p>例如，一个 Comment 模型可以属于 Post 模型或 Video 模型。通过多态关系，可以在同一个表中存储不同类型的关联。</p>\\n"}`);export{r as comp,d as data};
