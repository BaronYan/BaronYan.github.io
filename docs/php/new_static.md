
`$instance = new static;` 是什么意思？

`$instance = new static;` 在 PHP 中创建了一个新的当前类的实例。让我解释一下这里的 `static` 关键字：
- `static` 在这个上下文中是一个后期静态绑定（Late Static Binding）的用法。
- 当在一个静态方法中使用时，`static` 关键字指向的是调用该方法的类。
- `new static` 会创建一个新的对象，这个对象的类型是调用 `reorderAll` 方法的那个类。

举个例子来说明：

```php
class Warehouse extends Model
{
    use HasCompanySort;
    // ...
}

Warehouse::reorderAll();
```

当我们调用 `Warehouse::reorderAll()` 时，`new static` 实际上等同于 `new Warehouse()`。

这种方法的好处是：
- 灵活性：它允许 trait 中的方法创建一个正确类型的实例，而不需要知道具体是哪个类在使用这个 trait。
- 多态性：如果有多个类使用了这个 trait，每个类调用 reorderAll 时都会创建自己类型的实例。
- 避免硬编码：我们不需要在 trait 中硬编码任何特定的类名。

在 `reorderAll` 方法中，创建这个实例的目的是为了访问 `getSortColumn` 和 `getCompanyColumn` 方法。这些方法可能在使用 trait 的类中被重写，所以我们需要一个实例来正确地调用这些可能被重写的方法。


总的来说，`$instance = new static;` 这行代码确保了 trait 中的方法可以正确地适应任何使用它的类，提高了代码的复用性和灵活性。