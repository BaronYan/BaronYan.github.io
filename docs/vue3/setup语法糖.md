
**相关链接**
- [setup语法糖](https://cn.vuejs.org/api/sfc-script-setup)

## 简介
`<script setup>` 是在单文件组件 (SFC) 中使用组合式 API 的**编译时语法糖**。
当同时使用 SFC 与组合式 API 时，该语法是默认推荐。相比于普通的 `<script>` 语法，它具有更多优势：


- 更简洁的代码。
- 能够使用 TypeScript 声明 props 和自定义事件。
- 更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。
- 更好的 IDE 类型推导性能
- `<script setup>...</script>`
里的代码会被编译成组件 `setup()` 函数的内容。
- 这意味着<span class="bg-yellow-200">与普通的 `<script>` 只在组件被首次引入的时候执行一次不同，`<script setup>` 中的代码会在每次组件实例被创建的时候执行。</span>
- 任何在 `<script setup>` 声明的顶层的绑定 (包括变量，函数声明，以及 import 导入的内容) 都能在模板中直接使用
- ref 在模板中使用的时候会自动解包
- `defineProps` 和 `defineEmits` 都是只能在 `<script setup>` 中使用的编译器宏。他们不需要导入，且会随着 `<script setup>` 的处理过程一同被编译掉。
- 传入到 `defineProps` 和 `defineEmits` 的选项会从 `setup` 中提升到模块的作用域。因此，传入的选项不能引用在 `setup` 作用域中声明的局部变量。这样做会引起编译错误。但是，它可以引用导入的绑定，因为它们也在模块作用域内。
- 使用 `<script setup>` 的组件是默认关闭的——即通过模板引用或者 `$parent` 链获取到的组件的公开实例，不会暴露任何在 `<script setup>` 中声明的绑定。
- 可以通过 `defineExpose` 编译器宏来显式指定在 `<script setup>` 组件中要暴露出去的属性

### 使用组件
```vue
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
  <MyComponent />
</template>
```
`MyComponent` 应当被理解为像是在引用一个变量。
其 kebab-case 格式的 `<my-component>` 同样能在模板中使用。

由于组件是通过变量引用而不是基于字符串组件名注册的，在 `<script setup>` 中要使用动态组件的时候，应该使用动态的 `:is` 来绑定：
```vue
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Foo" />
  <component :is="someCondition ? Foo : Bar" />
</template>
```
### 递归组件
一个单文件组件可以通过它的文件名被其自己所引用。例如：名为 `FooBar.vue` 的组件可以在其模板中用 `<FooBar/>` 引用它自己。

请注意这种方式相比于导入的组件优先级更低。如果有具名的导入和组件自身推导的名字冲突了，可以为导入的组件添加别名：
`import { FooBar as FooBarChild } from './components'`

### 命名空间组件
可以使用带 `.` 的组件标签，例如 `<Foo.Bar>` 来引用嵌套在对象属性中的组件。这在需要从单个文件中导入多个组件的时候非常有用：
```vue
<script setup>
import * as Form from './form-components'
</script>

<template>
  <Form.Input>
    <Form.Label>label</Form.Label>
  </Form.Input>
</template>
```
