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



在这个上下文中，component 属性是 VNode 的一个重要部分，特别是在处理组件时。

具体来说，component 属性用于存储与 VNode 关联的组件实例。它包含了与该 VNode 对应的 Vue 组件的所有信息和方法。下面是一些相关细节：


关注点：在大多数情况下，我们更关心组件实例而不是虚拟节点本身。
1. **API 设计**：
   - 这可能是框架设计者有意为之，以提供更直接的组件实例访问方式。
2. **组件实例**：  
   - `vnode.component` 属性持有的是一个组件实例，它包含了组件的所有状态、方法、生命周期钩子等等。
3. **访问性**
   - 通过返回 `vnode.component`，我们可以直接访问和操作组件实例，而不需要通过 vnode 来间接访问。
4. **动态组件**：  
   - 当使用动态组件时，`component` 属性会被更新以反映当前渲染的组件。
5. **访问组件实例**：  
   - 可以通过访问 `vnode.component` 属性来获得与之关联的 Vue 组件实例。这对于一些高级操作或自定义渲染逻辑非常有用。
6. **组件内部状态**：  
   - `vnode.component` 属性中的组件实例包含了组件的内部状态（如 data、props、computed 等），这可以用来调试或者执行一些复杂的状态管理。

总的来说，返回 `vnode.component` 提供了更直接、更有用的组件实例访问，这在大多数使用场景中可能更为合适。但具体原因可能还需要查看框架的设计文档或源码来确认。

## 示例

假设你有一个简单的 Vue 组件结构，并希望通过 VNode 来访问组件实例：

```javascript
const app = Vue.createApp({
  template: '<div><my-component></my-component></div>',
  components: {
    MyComponent: {
      template: '<div>Hello, World!</div>',
      data() {
        return {
          message: 'Hello from MyComponent'
        }
      }
    }
  }
});

app.mount('#app');

```

在这个例子中，`<my-component>` 是一个自定义组件。当它被渲染成 VNode 时，component 属性会持有这个组件的实例。

## 访问 VNode 的 component 属性

在 Vue 3 中，通过 Vue 的内部 API 或者调试工具，可以访问 VNode 的 component 属性。例如：

```javascript
// 获取应用的根实例
const vm = app._instance;

// 获取根实例的 VNode
const rootVNode = vm.vnode;

// 假设 `my-component` 是根 VNode 的第一个子节点
const myComponentVNode = rootVNode.children[0];

// 访问 `my-component` 的组件实例
const myComponentInstance = myComponentVNode.component;

// 现在可以访问组件实例上的所有数据和方法
console.log(myComponentInstance.ctx.message); // 输出 "Hello from MyComponent"

```

## 注意

直接操作 VNode 和组件实例是高级特性，通常在编写自定义渲染器或者进行深度调试时使用。在一般的应用开发中，Vue 提供的模板语法和组合式 API 足以满足大多数需求。

通过理解 VNode 的 component 属性，你可以更深入地了解 Vue 3 的内部工作原理，并在需要时进行更加复杂的操作。