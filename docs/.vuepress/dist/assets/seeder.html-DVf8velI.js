import{_ as s,c as n,o as a,d as e}from"./app-6_np2pyV.js";const p={},t=e(`<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"></span>
<span class="line"># seeder 基础知识</span>
<span class="line"></span>
<span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">Database<span class="token punctuation">\\</span>Seeders</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Company</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeder</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">CompanySeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Run the database seeds.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;广州勤快货运代理有限公司&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;suffix_domain&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;qkcargo&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;admin@qkcargo.com&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;phone&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;020-88888888&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 seeder 会创建一条新的公司记录，包含您指定的所有信息。几点说明：</p><ol><li>我们使用 <code>Company::create()</code> 方法来创建新记录。这假设您的 Company 模型中已经设置了正确的 <code>$fillable</code> 或 <code>$guarded</code> 属性。</li><li>如果 Company 模型有其他必填字段，您需要在这里也提供这些字段的值。</li><li>如果您想在每次运行 seeder 时都确保只创建一次这条记录（避免重复），可以使用 <code>firstOrCreate</code> 方法：</li><li>如果您需要创建多个公司记录，可以在这个方法中添加更多的 <code>Company::create()</code> 调用。</li><li>记得在 DatabaseSeeder 类中调用这个 seeder：<code>$this-&gt;call([CompanySeeder::class]);</code></li></ol><h2 id="执行单个-seeder" tabindex="-1"><a class="header-anchor" href="#执行单个-seeder"><span>执行单个 seeder</span></a></h2><p>完成后，您可以通过运行以下命令来执行这个 seeder：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">php artisan db:seed <span class="token parameter variable">--class</span><span class="token operator">=</span>CompanySeeder</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="运行所有的-seeders" tabindex="-1"><a class="header-anchor" href="#运行所有的-seeders"><span>运行所有的 seeders</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">php artisan db:seed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>新增一个管理员，使其是第一个查找到的公司的管理员</strong></p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">Database<span class="token punctuation">\\</span>Seeders</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Company</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Manager</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeder</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Hash</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">ManagerSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Run the database seeds.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$company</span> <span class="token operator">=</span> <span class="token class-name static-context">Company</span><span class="token operator">::</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$company</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name static-context">Manager</span><span class="token operator">::</span><span class="token function">firstOrCreate</span><span class="token punctuation">(</span></span>
<span class="line">                <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;admin@qkcargo.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;company_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$company</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;display_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;系统管理员&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;admin@qkcargo.com&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;phone&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;13800138000&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;is_enabled&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Hash</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">command</span><span class="token operator">-&gt;</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;没有找到公司记录，请先运行 CompanySeeder&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 seeder 做了以下几件事：</p><ol><li>首先获取数据库中的第一个公司记录。</li><li>如果找到公司，则创建一个新的管理员记录： <ul><li>使用 <code>firstOrCreate</code> 方法来避免创建重复的管理员。</li><li>使用 email 作为唯一标识符来检查是否已存在该管理员。</li><li>设置管理员的各项属性，包括关联的公司 ID。</li><li>使用 <code>Hash::make()</code> 来安全地哈希密码。</li></ul></li><li>如果没有找到公司，输出一个错误消息。</li></ol><p><strong>注意事项：</strong></p><ol><li>确保 Manager 模型中的 <code>$fillable</code> 或 <code>$guarded</code> 属性正确设置，允许批量赋值这些字段。</li><li>您可能需要根据实际的 Manager 模型结构调整字段名称。</li><li>记得在 <code>DatabaseSeeder</code> 类中调用这个 seeder，并确保它在 <code>CompanySeeder</code> 之后运行</li><li>密码 <code>&#39;password123&#39;</code> 只是一个示例，在实际应用中应使用更强的密码。</li><li>如果需要创建多个管理员，可以在这个方法中添加更多的 <code>Manager::firstOrCreate()</code> 调用。</li></ol><p>完成后，您可以运行以下命令来执行这个 seeder：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">php artisan db:seed <span class="token parameter variable">--class</span><span class="token operator">=</span>ManagerSeeder</span>
<span class="line"><span class="token comment"># 或者运行所有的 seeders：</span></span>
<span class="line">php artisan db:seed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[t];function i(c,o){return a(),n("div",null,l)}const d=s(p,[["render",i],["__file","seeder.html.vue"]]),u=JSON.parse(`{"path":"/laravel/seeder.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"执行单个 seeder","slug":"执行单个-seeder","link":"#执行单个-seeder","children":[]},{"level":2,"title":"运行所有的 seeders","slug":"运行所有的-seeders","link":"#运行所有的-seeders","children":[]}],"git":{"updatedTime":1725707913000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"laravel/seeder.md","excerpt":"<div class=\\"language-php\\" data-highlighter=\\"prismjs\\" data-ext=\\"php\\" data-title=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"line\\"></span>\\n<span class=\\"line\\"># seeder 基础知识</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">namespace</span> <span class=\\"token package\\">Database<span class=\\"token punctuation\\">\\\\</span>Seeders</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">use</span> <span class=\\"token package\\">App<span class=\\"token punctuation\\">\\\\</span>Models<span class=\\"token punctuation\\">\\\\</span>Company</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">use</span> <span class=\\"token package\\">Illuminate<span class=\\"token punctuation\\">\\\\</span>Database<span class=\\"token punctuation\\">\\\\</span>Seeder</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">class</span> <span class=\\"token class-name-definition class-name\\">CompanySeeder</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Seeder</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token doc-comment comment\\">/**</span>\\n<span class=\\"line\\">     * Run the database seeds.</span>\\n<span class=\\"line\\">     */</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function-definition function\\">run</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token keyword return-type\\">void</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token class-name static-context\\">Company</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span></span>\\n<span class=\\"line\\">            <span class=\\"token string single-quoted-string\\">'name'</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token string single-quoted-string\\">'广州勤快货运代理有限公司'</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">            <span class=\\"token string single-quoted-string\\">'suffix_domain'</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token string single-quoted-string\\">'qkcargo'</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">            <span class=\\"token string single-quoted-string\\">'email'</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token string single-quoted-string\\">'admin@qkcargo.com'</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">            <span class=\\"token string single-quoted-string\\">'phone'</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token string single-quoted-string\\">'020-88888888'</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></span></code></pre></div>"}`);export{d as comp,u as data};
