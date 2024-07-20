

## 简介
watchEffect 是 Vue 3 中一个新的响应性 API，属于 Composition API 的一部分。
它提供了一种简单的方法来自动跟踪响应式状态的变化，并在这些变化发生时执行副作用。
相比于传统的 watch 选项，watchEffect 更加直接和易于使用，特别是当你只需要执行一些简单的副作用时。

### 基本用法

#### 创建一个简单的副作用
```javascript
import { ref, watchEffect } from 'vue';

const count = ref(0);

watchEffect(() => {
  console.log(`count has changed to: ${count.value}`);
});

count.value++;

```

在这个例子中，watchEffect 会自动跟踪 count 的变化，并在 `count.value` 改变时执行传入的回调函数。每次 `count.value` 发生变化时，控制台都会输出新的值。

### 特性与优点
1. **自动依赖追踪**：
    - watchEffect 会自动追踪在其回调函数中使用的所有响应式状态。这意味着你不需要显式地声明要监视的依赖项，Vue 会自动完成这一点。
2. **立即执行**：
   - watchEffect 在创建时会立即执行一次回调函数。这使得你可以在组件挂载时立即执行某些逻辑，而不需要等待状态发生变化。
3. **清理功能**：
   - watchEffect 提供了一个清理机制，允许你在每次副作用重新执行之前执行一些清理操作。例如，在处理异步操作或订阅时，这个功能非常有用。

```javascript
import { ref, watchEffect } from 'vue';

const count = ref(0);

watchEffect((onCleanup) => {
  const timer = setInterval(() => {
    count.value++;
  }, 1000);

  onCleanup(() => {
    clearInterval(timer);
  });
});

```

在这个例子中，`onCleanup` 函数被用来清除定时器，以防止内存泄漏或其他副作用。

### 与 watch 的比较

虽然 watchEffect 和 watch 都用于响应状态变化，但它们有一些关键的区别：

1. 依赖追踪： 
   - watchEffect：自动追踪依赖。
   - watch：需要显式声明依赖。
2. 使用场景：
   - watchEffect：适用于简单的副作用，当依赖关系不明确或不想显式声明时使用。
   - watch：适用于更复杂的情况，需要对依赖项进行更细粒度的控制。

#### watch 示例
```javascript
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`count changed from ${oldValue} to ${newValue}`);
});

count.value++;
```
在这个例子中，watch 需要显式地传入要监视的响应式状态 count，并在回调函数中处理新旧值。

### 结论

watchEffect 是一个强大且易用的工具，适用于大多数简单的副作用场景。
当你需要处理更复杂的情况或对依赖项进行精确控制时，可以使用 watch。
通过组合这两种 API，Vue 3 提供了灵活且高效的响应式状态管理解决方案。