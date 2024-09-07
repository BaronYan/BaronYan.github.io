<template><div><h1 id="migration-基础认知" tabindex="-1"><a class="header-anchor" href="#migration-基础认知"><span>migration 基础认知</span></a></h1>
<h2 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束"><span>外键约束</span></a></h2>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'companies'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="foreign-、foreignulid" tabindex="-1"><a class="header-anchor" href="#foreign-、foreignulid"><span>foreign()、foreignUlid()</span></a></h3>
<p><code v-pre>$table-&gt;foreign()</code> 方法用于在数据库中创建外键约束。</p>
<p>这个方法的主要功能包括：</p>
<ol>
<li><strong>建立表间关系</strong>：它定义了当前表中的一个字段与另一个表中的字段之间的关系。</li>
<li><strong>确保数据完整性</strong>：通过外键约束，可以防止在子表中插入无效的数据。</li>
<li><strong>定义级联操作</strong>：可以指定当主表中的记录被<strong>更新或删除</strong>时，子表中相关记录应该如何处理。</li>
</ol>
<p>具体到您的代码：</p>
<ol>
<li><code v-pre>foreign('company_id')</code>：将 <code v-pre>company_id</code> 字段设置为外键。</li>
<li><code v-pre>references('id')</code>：指定这个外键引用的是另一个表的 <code v-pre>id</code> 字段。</li>
<li><code v-pre>on('companies')</code>：指定被引用的表是 <code v-pre>companies</code> 表。</li>
<li><code v-pre>onDelete('cascade')</code>：当 <code v-pre>companies</code> 表中的记录被删除时，相关的 <code v-pre>warehouses</code> 记录也会被自动删除。</li>
<li><code v-pre>onUpdate('cascade')</code>：当 <code v-pre>companies</code> 表中的 <code v-pre>id</code> 更新时，<code v-pre>warehouses</code> 表中相应的 <code v-pre>company_id</code> 也会自动更新。</li>
</ol>
<p>总的来说，<code v-pre>$table-&gt;foreign()</code> 方法帮助我们在数据库层面建立和维护表之间的关系，确保数据的一致性和完整性。</p>
<h3 id="nullable-cascade" tabindex="-1"><a class="header-anchor" href="#nullable-cascade"><span>nullable &amp; cascade</span></a></h3>
<p>为了确保 <code v-pre>company_id</code> 字段不为空，您需要在定义外键之前添加 <code v-pre>unsignedBigInteger</code> 方法并使用 <code v-pre>nullable(false)</code> 或直接不使用 <code v-pre>nullable()</code>。以下是修改建议：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">unsignedBigInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 如果设置成 ->nullable() 则表明该字段可为空</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'companies'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在主表记录被删除时，将外键设置为 null</strong></p>
<p>在主表（companies）的记录被删除时，将子表（warehouses）中对应的外键（company_id）设置为 null，而不是删除子表中的记录。这种操作称为&quot;SET NULL&quot;。
要实现这个需求，您需要做以下修改：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">unsignedBigInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-></span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-></span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'companies'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-></span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'set null'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的变化是：</p>
<ol>
<li>确保 company_id 字段允许为 null：<code v-pre>-&gt;nullable()</code></li>
<li>在外键定义中，将 <code v-pre>onDelete('cascade')</code> 改为 <code v-pre>onDelete('set null')</code></li>
<li>移除了 <code v-pre>onUpdate('cascade')</code>，因为通常不需要在更新时进行级联操作</li>
</ol>
<p>这样设置后，当 companies 表中的一条记录被删除时，warehouses 表中相关记录的 <code v-pre>company_id</code> 将被设置为 null，而不是删除整条记录。
请注意，这种设置要求 <code v-pre>company_id</code> 字段必须允许为 <code v-pre>null</code>，否则会导致数据库错误。如果您之前没有将 <code v-pre>company_id</code> 设置为可空，请确保添加 <code v-pre>-&gt;nullable()</code> 修饰符。</p>
<p>在 Laravel 中，<code v-pre>-&gt;onDelete('set null')</code> 确实有一个简写的方法。您可以使用 <code v-pre>-&gt;nullOnDelete()</code> 来代替。这是一个更简洁的语法糖，实现相同的功能。</p>
<p><strong>以上代码中的 cascade 是什么意思，他是 sql语句中的语法吗？</strong></p>
<p>是的，&quot;cascade&quot; 是 SQL 语句中的一个关键词，用于定义外键约束的行为。生变化时，相关联的子表中的记录应该如何处理。</p>
<p>&quot;cascade&quot; 的含义是&quot;级联&quot;，主要用于以下两种情况：</p>
<ul>
<li><code v-pre>ON DELETE CASCADE</code>：当主表中的记录被删除时，子表中所有关联的记录也会被自动删除。</li>
<li><code v-pre>ON UPDATE CASCADE</code>：当主表中的主键被更新时，子表中所有关联记录的外键值也会自动更新。</li>
</ul>
<p>在 SQL 中，这些约束可能看起来像这样：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="line"><span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>company_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> companies<span class="token punctuation">(</span>id<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> </span>
<span class="line"><span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Laravel 的迁移文件中，这些 SQL 概念被封装成了更易读的方法：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-></span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-></span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'companies'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-></span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-></span><span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;cascade&quot; 只是可能的选项之一。其他常见选项包括：</p>
<ul>
<li><code v-pre>SET NULL</code>：将外键设置为 NULL（在 Laravel 中可以用 <code v-pre>nullOnDelete()</code> 简写）</li>
<li><code v-pre>RESTRICT</code>：阻止删除或更新主表中的记录（这通常是默认行为）</li>
<li><code v-pre>NO ACTION</code>：类似于 <code v-pre>RESTRICT</code>，但检查是在事务结束时进行的</li>
</ul>
<p>选择哪种方式取决于您的具体业务需求和数据完整性要求。</p>
<h3 id="constrained" tabindex="-1"><a class="header-anchor" href="#constrained"><span>constrained()</span></a></h3>
<p><code v-pre>constrained()</code> 方法是 Laravel 迁移中的一个便捷方法，用于自动创建外键约束。它的作用如下：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">foreignUlid</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'user_id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">constrained</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li>自动推断被引用的表名：
<ul>
<li>默认情况下，它会将字段名（在这个例子中是 <code v-pre>user_id</code>）转换为复数形式，并假设这就是被引用的表名（即 users）。</li>
</ul>
</li>
<li>自动推断被引用的列名：
<ul>
<li>默认假设被引用的列是 id。</li>
</ul>
</li>
<li>创建外键约束：
<ul>
<li>它会自动创建一个外键，将 <code v-pre>user_id</code> 关联到 <code v-pre>users</code> 表的 <code v-pre>id</code> 列。</li>
</ul>
</li>
</ol>
<p>所以，<code v-pre>$table-&gt;foreignId('user_id')-&gt;constrained()</code> 相当于：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">unsignedBigInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'user_id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'user_id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'users'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>constrained()</code> 的优点是代码更简洁，而且如果您遵循 Laravel 的命名约定，它可以自动处理大部分情况。
如果您需要指定不同的表名或列名，可以这样使用：<br>
<code v-pre>$table-&gt;foreignId('user_id')-&gt;constrained('customers', 'user_id');</code></p>
<p>这里 <code v-pre>constrained()</code> 方法的第一个参数是<strong>表名</strong>，第二个参数是<strong>列名</strong>。<br>
最后，<code v-pre>onDelete('cascade')</code> 指定了当关联的用户被删除时，相应的地址记录也会被删除。<br>
总的来说，<code v-pre>constrained()</code> 方法使得创建外键约束变得更加简单和符合惯例。</p>
<h3 id="foreign、foreignid、foreignulid-有什么区别" tabindex="-1"><a class="header-anchor" href="#foreign、foreignid、foreignulid-有什么区别"><span>foreign、foreignId、foreignUlid 有什么区别</span></a></h3>
<p><code v-pre>foreign</code>、<code v-pre>foreignId</code> 和 <code v-pre>foreignUlid</code> 这三个方法在 Laravel 的数据库迁移中用于创建外键关系，但它们有一些重要的区别：</p>
<ol>
<li><code v-pre>foreign()</code>
<ul>
<li>最基本的外键创建方法。</li>
<li>可以用于任何类型的列。</li>
<li>需要先创建列，然后再定义外键关系。</li>
</ul>
</li>
</ol>
<p>示例：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"> <span class="token variable">$table</span><span class="token operator">-></span><span class="token function">unsignedBigInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'user_id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'user_id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'users'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>foreignId()</code>
<ul>
<li>创建一个 UNSIGNED BIGINT 类型的列，并准备将其作为外键。</li>
<li>默认情况下，假设引用的是另一个表的 id 列。</li>
<li>可以直接链接 <code v-pre>constrained()</code> 方法来简化外键定义。</li>
</ul>
</li>
</ol>
<p>示例：<code v-pre> $table-&gt;foreignId('user_id')-&gt;constrained();</code></p>
<ol start="3">
<li><code v-pre>foreignUlid()</code>
<ul>
<li>创建一个 CHAR(26) 类型的列，用于存储 ULID（Universally Unique Lexicographically Sortable Identifier）。</li>
<li>ULID 是一种类似 UUID 的标识符，但可以按字典顺序排序。</li>
<li>适用于使用 ULID 作为主键的表。</li>
</ul>
</li>
</ol>
<p>示例：<code v-pre>$table-&gt;foreignUlid('user_id')-&gt;constrained();</code></p>
<p><strong>主要区别：</strong></p>
<ul>
<li><code v-pre>foreign()</code> 最灵活，可用于任何类型的外键列。</li>
<li><code v-pre>foreignId()</code> 专门用于整数类型的 ID，通常是自增主键。</li>
<li><code v-pre>foreignUlid()</code> 专门用于 ULID 类型的 ID，适用于使用 ULID 作为主键的情况。</li>
</ul>
<p><code v-pre>foreignId()</code> 和 <code v-pre>foreignUlid()</code> 都提供了更简洁的语法，并且可以直接链接 <code v-pre>constrained()</code> 方法，使得创建外键关系更加方便。选择使用哪种方法主要取决于您的主键类型和数据库设计。</p>
<h2 id="联合主键" tabindex="-1"><a class="header-anchor" href="#联合主键"><span>联合主键</span></a></h2>
<p>Eloquent 要求每个模型至少有一个唯一标识“ID”，可用作其主键。
Eloquent 模型不支持“复合”主键。
但是，除了表的唯一标识主键之外，您还可以自由地向数据库表添加其他多列唯一索引。</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token comment">// 添加了 company_id 外键</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">foreignId</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">constrained</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建联合主键</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 确保每个公司内的 email 唯一</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'email'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 确保每个公司内的 code 唯一</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'code'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码确保了</p>
<ul>
<li>每个用户都属于一个公司。</li>
<li>用户的 ID 和公司 ID 共同构成主键。</li>
<li>在同一公司内，email 和 code 都是唯一的。</li>
<li>当公司被删除时，该公司的所有用户也会被删除（通过 <code v-pre>onDelete('cascade')</code>）。</li>
</ul>
<p>请注意，这种设计假设一个用户只能属于一个公司。如果您需要允许用户属于多个公司，那么您可能需要考虑创建一个单独的 <code v-pre>company_user</code> 关联表。
另外，由于我们使用了联合主键，您可能需要调整一些 Eloquent 模型的设置，例如在 User 模型中：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$primaryKey</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token variable">$incrementing</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$keyType</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'string'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的设置确保了 Eloquent 能正确处理复合主键。</p>
<h3 id="主键" tabindex="-1"><a class="header-anchor" href="#主键"><span>主键</span></a></h3>
<p>Eloquent 还会假定每个模型对应的数据库表都有一个名为 <code v-pre>id</code> 的主键列。</p>
<ul>
<li>如有必要，你可以在模型上定义一个受保护的 <code v-pre>$primaryKey</code> 属性，以指定作为模型主键的不同列</li>
<li>此外，Eloquent 假定主键是一个递增的整数值，这意味着 Eloquent 会自动将主键转换为整数。</li>
<li>如果您希望使用非递增或非数字主键，则必须在模型上定义一个公共属性 <code v-pre>$incrementing</code>，并将其设置为 <code v-pre>false</code>：<code v-pre>public $incrementing = false;</code></li>
<li>如果模型的主键不是整数，则应在模型上定义受保护的 <code v-pre>$keyType</code> 属性。此属性应具有以下值：<code v-pre>string</code></li>
</ul>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token keyword">protected</span> <span class="token variable">$primaryKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'flight_id'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">protected</span> <span class="token variable">$primaryKey</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'company_id'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


