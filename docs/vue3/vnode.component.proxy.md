---
title: vnode.component.proxy
date: 2024-06-20
category:
    - Vue3
description: vnode.component.proxy 介绍
prev:
  text: 封装Message组件
  link: vue3/封装Message组件.md
---

**相关链接：**

- [封装一个 Message 函数式组件](封装Message组件.md)
- [createVNode函数](createVNode.md)
- [render函数](render.md)
- [虚拟节点介绍](vnode.component.md)

## 介绍

在 Vue 3 中，`vnode.component.proxy` 是一个代理对象，它提供了对组件实例的访问和操作能力。

让我们来详细解释一下。

在 Vue 3 中，
<span class="bg-yellow-200">
当你使用 createVNode 函数创建一个虚拟节点（VNode），并且该节点渲染的是一个组件时，
vnode 将包含组件实例的相关信息。
其中，vnode.component 是一个 ComponentInternalInstance 对象，它代表了该组件的内部实例。
而 vnode.component.proxy 则是该组件实例的代理对象，它具有以下特性和作用：
</span>

- **代理对象**：`vnode.component.proxy` 是一个 JavaScript 对象，它代理了组件实例的所有公共属性和方法。

- **访问组件实例**：通过 `vnode.component.proxy` 可以访问到组件实例的所有公共属性和方法，例如 data、computed、methods 等。

响应式：代理对象是响应式的，这意味着当组件实例的响应式属性发生变化时，代理对象也会自动更新。

操作组件：可以通过代理对象来操作组件实例，例如访问和修改组件的数据、调用组件的方法等。

示例
假设你有一个简单的 Vue 组件 HelloWorld.vue：
