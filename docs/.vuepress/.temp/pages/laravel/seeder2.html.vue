<template><div><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">Database<span class="token punctuation">\</span>Seeders</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Manager</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Company</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeder</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Facades<span class="token punctuation">\</span>Hash</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Str</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">ManagerConfigSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Run the database seeds.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$companies</span> <span class="token operator">=</span> <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$companies</span><span class="token operator">-></span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">command</span><span class="token operator">-></span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'没有找到公司记录。请先运行 CompanySeeder。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$company</span> <span class="token operator">=</span> <span class="token variable">$companies</span><span class="token operator">-></span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token class-name static-context">Manager</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'管理员'</span> <span class="token operator">.</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'email'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'manager'</span> <span class="token operator">.</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'@example.com'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'password'</span> <span class="token operator">=></span> <span class="token class-name static-context">Hash</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'company_id'</span> <span class="token operator">=></span> <span class="token variable">$company</span><span class="token operator">-></span><span class="token property">id</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'remember_token'</span> <span class="token operator">=></span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">command</span><span class="token operator">-></span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'成功创建了10条Manager记录。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个seeder的实现做了以下几点:</p>
<ol>
<li>首先获取所有的Company记录。</li>
<li>检查是否存在 Company 记录。如果没有,输出提示信息并退出。</li>
<li>使用 for 循环创建10条 Manager 记录。</li>
<li>对于每条记录,随机选择一个 Company。</li>
<li>创建 Manager 记录,包括名称、邮箱、密码(使用<code v-pre>Hash::make</code>加密)、公司ID和<code v-pre>remember_token</code>。</li>
<li>最后输出成功信息。</li>
</ol>
<p>要运行这个seeder,您可以使用以下命令:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">php artisan db:seed <span class="token parameter variable">--class</span><span class="token operator">=</span>ManagerConfigSeeder</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>请注意,在运行这个seeder之前,确保已经运行了CompanySeeder,以确保数据库中有Company记录。</p>
<p>随机生成5个Company</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">Database<span class="token punctuation">\</span>Seeders</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Company</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeder</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Str</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Faker<span class="token punctuation">\</span>Factory</span> <span class="token keyword">as</span> Faker<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CompanySeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Run the database seeds.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        </span>
<span class="line">        <span class="token variable">$companyNames</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'速达物流'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'环球快递'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'星际运输'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'海陆空物流'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'智能配送'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token variable">$faker</span> <span class="token operator">=</span> <span class="token class-name static-context">Faker</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'zh_CN'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$companyNames</span> <span class="token keyword">as</span> <span class="token variable">$name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token variable">$name</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'suffix_domain'</span> <span class="token operator">=></span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">slug</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token comment">// 'description' => $name . '是一家专业的物流公司',</span></span>
<span class="line">                <span class="token string single-quoted-string">'description'</span> <span class="token operator">=></span> <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">paragraph</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// 使用$faker->paragraph(3)来生成一个包含3个句子的段落作为描述</span></span>
<span class="line">                <span class="token string single-quoted-string">'email'</span> <span class="token operator">=></span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">slug</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'@example.com'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">command</span><span class="token operator">-></span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'成功创建了5个Company记录。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想要更具体的物流相关描述，我们可以创建一个自定义的描述生成器。例如：</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">Database<span class="token punctuation">\</span>Seeders</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Company</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeder</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Str</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Faker<span class="token punctuation">\</span>Factory</span> <span class="token keyword">as</span> Faker<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CompanySeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Run the database seeds.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$faker</span> <span class="token operator">=</span> <span class="token class-name static-context">Faker</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'zh_CN'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token variable">$companyNames</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'速达物流'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'环球快递'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'星际运输'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'海陆空物流'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'智能配送'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$companyNames</span> <span class="token keyword">as</span> <span class="token variable">$name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token variable">$name</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'suffix_domain'</span> <span class="token operator">=></span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">slug</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'description'</span> <span class="token operator">=></span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">generateLogisticsDescription</span><span class="token punctuation">(</span><span class="token variable">$faker</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'email'</span> <span class="token operator">=></span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">slug</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'@example.com'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">command</span><span class="token operator">-></span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'成功创建了5个Company记录。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 生成物流公司描述</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">generateLogisticsDescription</span><span class="token punctuation">(</span><span class="token variable">$faker</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$services</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'国内快递'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'国际快递'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'仓储服务'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'供应链解决方案'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'冷链物流'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'大件运输'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$features</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'快速'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'可靠'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'安全'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'高效'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'创新'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'专业'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$coverages</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'全国'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'全球'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'亚太地区'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'欧美市场'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">sprintf</span><span class="token punctuation">(</span></span>
<span class="line">            <span class="token string single-quoted-string">'%s是一家专业的物流公司，成立于%d年。我们提供%s等服务，以%s著称。我们的业务覆盖%s，致力于为客户提供最优质的物流解决方案。'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$faker</span><span class="token operator">-></span><span class="token property">company</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">numberBetween</span><span class="token punctuation">(</span><span class="token number">1990</span><span class="token punctuation">,</span> <span class="token number">2020</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">randomElements</span><span class="token punctuation">(</span><span class="token variable">$services</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">randomElements</span><span class="token punctuation">(</span><span class="token variable">$features</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">randomElement</span><span class="token punctuation">(</span><span class="token variable">$coverages</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">Database<span class="token punctuation">\</span>Seeders</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Manager</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Company</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeder</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Facades<span class="token punctuation">\</span>Hash</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Str</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">ManagerConfigSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Run the database seeds.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$companies</span> <span class="token operator">=</span> <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$companies</span><span class="token operator">-></span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">command</span><span class="token operator">-></span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'没有找到公司记录。正在运行 CompanySeeder...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">call</span><span class="token punctuation">(</span><span class="token class-name static-context">CompanySeeder</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$companies</span> <span class="token operator">=</span> <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$company</span> <span class="token operator">=</span> <span class="token variable">$companies</span><span class="token operator">-></span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token class-name static-context">Manager</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">                <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'管理员'</span> <span class="token operator">.</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'email'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'manager'</span> <span class="token operator">.</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'@'</span> <span class="token operator">.</span> <span class="token variable">$company</span><span class="token operator">-></span><span class="token property">suffix_domain</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'.com'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'password'</span> <span class="token operator">=></span> <span class="token class-name static-context">Hash</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'company_id'</span> <span class="token operator">=></span> <span class="token variable">$company</span><span class="token operator">-></span><span class="token property">id</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string single-quoted-string">'remember_token'</span> <span class="token operator">=></span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">command</span><span class="token operator">-></span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'成功创建了10条Manager记录。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解释" tabindex="-1"><a class="header-anchor" href="#解释"><span>解释</span></a></h2>
<p>这行代码使用了Laravel的 <code v-pre>Str::slug()</code> 方法来处理公司名称,生成一个适合用作域名后缀的字符串。让我详细解释一下:</p>
<ol>
<li><code v-pre>Str::slug()</code> 是Laravel提供的一个辅助函数,用于将字符串转换为URL友好的格式。</li>
<li>它主要做以下几件事:
<ol>
<li>将字符串转换为小写</li>
<li>将非字母数字字符替换为连字符(-)</li>
<li>移除多余的连字符</li>
<li>移除首尾的连字符</li>
</ol>
</li>
<li>对于中文字符,它会尝试将其转换为拼音。
<ol>
<li>例如,对于不同的公司名称,这个方法会产生以下结果:
<ul>
<li>'速达物流' -&gt; 'su-da-wu-liu'</li>
<li>'环球快递' -&gt; 'huan-qiu-kuai-di'</li>
<li>'星际运输' -&gt; 'xing-ji-yun-shu'</li>
</ul>
</li>
</ol>
</li>
</ol>
<p>这样处理后的字符串适合用作域名的一部分,因为它们:</p>
<ul>
<li>不包含空格或特殊字符</li>
<li>全部是小写字母</li>
<li>使用连字符分隔单词</li>
</ul>
<p>在实际应用中,这个 <code v-pre>suffix_domain</code> 可能会用于生成每个公司的子域名或者作为URL的一部分,例如:</p>
<ul>
<li><code v-pre>http://su-da-wu-liu.example.com</code></li>
<li><code v-pre>http://example.com/company/su-da-wu-liu</code></li>
</ul>
<p>这种处理方式可以确保生成的URL是有效的,并且对搜索引擎友好。</p>
</div></template>


