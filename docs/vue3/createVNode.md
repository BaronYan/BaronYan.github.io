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

`createVNode` 函数是 Vue 3 中用于创建虚拟节点（VNode）的核心函数之一。
通过 createVNode，可以手动创建和操作虚拟节点，从而实现更灵活的组件逻辑和渲染控制。

## 基本用法

```javascript
import { createVNode } from 'vue';
const vnode = createVNode(type, props, children);
```
createVNode 函数可以接受以下参数：

- `type`: 组件的类型，可以是组件构造函数、动态/异步组件对象或 HTML 标签字符串。
- `props`: 传递给组件的属性对象。
- `children`: 虚拟节点的子节点，既可以是单个节点也可以是节点数组，或者是插槽对象。

对于 `createVNode(Message, props, children)`：

- Message 是组件的类型。
- props 是传递给 Message 组件的属性。
- children 是 Message 组件的子节点或插槽。

在以下代码中，第三个参数 children 是一个插槽对象 `{ default: ... }`
```javascript
const vnode = createVNode(Message, props,
    isFunction(props.message) || isVNode(props.message) ?
        { default: isFunction(props.message) ? props.message : () => props.message } : null);

```


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