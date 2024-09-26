<template><div><h1 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis"><span>安装redis</span></a></h1>
<p>在Ubuntu上安装Redis的步骤如下：</p>
<ol>
<li>更新软件包列表：<code v-pre>sudo apt update -y</code></li>
<li>安装Redis: <code v-pre>sudo apt install redis-server</code></li>
<li>检查Redis服务的状态:<code v-pre>sudo systemctl status redis-server</code></li>
<li>如果Redis没有运行,启动它:<code v-pre>sudo systemctl start redis-server</code></li>
<li>在系统启动时自动运行:<code v-pre>sudo systemctl enable redis-server</code></li>
<li>验证安装:
<ol>
<li><code v-pre>redis-cli</code></li>
<li><code v-pre>ping</code></li>
<li>如果Redis正常工作，它会回复 &quot;PONG&quot;。</li>
<li>退出:<code v-pre>exit</code></li>
</ol>
</li>
</ol>
<p>默认情况下，Redis配置为只允许本地连接。如果您需要从其他机器访问Redis，需要编辑配置文件：</p>
<ul>
<li><code v-pre>sudo nano /etc/redis/redis.conf</code></li>
</ul>
<p>找到 <code v-pre>bind 127.0.0.1 ::1</code> 这一行，将其注释掉或修改为您需要的IP地址。</p>
<p>如果您修改了配置，需要重启Redis服务：</p>
<p><code v-pre>sudo systemctl restart redis-server</code></p>
<p>请注意，如果您允许远程连接，请确保设置强密码并考虑使用防火墙来限制访问，以保护您的Redis实例安全。</p>
<p>这些步骤应该能够在您的Ubuntu系统上成功安装和配置Redis。如果您在安装过程中遇到任何问题，请告诉我具体的错误信息，我会很乐意帮您解决。</p>
</div></template>


