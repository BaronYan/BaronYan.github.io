

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
