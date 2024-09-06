import{_ as n,c as s,o as a,d as e}from"./app-BXfijVfZ.js";const t={},o=e(`<h2 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束"><span>外键约束</span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;company_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;companies&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cascade&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cascade&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="foreign-、foreignulid" tabindex="-1"><a class="header-anchor" href="#foreign-、foreignulid"><span>foreign()、foreignUlid()</span></a></h3><p><code>$table-&gt;foreign()</code> 方法用于在数据库中创建外键约束。</p><p>这个方法的主要功能包括：</p><ol><li><strong>建立表间关系</strong>：它定义了当前表中的一个字段与另一个表中的字段之间的关系。</li><li><strong>确保数据完整性</strong>：通过外键约束，可以防止在子表中插入无效的数据。</li><li><strong>定义级联操作</strong>：可以指定当主表中的记录被<strong>更新或删除</strong>时，子表中相 关记录应该如何处理。</li></ol><p>具体到您的代码：</p><ol><li><code>foreign(&#39;company_id&#39;)</code>：将 <code>company_id</code> 字段设置为外键。</li><li><code>references(&#39;id&#39;)</code>：指定这个外键引用的是另一个表的 id 字段。</li><li><code>on(&#39;companies&#39;)</code>：指定被引用的表是 companies 表。</li><li><code>onDelete(&#39;cascade&#39;)</code>：当 companies 表中的记录被删除时，相关的 warehouses 记录也会被自动删除。</li><li><code>onUpdate(&#39;cascade&#39;)</code>：当 companies 表中的 id 更新时，warehouses 表中相应的 company_id 也会自动更新。</li></ol><p>总的来说，<code>$table-&gt;foreign()</code> 方法帮助我们在数据库层面建立和维护表之间的关系，确保数据的一致性和完整性。</p><h3 id="为空-不为空" tabindex="-1"><a class="header-anchor" href="#为空-不为空"><span>为空|不为空</span></a></h3><p>为了确保 <code>company_id</code> 字段不为空，您需要在定义外键之前添加 <code>unsignedBigInteger</code> 方法并使用 <code>nullable(false)</code> 或直接不使用 <code>nullable()</code>。以下是修改建议：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">unsignedBigInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;company_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 如果设置成 -&gt;nullable() 则表明该字段可为空</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;company_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;companies&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cascade&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cascade&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在主表记录被删除时，将外键设置为 null</strong></p><p>在主表（companies）的记录被删除时，将子表（warehouses）中对应的外键（company_id）设置为 null，而不是删除子表中的记录。这种操作称为&quot;SET NULL&quot;。 要实现这个需求，您需要做以下修改：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">unsignedBigInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;company_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;company_id&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-&gt;</span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-&gt;</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;companies&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">-&gt;</span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;set null&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的变化是：</p><ol><li>确保 company_id 字段允许为 null：<code>-&gt;nullable()</code></li><li>在外键定义中，将 <code>onDelete(&#39;cascade&#39;)</code> 改为 <code>onDelete(&#39;set null&#39;)</code></li><li>移除了 <code>onUpdate(&#39;cascade&#39;)</code>，因为通常不需要在更新时进行级联操作</li></ol><p>这样设置后，当 companies 表中的一条记录被删除时，warehouses 表中相关记录的 <code>company_id</code> 将被设置为 null，而不是删除整条记录。 请注意，这种设置要求 <code>company_id</code> 字段必须允许为 <code>null</code>，否则会导致数据库错误。如果您之前没有将 <code>company_id</code> 设置为可空，请确保添加 <code>-&gt;nullable()</code> 修饰符。</p><p>在 Laravel 中，<code>-&gt;onDelete(&#39;set null&#39;)</code> 确实有一个简写的方法。您可以使用 <code>-&gt;nullOnDelete()</code> 来代替。这是一个更简洁的语法糖，实现相同的功能。</p><p><strong>以上代码中的 cascade 是什么意思，他是 sql语句中的语法吗？</strong></p><p>是的，&quot;cascade&quot; 是 SQL 语句中的一个关键词，用于定义外键约束的行为。</p><p>生变化时，相关联的子表中的记录应该如何处理。 &quot;cascade&quot; 的含义是&quot;级联&quot;，主要用于以下两种情况： ON DELETE CASCADE：当主表中的记录被删除时，子表中所有关联的记录也会被自动删除。 ON UPDATE CASCADE：当主表中的主键被更新时，子表中所有关联记录的外键值也会自动更新。 在 SQL 中，这些约束可能看起来像这样：</p><h3 id="constrained" tabindex="-1"><a class="header-anchor" href="#constrained"><span>constrained()</span></a></h3><p><code>constrained()</code> 方法是 Laravel 迁移中的一个便捷方法，用于自动创建外键约束。它的作用如下：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreignUlid</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">constrained</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>自动推断被引用的表名： <ul><li>默认情况下，它会将字段名（在这个例子中是 <code>user_id</code>）转换为复数形式，并假设这就是被引用的表名（即 users）。</li></ul></li><li>自动推断被引用的列名： <ul><li>默认假设被引用的列是 id。</li></ul></li><li>创建外键约束： <ul><li>它会自动创建一个外键，将 <code>user_id</code> 关联到 <code>users</code> 表的 <code>id</code> 列。</li></ul></li></ol><p>所以，<code>$table-&gt;foreignId(&#39;user_id&#39;)-&gt;constrained()</code> 相当于：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">unsignedBigInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>constrained()</code> 的优点是代码更简洁，而且如果您遵循 Laravel 的命名约定，它可以自动处理大部分情况。 如果您需要指定不同的表名或列名，可以这样使用：<br><code>$table-&gt;foreignId(&#39;user_id&#39;)-&gt;constrained(&#39;customers&#39;, &#39;user_id&#39;);</code></p><p>这里 <code>constrained()</code> 方法的第一个参数是<strong>表名</strong>，第二个参数是<strong>列名</strong>。<br> 最后，<code>onDelete(&#39;cascade&#39;)</code> 指定了当关联的用户被删除时，相应的地址记录也会被删除。<br> 总的来说，<code>constrained()</code> 方法使得创建外键约束变得更加简单和符合惯例。</p><h3 id="foreign、foreignid、foreignulid-有什么区别" tabindex="-1"><a class="header-anchor" href="#foreign、foreignid、foreignulid-有什么区别"><span>foreign、foreignId、foreignUlid 有什么区别</span></a></h3><p><code>foreign</code>、<code>foreignId</code> 和 <code>foreignUlid</code> 这三个方法在 Laravel 的数据库迁移中用于创建外键关系，但它们有一些重要的区别：</p><ol><li><code>foreign()</code><ul><li>最基本的外键创建方法。</li><li>可以用于任何类型的列。</li><li>需要先创建列，然后再定义外键关系。</li></ul></li></ol><p>示例：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"> <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">unsignedBigInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>foreignId()</code><ul><li>创建一个 UNSIGNED BIGINT 类型的列，并准备将其作为外键。</li><li>默认情况下，假设引用的是另一个表的 id 列。</li><li>可以直接链接 <code>constrained()</code> 方法来简化外键定义。</li></ul></li></ol><p>示例：<code> $table-&gt;foreignId(&#39;user_id&#39;)-&gt;constrained();</code></p><ol start="3"><li><code>foreignUlid()</code><ul><li>创建一个 CHAR(26) 类型的列，用于存储 ULID（Universally Unique Lexicographically Sortable Identifier）。</li><li>ULID 是一种类似 UUID 的标识符，但可以按字典顺序排序。</li><li>适用于使用 ULID 作为主键的表。</li></ul></li></ol><p>示例：<code>$table-&gt;foreignUlid(&#39;user_id&#39;)-&gt;constrained();</code></p><p><strong>主要区别：</strong></p><ul><li><code>foreign()</code> 最灵活，可用于任何类型的外键列。</li><li><code>foreignId()</code> 专门用于整数类型的 ID，通常是自增主键。</li><li><code>foreignUlid()</code> 专门用于 ULID 类型的 ID，适用于使用 ULID 作为主键的情况。</li></ul><p><code>foreignId()</code> 和 <code>foreignUlid()</code> 都提供了更简洁的语法，并且可以直接链接 <code>constrained()</code> 方法，使得创建外键关系更加方便。选择使用哪种方法主要取决于您的主键类型和数据库设计。</p>`,42),p=[o];function i(l,c){return a(),s("div",null,p)}const d=n(t,[["render",i],["__file","migration.html.vue"]]),u=JSON.parse(`{"path":"/laravel/migration.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"外键约束","slug":"外键约束","link":"#外键约束","children":[{"level":3,"title":"foreign()、foreignUlid()","slug":"foreign-、foreignulid","link":"#foreign-、foreignulid","children":[]},{"level":3,"title":"为空|不为空","slug":"为空-不为空","link":"#为空-不为空","children":[]},{"level":3,"title":"constrained()","slug":"constrained","link":"#constrained","children":[]},{"level":3,"title":"foreign、foreignId、foreignUlid 有什么区别","slug":"foreign、foreignid、foreignulid-有什么区别","link":"#foreign、foreignid、foreignulid-有什么区别","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"laravel/migration.md","excerpt":"<h2>外键约束</h2>\\n<div class=\\"language-php\\" data-highlighter=\\"prismjs\\" data-ext=\\"php\\" data-title=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"line\\"><span class=\\"token variable\\">$table</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">foreign</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'company_id'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">references</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'id'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">on</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'companies'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">onDelete</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'cascade'</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">onUpdate</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'cascade'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}`);export{d as comp,u as data};
