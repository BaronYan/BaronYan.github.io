<template><div><h1 id="快速认识-curl" tabindex="-1"><a class="header-anchor" href="#快速认识-curl"><span>快速认识 curl</span></a></h1>
<p>curl 是常用的命令行工具，用来请求 Web 服务器。它的名字就是客户端（client）的 URL 工具的意思。</p>
<p>它的功能非常强大，命令行参数多达几十种。如果熟练的话，完全可以取代 Postman 这一类的图形界面工具。</p>
<p>https://www.ruanyifeng.com/blog/2019/09/curl-reference.html</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 不带有任何参数时，curl 就是发出 GET 请求。</span></span>
<span class="line"><span class="token function">curl</span> https://www.example.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># -b参数用来向服务器发送 Cookie。</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-b</span> <span class="token string">'foo=bar'</span> https://google.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># -d参数用于发送 POST 请求的数据体。</span></span>
<span class="line"><span class="token function">curl</span> -d<span class="token string">'login=emma＆password=123'</span>-X POST https://google.com/login</span>
<span class="line"><span class="token comment"># 使用-d参数以后，HTTP 请求会自动加上标头Content-Type : application/x-www-form-urlencoded。并且会自动将请求转为 POST 方法，因此可以省略-X POST。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># -e参数用来设置 HTTP 的标头Referer，表示请求的来源。</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-e</span> <span class="token string">'https://google.com?q=example'</span> https://www.example.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># -H参数可以通过直接添加标头Referer，达到同样效果。</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">'Referer: https://google.com?q=example'</span> https://www.example.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># -i参数打印出服务器回应的 HTTP 标头。</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-i</span> https://www.example.com</span>
<span class="line"><span class="token comment"># 上面命令收到服务器回应后，先输出服务器回应的标头，然后空一行，再输出网页的源码。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># -I参数向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来。</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-I</span> https://www.example.com</span>
<span class="line"><span class="token comment"># 上面命令输出服务器对 HEAD 请求的回应。 --head参数等同于-I。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># -k参数指定跳过 SSL 检测。</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-k</span> https://www.example.com</span>
<span class="line"><span class="token comment"># 上面命令不会检查服务器的 SSL 证书是否正确。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># -L参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux</span>
<span class="line"></span>
<span class="line"><span class="token comment"># -o参数将服务器的回应保存成文件，等同于wget命令。</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-o</span> example.html https://www.example.com</span>
<span class="line"><span class="token comment"># 上面命令将www.example.com保存成example.html。</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux <span class="token parameter variable">-o</span> chsrc</span>
<span class="line"><span class="token comment"># 上面命令将 chsrc-x64-linux 保存成 chsrc。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux <span class="token parameter variable">-o</span> chsrc<span class="token punctuation">;</span> <span class="token function">chmod</span> +x ./chsrc</span>
<span class="line"><span class="token comment"># 上面命令将 chsrc-x64-linux 保存成 chsrc。然后设置 chsrc 的权限为对所有人可执行</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


