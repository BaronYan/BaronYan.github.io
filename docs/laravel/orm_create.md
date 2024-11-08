# Laravel ORM create()

我来详细介绍 Laravel 中 create() 方法的用法：

## 1. 基本用法

```php
Model::create([
    /* 需要插入的数据 */
]);
// 最简单的创建方式
$warehouse = Warehouse::create([
    'name' => '北京仓库',
    'address' => '北京市朝阳区'
]);
``` 