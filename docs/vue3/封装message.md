---
title: '封装一个 Message 组件'
date: 2024-07-04
category: 'vue3'
tag:
  - 'vue3'
---

## 封装一个 Message 组件

封装函数式组件的核心点主要是：

1. 学会熟练使用 [createVNode](createVNode.md) 函数创建 vNode
2. 以及使用 `render`函数将 vNode 渲染成真实DOM。

以下是一个基本的实现步骤，包括创建组件和通过插件安装全局调用的方法。

### 1. 创建 Message 组件

首先，创建一个 Message.vue 文件，用于显示消息内容：

```vue
<template>
    <div v-if="visible" ref="comRef"
         class="fixed left-1/2 -translate-x-1/2
         w-full sm:max-w-[300px]
         z-message
         border-box
         data-[border]:border
         px-4 py-2 rounded-lg overflow-hidden shadow-2xl
         text-sm font-medium text-center
         transition-all duration-200 ease-in-out"
         :class="{
             'text-emerald-500 bg-emerald-50 border-emerald-400':type==='success',
             'text-amber-500 bg-amber-50 border-amber-400':type==='warning',
             'text-red-500 bg-red-50 border-red-400':type==='error',
             'text-gray-500 bg-gray-50 border-gray-400':type==='info',
         }"
         :style="{top:`${topOffset}px`}">
        <div class="flex-auto">
            <slot>
                {{ message }}
            </slot>
        </div>
        <span class="flex-none" v-if="showClose" @handleClick="close">
            <svg-icon name="close" class="w-4 h-4"/>
        </span>
    </div>
</template>
<script setup>
import {ref, computed,onMounted} from 'vue';
import {useElementSize} from '@vueuse/core';
import {isFinite} from "lodash";
import SvgIcon from "~m/svgIcons/SvgIcon.vue";

const props = defineProps({
    message: {
        type: [String, Object],
        default: null
    },
    type: {
        type: String,
        default: 'success',
        validator: (value) => {
            return ['success', 'warning', 'error', 'info'].includes(value)
        }
    },
    showClose: {
        type: Boolean,
        default: false
    },
    duration: {
        type: Number,
        default: 3000
    }
})



const comRef = ref(null);
const comIndex = ref(0);
const {height} = useElementSize(comRef);

const topOffset = computed(() => {
    if (isFinite(comIndex.value) && isFinite(height.value)) {
        return comIndex.value * (height.value + 25) + 10;
    }
    return 10;
});



//#region 关闭操作

const visible = ref(true);

const emit = defineEmits(['close']);

onMounted(() => {
    startTimer()
})

let timer = null;
const startTimer = () => {
    timer = setTimeout(() => {
        close()
    }, props.duration);
}
const clearTimer = () => {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}
const close = () => {
    clearTimer();
    visible.value = false;
    emit('close');
}
//#endregion

defineExpose({
    comIndex,
    visible
})
</script>

```

### 2. 创建函数式 Message 调用

接下来，创建一个 JavaScript 文件，例如 `message.js`，用于封装函数式调用方法：

```javascript

import { shallowReactive,createVNode, isVNode, render,watch } from 'vue';
import {isElement,isString, isFunction, hasOwn, isObject,isClient} from "~m/utils/types.js";

import MessageComponent from './message.vue';

const InstanceMap = shallowReactive(new Map());

watch(InstanceMap, () => {
    let comIndex = 0;
    InstanceMap.forEach((_, com) => {
        console.log('com~~~~:',com)
        com.exposed.comIndex.value = comIndex++;
    })
});

const getContainer = () => {
    return document.createElement('div');
};

const getAppendToElement = (props) => {

    // 默认将元素附加到 body 上
    let appendTo = document.body;

    if (!props.appendTo) return appendTo;

    // 如果 props 中有 appendTo 属性，则根据其类型来确定附加位置
    if (isString(props.appendTo)) {
        return document.querySelector(props.appendTo) || appendTo;
    }else if (isFunction(props.appendTo)) {
        return props.appendTo() || appendTo;
    } else if (isElement(props.appendTo)) {
        return props.appendTo;
    } else {
        return appendTo;
    }
}

const initInstance = (props, container, appContext = null) => {
    // createVNode 的函数签名中， 第一个参数可以是动态组件，也可以是类组件，亦或是标签名字符串 第2个参数是props 第3个参数是children
    const vNode = createVNode(MessageComponent, props,
        isFunction(props.message) || isVNode(props.message) ?
            {default: isFunction(props.message)? props.message: () => props.message}
            : null);

    // 如果提供了 appContext，则将其设置为虚拟节点的 appContext
    vNode.appContext = appContext

    // 使用 render 函数将虚拟节点渲染到挂载容器中
    render(vNode, container);

    const com = vNode.component;

    if (!container.firstElementChild) {
        com.exposed.visible.value = true;
    }

    if (!container.firstElementChild) {
        console.error('无法呈现消息组件。容器中未找到子元素。');
        return null;
    }

    // 获取最终确定的附加位置，并将挂载容器的第一个子元素附加到该位置
    const appendToElement = getAppendToElement(props);

    appendToElement.appendChild(container.firstElementChild)

    return com;
}

const showMessage = (options, appContext = null) => {

    const container = getContainer();

    options.onClose = () => {
        const currentInstance = InstanceMap.get(instance);
        render(null, container);
        InstanceMap.delete(instance);
        currentInstance.resolve('close');
    };

    const instance = initInstance(options, container, appContext);

    if (!instance) return;

    const vm = instance.proxy;
    for (const prop in options) {
        if(hasOwn(options,prop) && !hasOwn(vm.$props,prop)) {
            vm[prop] = options[prop];
        }
    }
    return instance;
}

const Message = (options, appContext = null) => {
    if(!isClient) return Promise.reject('Message is not supported in the current environment');
    let callback = null;
    if (isString(options) || isVNode(options)) {
        options = {
            message: options
        };
    } else {
        callback = options.callback;
    }
    return new Promise((resolve, reject) => {
        const com = showMessage(options, appContext != null ? appContext : Message._context);
        if (!com) return reject('无法呈现消息组件。容器中未找到组件子元素。');
        InstanceMap.set(com, {
            options,
            callback,
            resolve,
            reject
        });
    });
}

const MESSAGE_TYPE_VARIANTS = ['info', 'success', 'warning', 'error'];
MESSAGE_TYPE_VARIANTS.forEach(type=> {
    Message[type] = (message, options = {}) => {
        return Message(Object.assign( options,{
            message,
            type,
        }), appContext);
    };
})

Message._context = null;

export {Message as default};

```

### 3. 调用示例

```javascript
Message('请先添加货物类型').then(res=>{
console.log('请先添加货物类型~~~~:',res)
})
Message({
message: 'hello world',
'data-border':true,
type: 'error',
duration:10000
}).then(res=>{
console.log('hello world~~~~:',res)
})
```