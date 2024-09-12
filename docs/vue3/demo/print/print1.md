

# 快递面单打印雏形

## 1. 初始化项目
```bash
# 初始化项目
npm create vue@latest ./

# 安装依赖 https://lindell.me/JsBarcode/
npm install jsbarcode

# npm install -D sass-embedded
```

## 2. 完整代码

### 2.1 main.js
`src/main.js`
```js
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

### 2.2 App.vue

`src/App.vue`
```vue
<template>
  <div id="app">
    <ExpressLabelPrinter />
  </div>
</template>

<script setup>
import ExpressLabelPrinter from './components/ExpressLabelPrinter.vue'
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media print {
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    margin-top: 0;
  }

  @page {
    margin: 0;
  }
}
</style>
```
### 2.3 ExpressLabelForm.vue
`src/components/ExpressLabelForm.vue`

```vue
<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="sender">寄件人:</label>
        <input id="sender" v-model="sender" required>
      </div>
      <div>
        <label for="receiver">收件人:</label>
        <input id="receiver" v-model="receiver" required>
      </div>
      <div>
        <label for="address">地址:</label>
        <input id="address" v-model="address" required>
      </div>
      <div>
        <label for="phone">电话:</label>
        <input id="phone" v-model="phone" required>
      </div>
      <button type="submit">预览面单</button>
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
      phone: phone.value
    })
  }
  
  // 填充随机测试数据
  const fillRandomTestData = () => {
    const testData = generateRandomTestData()
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
  
  <style scoped>
  form div {
    margin-bottom: 10px;
  }
  label {
    display: inline-block;
    width: 80px;
  }
  input {
    width: 200px;
  }
  </style>
  ```
  ### 2.4 ExpressLabelPreview.vue

  `src/components/ExpressLabelPreview.vue`

```vue
<template>
    <div>
      <div class="preview" :style="previewStyle">
        <h2>快递面单</h2>
        <table>
          <tbody>
            <tr>
            <td><strong>寄件人:</strong></td>
            <td>{{ labelData.sender }}</td>
          </tr>
          <tr>
            <td><strong>收件人:</strong></td>
            <td>{{ labelData.receiver }}</td>
          </tr>
          <tr>
            <td><strong>地址:</strong></td>
            <td>{{ labelData.address }}</td>
          </tr>
          <tr>
            <td><strong>电话:</strong></td>
            <td>{{ labelData.phone }}</td>
          </tr>
          </tbody>
        </table>
        <div class="barcode-container">
          <svg id="barcode"></svg>
        </div>
      </div>
      <div class="no-print">
        <label for="print-quantity">打印数量：</label>
        <input id="print-quantity" type="number" v-model.number="printQuantity" min="1" step="1">
        <label for="start-number">起始序号：</label>
        <input id="start-number" type="number" v-model.number="startNumber" min="1" step="1">
        <button @click="print">打印面单</button>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, computed, onMounted, watch } from 'vue'
import JsBarcode from 'jsbarcode'

const props = defineProps({
  labelData: {
    type: Object,
    required: true
  },
  labelType: {
    type: String,
    default: 'standard'
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
    padding: '10px',
    fontSize: '12px',
    boxSizing: 'border-box',
    marginBottom: '10px'
  }
})

const generateBarcode = () => {
  const barcodeValue = props.labelData.barcode || `${props.labelData.phone}${Date.now().toString().slice(-6)}`
  JsBarcode("#barcode", barcodeValue, {
    format: "CODE128",
    width: 2,
    height: 50,
    displayValue: true
  })
}

onMounted(() => {
  generateBarcode()
})

watch(() => props.labelData, () => {
  generateBarcode()
}, { deep: true })
  </script>
  
  <style scoped>
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
    padding: 5px;
    border: 1px solid #ccc;
  }
  
  .no-print {
    margin-top: 10px;
  }
  
  input[type="number"] {
    width: 50px;
    margin-right: 10px;
  }
  
  @media print {
    .preview {
      border: none !important;
      padding: 0 !important;
    }
  
    table {
      border: 1px solid #000;
    }
  
    td {
      border: 1px solid #000;
    }
  
    .no-print {
      display: none;
    }
  }

  input[type="number"] {
  width: 50px;
  margin-right: 10px;
}

.barcode-container {
  margin-top: 10px;
  text-align: center;
}
  </style>
```
 ### 2.5 ExpressLabelPrinter.vue

  `src/components/ExpressLabelPrinter.vue`

  ```vue
<template>
    <div class="express-label">
      <div class="no-print">
        <h1>快递面单打印</h1>
        <ExpressLabelForm @preview-label="previewLabel" />
        <div>
          <label for="label-type">面单类型：</label>
          <select id="label-type" v-model="labelType">
            <option value="standard">标准快递面单 (100mm x 150mm)</option>
            <option value="thermal">热敏快递面单 (100mm x 180mm)</option>
            <option value="custom">自定义尺寸</option>
          </select>
        </div>
        <div v-if="labelType === 'custom'">
          <label for="custom-width">宽度 (mm)：</label>
          <input id="custom-width" type="number" v-model="customWidth" min="1" step="1">
          <label for="custom-height">高度 (mm)：</label>
          <input id="custom-height" type="number" v-model="customHeight" min="1" step="1">
        </div>
        <!-- 添加测试模式开关 -->
        <div>
          <label for="test-mode">测试模式：</label>
          <input id="test-mode" type="checkbox" v-model="testMode">
        </div>
      </div>
      <ExpressLabelPreview
        v-if="showPreview"
        :labelData="labelData"
        :labelType="labelType"
        :customWidth="customWidth"
        :customHeight="customHeight"
        @print="printLabel"
      />
    </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue'
import ExpressLabelForm from './ExpressLabelForm.vue'
import ExpressLabelPreview from './ExpressLabelPreview.vue'
import JsBarcode from 'jsbarcode'
  
  const showPreview = ref(false)
  const labelData = ref({})
  const labelType = ref('standard')
  const customWidth = ref(100)
  const customHeight = ref(150)
  const testMode = ref(true) // 默认开启测试模式
  
  const labelSize = computed(() => {
    switch (labelType.value) {
      case 'standard':
        return { width: 100, height: 150 }
      case 'thermal':
        return { width: 100, height: 180 }
      case 'custom':
        return { width: customWidth.value, height: customHeight.value }
      default:
        return { width: 100, height: 150 }
    }
  })
  
  const previewLabel = (data) => {
    labelData.value = data
    showPreview.value = true
  }
  
  const printLabel = ({ quantity, startNumber }) => {
    if (testMode.value) {
      // 测试模式：打开新窗口
      openPrintWindow({ quantity, startNumber })
    } else {
      // 非测试模式：直接打印
      printDirectly({ quantity, startNumber })
    }
  }
  
  const openPrintWindow = ({ quantity, startNumber }) => {
    const printWindow = window.open('', '_blank')
  
    printWindow.document.write('<html><head><title>打印快递面单</title>')
    printWindow.document.write('<style>')
    printWindow.document.write(`
      @page {
        size: ${labelSize.value.width}mm ${labelSize.value.height}mm;
        margin: 0;
      }
      body {
        margin: 0;
        padding: 0;
      }
      .label-container {
        width: ${labelSize.value.width}mm;
        height: ${labelSize.value.height}mm;
        page-break-after: always;
        padding: 5mm;
        box-sizing: border-box;
        position: relative;
      }
      .label-number {
        position: absolute;
        top: 2mm;
        right: 2mm;
        font-size: 12px;
        font-weight: bold;
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
    `)
    printWindow.document.write('</style></head><body>')
  
    const labelContent = document.querySelector('.preview').innerHTML
  
    const totalLabels = quantity // 总标签数量

    for (let i = 0; i < quantity; i++) {
      const currentNumber = startNumber + i
      printWindow.document.write(`
        <div class="label-container">
          <div class="label-number">第 ${currentNumber} 张，共 ${totalLabels} 张</div>
          ${labelContent}
        </div>
      `)
    }
  
    printWindow.document.write('</body></html>')
    printWindow.document.close()
  
    printWindow.onload = function() {
      // 为每个标签生成条形码
      const barcodes = printWindow.document.querySelectorAll('#barcode')
      barcodes.forEach((barcode, index) => {
        const barcodeValue = labelData.value.barcode || `${labelData.value.phone}${Date.now().toString().slice(-6)}${index}`
        JsBarcode(barcode, barcodeValue, {
          format: "CODE128",
          width: 2,
          height: 50,
          displayValue: true
        })
      })
      
      setTimeout(() => {
        printWindow.print()
        printWindow.onafterprint = function() {
          printWindow.close()
        }
      }, 500) // 给一些时间让条形码生成
    }
  }
  
  const printDirectly = ({ quantity, startNumber }) => {
    // 创建一个隐藏的 iframe 来加载打印内容
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    document.body.appendChild(iframe)
  
    const doc = iframe.contentWindow.document
    doc.open()
    doc.write('<html><head><title>打印快递面单</title>')
    doc.write('<style>')
    // ... 添加与 openPrintWindow 函数中相同的样式 ...
    doc.write('</style></head><body>')
  
    const labelContent = document.querySelector('.preview').innerHTML
    const totalLabels = quantity

    for (let i = 0; i < quantity; i++) {
      const currentNumber = startNumber + i
      doc.write(`
        <div class="label-container">
          <div class="label-number">第 ${currentNumber} 张，共 ${totalLabels} 张</div>
          ${labelContent}
        </div>
      `)
    }
  
    doc.write('</body></html>')
    doc.close()
  
    // 在 iframe 加载完成后生成条形码并打印
    iframe.onload = () => {
      const barcodes = iframe.contentWindow.document.querySelectorAll('#barcode')
      barcodes.forEach((barcode, index) => {
        const barcodeValue = labelData.value.barcode || `${labelData.value.phone}${Date.now().toString().slice(-6)}${index}`
        JsBarcode(barcode, barcodeValue, {
          format: "CODE128",
          width: 2,
          height: 50,
          displayValue: true
        })
      })
      
      setTimeout(() => {
        iframe.contentWindow.print()
        // 打印完成后移除 iframe
        setTimeout(() => {
          document.body.removeChild(iframe)
        }, 100)
      }, 500) // 给一些时间让条形码生成
    }
  }
  </script>
  
  <style scoped>
  .express-label {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }
  
  @media print {
    .no-print {
      display: none;
    }
    
    .express-label {
      max-width: 100%;
      padding: 0;
    }
  }
  </style>

  ```
   ### 2.6 fakeDataGenerator.js

  `src/utils/fakeDataGenerator.js`

```js
// 生成随机测试数据
export function generateRandomTestData() {
const names = ['张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十']
const cities = ['北京市', '上海市', '广州市', '深圳市', '成都市', '杭州市', '武汉市', '南京市']
const districts = ['朝阳区', '浦东新区', '天河区', '南山区', '武侯区', '西湖区', '江汉区', '鼓楼区']
const streets = ['某某路', '某某街', '某某大道', '某某巷']

const sender = names[Math.floor(Math.random() * names.length)]
const receiver = names[Math.floor(Math.random() * names.length)]

const city = cities[Math.floor(Math.random() * cities.length)]
const district = districts[Math.floor(Math.random() * districts.length)]
const street = streets[Math.floor(Math.random() * streets.length)]
const houseNumber = Math.floor(Math.random() * 1000) + 1
const address = `${city}${district}${street}${houseNumber}号`

const phone = `1${Math.floor(Math.random() * 9 + 1)}${Array(9).fill(0).map(() => Math.floor(Math.random() * 10)).join('')}`

return {
sender,
receiver,
address,
phone
}
}
```