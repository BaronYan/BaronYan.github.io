<template><div><h2 id="request-path" tabindex="-1"><a class="header-anchor" href="#request-path"><span><code v-pre>$request-&gt;path()</code></span></a></h2>
<p>这行代码会获取当前请求的 URL 路径。让我为您详细解释一下：</p>
<p><code v-pre>$request-&gt;path()</code> 方法会返回当前请求的 URL 路径，不包括域名和查询字符串。例如：</p>
<ol>
<li>如果完整 URL 是 https://example.com/user/profile?id=123，$path 将会是 &quot;user/profile&quot;。</li>
<li>如果 URL 是 https://example.com/admin/dashboard，$path 将会是 &quot;admin/dashboard&quot;。</li>
<li>对于网站的根路径，如 https://example.com，$path 将会是空字符串 &quot;&quot;。</li>
</ol>
</div></template>


