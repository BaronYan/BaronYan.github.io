
# Laravel 的 trait 引导机制

```php
trait HasCompanySort
{
    /**
     * 启动 trait
     * 这个方法会在模型被创建时自动调用
     */
    public static function bootHasCompanySort(): void
    {
        static::creating(function ($model) {
            if (!$model->sort) {
                // 如果没有设置 sort 值，则设置为当前公司最大的 sort 值 + 1
                $model->sort = static::where('company_id', $model->company_id)
                    ->max('sort') + 1;
            }
        });
    }
}
```

`bootHasCompanySort` 被定义为静态方法有几个重要原因：

1. Laravel 的 trait 引导机制
   - Laravel 使用一种约定，即在模型中查找名为 `boot{TraitName}` 的静态方法。这些方法会在模型引导过程中自动调用。
2. 生命周期考虑
   - 这个方法需要在模型类被加载时执行，而不是在创建模型实例时。它设置了创建新模型实例时应用的规则。
3. 全局影响
   - `bootHasCompanySort` 方法设置了一个影响所有使用这个 trait 的模型实例的行为。它不是针对单个实例的操作，而是针对整个类的。
4. 无需实例化
   - 静态方法可以在不创建类实例的情况下调用。这对于设置模型的全局行为很重要，因为它需要在任何实例被创建之前就生效。
5. 性能考虑
   - 静态方法通常比实例方法稍快一些，因为它们不需要访问实例状态。

## Laravel 的模型事件系统

在这个方法中，我们使用 `static::creating()` 来注册一个模型创建事件的监听器。这个事件系统是基于类的，而不是基于实例的。

- `static::creating()` 注册了一个在模型创建时触发的回调。
- 这个回调函数会在每次创建新模型实例时执行，设置 `sort` 值。
- 使用静态方法确保这个行为被全局应用于使用这个 trait 的所有模型。

总之，`bootHasCompanySort` 被定义为静态方法是为了符合 Laravel 的约定，确保在正确的时间点执行，并全局影响使用这个 trait 的所有模型实例。这种方式使得 trait 能够无缝地集成到 Laravel 的模型生命周期中。
