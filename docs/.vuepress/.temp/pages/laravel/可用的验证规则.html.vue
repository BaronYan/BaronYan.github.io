<template><div><h2 id="可用的验证规则" tabindex="-1"><a class="header-anchor" href="#可用的验证规则"><span>可用的验证规则</span></a></h2>
<p>下面列出了部分可用的<a href="https://laravel.com/docs/11.x/validation#available-validation-rules" target="_blank" rel="noopener noreferrer">验证规则</a>及其功能：</p>
<p><strong>bail</strong> 第一次验证失败后，停止运行该字段的验证规则。</p>
<p>虽然<code v-pre>bail</code>规则仅在遇到验证失败时才会停止验证特定字段，但 <code v-pre>stopOnFirstFailure</code> 方法将通知验证器，一旦发生单个验证失败，它应该停止验证所有属性</p>
<p><strong>between:min,max</strong> 验证字段的大小必须介于给定的最小值和最大值（含）之间。字符串、数字、数组和文件的评估方式与<code v-pre>size</code>规则相同。</p>
<p><strong>unique:table,column</strong> 验证的字段在给定的数据库表中不能存在。</p>
<ul>
<li><code v-pre>'email' =&gt; 'unique:users,email_address'</code> 指定自定义表/列名称,该规则将验证 <code v-pre>email_address</code> 字段不能在 <code v-pre>users</code> 表中重复。</li>
<li><code v-pre>'email' =&gt; 'unique:App\Models\User,email_address'</code>还可以指定用于确定表名的 Eloquent 模型</li>
<li><code v-pre>'email' =&gt; 'unique:App\Models\User,email_address'.$this-&gt;route('user')-&gt;id,</code> 强制执行唯一规则以忽略给定的 ID</li>
</ul>
<p><strong>有条件地添加规则</strong></p>
<ul>
<li>当字段具有特定值时跳过验证
<ul>
<li><code v-pre>'appointment_date' =&gt; 'exclude_if:has_appointment,false|required|date',</code></li>
</ul>
</li>
</ul>
</div></template>


