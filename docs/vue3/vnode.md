

## 虚拟节点介绍

_虚拟节点（vnode:Virtual Node）_

在 Vue 3 中，虚拟节点 (vnode) 是一个 
<span class="text-brand-500 font-bold">JavaScript 对象</span>，表示渲染树中的一个节点。虚拟节点用于描述界面的结构，最终由 Vue 渲染成真实的 DOM 元素。

<span class="text-brand-500 font-bold">
虚拟节点（VNode）是对真实 DOM 节点的抽象表示，用于高效地更新和渲染视图。 包含了组件树的状态和结构信息，而不是实际的 DOM 元素。
</span>

一个 `vnode` 对象通常包含以下信息：

- `type`: 节点的类型，可以是 HTML 标签名、组件对象或异步组件。
- `props`: 节点的属性和属性值。
- `children`: 子节点列表。
- `key`: 节点的唯一标识，用于优化更新。
- `el`: <span class="text-brand-500">对应的真实 DOM 节点，在挂载时会赋值。</span>
- [component](./vnode.component.md): 当虚拟节点表示一个自定义组件时，该属性将指向该组件实例对象。
- [component.proxy](./vnode.component.proxy.md): 当虚拟节点表示一个自定义组件时，该属性将指向该组件的代理对象。

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