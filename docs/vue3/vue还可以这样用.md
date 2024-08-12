```vue
<template>
  
</template>
<script setup>

</script>
```

```javascript
import { createVNode, render } from 'vue';
import App from './App.vue';

const getContainer = () => document.createElement('div');
const getAppendToElement = () => document.querySelector('#app');

const initInstance = props => {
  const container = getContainer();
  const appendTo = getAppendToElement();
  const vNode = createVNode(App, props);

  render(vNode, container);
  appendTo.appendChild(container.firstElementChild);

  const vm = vNode.component;

  for(const prop in props) {
    if(Object.hasOwn(props,prop) && !Object.hasOwn(vm.$props,prop)){
        vm[prop] = props.prop
    }
  }
 
  return vNode.component;
};

initInstance({message:'hello world'});
```