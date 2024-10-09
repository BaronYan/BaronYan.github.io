如何防止组合式函数内部的计算属性等值在template 中使用时不会自动解包

确保组合式函数内部的计算属性等值在模板中使用时能够自动解包。这确实是 Vue 3 的默认行为，但有时可能会出现意外情况。让我为您解释一下如何确保自动解包正常工作：

确保正确返回响应式值：
  - **组合式函数应该直接返回 ref 或 computed 值，而不是将它们包装在普通对象中**。
  - 确保在组件中直接使用组合式函数返回的值，不要再次包装它们。
  - 如果您使用 toRef 来解构 ref 对象，确保在模板中直接使用解构后的属性。
  - 如果您使用 toRefs 来解构 reactive 对象，确保在模板中直接使用解构后的属性。

```js
import { computed, ref, inject} from 'vue'
import { nanoid } from 'nanoid'

export const useInput = (props, model) => {
    // 使用 ref 创建一个响应式引用，初始值为 props.type 或默认值 'text'
    const inputType = ref(props.type || 'text')

    // 计算是否显示清除图标
    const showClearIcon = computed(() => {
        console.log('props.clearable', props.clearable);
        if (props.clearable) {
            return model.value?.length > 0
        }
        return false
    })
    
    // 清除输入内容的函数
    const clearInput = () => {
        model.value = ''
    }

    // 计算是否显示密码切换按钮
    const showPasswordToggle = computed(() => props.showPassword && props.type === 'password')
    
    // 计算密码可见性图标
    const passwordVisibilityIcon = computed(() => inputType.value === 'password' ? 'eye-slash' : 'eye')
    
    // 切换密码可见性的函数
    const togglePasswordVisibility = () => {
        if (showPasswordToggle.value) {
            inputType.value = inputType.value === 'password' ? 'text' : 'password'
        }
    }

    const sizeClass = computed(() => ({
        'text-sm': props.size === 'sm',
        'text-base': props.size === 'md',
        'text-lg': props.size === 'lg'
    }))

    const id = inject('formItemId', nanoid())

    // 返回组合式函数的结果
    return {
        id,
        inputType,
        showClearIcon,
        showPasswordToggle,
        passwordVisibilityIcon,
        sizeClass,
        clearInput,
        togglePasswordVisibility
    }
}
```

当在组件中使用时，例如：
```js
const input = useInput(props, model)
```
此时 input 是一个包含多个属性的普通对象,而不是一个包含多个属性的响应式对象。

当在组件中使用时，例如：
```js
const input = useInput(props, model)
const { showClearIcon, showPasswordToggle, passwordVisibilityIcon } = input
```
此时结构出来的对象是一个响应式对象，而不是普通对象。