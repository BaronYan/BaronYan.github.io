

[mysql架构](./mysql架构.md)




## MySQL语句的语法

- `ALTER TABLE` 用来更新已存在表的模式。为了创建新表，应该使用 `CREATE TABLE`。
- `CREATE TABLE` 用于创建新数据库表。为更新已经存在的表的结构，使用ALTERTABLE。
- `COMMIT` 用来将事务处理写到数据库。
- `CREATE INDEX` 用于在一个或多个列上创建索引。
- `CREATE PROCEDURE` 用于创建存储过程。
- `CREATE USER` 用于向系统中添加新的用户账户
- `CREATE VIEW` 用来创建一个或多个表上的新视图。
- `DELETE` 从表中删除一行或多行。
- `DROP` 永久地删除数据库对象（表、视图、索引等）​。
- `INSERT` 给表增加一行
- `INSERT SELECT` 插入 SELECT 的结果到一个表。
- `ROLLBACK` 用于撤销一个事务处理块。
- `SAVEPOINT` 为使用 ROLLBACK 语句设立保留点。
- `SELECT` 用于从一个或多个表（视图）中检索数据。
- `START TRANSACTION` 表示一个新的事务处理块的开始。
- `UPDATE` 更新表中一行或多行。


**20 个字符可以存储多少个中文文字，可以存储多少英文单词？**

```php
$table->string('address_tag', 20)->nullable()->comment('地址标签（如家庭、公司等）');
```
在数据库中，字符串长度的定义通常是基于字符数而不是字节数。但是，实际存储容量可能因数据库系统和字符编码而异。让我们分析一下 20 个字符的存储能力：

1. **中文文字**：
   - 一般情况下，20 个字符可以存储 20 个中文字。
   - 例如："这是一个二十个字符的中文地址标签示例"
2. **英文单词**：
   - 20 个字符可以存储多个英文单词，具体数量取决于单词长度和空格。
   - 假设平均单词长度为 5 个字母，加上空格，大约可以存储 3-4 个英文单词。
   - 例如："Home Office School"（19 个字符）

考虑到地址标签通常比较简短，20 个字符对于大多数用例来说应该足够了。但如果您希望为用户提供更多灵活性，可以考虑增加字段长度，例如：`$table->string('address_tag', 50)->nullable()->comment('地址标签（如家庭、公司等）');`

这样可以存储更长的标签，如 "主要办公地点" 或 "周末度假屋" 等。  
请记住，虽然增加字段长度会提供更多灵活性，但也会略微增加存储空间的使用。在实际应用中，您需要在灵活性和存储效率之间找到平衡。