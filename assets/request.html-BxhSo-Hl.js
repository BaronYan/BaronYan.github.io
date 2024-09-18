import{_ as t,c as a,o as l,a as e,e as s}from"./app-CrEgUP09.js";const o={},r=e("h2",{id:"request-path",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-path"},[e("span",null,[e("code",null,"$request->path()")])])],-1),n=e("p",null,"这行代码会获取当前请求的 URL 路径。让我为您详细解释一下：",-1),p=e("p",null,[e("code",null,"$request->path()"),s(" 方法会返回当前请求的 URL 路径，不包括域名和查询字符串。例如：")],-1),h=e("ol",null,[e("li",null,'如果完整 URL 是 https://example.com/user/profile?id=123，$path 将会是 "user/profile"。'),e("li",null,'如果 URL 是 https://example.com/admin/dashboard，$path 将会是 "admin/dashboard"。'),e("li",null,'对于网站的根路径，如 https://example.com，$path 将会是空字符串 ""。')],-1),i=[r,n,p,h];function c(d,u){return l(),a("div",null,i)}const _=t(o,[["render",c],["__file","request.html.vue"]]),q=JSON.parse('{"path":"/laravel/request.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"$request->path()","slug":"request-path","link":"#request-path","children":[]}],"git":{"updatedTime":1726672149000,"contributors":[{"name":"BaronYan","email":"1229598328@qq.com","commits":1}]},"filePathRelative":"laravel/request.md","excerpt":"<h2><code>$request-&gt;path()</code></h2>\\n<p>这行代码会获取当前请求的 URL 路径。让我为您详细解释一下：</p>\\n<p><code>$request-&gt;path()</code> 方法会返回当前请求的 URL 路径，不包括域名和查询字符串。例如：</p>\\n<ol>\\n<li>如果完整 URL 是 https://example.com/user/profile?id=123，$path 将会是 \\"user/profile\\"。</li>\\n<li>如果 URL 是 https://example.com/admin/dashboard，$path 将会是 \\"admin/dashboard\\"。</li>\\n<li>对于网站的根路径，如 https://example.com，$path 将会是空字符串 \\"\\"。</li>\\n</ol>"}');export{_ as comp,q as data};
