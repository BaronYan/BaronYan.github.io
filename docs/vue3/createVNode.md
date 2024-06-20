---
title: createVNode
description: createVNode 介绍
date: 2024-06-20
prev:
text: 封装Message组件
link: vue3/封装Message组件.md
---

**相关链接：**

- [封装一个 Message 函数式组件](封装Message组件.md)
- [虚拟节点介绍](vnode.component.md)
- [render函数](render.md)

## 介绍

createVNode 函数是 Vue 3 中用于创建虚拟节点（VNode）的核心函数之一。
通过 createVNode，可以手动创建和操作虚拟节点，从而实现更灵活的组件逻辑和渲染控制。

## 基本用法

createVNode 函数可以接受以下参数：

- `type`: 组件、HTML 标签或异步组件对象。
- `props`: 节点的属性对象。
- `children`: 子节点，可以是字符串、数组或对象。

### 语法
```javascript
import { createVNode } from 'vue';

const vnode = createVNode(type, props, children);
```
### 参数说明
1. type:
   - 可以是一个组件对象（比如 MyComponent）
   - 可以是一个 HTML 标签名（比如 'div'）
   - 可以是一个异步组件对象
2. props:
   - 节点的属性对象
   - 包括类名、样式、事件处理程序等
3. children:
   - 子节点，可以是单个 VNode、字符串或一个 VNode 数组
   - 可以嵌套 VNode，形成树形结构
   - 可以是一个函数，用于渲染子节点
   - 可以是一个异步函数，用于异步渲染子节点
   - 可以是一个 Promise，用于异步渲染子节点
   - 可以是一个对象，用于渲染子节点
     - default: 一个函数，用于渲染默认插槽子节点


### 示例

**创建一个简单的 HTML 元素节点**

```javascript
import { createVNode, render } from 'vue';

const vnode = createVNode('div', { class: 'my-div' }, 'Hello, world!');
const container = document.createElement('div');
document.body.appendChild(container);
render(vnode, container);
```
**创建一个带有子节点的元素节点**

```javascript
import { createVNode, render } from 'vue';

const vnode = createVNode(
  'div',
  { class: 'parent-div' },
  [
    createVNode('span', { class: 'child-span' }, 'Child 1'),
    createVNode('span', { class: 'child-span' }, 'Child 2')
  ]
);

const container = document.createElement('div');
document.body.appendChild(container);
render(vnode, container);
```

**创建一个组件节点**

```vue
<!--假设有一个 MyComponent 组件-->
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    message: String
  }
};
</script>
```
使用 createVNode 创建这个组件的节点：
```javascript
import { createVNode, render } from 'vue';
import MyComponent from './MyComponent.vue';

const vnode = createVNode(MyComponent, { message: 'Hello from component' });
const container = document.createElement('div');
document.body.appendChild(container);
render(vnode, container);
```

**在函数式组件中的应用**

在封装函数式组件时，createVNode 非常有用。例如，前面提到的函数式 Message 组件：

```javascript
import { createVNode, render } from 'vue';
import Message from './Message.vue';

const MessageFunction = (options) => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const props = typeof options === 'string' ? { content: options } : options;

  const vnode = createVNode(Message, props);
  render(vnode, container);

  const instance = {
    vnode,
    container,
    close() {
      render(null, container);
      document.body.removeChild(container);
    }
  };

  setTimeout(() => {
    instance.close();
  }, props.duration || 3000);

  return instance;
};

export default MessageFunction;
```
## 当第三个参数为对象时

```javascript
const vnode = createVNode(Message, props,
        isFunction(props.message) || isVNode(props.message)
                ?
                {
                   default: isFunction(props.message)
                           ? props.message
                           : () => props.message
                }
                : null);
```

在 Vue 3 中，`default` 是一个插槽（Slot）的名称。如上代码中，`default` 是作为插槽名称用于创建虚拟节点（VNode）。

1. createVNode 函数：这是 Vue 3 提供的一个用于创建虚拟节点的函数。 
2. Message：这是一个组件或者组件选项，用于创建虚拟节点。 
3. props：这是传递给组件的属性对象。 
4. isFunction(props.message) || isVNode(props.message)：这是一个条件判断，用于检查 props.message 是否是一个函数或者已经是一个 VNode。 
5. 条件判断中的对象：
   - 如果 `props.message` 是一个函数 (isFunction(props.message) 返回 true)，那么 { default: props.message } 将作为插槽对象传递给 createVNode。
   - 如果 `props.message` 不是一个函数，而是一个值，将使用一个匿名函数 `() => props.message` 作为插槽内容，然后 { default: ... } 将作为插槽对象传递给 createVNode。
   - 如果 `props.message` 既不是函数也不是 VNode，插槽对象将设置为 null，这将意味着没有插槽被传递给 createVNode。

**关于 default 插槽**

在 Vue 中，插槽（Slot）是一种机制，用于在父组件中向子组件传递内容。在这里，default 是一个插槽的名称，用于指定默认插槽。默认插槽是没有具体名称的插槽，用于接收没有被具名插槽接收的内容。

## 总结
createVNode 是 Vue 3 中创建虚拟节点的核心工具，通过它可以手动控制组件和元素的创建和渲染。它提供了强大的灵活性，使得我们可以更灵活地操作 DOM，并在函数式组件和插件开发中发挥重要作用。