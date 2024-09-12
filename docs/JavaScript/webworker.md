# Web Worker 

Web Worker 是一种在 Web 应用程序中实现多线程的技术。以下是对 Web Worker 的详细介绍：

1. 作用：
    - 允许在后台运行脚本，不影响主线程的性能
    - 执行耗时的计算或处理大量数据，而不会阻塞用户界面
    - 提高 Web 应用的响应性和性能
2. 工作原理：
    - Web Worker 在独立于主线程的后台线程中运行
    - 与主线程通过消息传递进行通信
    - 无法直接访问 DOM 或 window 对象，但可以使用许多 Web API

## 如何使用

```js
//  创建 Worker
const worker = new Worker('worker.js');

// 发送消息给 Worker
worker.postMessage({ type: 'start', data: someData });

// 接收 Worker 的消息
worker.onmessage = function(event) {
    console.log('收到来自 Worker 的消息:', event.data);
};

// 在 Worker 中处理消息
// worker.js
self.onmessage = function(event) {
    const { type, data } = event.data;
    if (type === 'start') {
    // 处理数据
    const result = processData(data);
    self.postMessage(result);
    }
};

// 终止 Worker
worker.terminate();

```
使用 Web Worker 可以显著提高 Web 应用的性能，特别是在处理复杂计算或大量数据时。但需要注意的是，由于 Worker 无法直接操作 DOM，因此需要通过消息传递来更新用户界面。

## 传参

`new Worker('worker.js');`  这里的传参是代表什么

参数代表以下内容：
1. 文件路径：
    - `'worker.js'` 是一个相对路径，指向包含 Web Worker 代码的 JavaScript 文件。
    - 这个文件应该包含 Worker 线程要执行的所有代码。
2. 加载方式：
    - 浏览器会异步加载这个文件，并在单独的线程中执行其中的代码。
    - 文件路径可以是相对于当前页面的路径，也可以是绝对路径。
3. 安全限制：
    - 出于安全考虑，Worker 脚本必须与主页面同源（相同的协议、域名和端口）。
4. 代方案：
   - 除了传递文件路径，还可以使用 Blob URL：
```js
const workerCode = `
// Worker 代码
self.onmessage = function(e) {
    // 处理消息
};
`;
const blob = new Blob([workerCode], {type: 'application/javascript'});
const worker = new Worker(URL.createObjectURL(blob));
```
如果要使用 Web Worker 来处理打印或标签生成等耗时任务，您可能需要创建一个新的 Worker 文件，例如 `printWorker.js`，并将其放在适当的目录中（如 src/workers/）。



说了这么多我还是不明白在什么时候以及如何使用 Worker

我理解您的困惑。让我为您详细解释在您的项目中何时以及如何使用 Web Worker：

1. 何时使用 Web Worker：
    - 当您有耗时的任务需要执行，但不想阻塞主线程时。
    - 在您的打印系统中，生成和处理大量标签可能是一个耗时的操作。
2. 如何使用 Web Worker：
    - 首先，创建一个新文件 `src/workers/printWorker.js`：
    - 然后，在 `ExpressLabelPrinter.vue` 中使用 Worker：

这样，耗时的标签生成过程就会在 Worker 中进行，不会阻塞主线程。主线程只需要处理 UI 交互和最终的打印操作。

请注意，您可能需要调整 `printHelper.js` 中的 `openPrintWindow` 和 `printDirectly` 函数，以接受预生成的内容，而不是每次都重新生成。
这种方法可以显著提高应用的响应性，特别是在需要生成大量标签时。

```js
import { generateBarcode } from '../utils/barcodeGenerator';
import { getExpressLabelContent, getCustomerMarkContent } from '../utils/printTemplates';

self.onmessage = function(event) {
  const { type, data } = event.data;
  if (type === 'print') {
    const { quantity, startNumber, labelData, labelType, customWidth, customHeight, currentLabelType } = data;
    
    const results = [];
    for (let i = 0; i < quantity; i++) {
      const barcode = generateBarcode(
        labelData.barcodePrefix,
        labelData.barcodeMiddleType,
        labelData.barcodeMiddleCustom,
        labelData.barcodeSuffixLength,
        startNumber + i
      );
      
      const getLabelContent = currentLabelType === 'express' ? getExpressLabelContent : getCustomerMarkContent;
      const content = getLabelContent({
        ...labelData,
        barcode,
        labelType,
        customWidth,
        customHeight
      });
      
      results.push(content);
    }
    
    self.postMessage({ type: 'printResult', data: results });
  }
};
```

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
  const printData = {
    quantity,
    startNumber,
    labelData: labelData.value,
    labelType: labelType.value,
    customWidth: customWidth.value,
    customHeight: customHeight.value,
    currentLabelType: currentLabelType.value
  };

  // 使用 Worker 处理打印任务
  printWorker.postMessage({ type: 'print', data: printData });
};

// 处理 Worker 返回的结果
printWorker.onmessage = function(event) {
  const { type, data } = event.data;
  if (type === 'printResult') {
    // 使用返回的结果进行打印
    const printFunction = testMode.value ? openPrintWindow : printDirectly;
    printFunction({
      content: data,
      title: currentLabelType.value === 'express' ? '打印快递面单' : '打印客户唛头'
    });
  }
};

const openSettings = () => {
  showSettingsModal.value = true
}

const closeSettings = () => {
  showSettingsModal.value = false
}

// 添加这行来创建 Worker
const printWorker = new Worker(new URL('../workers/printWorker.js', import.meta.url), { type: 'module' });

// 使用 worker 处理打印任务
printWorker.postMessage({ type: 'print', data: labelData });

printWorker.onmessage = function(event) {
  // 处理 worker 返回的结果
  console.log('打印任务完成:', event.data);
};
</script>
```

## self

这里的 self 是从哪里来的？

在 Web Worker 的上下文中，self 是一个特殊的关键字，它指向 Worker 的全局作用域。这里解释一下：

1. self 的来源：
    - 在 Web Worker 中，self 是自动可用的，不需要导入或声明。
    - 它类似于主线程中的 window 对象，但 Worker 中没有 window。
2. self 的作用：
    - 它允许你访问 Worker 的全局作用域。
    - 你可以通过 self 添加事件监听器，如 self.onmessage。
    - 也可以通过 self.postMessage() 向主线程发送消息。
3. 替代写法：
    - 你也可以直接使用 onmessage 而不是 self.onmessage。
    - 例如，可以这样写：`onmessage = function(event) {// 处理消息};`
4. 为什么使用 self：
    - 使用 self 可以明确表示这是 Worker 的全局作用域。
    - 它可以避免与局部变量名冲突。

在您的 `printWorker.js` 中，`self.onmessage` 用于设置消息处理函数，`self.postMessage()` 用于向主线程发送处理结果。这是 Web Worker 与主线程通信的标准方式。