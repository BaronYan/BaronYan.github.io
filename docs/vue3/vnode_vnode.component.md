---
title: vnode.component
description: 详细讲解 vnode 和 vnode.component 的区别
date: 2024-06-19
prev:
  text: 封装Message组件
  link: vue3/封装Message组件.md
---



**相关链接：**

- [封装一个 Message 函数式组件](封装Message组件.md)

## `vnode.component` 介绍

在 Vue 3 中，虚拟节点（VNode）是对真实 DOM 节点的抽象表示。VNode 包含了组件树的状态和结构信息，而不是实际的 DOM 元素。在这个上下文中，component 属性是 VNode 的一个重要部分，特别是在处理组件时。

具体来说，component 属性用于存储与 VNode 关联的组件实例。它包含了与该 VNode 对应的 Vue 组件的所有信息和方法。下面是一些相关细节：

1. **组件实例**：  
   component 属性持有的是一个组件实例，它包含了组件的所有状态、方法、生命周期钩子等等。
2. **动态组件**：  
   当使用动态组件时，component 属性会被更新以反映当前渲染的组件。
3. **访问组件实例**：  
   可以通过访问 VNode 的 component 属性来获得与之关联的 Vue 组件实例。这对于一些高级操作或自定义渲染逻辑非常有用。
4. **组件内部状态**：  
   component 属性中的组件实例包含了组件的内部状态（如 data、props、computed 等），这可以用来调试或者执行一些复杂的状态管理。






**AppendToElement**  添加到的位置，通过 `getAppendToElement` 获取：

- `props.appendTo`
    - string
    - function
    - DOM 元素
- 默认为 `document.body`

**Container** 附加到的容器，通过 `genContainer` 获取,默认为 `div`

## `createVNode` 函数的基本用法
createVNode 函数可以接受以下参数：

- `type`: 组件、HTML 标签或异步组件对象。
- `props`: 节点的属性对象。
- `children`: 子节点，可以是字符串、数组或对象。

## `vnode.component`
在 Vue 3 中，`vnode` 和 `vnode.component` 是两个不同的概念，分别代表了不同的对象和用途。

### `vnode`
`vnode` 是虚拟节点（Virtual Node）的简称。
它是 Vue 的虚拟 DOM 的基本单元，用于描述组件树中的一个节点。虚拟节点是对真实 DOM 的抽象表示，用于高效地更新和渲染视图。

一个 `vnode` 对象通常包含以下信息：

- `type`: 节点的类型，可以是 HTML 标签名、组件对象或异步组件。
- `props`: 节点的属性和属性值。
- `children`: 子节点列表。
- `key`: 节点的唯一标识，用于优化更新。
- `el`: 对应的真实 DOM 节点，在挂载时会赋值。

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
### `vnode.component`

`vnode.component` 是与**组件实例**相关的属性，
当 `vnode` 表示的是一个组件节点时，`vnode.component` 会指向这个组件的实例对象（Component Instance）。

组件实例对象包含了组件的状态、生命周期钩子、方法等信息。它是 Vue 组件的实际运行实例。

比如，当你使用 `createVNode` 创建一个组件的虚拟节点时，`vnode.component` 会在组件挂载时被赋值：
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

## 应用场景

在实际开发中，理解 `vnode` 和 `vnode.component` 的区别可以帮助我们更好地进行以下操作：

- **自定义渲染逻辑**：通过 `vnode` 可以操作虚拟 DOM，从而实现自定义的渲染逻辑。
- **访问组件实例**：通过 `vnode.component` 可以访问组件实例，从而调用组件的方法或访问其数据。

例如，在上面的函数式 `Message` 组件中，我们可以利用 `vnode` 创建和渲染消息组件，并通过 `vnode.component` 控制消息的关闭和其他交互逻辑。