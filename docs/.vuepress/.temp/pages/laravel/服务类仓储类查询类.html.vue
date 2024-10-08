<template><div><h1 id="服务类-仓库类-查询类-这些类之间的逻辑关系" tabindex="-1"><a class="header-anchor" href="#服务类-仓库类-查询类-这些类之间的逻辑关系"><span>服务类 仓库类 查询类 这些类之间的逻辑关系</span></a></h1>
<p>服务类、仓库类和查询类之间的逻辑关系是一种分层架构,每一层都有其特定的职责。让我为您详细解释它们之间的关系:</p>
<ol>
<li><strong>仓库类 (Repository)</strong>:
<ul>
<li>主要职责是处理数据持久化逻辑。</li>
<li>直接与数据库或其他数据存储交互。</li>
<li>提供基本的CRUD(创建、读取、更新、删除)操作。</li>
<li>封装复杂的数据库查询。</li>
<li>示例: CompanyRepository</li>
</ul>
</li>
<li><strong>查询类 (Query)</strong>:
<ul>
<li>专注于构建复杂的数据库查询。</li>
<li>通常用于封装特定的、可重用的查询逻辑。</li>
<li>可以被仓库类使用,也可以直接被服务类使用。</li>
<li>示例: CompanyQuery</li>
</ul>
</li>
<li><strong>服务类 (Service)</strong>:
<ul>
<li>包含业务逻辑。</li>
<li>协调多个仓库或查询类的操作。</li>
<li>处理跨越多个领域的复杂操作。</li>
<li>可以调用仓库类和查询类。</li>
<li>示例: CompanyService</li>
</ul>
</li>
</ol>
<h2 id="逻辑关系" tabindex="-1"><a class="header-anchor" href="#逻辑关系"><span>逻辑关系:</span></a></h2>
<ol>
<li>控制器 -&gt; 服务类:
<ul>
<li>控制器通常调用服务类来处理请求。服务类封装了业务逻辑,使控制器保持简洁。</li>
</ul>
</li>
<li>服务类 -&gt; 仓库类:
<ul>
<li>服务类使用仓库类来获取或操作数据。这允许服务类专注于业务逻辑,而不是数据访问细节。</li>
</ul>
</li>
<li>服务类 -&gt; 查询类:
<ul>
<li>对于复杂的查询,服务类可能直接使用查询类,特别是当查询逻辑不适合放在仓库类中时。</li>
</ul>
</li>
<li>仓库类 -&gt; 查询类:
<ul>
<li>仓库类可能使用查询类来构建复杂的查询。这有助于保持仓库类的简洁和专注。</li>
</ul>
</li>
<li>查询类 -&gt; 模型:
<ul>
<li>查询类通常直接操作Eloquent模型来构建查询。</li>
</ul>
</li>
</ol>
<p>一个典型的数据流可能如下:</p>
<p>控制器 -&gt; 服务类 -&gt; 仓库类 -&gt; 查询类 -&gt; 模型 -&gt; 数据库</p>
<p>示例:</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CompanyController</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">CompanyService</span> <span class="token variable">$service</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$service</span><span class="token operator">-></span><span class="token function">getFilteredCompanies</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-></span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CompanyService</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getFilteredCompanies</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$filters</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">repository</span><span class="token operator">-></span><span class="token function">getFiltered</span><span class="token punctuation">(</span><span class="token variable">$filters</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CompanyRepository</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getFiltered</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$filters</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name static-context">CompanyQuery</span><span class="token operator">::</span><span class="token function">applyFilters</span><span class="token punctuation">(</span><span class="token variable">$filters</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CompanyQuery</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">applyFilters</span><span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$filters</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 应用过滤逻辑</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$query</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>种分层架构提供了几个好处:</p>
<ol>
<li>关注点分离: 每个类都有明确的职责。</li>
<li>可测试性: 每一层都可以独立测试。</li>
<li>可维护性: 修改一层的逻辑不会影响其他层。</li>
<li>可重用性: 查询类和仓库类可以在多个服务类中重用。</li>
</ol>
<p>根据项目的复杂度,您可能不需要所有这些层。对于简单的项目,可能只需要仓库类或服务类就足够了。随着项目的增长,您可以逐步引入更多的层来管理复杂性。</p>
</div></template>


