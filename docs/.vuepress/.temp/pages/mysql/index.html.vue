<template><div><p><RouteLink to="/mysql/mysql%E6%9E%B6%E6%9E%84.html">mysql架构</RouteLink></p>
<h2 id="mysql语句的语法" tabindex="-1"><a class="header-anchor" href="#mysql语句的语法"><span>MySQL语句的语法</span></a></h2>
<ul>
<li><code v-pre>ALTER TABLE</code> 用来更新已存在表的模式。为了创建新表，应该使用 <code v-pre>CREATE TABLE</code>。</li>
<li><code v-pre>CREATE TABLE</code> 用于创建新数据库表。为更新已经存在的表的结构，使用ALTERTABLE。</li>
<li><code v-pre>COMMIT</code> 用来将事务处理写到数据库。</li>
<li><code v-pre>CREATE INDEX</code> 用于在一个或多个列上创建索引。</li>
<li><code v-pre>CREATE PROCEDURE</code> 用于创建存储过程。</li>
<li><code v-pre>CREATE USER</code> 用于向系统中添加新的用户账户</li>
<li><code v-pre>CREATE VIEW</code> 用来创建一个或多个表上的新视图。</li>
<li><code v-pre>DELETE</code> 从表中删除一行或多行。</li>
<li><code v-pre>DROP</code> 永久地删除数据库对象（表、视图、索引等）​。</li>
<li><code v-pre>INSERT</code> 给表增加一行</li>
<li><code v-pre>INSERT SELECT</code> 插入 SELECT 的结果到一个表。</li>
<li><code v-pre>ROLLBACK</code> 用于撤销一个事务处理块。</li>
<li><code v-pre>SAVEPOINT</code> 为使用 ROLLBACK 语句设立保留点。</li>
<li><code v-pre>SELECT</code> 用于从一个或多个表（视图）中检索数据。</li>
<li><code v-pre>START TRANSACTION</code> 表示一个新的事务处理块的开始。</li>
<li><code v-pre>UPDATE</code> 更新表中一行或多行。</li>
</ul>
<p><strong>20 个字符可以存储多少个中文文字，可以存储多少英文单词？</strong></p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token variable">$table</span><span class="token operator">-></span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'address_tag'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">comment</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'地址标签（如家庭、公司等）'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在数据库中，字符串长度的定义通常是基于字符数而不是字节数。但是，实际存储容量可能因数据库系统和字符编码而异。让我们分析一下 20 个字符的存储能力：</p>
<ol>
<li><strong>中文文字</strong>：
<ul>
<li>一般情况下，20 个字符可以存储 20 个中文字。</li>
<li>例如：&quot;这是一个二十个字符的中文地址标签示例&quot;</li>
</ul>
</li>
<li><strong>英文单词</strong>：
<ul>
<li>20 个字符可以存储多个英文单词，具体数量取决于单词长度和空格。</li>
<li>假设平均单词长度为 5 个字母，加上空格，大约可以存储 3-4 个英文单词。</li>
<li>例如：&quot;Home Office School&quot;（19 个字符）</li>
</ul>
</li>
</ol>
<p>考虑到地址标签通常比较简短，20 个字符对于大多数用例来说应该足够了。但如果您希望为用户提供更多灵活性，可以考虑增加字段长度，例如：<code v-pre>$table-&gt;string('address_tag', 50)-&gt;nullable()-&gt;comment('地址标签（如家庭、公司等）');</code></p>
<p>这样可以存储更长的标签，如 &quot;主要办公地点&quot; 或 &quot;周末度假屋&quot; 等。<br>
请记住，虽然增加字段长度会提供更多灵活性，但也会略微增加存储空间的使用。在实际应用中，您需要在灵活性和存储效率之间找到平衡。</p>
</div></template>


