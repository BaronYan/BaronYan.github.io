import{_ as n,c as s,o as a,d as t}from"./app-DowDFyfL.js";const e={},p=t(`<h1 id="laravel-precognition-介绍" tabindex="-1"><a class="header-anchor" href="#laravel-precognition-介绍"><span>Laravel Precognition 介绍</span></a></h1><p>使用 <a href="https://laravel.com/docs/11.x/precognition" target="_blank" rel="noopener noreferrer">Laravel Precognition</a> ，可以为用户提供实时验证体验，而无需在前端 Vue 应用程序中重复验证。</p><h2 id="使用-vue" tabindex="-1"><a class="header-anchor" href="#使用-vue"><span>使用 Vue</span></a></h2><ol><li>首先，要为路由启用 <code>HandlePrecognitiveRequests</code> 中间件。您还应该创建一个表单请求来容纳路由的验证规则：<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Requests<span class="token punctuation">\\</span>StoreUserRequest</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>HandlePrecognitiveRequests</span><span class="token punctuation">;</span></span>
<span class="line">   </span>
<span class="line"><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">StoreUserRequest</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name static-context">HandlePrecognitiveRequests</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>接下来，您应该为 Vue 安装 <code>Laravel Precognition</code> 前端助手<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> laravel-precognition-vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>现在可以使用 Precognition 的 <code>useForm</code> 功能创建表单对象,只需为其提供 <ul><li>HTTP 方法（post）</li><li>目标 URL（/users）</li><li>和初始表单数据</li></ul></li></ol><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"> <span class="token keyword">import</span> <span class="token punctuation">{</span> useForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;laravel-precognition-vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"> <span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"> <span class="token keyword">const</span> <span class="token function-variable function">submit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span></span>
<span class="line">             <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span></span>
<span class="line">             <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.name<span class="token punctuation">&quot;</span></span></span>
<span class="line">             <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.validate(&#39;name&#39;)<span class="token punctuation">&quot;</span></span></span>
<span class="line">         <span class="token punctuation">/&gt;</span></span></span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.invalid(&#39;name&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">             {{ form.errors.name }}</span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span></span>
<span class="line">             <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span></span>
<span class="line">             <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span></span>
<span class="line">             <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.email<span class="token punctuation">&quot;</span></span></span>
<span class="line">             <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.validate(&#39;email&#39;)<span class="token punctuation">&quot;</span></span></span>
<span class="line">         <span class="token punctuation">/&gt;</span></span></span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.invalid(&#39;email&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">             {{ form.errors.email }}</span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.processing<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">             Create User</span>
<span class="line">         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，当用户填写表单时，Precognition 将提供由路由表单请求中的验证规则支持的实时验证输出。</p><p>当表单的输入发生变化时，将向您的 Laravel 应用程序发送一个去抖动的“预认知”验证请求。您可以通过调用表单的<code>setValidationTimeout</code>函数来配置去抖动超时：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">form<span class="token punctuation">.</span><span class="token function">setValidationTimeout</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>当验证请求正在进行时，表单的 <code>validating</code> 属性将是 <code>true</code></strong>：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.validating<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    Validating...</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>验证请求或表单提交期间返回的任何验证错误都将自动填充表单的 <code>errors</code> 对象</strong>：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.invalid(&#39;email&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    {{ form.errors.email }}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>您可以使用表单的 <code>hasErrors</code> 属性来确定表单是否有任何错误</strong>：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.hasErrors<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!-- ... --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>您还可以通过将输入的名称分别传递给表单 <code>valid</code> 和 <code>invalid</code> 函数来确定输入是否通过验证或失败</strong>：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.valid(&#39;email&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    ✅</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.invalid(&#39;email&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    ❌</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表单输入只有在发生变化并且收到验证响应后才会显示为有效或无效。</p><h3 id="使用-vue-和-inertia" tabindex="-1"><a class="header-anchor" href="#使用-vue-和-inertia"><span>使用 Vue 和 Inertia</span></a></h3><p>将 Vue 与 Inertia 结合使用时，需要安装与 Inertia 兼容的 Precognition 库：<code>yarn add laravel-precognition-inertia</code>。</p>`,19),l=[p];function c(o,i){return a(),s("div",null,l)}const r=n(e,[["render",c],["__file","precognition.html.vue"]]),d=JSON.parse(`{"path":"/laravel/precognition.html","title":"Laravel Precognition 介绍","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"使用 Vue","slug":"使用-vue","link":"#使用-vue","children":[{"level":3,"title":"使用 Vue 和 Inertia","slug":"使用-vue-和-inertia","link":"#使用-vue-和-inertia","children":[]}]}],"git":{"updatedTime":1722820331000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":2}]},"filePathRelative":"laravel/precognition.md","excerpt":"\\n<p>使用 <a href=\\"https://laravel.com/docs/11.x/precognition\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Laravel Precognition</a> ，可以为用户提供实时验证体验，而无需在前端 Vue 应用程序中重复验证。</p>\\n<h2>使用 Vue</h2>\\n<ol>\\n<li>首先，要为路由启用 <code>HandlePrecognitiveRequests</code> 中间件。您还应该创建一个表单请求来容纳路由的验证规则：<div class=\\"language-php\\" data-highlighter=\\"prismjs\\" data-ext=\\"php\\" data-title=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">use</span> <span class=\\"token package\\">App<span class=\\"token punctuation\\">\\\\</span>Http<span class=\\"token punctuation\\">\\\\</span>Requests<span class=\\"token punctuation\\">\\\\</span>StoreUserRequest</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Illuminate<span class=\\"token punctuation\\">\\\\</span>Foundation<span class=\\"token punctuation\\">\\\\</span>Http<span class=\\"token punctuation\\">\\\\</span>Middleware<span class=\\"token punctuation\\">\\\\</span>HandlePrecognitiveRequests</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">   </span>\\n<span class=\\"line\\"><span class=\\"token class-name static-context\\">Route</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">post</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'/users'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name type-declaration\\">StoreUserRequest</span> <span class=\\"token variable\\">$request</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token comment\\">// ...</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">middleware</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token class-name static-context\\">HandlePrecognitiveRequests</span><span class=\\"token operator\\">::</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre></div></li>\\n<li>接下来，您应该为 Vue 安装 <code>Laravel Precognition</code> 前端助手<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\"><span class=\\"token function\\">yarn</span> <span class=\\"token function\\">add</span> laravel-precognition-vue</span>\\n<span class=\\"line\\"></span></code></pre></div></li>\\n<li>现在可以使用 Precognition 的 <code>useForm</code> 功能创建表单对象,只需为其提供\\n<ul>\\n<li>HTTP 方法（post）</li>\\n<li>目标 URL（/users）</li>\\n<li>和初始表单数据</li>\\n</ul>\\n</li>\\n</ol>"}`);export{r as comp,d as data};