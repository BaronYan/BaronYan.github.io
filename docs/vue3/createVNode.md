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

## 总结
createVNode 是 Vue 3 中创建虚拟节点的核心工具，通过它可以手动控制组件和元素的创建和渲染。它提供了强大的灵活性，使得我们可以更灵活地操作 DOM，并在函数式组件和插件开发中发挥重要作用。