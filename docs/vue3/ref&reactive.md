## ref 和 reactive

Vue 3 引入了Composition API，
其中 `ref` 和 `reactive` 是这套API中的两个基本响应式引用类型，
用于处理组件中的响应式数据。
它们都是构建 Vue 应用中响应式系统的基础部件，但它们适用于不同的场景，并且在内部实现上也有所不同。

1. `ref`：
   - 主要用于处理基本数据类型（如String、Number、Boolean等）的响应式。
   - 当将一个基本数据类型包裹在 `ref()` 函数中时，Vue内部会通过 `RefImpl` 类来处理这个值，使其成为一个响应式对象。
   - 这个对象拥有 `.value` 属性，通过这个属性可以获取到原始值，并在修改该值时保持响应性。

2. `reactive`：
   - 用于创建一个响应式的复杂类型数据对象（如Object、Array）。
   - `reactive` 函数内部使用 `ReactiveEffect` 类来处理这些复杂类型的数据，使得这些数据的任何嵌套属性变化时都能触发响应。
   - 与 `ref` 创建的响应式对象不同，`reactive` 返回的响应式对象，可以直接像操作普通对象一样操作它们，不需要通过 `.value` 访问。

**结论:**

无论是 `ref` 还是 `reactive`，它们的内部都是基于Vue的响应式系统实现的，即依赖收集和触发更新的机制。
它们的核心实现依赖于 `Proxy`，是基于ECMAScript 2015的 `Proxy` 和 `Reflect` 来实现属性的拦截和响应式变化。

**转换机制：**
在Vue的响应式系统中，`ref` 和 `reactive` 可以相互转换。

- 例如，`ref` 对象在被 `reactive` 对象引用时，`ref` 中的值变动也会触发 `reactive` 对象的更新。
- 同样，`reactive` 对象的某个属性如果是通过 `ref` 定义的，该属性在模板中被访问时会自动展开，无需使用 `.value` 。

**一致的目的**：
尽管 `ref` 和 `reactive` 适用于不同的数据类型，但它们的目的是一致的，即实现数据的响应式，
让Vue应用的数据流向更加清晰、高效。

**结论**：`ref` 和 `reactive` 虽然在适用场景和某些内部实现上有所不同，但它们共同为Vue应用的响应式系统提供了强大且灵活的支持，是Vue 3中Composition API的重要组成部分。

## shallowRef

在 Vue 3 中，ref 和 shallowRef 都用于创建响应式的引用对象，但它们之间有一些关键的区别：
1. `ref`：
    - `ref` 可以用来创建包含基本类型值（如数字、字符串、布尔值）的响应式引用对象。
    - 当给 `ref` 分配一个新值时，Vue 会确保这个新值是响应式的，并触发视图更新。
    - 通过 `[*].value` 来访问和修改其值。
2. `shallowRef`：
   - `shallowRef` 与 `ref` 类似，但它主要用于创建包含对象类型值的浅响应式引用对象。
   - 当给 `shallowRef` 分配一个新对象时，只有该对象本身是响应式的，而不会递归地将其属性转换为响应式。
```javascript
import { shallowRef } from 'vue';

const obj = { count: 0 };
const state = shallowRef(obj);

// 使用
console.log(state.value.count); // 输出：0
state.value.count++; // 不会触发视图更新

```
在这个例子中，`state.value` 是一个浅响应式的对象引用，即 `state.value` 是响应式的，但是 `state.value.count` 并不是响应式的，修改 `count` 不会触发视图更新。

选择使用 `ref` 还是 `shallowRef` 取决于你的需求：

- 如果你需要确保对象内部的所有属性都是响应式的，应该使用 `ref`。
- 如果你只需要对象本身是响应式的，并且不希望递归地转换其内部属性为响应式，可以使用 `shallowRef`。

总之，`ref` 和 `shallowRef` 提供了根据具体需求来选择响应式处理的灵活性，确保你可以高效地管理和使用 Vue 3 中的响应式数据。


## shallowReactive
在Vue 3中，`shallowReactive` 和 `reactive` 是用来创建响应式对象的两种方式，它们的主要区别在于<span class="bg-yellow-200">如何处理对象的嵌套</span>。

1. `reactive`：
    - `reactive` 函数<span class="bg-yellow-200">会递归地将对象及其嵌套属性转换为响应式对象</span>。这意味着对象的所有嵌套属性都会被转换为响应式的，可以监听到其内部属性的变化。
2. `shallowReactive`：
   - `shallowReactive` 函数<span class="bg-yellow-200">只会将对象的顶层属性转换为响应式对象，而不会递归转换嵌套属性</span>。这意味着对象内部的嵌套属性不会被转换为响应式，只有顶层属性是响应式的。
        ```javascript
            import { shallowReactive } from 'vue';
            const state = shallowReactive({
               nested: {
                   count: 0
               }
           });
        ```
     在这个例子中，`state.nested` 不是响应式的，只有 `state` 的顶层属性是响应式的。这意味着当 `state.nested.count` 变化时，不会触发视图更新。

选择使用 `shallowReactive` 还是 `reactive` 取决于你的数据结构和需要：

- 如果你需要监听对象的所有嵌套属性的变化，应该使用 `reactive`。
- 如果你只需要监听对象的顶层属性的变化，可以使用 `shallowReactive`，这样可以提高性能并减少不必要的响应式处理。

总之，`shallowReactive` 和 `reactive` 提供了灵活的选择，使你可以根据具体需求来决定如何创建响应式对象。
