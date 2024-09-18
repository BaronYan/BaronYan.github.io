import comp from "/home/yanbeirong/www/baronblogs/docs/.vuepress/.temp/pages/laravel/request.html.vue"
const data = JSON.parse("{\"path\":\"/laravel/request.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"$request->path()\",\"slug\":\"request-path\",\"link\":\"#request-path\",\"children\":[]}],\"git\":{\"updatedTime\":1726672149000,\"contributors\":[{\"name\":\"BaronYan\",\"email\":\"1229598328@qq.com\",\"commits\":1}]},\"filePathRelative\":\"laravel/request.md\",\"excerpt\":\"<h2><code>$request-&gt;path()</code></h2>\\n<p>这行代码会获取当前请求的 URL 路径。让我为您详细解释一下：</p>\\n<p><code>$request-&gt;path()</code> 方法会返回当前请求的 URL 路径，不包括域名和查询字符串。例如：</p>\\n<ol>\\n<li>如果完整 URL 是 https://example.com/user/profile?id=123，$path 将会是 \\\"user/profile\\\"。</li>\\n<li>如果 URL 是 https://example.com/admin/dashboard，$path 将会是 \\\"admin/dashboard\\\"。</li>\\n<li>对于网站的根路径，如 https://example.com，$path 将会是空字符串 \\\"\\\"。</li>\\n</ol>\"}")
export { comp, data }