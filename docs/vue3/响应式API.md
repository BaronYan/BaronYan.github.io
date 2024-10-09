## 响应式: 工具函数

- `isRef()`
  - 检查某个值是否为 `ref`。
- `isProxy()`
  - 检查一个对象是否是由 `reactive()`、`readonly()`、`shallowReactive()` 或 `shallowReadonly()` 创建的代理。
- `isReactive()`
  - 检查一个对象是否是由 `reactive()` 或 `shallowReactive()` 创建的代理。
- `isReadonly()`
  - 检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接赋值。
- `unref()`
  - 如果参数是 `ref`，则返回内部值，否则返回参数本身。这是 `val = isRef(val) ? val.value : val` 计算的一个语法糖。
- `toRef()`
  - 可以将值、`refs` 或 `getters` 规范化为 refs (3.3+)。也可以基于响应式对象上的一个属性，创建一个对应的 `ref`。这样创建的 `ref` 与其源属性保持同步：改变源属性的值将更新 `ref` 的值，反之亦然。
- `toRefs()`
  - 将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。
- `toValue()`
    - `toValue()` 的设计目的是将 `ref` 或 `getter` 规范化为值。如果参数是 `ref`，它会返回 `ref` 的值；如果参数是函数，它会调用函数并返回其返回值。否则，它会原样返回参数。它的工作方式类似于 `unref()`，但对函数有特殊处理。

## 响应式：进阶函数

https://cn.vuejs.org/api/reactivity-advanced.html#shallowref