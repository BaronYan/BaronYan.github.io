# Eloquent 基本知识

## 批量分配



### create 和 firstOrCreate 有哪些区别

`create` 和 `firstOrCreate` 是 Laravel Eloquent ORM 中用于创建新记录的两个不同方法。它们有以下主要区别：

1. `create` 方法：
    - 总是创建一个新记录。
    - 如果记录已存在，会创建一个重复的记录。
    - 更快，因为它不需要先查询数据库。
2. `firstOrCreate` 方法：
    - 首先尝试查找匹配的记录。
    - 如果找到匹配的记录，返回该记录。
    - 如果没有找到匹配的记录，则创建一个新记录。
    - 可以防止创建重复记录。
    - firstOrCreate 允许您分别指定用于查找的属性和用于创建的属性。

```php
$company = Company::create([
    'name' => '广州勤快货运代理有限公司',
    'suffix_domain' => 'qkcargo',
    // ...其他字段
]);
$company = Company::firstOrCreate(
    ['suffix_domain' => 'qkcargo'],  // 用于查找的条件
    [
        'name' => '广州勤快货运代理有限公司',
        // ...其他字段
    ] // 用于创建的属性
);
```
