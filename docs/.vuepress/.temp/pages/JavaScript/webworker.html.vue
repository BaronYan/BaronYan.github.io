<template><div><h1 id="web-worker" tabindex="-1"><a class="header-anchor" href="#web-worker"><span>Web Worker</span></a></h1>
<p>Web Worker 是一种在 Web 应用程序中实现多线程的技术。以下是对 Web Worker 的详细介绍：</p>
<ol>
<li>作用：
<ul>
<li>允许在后台运行脚本，不影响主线程的性能</li>
<li>执行耗时的计算或处理大量数据，而不会阻塞用户界面</li>
<li>提高 Web 应用的响应性和性能</li>
</ul>
</li>
<li>工作原理：
<ul>
<li>Web Worker 在独立于主线程的后台线程中运行</li>
<li>与主线程通过消息传递进行通信</li>
<li>无法直接访问 DOM 或 window 对象，但可以使用许多 Web API</li>
</ul>
</li>
</ol>
<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">//  创建 Worker</span></span>
<span class="line"><span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">'worker.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 发送消息给 Worker</span></span>
<span class="line">worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'start'</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> someData <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 接收 Worker 的消息</span></span>
<span class="line">worker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'收到来自 Worker 的消息:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在 Worker 中处理消息</span></span>
<span class="line"><span class="token comment">// worker.js</span></span>
<span class="line">self<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'start'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理数据</span></span>
<span class="line">    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">processData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    self<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 终止 Worker</span></span>
<span class="line">worker<span class="token punctuation">.</span><span class="token function">terminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Web Worker 可以显著提高 Web 应用的性能，特别是在处理复杂计算或大量数据时。但需要注意的是，由于 Worker 无法直接操作 DOM，因此需要通过消息传递来更新用户界面。</p>
<h2 id="传参" tabindex="-1"><a class="header-anchor" href="#传参"><span>传参</span></a></h2>
<p><code v-pre>new Worker('worker.js');</code>  这里的传参是代表什么</p>
<p>参数代表以下内容：</p>
<ol>
<li>文件路径：
<ul>
<li><code v-pre>'worker.js'</code> 是一个相对路径，指向包含 Web Worker 代码的 JavaScript 文件。</li>
<li>这个文件应该包含 Worker 线程要执行的所有代码。</li>
</ul>
</li>
<li>加载方式：
<ul>
<li>浏览器会异步加载这个文件，并在单独的线程中执行其中的代码。</li>
<li>文件路径可以是相对于当前页面的路径，也可以是绝对路径。</li>
</ul>
</li>
<li>安全限制：
<ul>
<li>出于安全考虑，Worker 脚本必须与主页面同源（相同的协议、域名和端口）。</li>
</ul>
</li>
<li>代方案：
<ul>
<li>除了传递文件路径，还可以使用 Blob URL：</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> workerCode <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">// Worker 代码</span>
<span class="line">self.onmessage = function(e) {</span>
<span class="line">    // 处理消息</span>
<span class="line">};</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>workerCode<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'application/javascript'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要使用 Web Worker 来处理打印或标签生成等耗时任务，您可能需要创建一个新的 Worker 文件，例如 <code v-pre>printWorker.js</code>，并将其放在适当的目录中（如 src/workers/）。</p>
<p>说了这么多我还是不明白在什么时候以及如何使用 Worker</p>
<p>我理解您的困惑。让我为您详细解释在您的项目中何时以及如何使用 Web Worker：</p>
<ol>
<li>何时使用 Web Worker：
<ul>
<li>当您有耗时的任务需要执行，但不想阻塞主线程时。</li>
<li>在您的打印系统中，生成和处理大量标签可能是一个耗时的操作。</li>
</ul>
</li>
<li>如何使用 Web Worker：
<ul>
<li>首先，创建一个新文件 <code v-pre>src/workers/printWorker.js</code>：</li>
<li>然后，在 <code v-pre>ExpressLabelPrinter.vue</code> 中使用 Worker：</li>
</ul>
</li>
</ol>
<p>这样，耗时的标签生成过程就会在 Worker 中进行，不会阻塞主线程。主线程只需要处理 UI 交互和最终的打印操作。</p>
<p>请注意，您可能需要调整 <code v-pre>printHelper.js</code> 中的 <code v-pre>openPrintWindow</code> 和 <code v-pre>printDirectly</code> 函数，以接受预生成的内容，而不是每次都重新生成。
这种方法可以显著提高应用的响应性，特别是在需要生成大量标签时。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> generateBarcode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/barcodeGenerator'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getExpressLabelContent<span class="token punctuation">,</span> getCustomerMarkContent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/printTemplates'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">self<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'print'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> quantity<span class="token punctuation">,</span> startNumber<span class="token punctuation">,</span> labelData<span class="token punctuation">,</span> labelType<span class="token punctuation">,</span> customWidth<span class="token punctuation">,</span> customHeight<span class="token punctuation">,</span> currentLabelType <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> quantity<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> barcode <span class="token operator">=</span> <span class="token function">generateBarcode</span><span class="token punctuation">(</span></span>
<span class="line">        labelData<span class="token punctuation">.</span>barcodePrefix<span class="token punctuation">,</span></span>
<span class="line">        labelData<span class="token punctuation">.</span>barcodeMiddleType<span class="token punctuation">,</span></span>
<span class="line">        labelData<span class="token punctuation">.</span>barcodeMiddleCustom<span class="token punctuation">,</span></span>
<span class="line">        labelData<span class="token punctuation">.</span>barcodeSuffixLength<span class="token punctuation">,</span></span>
<span class="line">        startNumber <span class="token operator">+</span> i</span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token keyword">const</span> getLabelContent <span class="token operator">=</span> currentLabelType <span class="token operator">===</span> <span class="token string">'express'</span> <span class="token operator">?</span> getExpressLabelContent <span class="token operator">:</span> getCustomerMarkContent<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token function">getLabelContent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>labelData<span class="token punctuation">,</span></span>
<span class="line">        barcode<span class="token punctuation">,</span></span>
<span class="line">        labelType<span class="token punctuation">,</span></span>
<span class="line">        customWidth<span class="token punctuation">,</span></span>
<span class="line">        customHeight</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    self<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'printResult'</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> results <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative h-screen overflow-hidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 主界面 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['transition-transform duration-300 ease-in-out', { 'translate-x-[-100%]': showPreview }]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>max-w-2xl mx-auto p-6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-3xl font-bold mb-6 text-center text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打印系统<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>labelType<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block text-sm font-medium text-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>选择面单类型：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>labelType<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentLabelType<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>express<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>快递面单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customerMark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>客户唛头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentForm<span class="token punctuation">"</span></span> <span class="token attr-name">@preview-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>previewLabel<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openSettings<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">          打开设置</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">&lt;!-- 预览界面 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['fixed top-0 right-0 w-full h-full bg-white transition-transform duration-300 ease-in-out', { 'translate-x-0': showPreview, 'translate-x-full': !showPreview }]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-full overflow-y-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>max-w-2xl mx-auto p-6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closePreview<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-4 inline-flex items-center text-blue-500 hover:text-blue-600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-6 h-6 mr-2<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentColor<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 24 24<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">stroke-linecap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linejoin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M10 19l-7-7m0 0l7-7m-7 7h18<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line">            返回打印系统</span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ExpressLabelPreview</span></span>
<span class="line">            <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPreview<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:labelData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>labelData<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:labelType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentLabelType<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:customWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customWidth<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">:customHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customHeight<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">@print</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>printLabel<span class="token punctuation">"</span></span></span>
<span class="line">          <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showSettingsModal<span class="token punctuation">"</span></span> <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closeSettings<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>space-y-6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-xl font-semibold mb-3 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打印设置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PrintSettings</span></span>
<span class="line">            <span class="token attr-name"><span class="token namespace">v-model:</span>labelType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>labelType<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name"><span class="token namespace">v-model:</span>customWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customWidth<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name"><span class="token namespace">v-model:</span>customHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customHeight<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name"><span class="token namespace">v-model:</span>testMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>testMode<span class="token punctuation">"</span></span></span>
<span class="line">          <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-xl font-semibold mb-3 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>条形码设置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BarcodeSettings</span></span>
<span class="line">            <span class="token attr-name"><span class="token namespace">v-model:</span>barcodePrefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>barcodePrefix<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name"><span class="token namespace">v-model:</span>barcodeMiddleType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>barcodeMiddleType<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name"><span class="token namespace">v-model:</span>barcodeMiddleCustom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>barcodeMiddleCustom<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name"><span class="token namespace">v-model:</span>barcodeSuffixLength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>barcodeSuffixLength<span class="token punctuation">"</span></span></span>
<span class="line">          <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> ExpressLabelForm <span class="token keyword">from</span> <span class="token string">'./ExpressLabelForm.vue'</span></span>
<span class="line"><span class="token keyword">import</span> CustomerMarkForm <span class="token keyword">from</span> <span class="token string">'./CustomerMarkForm.vue'</span></span>
<span class="line"><span class="token keyword">import</span> ExpressLabelPreview <span class="token keyword">from</span> <span class="token string">'./ExpressLabelPreview.vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> openPrintWindow<span class="token punctuation">,</span> printDirectly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/printHelper'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> generateBarcode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/barcodeGenerator'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getExpressLabelContent<span class="token punctuation">,</span> getCustomerMarkContent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/printTemplates'</span></span>
<span class="line"><span class="token keyword">import</span> PrintSettings <span class="token keyword">from</span> <span class="token string">'./PrintSettings.vue'</span></span>
<span class="line"><span class="token keyword">import</span> BarcodeSettings <span class="token keyword">from</span> <span class="token string">'./BarcodeSettings.vue'</span></span>
<span class="line"><span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">'./Modal.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> showPreview <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> showSettingsModal <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> labelData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> labelType <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'standard'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> customWidth <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> customHeight <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> testMode <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> barcodePrefix <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> barcodeMiddleType <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'date'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> barcodeMiddleCustom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> barcodeSuffixLength <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> currentLabelType <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> currentForm <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> currentLabelType<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">'express'</span> <span class="token operator">?</span> ExpressLabelForm <span class="token operator">:</span> CustomerMarkForm</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> getLabelContent <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> currentLabelType<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">'express'</span> <span class="token operator">?</span> getExpressLabelContent <span class="token operator">:</span> getCustomerMarkContent</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">previewLabel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  labelData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span>data<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">barcode</span><span class="token operator">:</span> <span class="token function">generateBarcode</span><span class="token punctuation">(</span>barcodePrefix<span class="token punctuation">.</span>value<span class="token punctuation">,</span> barcodeMiddleType<span class="token punctuation">.</span>value<span class="token punctuation">,</span> barcodeMiddleCustom<span class="token punctuation">.</span>value<span class="token punctuation">,</span> barcodeSuffixLength<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  showPreview<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">closePreview</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  showPreview<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">printLabel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> quantity<span class="token punctuation">,</span> startNumber <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> printData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    quantity<span class="token punctuation">,</span></span>
<span class="line">    startNumber<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">labelData</span><span class="token operator">:</span> labelData<span class="token punctuation">.</span>value<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">labelType</span><span class="token operator">:</span> labelType<span class="token punctuation">.</span>value<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customWidth</span><span class="token operator">:</span> customWidth<span class="token punctuation">.</span>value<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customHeight</span><span class="token operator">:</span> customHeight<span class="token punctuation">.</span>value<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">currentLabelType</span><span class="token operator">:</span> currentLabelType<span class="token punctuation">.</span>value</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 使用 Worker 处理打印任务</span></span>
<span class="line">  printWorker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'print'</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> printData <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 处理 Worker 返回的结果</span></span>
<span class="line">printWorker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'printResult'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用返回的结果进行打印</span></span>
<span class="line">    <span class="token keyword">const</span> printFunction <span class="token operator">=</span> testMode<span class="token punctuation">.</span>value <span class="token operator">?</span> openPrintWindow <span class="token operator">:</span> printDirectly<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">content</span><span class="token operator">:</span> data<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> currentLabelType<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">'express'</span> <span class="token operator">?</span> <span class="token string">'打印快递面单'</span> <span class="token operator">:</span> <span class="token string">'打印客户唛头'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">openSettings</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  showSettingsModal<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">closeSettings</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  showSettingsModal<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 添加这行来创建 Worker</span></span>
<span class="line"><span class="token keyword">const</span> printWorker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'../workers/printWorker.js'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'module'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用 worker 处理打印任务</span></span>
<span class="line">printWorker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'print'</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> labelData <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">printWorker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 处理 worker 返回的结果</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'打印任务完成:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="self" tabindex="-1"><a class="header-anchor" href="#self"><span>self</span></a></h2>
<p>这里的 self 是从哪里来的？</p>
<p>在 Web Worker 的上下文中，self 是一个特殊的关键字，它指向 Worker 的全局作用域。这里解释一下：</p>
<ol>
<li>self 的来源：
<ul>
<li>在 Web Worker 中，self 是自动可用的，不需要导入或声明。</li>
<li>它类似于主线程中的 window 对象，但 Worker 中没有 window。</li>
</ul>
</li>
<li>self 的作用：
<ul>
<li>它允许你访问 Worker 的全局作用域。</li>
<li>你可以通过 self 添加事件监听器，如 self.onmessage。</li>
<li>也可以通过 self.postMessage() 向主线程发送消息。</li>
</ul>
</li>
<li>替代写法：
<ul>
<li>你也可以直接使用 onmessage 而不是 self.onmessage。</li>
<li>例如，可以这样写：<code v-pre>onmessage = function(event) {// 处理消息};</code></li>
</ul>
</li>
<li>为什么使用 self：
<ul>
<li>使用 self 可以明确表示这是 Worker 的全局作用域。</li>
<li>它可以避免与局部变量名冲突。</li>
</ul>
</li>
</ol>
<p>在您的 <code v-pre>printWorker.js</code> 中，<code v-pre>self.onmessage</code> 用于设置消息处理函数，<code v-pre>self.postMessage()</code> 用于向主线程发送处理结果。这是 Web Worker 与主线程通信的标准方式。</p>
</div></template>


