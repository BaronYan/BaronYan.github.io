
## 外键约束

```php
$table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
```

### foreign()、foreignUlid()

`$table->foreign()` 方法用于在数据库中创建外键约束。

这个方法的主要功能包括：
1. **建立表间关系**：它定义了当前表中的一个字段与另一个表中的字段之间的关系。
2. **确保数据完整性**：通过外键约束，可以防止在子表中插入无效的数据。
3. **定义级联操作**：可以指定当主表中的记录被**更新或删除**时，子表中相 关记录应该如何处理。

具体到您的代码：
1. `foreign('company_id')`：将 `company_id` 字段设置为外键。
2. `references('id')`：指定这个外键引用的是另一个表的 id 字段。
3. `on('companies')`：指定被引用的表是 companies 表。
4. `onDelete('cascade')`：当 companies 表中的记录被删除时，相关的 warehouses 记录也会被自动删除。
5. `onUpdate('cascade')`：当 companies 表中的 id 更新时，warehouses 表中相应的 company_id 也会自动更新。

总的来说，`$table->foreign()` 方法帮助我们在数据库层面建立和维护表之间的关系，确保数据的一致性和完整性。

### 为空|不为空

为了确保 `company_id` 字段不为空，您需要在定义外键之前添加 `unsignedBigInteger` 方法并使用 `nullable(false)` 或直接不使用 `nullable()`。以下是修改建议：

```php
$table->unsignedBigInteger('company_id')->nullable(false);// 如果设置成 ->nullable() 则表明该字段可为空
$table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
```

**在主表记录被删除时，将外键设置为 null**

在主表（companies）的记录被删除时，将子表（warehouses）中对应的外键（company_id）设置为 null，而不是删除子表中的记录。这种操作称为"SET NULL"。
要实现这个需求，您需要做以下修改：

```php
$table->unsignedBigInteger('company_id')->nullable();
$table->foreign('company_id')
    ->references('id')
    ->on('companies')
    ->onDelete('set null');
```

这里的变化是：
1. 确保 company_id 字段允许为 null：`->nullable()`
2. 在外键定义中，将 `onDelete('cascade')` 改为 `onDelete('set null')`
3. 移除了 `onUpdate('cascade')`，因为通常不需要在更新时进行级联操作

这样设置后，当 companies 表中的一条记录被删除时，warehouses 表中相关记录的 `company_id` 将被设置为 null，而不是删除整条记录。
请注意，这种设置要求 `company_id` 字段必须允许为 `null`，否则会导致数据库错误。如果您之前没有将 `company_id` 设置为可空，请确保添加 `->nullable()` 修饰符。

在 Laravel 中，`->onDelete('set null')` 确实有一个简写的方法。您可以使用 `->nullOnDelete()` 来代替。这是一个更简洁的语法糖，实现相同的功能。

**以上代码中的 cascade 是什么意思，他是 sql语句中的语法吗？**

是的，"cascade" 是 SQL 语句中的一个关键词，用于定义外键约束的行为。

生变化时，相关联的子表中的记录应该如何处理。
"cascade" 的含义是"级联"，主要用于以下两种情况：
ON DELETE CASCADE：当主表中的记录被删除时，子表中所有关联的记录也会被自动删除。
ON UPDATE CASCADE：当主表中的主键被更新时，子表中所有关联记录的外键值也会自动更新。
在 SQL 中，这些约束可能看起来像这样：



### constrained()

`constrained()` 方法是 Laravel 迁移中的一个便捷方法，用于自动创建外键约束。它的作用如下：

```php
$table->foreignUlid('user_id')->constrained();
```

1. 自动推断被引用的表名：
   - 默认情况下，它会将字段名（在这个例子中是 `user_id`）转换为复数形式，并假设这就是被引用的表名（即 users）。
2. 自动推断被引用的列名：
   - 默认假设被引用的列是 id。
3. 创建外键约束：
   - 它会自动创建一个外键，将 `user_id` 关联到 `users` 表的 `id` 列。

所以，`$table->foreignId('user_id')->constrained()` 相当于：
```php
$table->unsignedBigInteger('user_id');
$table->foreign('user_id')->references('id')->on('users');
```
使用 `constrained()` 的优点是代码更简洁，而且如果您遵循 Laravel 的命名约定，它可以自动处理大部分情况。
如果您需要指定不同的表名或列名，可以这样使用：  
`$table->foreignId('user_id')->constrained('customers', 'user_id');`

这里 `constrained()` 方法的第一个参数是**表名**，第二个参数是**列名**。  
最后，`onDelete('cascade')` 指定了当关联的用户被删除时，相应的地址记录也会被删除。  
总的来说，`constrained()` 方法使得创建外键约束变得更加简单和符合惯例。

### foreign、foreignId、foreignUlid 有什么区别

`foreign`、`foreignId` 和 `foreignUlid` 这三个方法在 Laravel 的数据库迁移中用于创建外键关系，但它们有一些重要的区别：

1. `foreign()`
   - 最基本的外键创建方法。
   - 可以用于任何类型的列。
   - 需要先创建列，然后再定义外键关系。

示例：
```php
 $table->unsignedBigInteger('user_id');
$table->foreign('user_id')->references('id')->on('users');
```
2. `foreignId()`
    - 创建一个 UNSIGNED BIGINT 类型的列，并准备将其作为外键。
    - 默认情况下，假设引用的是另一个表的 id 列。
    - 可以直接链接 `constrained()` 方法来简化外键定义。

示例：` $table->foreignId('user_id')->constrained();`

3. `foreignUlid()`
    - 创建一个 CHAR(26) 类型的列，用于存储 ULID（Universally Unique Lexicographically Sortable Identifier）。
    - ULID 是一种类似 UUID 的标识符，但可以按字典顺序排序。
    - 适用于使用 ULID 作为主键的表。

示例：`$table->foreignUlid('user_id')->constrained();`

**主要区别：**

- `foreign()` 最灵活，可用于任何类型的外键列。
- `foreignId()` 专门用于整数类型的 ID，通常是自增主键。
- `foreignUlid()` 专门用于 ULID 类型的 ID，适用于使用 ULID 作为主键的情况。


`foreignId()` 和 `foreignUlid()` 都提供了更简洁的语法，并且可以直接链接 `constrained()` 方法，使得创建外键关系更加方便。选择使用哪种方法主要取决于您的主键类型和数据库设计。