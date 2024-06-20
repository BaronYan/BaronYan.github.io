---
title: render 函数
date: 2024-06-20
category:
  - Vue3
description: render 函数的用法
---

**相关链接：**

- [封装一个 Message 函数式组件](封装Message组件.md)
- [createVNode函数](createVNode.md)
- [虚拟节点介绍](vnode.component.md)

## 介绍

在 Vue.js 中，render 函数是非常重要的一部分，<span class="bg-yellow-200">它负责将虚拟 DOM 渲染成真实 DOM</span>。

在 Vue.js 3 中，render 函数内部是使用 `@vue/runtime-core` 中的 `h` 函数来创建虚拟节点（VNode），然后将这些虚拟节点渲染为真实的 DOM 元素。render 函数可以用来手动创建虚拟节点，也可以在组件的 setup 函数中使用。

## 基本语法
在 Vue 3 中，render 函数的基本语法如下：
```javascript
import { createApp, h } from 'vue';

const app = createApp({
  render() {
    return h('div', 'Hello, Vue 3!');
  }
});

app.mount('#app');
```

在上面的示例中：
- `createApp` 函数用于创建一个 Vue 应用实例。
- `h` 函数用来创建虚拟节点（VNode）。
  - 第一个参数是节点的类型，可以是 HTML 标签字符串、组件对象或函数。
  - 第二个参数是节点的属性对象。
  - 第三个参数是节点的子节点。

### 创建带有子节点的虚拟节点
```javascript
import { createApp, h } from 'vue';

const app = createApp({
  render() {
    return h('div', { class: 'container' }, [
      h('h1', 'Title'),
      h('p', 'Content')
    ]);
  }
});

app.mount('#app');

```
这段代码会创建一个 `<div class="container">`，里面包含了一个 `<h1>` 和一个 `<p>` 元素。

### 创建组件的虚拟节点
```javascript
import { createApp, h } from 'vue';
import MyComponent from './MyComponent.vue';

const app = createApp({
  render() {
    return h(MyComponent, { message: 'Hello from parent' });
  }
});

app.mount('#app');

```
上述示例中，`MyComponent` 是一个 Vue 组件，可以直接通过 `h` 函数来创建并渲染它。

### 渲染到特定容器中
在调用 `createApp` 后，可以使用 `mount` 方法将渲染的内容挂载到特定的 HTML 元素中。
```javascript
const app = createApp({
  render() {
    return h('div', 'Hello, Vue 3!');
  }
});

app.mount('#app');

```

## 使用场景
- **手动渲染**：可以使用 render 函数手动创建和渲染虚拟节点，更灵活地控制视图的结构和行为。
- **函数式组件**：在函数式组件中，通常会使用 render 函数来返回虚拟节点。
- **动态组件**：通过 render 函数可以根据条件动态地选择渲染不同的组件或元素。
- **自定义渲染逻辑**：可以在 render 函数中编写复杂的渲染逻辑，根据数据动态生成视图。

### 注意事项
- `render` 函数通常用于高级用法和性能优化，对于简单的应用场景，使用模板语法更为直观和方便。
- `h` 函数的第一个参数可以是字符串（HTML 标签名）或者是一个组件选项对象

## 总结
`render` 函数是 Vue 3 中用于手动创建和渲染虚拟节点的核心函数，它基于 `h` 函数创建虚拟节点，然后将这些节点渲染为真实 DOM。通过 `render` 函数，我们可以实现更高级和灵活的渲染逻辑，适用于需要更细粒度控制的情况下。





