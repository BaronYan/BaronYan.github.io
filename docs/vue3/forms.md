

在处理前端表单时，经常需要**将表单输入元素与 JavaScript 中的相应状态同步**。
手动连接值和更改事件监听器可能会造成麻烦：

```vue
<input
  :value="text"
  @input="event => text = event.target.value">
```
`v-model` 指令用来将目标内容简化为：

```vue
<input v-model="text">
```
