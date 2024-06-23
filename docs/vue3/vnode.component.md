---
title: vnode.component
date: 2024-06-19
category:
    - Vue3
description: vnode.component 介绍
prev:
  text: 封装Message组件
  link: vue3/封装Message组件.md
---

**相关链接：**

- [封装一个 Message 函数式组件](封装Message组件.md)
- [createVNode函数](createVNode.md)
- [render函数](render.md)

## vnode 介绍

虚拟节点（vnode:Virtual Node）

<span class="text-brand-500 font-bold">
虚拟节点（VNode）是对真实 DOM 节点的抽象表示，用于高效地更新和渲染视图。 包含了组件树的状态和结构信息，而不是实际的 DOM 元素。
</span>

一个 `vnode` 对象通常包含以下信息：

- `type`: 节点的类型，可以是 HTML 标签名、组件对象或异步组件。
- `props`: 节点的属性和属性值。
- `children`: 子节点列表。
- `key`: 节点的唯一标识，用于优化更新。
- `el`: <span class="text-brand-500">对应的真实 DOM 节点，在挂载时会赋值。</span>

举个例子，使用 `createVNode` 创建一个简单的虚拟节点：
```javascript
import { createVNode } from 'vue';

const vnode = createVNode('div', { class: 'my-div' }, 'Hello, world!');
console.log(vnode);

```
输出的 `vnode` 对象可能类似于：

```json
{
  "type": "div",
  "props": { "class": "my-div" },
  "children": "Hello, world!",
  "key": null,
  "el": null,
  // ...其他内部属性
}
```


## vnode.component

在Vue3中，虚拟节点（`vnode`）的 `component` 属性**用于存放与该虚拟节点关联的组件实例信息**。

具体来说，<span class="bg-green-200"> 当一个虚拟节点表示一个**组件**时，component 属性会引用这个组件实例对象。</span>
这个组件实例对象包含了组件的状态、方法等信息，是组件生命周期、渲染和更新机制的重要部分。
这意味着，通过component属性，Vue框架获得了维护和管理组件实例所需要的一切信息，这对于组件的挂载、更新和销毁过程至关重要。  
简而言之，component属性是虚拟节点与其表示的组件实例之间的桥梁。

- `vnode.component` 是与组件实例相关的属性
- 当 vnode 表示的是一个组件节点时，`vnode.component` 会指向这个组件的实例对象（Component Instance）。
- 组件实例对象包含了组件的状态、生命周期钩子、方法等信息。
- 它是 Vue 组件的实际运行实例。
- 当你使用 `createVNode` 创建一个组件的虚拟节点时，`vnode.component` <span class="bg-yellow-200">会在组件挂载时被赋值</span>：

```javascript
import { createVNode, render } from 'vue';
import MyComponent from './MyComponent.vue';

const vnode = createVNode(MyComponent, { message: 'Hello from component' });
console.log(vnode.component); // undefined, 因为组件还没有挂载

const container = document.createElement('div');
document.body.appendChild(container);
render(vnode, container);

console.log(vnode.component); // 组件实例对象

```
在组件被挂载之后，`vnode.component` 会包含如下信息：
```json
{
   "props": { "message": "Hello from component" },
   "data": { ... },
   "methods": { ... },
   "computed": { ... },
   "watch": { ... },
   // ...其他组件实例相关的属性和方法
}
```

## 区别总结

- `vnode`: 是虚拟节点对象，用于描述组件树中的节点结构，包括 HTML 元素节点和组件节点。
- `vnode.component`: 当 `vnode` 表示一个组件节点时，`vnode.component` 指向该组件的实例对象，包含了组件的状态和方法。

### 应用场景

在实际开发中，理解 `vnode` 和 `vnode.component` 的区别可以帮助我们更好地进行以下操作：

- **自定义渲染逻辑**：通过 `vnode` 可以操作虚拟 DOM，从而实现自定义的渲染逻辑。
- **访问组件实例**：通过 `vnode.component` 可以访问组件实例，从而调用组件的方法或访问其数据。

例如，在上面的函数式 `Message` 组件中，我们可以利用 `vnode` 创建和渲染消息组件，并通过 `vnode.component` 控制消息的关闭和其他交互逻辑。


