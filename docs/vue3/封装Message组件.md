---
title: 封装一个 Message 组件
date: 2024年6月19日
category:
  - Vue3
description: 封装一个 Message 组件
---

**相关链接：**

- [虚拟节点介绍](vnode.component.md)
- [createVNode](createVNode.md)

## 封装一个 Message 组件

封装函数式组件的核心点主要是：

1. 学会熟练使用 `createVNode` 函数创建 vNode
2. 以及使用 `render`函数将 vNode 渲染成真实DOM。

以下是一个基本的实现步骤，包括创建组件和通过插件安装全局调用的方法。



### 1. 创建 Message 组件

首先，创建一个 Message.vue 文件，用于显示消息内容：

```vue

<template>
  <div v-if="visible" class="message" :class="type">
    {{ content }}
  </div>
</template>

<script setup>
  import {ref, onMounted} from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: 'info'
    },
    content: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3000
    }
  })
  const visible = ref(true);
  onMounted(() => {
    setTimeout(() => {
      visible.value = false;
    }, props.duration);
  })
</script>
```

### 2. 创建函数式 Message 调用

接下来，创建一个 JavaScript 文件，例如 `message.js`，用于封装函数式调用方法：

```javascript
import {createVNode, render} from 'vue';
import Message from './Message.vue';

const instances = [];

const MessageFunction = (options) => {

    const container = document.createElement('div');


    document.body.appendChild(container);

    const props = typeof options === 'string' ? {content: options} : options;

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

    instances.push(instance);

    // 自动关闭消息
    setTimeout(() => {
        instance.close();
    }, props.duration || 3000);

    return instance;
};

export default MessageFunction;

```

### 3. 在组件中使用

```vue

<script setup>
  import MessageFunction from './message.js';

  MessageFunction('This is an info message');
  MessageFunction({
    content: 'This is a success message',
    type: 'success',
    duration: 5000
  });
</script>
```

## createVNode 介绍

`createVNode` 函数是 Vue 3 中用于创建虚拟节点（VNode）的核心函数之一。  
`VNode` 是 Vue 的虚拟 DOM 表示，用于描述视图结构。  
通过 `createVNode`，可以手动创建和操作虚拟节点，从而实现更灵活的组件逻辑和渲染控制。

### createVNode 的基本用法

`createVNode` 函数可以接受以下参数：

1. `type`: 组件对象、HTML 标签或异步组件对象。
2. `props`: 节点的属性对象，包括类名、样式、事件处理程序等。
3. `children`: 子节点，可以是字符串、数组或对象。

### 示例

下面是一些使用 createVNode 的示例。

**创建一个简单的 HTML 元素节点**

```javascript
import {createVNode, render} from 'vue';

const vnode = createVNode('div', {class: 'my-div'}, 'Hello, world!');
const container = document.createElement('div');
document.body.appendChild(container);
render(vnode, container);

```



