import{_ as n,c as s,o as a,e as p}from"./app-BDRY8CIz.js";const t={},e=p(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> provide<span class="token punctuation">,</span> watchEffect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> formRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">labelPosition</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">labelWidth</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">labelSuffix</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">//#region 表单验证</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>useAsyncValidator<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/integrations/useAsyncValidator&#39;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>pass<span class="token punctuation">,</span> errorFields<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAsyncValidator</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>model<span class="token punctuation">,</span> props<span class="token punctuation">.</span>rules<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> formProps <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">labelPosition</span><span class="token operator">:</span> props<span class="token punctuation">.</span>labelPosition<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">labelWidth</span><span class="token operator">:</span> props<span class="token punctuation">.</span>labelWidth<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">labelSuffix</span><span class="token operator">:</span> props<span class="token punctuation">.</span>labelSuffix<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">errorFields</span><span class="token operator">:</span> errorFields</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">validator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> pass<span class="token punctuation">.</span>value</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 通过 defineExpose 编译器宏来显式指定在 &lt;script setup&gt; 组件中要暴露出去的属性</span></span>
<span class="line"><span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    validator</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//#endregion</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//#region 设置 label 宽度</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">setLabelWidth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>labelPosition <span class="token operator">===</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>labelWidth <span class="token operator">===</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> maxLabelWidth <span class="token operator">=</span> <span class="token function">calculateMaxLabelWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>maxLabelWidth <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            formProps<span class="token punctuation">.</span>labelWidth <span class="token operator">=</span> maxLabelWidth <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">calculateMaxLabelWidth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> maxLabelWidth <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>formRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        formRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> width <span class="token operator">=</span> el<span class="token punctuation">.</span>offsetWidth</span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">&gt;</span> maxLabelWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                maxLabelWidth <span class="token operator">=</span> width</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> maxLabelWidth</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setLabelWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setLabelWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//#endregion</span></span>
<span class="line"></span>
<span class="line"><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;formProps&#39;</span><span class="token punctuation">,</span> formProps<span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function l(c,i){return a(),s("div",null,o)}const r=n(t,[["render",l],["__file","form_components.html.vue"]]),k=JSON.parse(`{"path":"/vue3/form_components.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"vue3/form_components.md","excerpt":"<div class=\\"language-vue\\" data-highlighter=\\"prismjs\\" data-ext=\\"vue\\" data-title=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>form</span> <span class=\\"token attr-name\\">ref</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>formRef<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>slot</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>slot</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>form</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span>ref<span class=\\"token punctuation\\">,</span> reactive<span class=\\"token punctuation\\">,</span> onMounted<span class=\\"token punctuation\\">,</span> provide<span class=\\"token punctuation\\">,</span> watchEffect<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> formRef <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> props <span class=\\"token operator\\">=</span> <span class=\\"token function\\">defineProps</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">model</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> Object<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token function-variable function\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">labelPosition</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> String<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'top'</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token function-variable function\\">validator</span><span class=\\"token operator\\">:</span> <span class=\\"token parameter\\">value</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'top'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'left'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">includes</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">labelWidth</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> String<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'auto'</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">labelSuffix</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> String<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">''</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">rules</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> Object<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token function-variable function\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">//#region 表单验证</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span>useAsyncValidator<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'@vueuse/integrations/useAsyncValidator'</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span>pass<span class=\\"token punctuation\\">,</span> errorFields<span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">useAsyncValidator</span><span class=\\"token punctuation\\">(</span>props<span class=\\"token punctuation\\">.</span>model<span class=\\"token punctuation\\">,</span> props<span class=\\"token punctuation\\">.</span>rules<span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> formProps <span class=\\"token operator\\">=</span> <span class=\\"token function\\">reactive</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">labelPosition</span><span class=\\"token operator\\">:</span> props<span class=\\"token punctuation\\">.</span>labelPosition<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">labelWidth</span><span class=\\"token operator\\">:</span> props<span class=\\"token punctuation\\">.</span>labelWidth<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">labelSuffix</span><span class=\\"token operator\\">:</span> props<span class=\\"token punctuation\\">.</span>labelSuffix<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">errorFields</span><span class=\\"token operator\\">:</span> errorFields</span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">validator</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">return</span> pass<span class=\\"token punctuation\\">.</span>value</span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">// 通过 defineExpose 编译器宏来显式指定在 &lt;script setup&gt; 组件中要暴露出去的属性</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">defineExpose</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    validator</span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">//#endregion</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">//#region 设置 label 宽度</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">setLabelWidth</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>props<span class=\\"token punctuation\\">.</span>labelPosition <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'left'</span> <span class=\\"token operator\\">&amp;&amp;</span> props<span class=\\"token punctuation\\">.</span>labelWidth <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'auto'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">const</span> maxLabelWidth <span class=\\"token operator\\">=</span> <span class=\\"token function\\">calculateMaxLabelWidth</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>maxLabelWidth <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">            formProps<span class=\\"token punctuation\\">.</span>labelWidth <span class=\\"token operator\\">=</span> maxLabelWidth <span class=\\"token operator\\">+</span> <span class=\\"token string\\">'px'</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">calculateMaxLabelWidth</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">let</span> maxLabelWidth <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>formRef<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        formRef<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelectorAll</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'label'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">el</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">            <span class=\\"token keyword\\">const</span> width <span class=\\"token operator\\">=</span> el<span class=\\"token punctuation\\">.</span>offsetWidth</span>\\n<span class=\\"line\\">            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>width <span class=\\"token operator\\">&gt;</span> maxLabelWidth<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">                maxLabelWidth <span class=\\"token operator\\">=</span> width</span>\\n<span class=\\"line\\">            <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">return</span> maxLabelWidth</span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">onMounted</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token function\\">setLabelWidth</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">watchEffect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token function\\">setLabelWidth</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">//#endregion</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token function\\">provide</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'formProps'</span><span class=\\"token punctuation\\">,</span> formProps<span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>scss<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">scoped</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre></div>"}`);export{r as comp,k as data};
