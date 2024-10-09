<template><div><p>如何防止组合式函数内部的计算属性等值在template 中使用时不会自动解包</p>
<p>确保组合式函数内部的计算属性等值在模板中使用时能够自动解包。这确实是 Vue 3 的默认行为，但有时可能会出现意外情况。让我为您解释一下如何确保自动解包正常工作：</p>
<p>确保正确返回响应式值：</p>
<ul>
<li><strong>组合式函数应该直接返回 ref 或 computed 值，而不是将它们包装在普通对象中</strong>。</li>
<li>确保在组件中直接使用组合式函数返回的值，不要再次包装它们。</li>
<li>如果您使用 toRef 来解构 ref 对象，确保在模板中直接使用解构后的属性。</li>
<li>如果您使用 toRefs 来解构 reactive 对象，确保在模板中直接使用解构后的属性。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> inject<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nanoid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'nanoid'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> model</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用 ref 创建一个响应式引用，初始值为 props.type 或默认值 'text'</span></span>
<span class="line">    <span class="token keyword">const</span> inputType <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">'text'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 计算是否显示清除图标</span></span>
<span class="line">    <span class="token keyword">const</span> showClearIcon <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'props.clearable'</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>clearable<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>clearable<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> model<span class="token punctuation">.</span>value<span class="token operator">?.</span>length <span class="token operator">></span> <span class="token number">0</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 清除输入内容的函数</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">clearInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        model<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 计算是否显示密码切换按钮</span></span>
<span class="line">    <span class="token keyword">const</span> showPasswordToggle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>showPassword <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'password'</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 计算密码可见性图标</span></span>
<span class="line">    <span class="token keyword">const</span> passwordVisibilityIcon <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> inputType<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">'password'</span> <span class="token operator">?</span> <span class="token string">'eye-slash'</span> <span class="token operator">:</span> <span class="token string">'eye'</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 切换密码可见性的函数</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">togglePasswordVisibility</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>showPasswordToggle<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            inputType<span class="token punctuation">.</span>value <span class="token operator">=</span> inputType<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">'password'</span> <span class="token operator">?</span> <span class="token string">'text'</span> <span class="token operator">:</span> <span class="token string">'password'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> sizeClass <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'text-sm'</span><span class="token operator">:</span> props<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token string">'sm'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'text-base'</span><span class="token operator">:</span> props<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token string">'md'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'text-lg'</span><span class="token operator">:</span> props<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token string">'lg'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'formItemId'</span><span class="token punctuation">,</span> <span class="token function">nanoid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 返回组合式函数的结果</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        id<span class="token punctuation">,</span></span>
<span class="line">        inputType<span class="token punctuation">,</span></span>
<span class="line">        showClearIcon<span class="token punctuation">,</span></span>
<span class="line">        showPasswordToggle<span class="token punctuation">,</span></span>
<span class="line">        passwordVisibilityIcon<span class="token punctuation">,</span></span>
<span class="line">        sizeClass<span class="token punctuation">,</span></span>
<span class="line">        clearInput<span class="token punctuation">,</span></span>
<span class="line">        togglePasswordVisibility</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当在组件中使用时，例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">useInput</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> model<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>此时 input 是一个包含多个属性的普通对象,而不是一个包含多个属性的响应式对象。</p>
<p>当在组件中使用时，例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">useInput</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> model<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> showClearIcon<span class="token punctuation">,</span> showPasswordToggle<span class="token punctuation">,</span> passwordVisibilityIcon <span class="token punctuation">}</span> <span class="token operator">=</span> input</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时结构出来的对象是一个响应式对象，而不是普通对象。</p>
</div></template>


