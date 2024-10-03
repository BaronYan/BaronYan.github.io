import{_ as s,c as n,o as a,d as p}from"./app-j2fNu37Z.js";const t={},e=p(`<p>要在您的 Laravel 11 + Inertia.js + Vue 3 项目中配置使用阿里云 OSS 上传图片，您需要按照以下步骤进行：</p><h2 id="_1-安装阿里云-oss-sdk" tabindex="-1"><a class="header-anchor" href="#_1-安装阿里云-oss-sdk"><span>1. 安装阿里云 OSS SDK</span></a></h2><p>首先，通过 Composer 安装阿里云 OSS SDK：https://github.com/aliyun/aliyun-oss-php-sdk</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">composer</span> require aliyuncs/oss-sdk-php</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-配置阿里云-oss" tabindex="-1"><a class="header-anchor" href="#_2-配置阿里云-oss"><span>2. 配置阿里云 OSS</span></a></h2><p>在 <code>config/filesystems.php</code> 中配置阿里云 OSS 信息：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;oss&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;endpoint&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;OSS_ENDPOINT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;access_key_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;OSS_ACCESS_KEY_ID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;access_key_secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;OSS_ACCESS_KEY_SECRET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;bucket&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;OSS_BUCKET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;root&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;OSS_ROOT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建-ossservice" tabindex="-1"><a class="header-anchor" href="#_3-创建-ossservice"><span>3. 创建 OssService</span></a></h2><p>创建一个新的服务类来处理 OSS 上传：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Services</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">OSS<span class="token punctuation">\\</span>OssClient</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">OSS<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>OssException</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">OssService</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$ossClient</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$bucket</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">bucket</span> <span class="token operator">=</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ALIYUN_OSS_BUCKET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">ossClient</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OssClient</span><span class="token punctuation">(</span></span>
<span class="line">                <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ALIYUN_OSS_ACCESS_KEY_ID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ALIYUN_OSS_ACCESS_KEY_SECRET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ALIYUN_OSS_ENDPOINT&#39;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">OssException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Exception</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;创建OssClient实例失败: &quot;</span> <span class="token operator">.</span> <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">uploadFile</span><span class="token punctuation">(</span><span class="token variable">$filePath</span><span class="token punctuation">,</span> <span class="token variable">$objectName</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">ossClient</span><span class="token operator">-&gt;</span><span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">bucket</span><span class="token punctuation">,</span> <span class="token variable">$objectName</span><span class="token punctuation">,</span> <span class="token variable">$filePath</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token variable">$result</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;info&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">OssException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Exception</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;文件上传失败: &quot;</span> <span class="token operator">.</span> <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-创建上传控制器" tabindex="-1"><a class="header-anchor" href="#_4-创建上传控制器"><span>4. 创建上传控制器</span></a></h2><p>创建一个控制器来处理文件上传：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>OssService</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Storage</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">UploadController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$ossService</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">OssService</span> <span class="token variable">$ossService</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">ossService</span> <span class="token operator">=</span> <span class="token variable">$ossService</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">upload</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;error&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;没有文件上传&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ALIYUN_OSS_ACCESS_KEY_ID&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ALIYUN_OSS_ACCESS_KEY_SECRET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 使用阿里云 OSS</span></span>
<span class="line">                <span class="token variable">$objectName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;uploads/&#39;</span> <span class="token operator">.</span> <span class="token function">uniqid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;.&#39;</span> <span class="token operator">.</span> <span class="token variable">$file</span><span class="token operator">-&gt;</span><span class="token function">getClientOriginalExtension</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$url</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">ossService</span><span class="token operator">-&gt;</span><span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token operator">-&gt;</span><span class="token function">getPathname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$objectName</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 使用本地存储</span></span>
<span class="line">                <span class="token variable">$path</span> <span class="token operator">=</span> <span class="token variable">$file</span><span class="token operator">-&gt;</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;public/uploads&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$url</span> <span class="token operator">=</span> <span class="token class-name static-context">Storage</span><span class="token operator">::</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$url</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Exception</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;error&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-添加路由" tabindex="-1"><a class="header-anchor" href="#_5-添加路由"><span>5. 添加路由</span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>UploadController</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/upload&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">UploadController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;upload&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;upload&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-前端实现" tabindex="-1"><a class="header-anchor" href="#_6-前端实现"><span>6. 前端实现</span></a></h2><p>在 Vue 组件中，您可以使用 axios 或 fetch 来实现文件上传：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadImage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/*<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imageUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imageUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Uploaded image<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> imageUrl <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">uploadImage</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> file <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;image&#39;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span> formData<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;multipart/form-data&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    imageUrl<span class="token punctuation">.</span>value <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>url<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;上传失败:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，您就完成了阿里云 OSS 上传图片的配置。系统会首先检查是否配置了阿里云 OSS 的密钥，如果配置了就使用 OSS 上传，否则会使用本地存储。</p><p>请确保您的阿里云 OSS 配置正确，并且 Bucket 的访问权限设置适当。同时，记得在生产环境中正确设置 CORS（跨域资源共享）以允许从您的域名访问 OSS 资源。</p>`,20),l=[e];function c(o,i){return a(),n("div",null,l)}const r=s(t,[["render",c],["__file","使用阿里云oss上传图片.html.vue"]]),k=JSON.parse('{"path":"/laravel/%E4%BD%BF%E7%94%A8%E9%98%BF%E9%87%8C%E4%BA%91oss%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"1. 安装阿里云 OSS SDK","slug":"_1-安装阿里云-oss-sdk","link":"#_1-安装阿里云-oss-sdk","children":[]},{"level":2,"title":"2. 配置阿里云 OSS","slug":"_2-配置阿里云-oss","link":"#_2-配置阿里云-oss","children":[]},{"level":2,"title":"3. 创建 OssService","slug":"_3-创建-ossservice","link":"#_3-创建-ossservice","children":[]},{"level":2,"title":"4. 创建上传控制器","slug":"_4-创建上传控制器","link":"#_4-创建上传控制器","children":[]},{"level":2,"title":"5. 添加路由","slug":"_5-添加路由","link":"#_5-添加路由","children":[]},{"level":2,"title":"6. 前端实现","slug":"_6-前端实现","link":"#_6-前端实现","children":[]}],"git":{"updatedTime":1727965212000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"laravel/使用阿里云oss上传图片.md","excerpt":"<p>要在您的 Laravel 11 + Inertia.js + Vue 3 项目中配置使用阿里云 OSS 上传图片，您需要按照以下步骤进行：</p>\\n<h2>1. 安装阿里云 OSS SDK</h2>\\n<p>首先，通过 Composer 安装阿里云 OSS SDK：https://github.com/aliyun/aliyun-oss-php-sdk</p>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\"><span class=\\"token function\\">composer</span> require aliyuncs/oss-sdk-php</span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{r as comp,k as data};
