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
</div></template>


