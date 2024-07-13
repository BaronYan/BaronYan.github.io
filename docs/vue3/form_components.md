
```vue
<template>
    <form ref="formRef">
        <slot></slot>
    </form>
</template>

<script setup>
import {ref, reactive, onMounted, provide, watchEffect} from 'vue'

const formRef = ref(null)

const props = defineProps({
    model: {
        type: Object,
        default: () => ({})
    },
    labelPosition: {
        type: String,
        default: 'top',
        validator: value => ['top', 'left'].includes(value)
    },
    labelWidth: {
        type: String,
        default: 'auto'
    },
    labelSuffix: {
        type: String,
        default: ''
    },
    rules: {
        type: Object,
        default: () => ({})
    }
})



//#region 表单验证
import {useAsyncValidator} from '@vueuse/integrations/useAsyncValidator'
const {pass, errorFields} = useAsyncValidator(props.model, props.rules)
const formProps = reactive({
    labelPosition: props.labelPosition,
    labelWidth: props.labelWidth,
    labelSuffix: props.labelSuffix,
    errorFields: errorFields
})
const validator = () => {
    return pass.value
}
// 通过 defineExpose 编译器宏来显式指定在 <script setup> 组件中要暴露出去的属性
defineExpose({
    validator
})
//#endregion

//#region 设置 label 宽度
const setLabelWidth = () => {
    if (props.labelPosition === 'left' && props.labelWidth === 'auto') {
        const maxLabelWidth = calculateMaxLabelWidth()
        if (maxLabelWidth > 0) {
            formProps.labelWidth = maxLabelWidth + 'px'
        }
    }
}
const calculateMaxLabelWidth = () => {
    let maxLabelWidth = 0
    if (formRef.value) {
        formRef.value.querySelectorAll('label').forEach(el => {
            const width = el.offsetWidth
            if (width > maxLabelWidth) {
                maxLabelWidth = width
            }
        })
    }
    return maxLabelWidth
}
onMounted(() => {
    setLabelWidth()
})
watchEffect(() => {
    setLabelWidth()
})
//#endregion

provide('formProps', formProps)
</script>

<style lang="scss" scoped>

</style>

```