
# migration 基础认知

## 外键约束
Laravel 还支持创建外键约束，用于在数据库级别强制引用完整性。

```php
$table->unsignedBigInteger('user_id');
$table->foreign('user_id')->references('id')->on('users');
```
由于此语法相当冗长，Laravel 提供了额外的、更简洁的方法，这些方法使用约定来提供更好的开发人员体验。  
使用 `foreignId` 方法创建列时，上面的示例可以重写如下：
```php
$table->foreignId('user_id')->constrained();
```
- `foreignId` 方法会创建一个`UNSIGNED BIGINT` 等效列，
- 同时 `constrained` 方法会使用约定来确定所引用的表和列。
  - 如果您的表名与 Laravel 的约定不符，您可以手动将其提供给该constrained方法。
  - 此外，还可以指定应分配给生成的索引的名称：
```php
$table->foreignId('user_id')->constrained(
    table: 'users', indexName: 'posts_user_id'
);
```
还可以为约束的“删除时”和“更新时”属性指定所需的操作：
```php
$table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
```
对于这些操作，还提供了一种替代的、富有表现力的语法：
- `$table->cascadeOnUpdate();`	更新应级联。
- `$table->restrictOnUpdate();`	应该限制​​更新。
- `$table->noActionOnUpdate();`	未对更新采取任何行动。
- `$table->cascadeOnDelete();`	删除应该级联。
- `$table->restrictOnDelete();`	删除应该受到限制。
- `$table->nullOnDelete();`	删除时应将外键值设置为空。

任何附加的列修饰符都必须在`constrained()`方法之前调用：  
`$table->foreignId('user_id')->nullable()->constrained();`


```php
$table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
```

### foreign()

`$table->foreign()` 方法用于在数据库中创建外键约束。

这个方法的主要功能包括：
1. **建立表间关系**：它定义了当前表中的一个字段与另一个表中的字段之间的关系。
2. **确保数据完整性**：通过外键约束，可以防止在子表中插入无效的数据。
3. **定义级联操作**：可以指定当主表中的记录被**更新或删除**时，子表中相关记录应该如何处理。

具体到您的代码：
1. `foreign('company_id')`：将 `company_id` 字段设置为外键。
2. `references('id')`：指定这个外键引用的是另一个表的 `id` 字段。
3. `on('companies')`：指定被引用的表是 `companies` 表。
4. `onDelete('cascade')`：当 `companies` 表中的记录被删除时，相关的 `warehouses` 记录也会被自动删除。
5. `onUpdate('cascade')`：当 `companies` 表中的 `id` 更新时，`warehouses` 表中相应的 `company_id` 也会自动更新。

总的来说，`$table->foreign()` 方法帮助我们在数据库层面建立和维护表之间的关系，确保数据的一致性和完整性。

### 外键可空

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

### nullOnDelete()
在 Laravel 中，`->onDelete('set null')` 确实有一个简写的方法。您可以使用 `->nullOnDelete()` 来代替。这是一个更简洁的语法糖，实现相同的功能。

### cascade
**以上代码中的 cascade 是什么意思，他是 sql语句中的语法吗？**

是的，"cascade" 是 SQL 语句中的一个关键词，用于定义外键约束的行为。生变化时，相关联的子表中的记录应该如何处理。

"cascade" 的含义是"级联"，主要用于以下两种情况：

- `ON DELETE CASCADE`：当主表中的记录被删除时，子表中所有关联的记录也会被自动删除。
- `ON UPDATE CASCADE`：当主表中的主键被更新时，子表中所有关联记录的外键值也会自动更新。

在 SQL 中，这些约束可能看起来像这样：

```sql
FOREIGN KEY (company_id) REFERENCES companies(id) 
ON DELETE CASCADE 
ON UPDATE CASCADE
```

在 Laravel 的迁移文件中，这些 SQL 概念被封装成了更易读的方法：

```php
$table->foreign('company_id')
    ->references('id')
    ->on('companies')
    ->onDelete('cascade')
    ->onUpdate('cascade');
```

"cascade" 只是可能的选项之一。其他常见选项包括：

- `SET NULL`：将外键设置为 NULL（在 Laravel 中可以用 `nullOnDelete()` 简写）
- `RESTRICT`：阻止删除或更新主表中的记录（这通常是默认行为）
- `NO ACTION`：类似于 `RESTRICT`，但检查是在事务结束时进行的

选择哪种方式取决于您的具体业务需求和数据完整性要求。

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


## 联合主键

Eloquent 要求每个模型至少有一个唯一标识“ID”，可用作其主键。
Eloquent 模型不支持“复合”主键。
但是，除了表的唯一标识主键之外，您还可以自由地向数据库表添加其他多列唯一索引。

```php
// 添加了 company_id 外键
$table->foreignId('company_id')->constrained()->onDelete('cascade');

// 创建联合主键
$table->primary(['id', 'company_id']);

// 确保每个公司内的 email 唯一
$table->unique(['company_id', 'email']);

// 确保每个公司内的 code 唯一
$table->unique(['company_id', 'code']);
```
以上代码确保了
- 每个用户都属于一个公司。
- 用户的 ID 和公司 ID 共同构成主键。
- 在同一公司内，email 和 code 都是唯一的。
- 当公司被删除时，该公司的所有用户也会被删除（通过 `onDelete('cascade')`）。

请注意，这种设计假设一个用户只能属于一个公司。如果您需要允许用户属于多个公司，那么您可能需要考虑创建一个单独的 `company_user` 关联表。
另外，由于我们使用了联合主键，您可能需要调整一些 Eloquent 模型的设置，例如在 User 模型中：

```php
class User extends Model
{
    protected $primaryKey = ['id', 'company_id'];
    public $incrementing = false;
    protected $keyType = 'string';
}
```
这样的设置确保了 Eloquent 能正确处理复合主键。

### 主键

Eloquent 还会假定每个模型对应的数据库表都有一个名为 `id` 的主键列。
- 如有必要，你可以在模型上定义一个受保护的 `$primaryKey` 属性，以指定作为模型主键的不同列
- 此外，Eloquent 假定主键是一个递增的整数值，这意味着 Eloquent 会自动将主键转换为整数。
- 如果您希望使用非递增或非数字主键，则必须在模型上定义一个公共属性 `$incrementing`，并将其设置为 `false`：`public $incrementing = false;`
- 如果模型的主键不是整数，则应在模型上定义受保护的 `$keyType` 属性。此属性应具有以下值：`string`
```php
protected $primaryKey = 'flight_id';
protected $primaryKey = ['id', 'company_id'];
```


## ulid()

```php
$table->ulid()->primary();
````
中  `ulid()` 之后有没有必要在执行 `primary()` ?

您提出了一个很好的问题。实际上，在使用 `ulid()` 方法后，通常不需要再调用 `primary()` 方法。  
让我解释一下原因：
1. `ulid()` 方法的行为：
    - 在 Laravel 中，`$table->ulid()` 方法会自动将该列设置为主键。
    - 它等同于 `$table->ulid('id')->primary()`。
2. 隐式主键设置：
    - 当您使用 `ulid()` 方法时，Laravel 会自动将该列视为表的主键。
    - 这是因为 ULID（Universally Unique Lexicographically Sortable Identifier）通常用作主键。

因此，您的代码可以简化为：`$table->ulid();`

这行代码就足以创建一个 ULID 类型的主键列。  
然而，有几点需要注意：
1. 显式声明：
    - 虽然不是必需的，但有时为了代码的清晰性，开发者可能会选择显式地调用 `primary()`。
    - 这不会造成任何问题，只是重复了已经隐含的设置。
2. 自定义列名：
    - 如果您想使用不同于默认的 'id' 作为列名，您可以这样做：`$table->ulid('custom_id')->primary();`
3. 复合主键：
    - 如果您需要创建复合主键（包括 ULID 和其他列），那么您确实需要显式地调用 `primary()`：
    ```php
    $table->ulid('id');
    $table->foreignId('company_id');
    $table->primary(['id', 'company_id']);
    ```
**总结：**  
- 对于单一的 ULID 主键，`$table->ulid()`; 就足够了。
- 对于更复杂的主键设置，或者为了代码的明确性，您可以选择显式地调用 `primary()`。
- 在您的情况下，如果 ULID 是唯一的主键，可以简单地使用 `$table->ulid();`。