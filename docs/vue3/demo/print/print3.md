# 拆分重构打印

## 1. 初始化项目
```bash
# 初始化项目
npm create vue@latest ./

# 安装依赖 https://lindell.me/JsBarcode/
npm install jsbarcode

npm install html2canvas

# npm install -D sass-embedded

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

设置 `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
`style.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 2. 代码实现

### main.js

```js
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

```

### main.css

`./assets/main.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## utils

### barcodeGenerator.js

```js
// 条形码生成工具

// 用于跟踪最后使用的条形码后缀
// 注意: 这是模块级变量,在多次调用之间保持状态
let lastUsedSuffix = 0

/**
 * 生成条形码
 * @param {string} prefix - 条形码前缀
 * @param {string} middleType - 中间内容类型 ('date' 或 'custom')
 * @param {string} middleCustom - 自定义中间内容 (当 middleType 为 'custom' 时使用)
 * @param {number} suffixLength - 后缀长度
 * @param {number} startNumber - 起始编号
 * @returns {string} 生成的条形码
 */
export function generateBarcode(prefix, middleType, middleCustom, suffixLength, startNumber) {
  let middleContent = ''
  if (middleType === 'date') {
    // 如果中间内容类型为 'date',使用当前日期
    middleContent = new Date().toISOString().slice(0,10).replace(/-/g,"")
  } else {
    // 否则使用自定义内容
    middleContent = middleCustom
  }

  // 生成指定长度的后缀,不足位数用0填充
  const suffix = startNumber.toString().padStart(suffixLength, '0')

  // 组合前缀、中间内容和后缀
  return `${prefix}${middleContent}${suffix}`
}

/**
 * 重置条形码计数器
 * 将 lastUsedSuffix 重置为 0
 */
export function resetBarcodeCounter() {
  lastUsedSuffix = 0
}

/**
 * 获取当前计数器值
 * @returns {number} 当前的 lastUsedSuffix 值
 */
export function getCurrentCounter() {
  return lastUsedSuffix
}

// 注意: lastUsedSuffix 变量在这个文件中没有被修改
// 可能在其他地方被使用或修改,或者这是遗留代码
// 考虑移除 lastUsedSuffix 相关的逻辑,除非它在项目的其他部分被使用
```
### fakeDataGenerator.js

```js
// 生成随机测试数据
export function generateRandomTestData(type = 'express') {
  if (type === 'express') {
    return {
      sender: `寄件人${Math.floor(Math.random() * 100)}`,
      receiver: `收件人${Math.floor(Math.random() * 100)}`,
      address: `地址${Math.floor(Math.random() * 1000)}号`,
      phone: `1${Math.floor(Math.random() * 10000000000).toString().padStart(10, '0')}`
    };
  } else if (type === 'customerMark') {
    const customerMarks = [
      "客户: 张三公司\n品名: 电子元件\n规格: A型\n数量: 1000pcs",
      "收货方: 李四贸易有限公司\n产品: 服装\n尺寸: M\n总数: 500件",
      "目的地: 王五百货商店\n货物: 日用品\n型号: B-2023\n箱数: 20",
      "订单号: CM20230001\n客户: 赵六科技\n内容物: 芯片\n批次: LOT-2023-06"
    ];
    return {
      customerMark: customerMarks[Math.floor(Math.random() * customerMarks.length)]
    };
  }
}
```

### printHelper.js

```js
// 打印辅助函数

import JsBarcode from 'jsbarcode'

// 导入 getExpressLabelContent 函数
import { getExpressLabelContent } from './printTemplates'

/**
 * 生成打印样式
 * @param {number} width - 标签宽度(mm)
 * @param {number} height - 标签高度(mm)
 * @returns {string} 包含CSS样式的字符串
 */
const getPrintStyles = (width, height) => `
  @page {
    size: ${width}mm ${height}mm;
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
  }
  .label-container {
    width: ${width}mm;
    height: ${height}mm;
    page-break-after: always;
    padding: 5mm;
    box-sizing: border-box;
    position: relative;
    font-size: 12px;
  }
  .label-number {
    position: absolute;
    top: 2mm;
    right: 2mm;
    font-size: 12px;
    font-weight: bold;
  }
  h2 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 14px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    padding: 2mm;
  }
  .barcode-container {
    margin-top: 10px;
    text-align: center;
  }
`

/**
 * 打开新窗口并打印标签
 * 在 openPrintWindow 和 printDirectly 函数中,将 getLabelContent 参数改为可选
 * @param {Object} options - 打印选项
 * @param {number} options.quantity - 打印数量
 * @param {number} options.startNumber - 起始编号
 * @param {Object} options.labelData - 标签数据
 * @param {string} options.labelType - 标签类型
 * @param {number} options.customWidth - 自定义宽度
 * @param {number} options.customHeight - 自定义高度
 * @param {Function} options.generateBarcode - 生成条形码的函数
 * @param {Function} options.getLabelContent - 生成标签内容的函数
 * @param {string} options.title - 打印窗口的标题
 */
export function openPrintWindow({ quantity, startNumber, labelData, labelType, customWidth, customHeight, generateBarcode, getLabelContent = getExpressLabelContent, title }) {
  const printWindow = window.open('', '_blank')
  const { width, height } = getLabelSize(labelType, customWidth, customHeight)

  // 设置打印窗口的内容
  printWindow.document.write(`<html><head><title>${title}</title>`)
  printWindow.document.write('<style>')
  printWindow.document.write(getPrintStyles(width, height))
  printWindow.document.write('</style></head><body>')

  // 生成所有标签
  for (let i = 0; i < quantity; i++) {
    const currentNumber = startNumber + i
    const currentBarcode = generateBarcode(i)
    printWindow.document.write(`
      <div class="label-container">
        <div class="label-number">第 ${i + 1} 张，共 ${quantity} 张</div>
        ${getLabelContent(labelData, currentBarcode)}
      </div>
    `)
  }

  printWindow.document.write('</body></html>')
  printWindow.document.close()

  // 在窗口加载完成后生成条形码并打印
  printWindow.onload = function() {
    const barcodes = printWindow.document.querySelectorAll('#barcode')
    barcodes.forEach((barcode, index) => {
      JsBarcode(barcode, generateBarcode(index), {
        format: "CODE128",
        width: 2,
        height: 50,
        displayValue: true
      })
    })
    
    // 延迟打印以确保条形码已生成
    setTimeout(() => {
      printWindow.print()
      printWindow.onafterprint = function() {
        printWindow.close()
      }
    }, 500)
  }
}

/**
 * 直接打印标签(不打开新窗口)
 * 在 openPrintWindow 和 printDirectly 函数中,将 getLabelContent 参数改为可选
 * @param {Object} options - 打印选项(与openPrintWindow相同)
 */
export function printDirectly({ quantity, startNumber, labelData, labelType, customWidth, customHeight, generateBarcode, getLabelContent = getExpressLabelContent, title }) {
  // 创建隐藏的iframe用于打印
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  document.body.appendChild(iframe)

  const { width, height } = getLabelSize(labelType, customWidth, customHeight)

  const doc = iframe.contentWindow.document
  doc.open()
  doc.write('<html><head><title>打印快递面单</title>')
  doc.write('<style>')
  doc.write(getPrintStyles(width, height))
  doc.write('</style></head><body>')

  // 生成所有标签
  for (let i = 0; i < quantity; i++) {
    const currentNumber = startNumber + i
    const currentBarcode = generateBarcode(i)
    doc.write(`
      <div class="label-container">
        <div class="label-number">第 ${i + 1} 张，共 ${quantity} 张</div>
        ${getLabelContent(labelData, currentBarcode)}
      </div>
    `)
  }

  doc.write('</body></html>')
  doc.close()

  // 在iframe加载完成后生成条形码并打印
  iframe.onload = () => {
    const barcodes = iframe.contentWindow.document.querySelectorAll('#barcode')
    barcodes.forEach((barcode, index) => {
      JsBarcode(barcode, generateBarcode(index), {
        format: "CODE128",
        width: 2,
        height: 50,
        displayValue: true
      })
    })
    
    // 延迟打印以确保条形码已生成
    setTimeout(() => {
      iframe.contentWindow.print()
      setTimeout(() => {
        document.body.removeChild(iframe)
      }, 100)
    }, 500)
  }
}

/**
 * 获取标签尺寸
 * @param {string} labelType - 标签类型
 * @param {number} customWidth - 自定义宽度
 * @param {number} customHeight - 自定义高度
 * @returns {Object} 包含宽度和高度的对象
 */
function getLabelSize(labelType, customWidth, customHeight) {
  switch (labelType) {
    case 'standard':
      return { width: 100, height: 150 }
    case 'thermal':
      return { width: 100, height: 180 }
    case 'custom':
      return { width: customWidth, height: customHeight }
    default:
      return { width: 100, height: 150 }
  }
}

// 移除了 getLabelContent 函数,因为现在它将作为参数传入
```
### printTemplates.js
```js
/**
 * 打印模板生成函数
 *
 * 本模块包含用于生成不同类型打印标签内容的函数。
 * 每个函数接收标签数据和条形码,返回格式化的HTML字符串。
 */

/**
 * 生成快递面单内容
 *
 * @param {Object} labelData - 包含面单信息的对象
 * @param {string} labelData.sender - 寄件人信息
 * @param {string} labelData.receiver - 收件人信息
 * @param {string} labelData.address - 收件地址
 * @param {string} labelData.phone - 联系电话
 * @param {string} barcode - 条形码数据(未在模板中直接使用,但可能用于生成条形码)
 * @returns {string} 格式化的HTML字符串,表示快递面单内容
 */
export const getExpressLabelContent = (labelData, barcode) => `
  <h2 class="text-xl font-bold mb-4 text-center">快递面单</h2>
  <table class="w-full border-collapse">
    <tbody>
      <tr>
        <td class="border p-2 font-semibold">寄件人:</td>
        <td class="border p-2">${labelData.sender}</td>
      </tr>
      <tr>
        <td class="border p-2 font-semibold">收件人:</td>
        <td class="border p-2">${labelData.receiver}</td>
      </tr>
      <tr>
        <td class="border p-2 font-semibold">地址:</td>
        <td class="border p-2">${labelData.address}</td>
      </tr>
      <tr>
        <td class="border p-2 font-semibold">电话:</td>
        <td class="border p-2">${labelData.phone}</td>
      </tr>
    </tbody>
  </table>
  <div class="mt-4 text-center">
    <svg id="barcode"></svg>
  </div>
`;

/**
 * 生成客户唛头内容
 *
 * @param {Object} labelData - 包含唛头信息的对象
 * @param {string} labelData.customerMark - 客户唛头文本内容
 * @param {string} barcode - 条形码数据(未在模板中直接使用,但可能用于生成条形码)
 * @returns {string} 格式化的HTML字符串,表示客户唛头内容
 */
export const getCustomerMarkContent = (labelData, barcode) => `
  <h2 class="text-xl font-bold mb-4 text-center">客户唛头</h2>
  <div class="border p-4 whitespace-pre-wrap">${labelData.customerMark}</div>
  <div class="mt-4 text-center">
    <svg id="barcode"></svg>
  </div>
`;

// 注意: 可以在这里添加更多的标签内容生成函数
// 每个新函数应该遵循类似的模式,接收labelData和barcode参数,返回格式化的HTML字符串

```
## components

### BarcodeSettings.vue
```vue
<!-- 条形码设置组件 -->
<template>
  <div class="space-y-4">
    <div>
      <label for="barcode-prefix" class="block text-sm font-medium text-gray-700">条形码前缀：</label>
      <input id="barcode-prefix" v-model="prefix" @input="updatePrefix" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    </div>
    <div>
      <label for="barcode-middle-type" class="block text-sm font-medium text-gray-700">条形码中间内容：</label>
      <select id="barcode-middle-type" v-model="middleType" @change="updateMiddleType" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
        <option value="date">当前日期</option>
        <option value="custom">自定义</option>
      </select>
    </div>
    <div v-if="middleType === 'custom'">
      <label for="barcode-middle-custom" class="block text-sm font-medium text-gray-700">自定义中间内容：</label>
      <input id="barcode-middle-custom" v-model="middleCustom" @input="updateMiddleCustom" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    </div>
    <div>
      <label for="barcode-suffix-length" class="block text-sm font-medium text-gray-700">条形码后缀长度：</label>
      <input id="barcode-suffix-length" type="number" v-model.number="suffixLength" @input="updateSuffixLength" min="1" step="1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { resetBarcodeCounter } from '../utils/barcodeGenerator'

const props = defineProps(['barcodePrefix', 'barcodeMiddleType', 'barcodeMiddleCustom', 'barcodeSuffixLength'])
const emit = defineEmits(['update:barcodePrefix', 'update:barcodeMiddleType', 'update:barcodeMiddleCustom', 'update:barcodeSuffixLength'])

const prefix = ref(props.barcodePrefix)
const middleType = ref(props.barcodeMiddleType)
const middleCustom = ref(props.barcodeMiddleCustom)
const suffixLength = ref(props.barcodeSuffixLength)

const updatePrefix = () => emit('update:barcodePrefix', prefix.value)
const updateMiddleType = () => emit('update:barcodeMiddleType', middleType.value)
const updateMiddleCustom = () => emit('update:barcodeMiddleCustom', middleCustom.value)
const updateSuffixLength = () => emit('update:barcodeSuffixLength', suffixLength.value)

watch(() => props.barcodePrefix, (newValue) => prefix.value = newValue)
watch(() => props.barcodeMiddleType, (newValue) => middleType.value = newValue)
watch(() => props.barcodeMiddleCustom, (newValue) => middleCustom.value = newValue)
watch(() => props.barcodeSuffixLength, (newValue) => suffixLength.value = newValue)
</script>
```

### BasePrintForm.vue

```vue
<template>
    <form @submit.prevent="submitForm">
        <!-- 使用具名插槽允许子组件插入自定义的表单字段 -->
        <slot name="form-fields"></slot>
        <!-- 通用的提交按钮,文本根据传入的formName属性动态变化 -->
        <button type="submit" class="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            预览{{ formName }}
        </button>
    </form>
</template>

<script setup>
// 定义组件的props
defineProps({
    formName: {
        type: String,
        required: true
    }
})

// 定义组件可以触发的事件
const emit = defineEmits(['preview'])

// 表单提交处理函数
const submitForm = () => {
    // 触发preview事件,通知父组件表单已提交
    emit('preview')
}
</script>
```

### CustomerMarkForm.vue

```vue
<template>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="customerMark" class="block text-sm font-medium text-gray-700">客户唛头：</label>
        <textarea
          id="customerMark"
          v-model="customerMark"
          rows="4"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="请输入客户唛头内容"
        ></textarea>
      </div>
      <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        预览唛头
      </button>
    </form>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { generateRandomTestData } from '../utils/fakeDataGenerator'

  const customerMark = ref('')

  const emit = defineEmits(['previewLabel'])

  const submitForm = () => {
    emit('previewLabel', {
      customerMark: customerMark.value,
    })
  }

  // 填充随机测试数据
  const fillRandomTestData = () => {
    const testData = generateRandomTestData('customerMark')
    customerMark.value = testData.customerMark
  }

  // 组件挂载时填充随机测试数据
  onMounted(() => {
    fillRandomTestData()
  })
  </script>
```

### ExpressLabelForm.vue
```vue
<!-- 表单组件 -->
<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div>
      <label for="sender" class="block text-sm font-medium text-gray-700">寄件人：</label>
      <input id="sender" v-model="sender" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    </div>
    <div>
      <label for="receiver" class="block text-sm font-medium text-gray-700">收件人：</label>
      <input id="receiver" v-model="receiver" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    </div>
    <div>
      <label for="address" class="block text-sm font-medium text-gray-700">地址：</label>
      <input id="address" v-model="address" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    </div>
    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700">电话：</label>
      <input id="phone" v-model="phone" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    </div>
    <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
      预览面单
    </button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { generateRandomTestData } from '../utils/fakeDataGenerator'

const sender = ref('')
const receiver = ref('')
const address = ref('')
const phone = ref('')

const emit = defineEmits(['previewLabel'])

const submitForm = () => {
  emit('previewLabel', {
    sender: sender.value,
    receiver: receiver.value,
    address: address.value,
    phone: phone.value,
  })
}

// 填充随机测试数据
const fillRandomTestData = () => {
  const testData = generateRandomTestData('express')
  sender.value = testData.sender
  receiver.value = testData.receiver
  address.value = testData.address
  phone.value = testData.phone
}

// 组件挂载时填充随机测试数据
onMounted(() => {
  fillRandomTestData()
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
</style>
```
### ExpressLabelPreview.vue
```vue
<!-- 预览组件 -->
<template>
  <div>
    <div ref="previewContent" class="border rounded-lg p-4 mb-4 bg-white" :style="previewStyle" v-html="labelContent"></div>
    <div class="flex space-x-4">
      <div class="flex-1">
        <label for="print-quantity" class="block text-sm font-medium text-gray-700">打印数量：</label>
        <input id="print-quantity" type="number" v-model.number="printQuantity" min="1" step="1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
      </div>
      <div class="flex-1">
        <label for="start-number" class="block text-sm font-medium text-gray-700">起始序号：</label>
        <input id="start-number" type="number" v-model.number="startNumber" min="1" step="1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
      </div>
    </div>
    <div class="flex space-x-4 mt-4">
      <button @click="print" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        打印面单
      </button>
      <button @click="generateImage" class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        生成图片
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import JsBarcode from 'jsbarcode'
import html2canvas from 'html2canvas'
import { getExpressLabelContent, getCustomerMarkContent } from '../utils/printTemplates'

const props = defineProps({
  labelData: {
    type: Object,
    required: true
  },
  labelType: {
    type: String,
    default: 'express'
  },
  customWidth: {
    type: Number,
    default: 100
  },
  customHeight: {
    type: Number,
    default: 150
  }
})

const emit = defineEmits(['print'])

const printQuantity = ref(1)
const startNumber = ref(1)

const print = () => {
  emit('print', { quantity: printQuantity.value, startNumber: startNumber.value })
}

const previewStyle = computed(() => {
  let width, height
  switch (props.labelType) {
    case 'standard':
      width = 100
      height = 150
      break
    case 'thermal':
      width = 100
      height = 180
      break
    case 'custom':
      width = props.customWidth
      height = props.customHeight
      break
    default:
      width = 100
      height = 150
  }
  return {
    width: `${width}mm`,
    height: `${height}mm`,
    border: '1px solid #ccc',
    padding: '5mm',
    fontSize: '12px',
    boxSizing: 'border-box',
    marginBottom: '10px',
    position: 'relative'
  }
})

const labelContent = computed(() => {
  const contentFunction = props.labelType === 'express' ? getExpressLabelContent : getCustomerMarkContent
  return contentFunction(props.labelData, props.labelData.barcode)
})

const generateBarcode = () => {
  const barcodeValue = props.labelData.barcode
  JsBarcode("#barcode", barcodeValue, {
    format: "CODE128",
    width: 2,
    height: 50,
    displayValue: true
  })
}

const previewContent = ref(null)

const generateImage = async () => {
  if (previewContent.value) {
    try {
      const canvas = await html2canvas(previewContent.value)
      const imgData = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = imgData
      link.download = 'label-preview.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('生成图片时出错:', error)
    }
  }
}

onMounted(() => {
  generateBarcode()
})

watch(() => props.labelData, () => {
  generateBarcode()
}, { deep: true })
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
</style>
```

### ExpressLabelPrinter.vue
```vue
<template>
  <div class="relative h-screen overflow-hidden">
    <!-- 主界面 -->
    <div :class="['transition-transform duration-300 ease-in-out', { 'translate-x-[-100%]': showPreview }]">
      <div class="max-w-2xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">打印系统</h1>
        <div class="mb-4">
          <label for="labelType" class="block text-sm font-medium text-gray-700">选择面单类型：</label>
          <select id="labelType" v-model="currentLabelType" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option value="express">快递面单</option>
            <option value="customerMark">客户唛头</option>
          </select>
        </div>
        <component :is="currentForm" @preview-label="previewLabel" />
        <button @click="openSettings" class="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          打开设置
        </button>
      </div>
    </div>

    <!-- 预览界面 -->
    <div :class="['fixed top-0 right-0 w-full h-full bg-white transition-transform duration-300 ease-in-out', { 'translate-x-0': showPreview, 'translate-x-full': !showPreview }]">
      <div class="h-full overflow-y-auto">
        <div class="max-w-2xl mx-auto p-6">
          <button @click="closePreview" class="mb-4 inline-flex items-center text-blue-500 hover:text-blue-600">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            返回打印系统
          </button>
          <ExpressLabelPreview
            v-if="showPreview"
            :labelData="labelData"
            :labelType="currentLabelType"
            :customWidth="customWidth"
            :customHeight="customHeight"
            @print="printLabel"
          />
        </div>
      </div>
    </div>

    <Modal :show="showSettingsModal" @close="closeSettings">
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-3 text-gray-800">打印设置</h2>
          <PrintSettings
            v-model:labelType="labelType"
            v-model:customWidth="customWidth"
            v-model:customHeight="customHeight"
            v-model:testMode="testMode"
          />
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-3 text-gray-800">条形码设置</h2>
          <BarcodeSettings
            v-model:barcodePrefix="barcodePrefix"
            v-model:barcodeMiddleType="barcodeMiddleType"
            v-model:barcodeMiddleCustom="barcodeMiddleCustom"
            v-model:barcodeSuffixLength="barcodeSuffixLength"
          />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ExpressLabelForm from './ExpressLabelForm.vue'
import CustomerMarkForm from './CustomerMarkForm.vue'
import ExpressLabelPreview from './ExpressLabelPreview.vue'
import { openPrintWindow, printDirectly } from '../utils/printHelper'
import { generateBarcode } from '../utils/barcodeGenerator'
import { getExpressLabelContent, getCustomerMarkContent } from '../utils/printTemplates'
import PrintSettings from './PrintSettings.vue'
import BarcodeSettings from './BarcodeSettings.vue'
import Modal from './Modal.vue'

const showPreview = ref(false)
const showSettingsModal = ref(false)
const labelData = ref({})
const labelType = ref('standard')
const customWidth = ref(100)
const customHeight = ref(150)
const testMode = ref(false)
const barcodePrefix = ref('')
const barcodeMiddleType = ref('date')
const barcodeMiddleCustom = ref('')
const barcodeSuffixLength = ref(4)

const currentLabelType = ref('express')

const currentForm = computed(() => {
  return currentLabelType.value === 'express' ? ExpressLabelForm : CustomerMarkForm
})

const getLabelContent = computed(() => {
  return currentLabelType.value === 'express' ? getExpressLabelContent : getCustomerMarkContent
})

const previewLabel = (data) => {
  labelData.value = {
    ...data,
    barcode: generateBarcode(barcodePrefix.value, barcodeMiddleType.value, barcodeMiddleCustom.value, barcodeSuffixLength.value, 1)
  }
  showPreview.value = true
}

const closePreview = () => {
  showPreview.value = false
}

const printLabel = ({ quantity, startNumber }) => {
  const printFunction = testMode.value ? openPrintWindow : printDirectly
  printFunction({
    quantity,
    startNumber,
    labelData: labelData.value,
    labelType: labelType.value,
    customWidth: customWidth.value,
    customHeight: customHeight.value,
    generateBarcode: (index) => generateBarcode(
      barcodePrefix.value, 
      barcodeMiddleType.value, 
      barcodeMiddleCustom.value, 
      barcodeSuffixLength.value,
      startNumber + index
    ),
    getLabelContent: getLabelContent.value,
    title: currentLabelType.value === 'express' ? '打印快递面单' : '打印客户唛头'
  })
}

const openSettings = () => {
  showSettingsModal.value = true
}

const closeSettings = () => {
  showSettingsModal.value = false
}
</script>
```
### Modal.vue
```vue
<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" @click="closeModal">
      <div class="bg-white rounded-lg p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>

  const props = defineProps({
    show: Boolean
  })
  
  const emit = defineEmits(['close'])
  
  const closeModal = () => {
    emit('close')
  }
  </script>
  
  <style scoped lang="scss">
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  ```
### PrintManager.vue
```vue
<template>
    <div>
      <!-- 根据当前表单类型渲染不同的表单组件 -->
      <component :is="currentForm" @submit="handleFormSubmit" />
      
      <!-- 预览和打印按钮 -->
      <button @click="preview">预览</button>
      <button @click="print">打印</button>
      
      <!-- 预览模态框 -->
      <Modal v-if="showPreview">
        <component :is="currentPreview" :labelData="formData" />
      </Modal>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { openPrintWindow } from '@/utils/printHelper'
  import { getExpressLabelContent, getCustomerMarkContent } from '@/utils/printTemplates'
  import ExpressLabelForm from './forms/ExpressLabelForm.vue'
  import CustomerMarkForm from './forms/CustomerMarkForm.vue'
  import ExpressLabelPreview from './previews/ExpressLabelPreview.vue'
  import CustomerMarkPreview from './previews/CustomerMarkPreview.vue'
  import Modal from './Modal.vue'
  
  const formType = ref('express') // 或者从路由参数获取
  const formData = ref({})
  const showPreview = ref(false)
  
  const currentForm = computed(() => {
    return formType.value === 'express' ? ExpressLabelForm : CustomerMarkForm
  })
  
  const currentPreview = computed(() => {
    return formType.value === 'express' ? ExpressLabelPreview : CustomerMarkPreview
  })
  
  const getLabelContent = computed(() => {
    return formType.value === 'express' ? getExpressLabelContent : getCustomerMarkContent
  })
  
  const handleFormSubmit = (data) => {
    formData.value = data
  }
  
  const preview = () => {
    showPreview.value = true
  }
  
  const print = () => {
    openPrintWindow({
      quantity: 1, // 或者从用户输入获取
      startNumber: 1,
      labelData: formData.value,
      labelType: 'standard', // 或者从设置获取
      generateBarcode: (index) => `BARCODE${index}`, // 使用实际的条码生成逻辑
      getLabelContent: getLabelContent.value,
      title: formType.value === 'express' ? '打印快递面单' : '打印客户唛头'
    })
  }
  </script>
  ```

### PrintSettings.vue

```vue
<!-- 打印设置组件 -->
<template>
  <div class="space-y-4">
    <div>
      <label for="label-type" class="block text-sm font-medium text-gray-700">面单类型：</label>
      <select id="label-type" v-model="type" @change="updateType" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
        <option value="standard">标准快递面单 (100mm x 150mm)</option>
        <option value="thermal">热敏快递面单 (100mm x 180mm)</option>
        <option value="custom">自定义尺寸</option>
      </select>
    </div>
    <div v-if="type === 'custom'" class="flex space-x-4">
      <div>
        <label for="custom-width" class="block text-sm font-medium text-gray-700">宽度 (mm)：</label>
        <input id="custom-width" type="number" v-model.number="width" @input="updateWidth" min="1" step="1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
      </div>
      <div>
        <label for="custom-height" class="block text-sm font-medium text-gray-700">高度 (mm)：</label>
        <input id="custom-height" type="number" v-model.number="height" @input="updateHeight" min="1" step="1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
      </div>
    </div>
    <div class="flex items-center">
      <input id="test-mode" type="checkbox" v-model="test" @change="updateTestMode" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
      <label for="test-mode" class="ml-2 block text-sm text-gray-900">测试模式</label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['labelType', 'customWidth', 'customHeight', 'testMode'])
const emit = defineEmits(['update:labelType', 'update:customWidth', 'update:customHeight', 'update:testMode'])

const type = ref(props.labelType)
const width = ref(props.customWidth)
const height = ref(props.customHeight)
const test = ref(props.testMode)

const updateType = () => emit('update:labelType', type.value)
const updateWidth = () => emit('update:customWidth', width.value)
const updateHeight = () => emit('update:customHeight', height.value)
const updateTestMode = () => emit('update:testMode', test.value)

watch(() => props.labelType, (newValue) => type.value = newValue)
watch(() => props.customWidth, (newValue) => width.value = newValue)
watch(() => props.customHeight, (newValue) => height.value = newValue)
watch(() => props.testMode, (newValue) => test.value = newValue)
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
</style>
```