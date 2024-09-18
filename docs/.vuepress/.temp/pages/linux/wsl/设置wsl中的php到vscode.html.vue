<template><div><h1 id="如何将-wsl-中的-php-设置到-vscode" tabindex="-1"><a class="header-anchor" href="#如何将-wsl-中的-php-设置到-vscode"><span>如何将 wsl 中的 php 设置到 VScode？</span></a></h1>
<p>要将 WSL 中的 PHP 设置到 Visual Studio Code 的 <code v-pre>settings.json</code> 文件中，您需要指定 WSL 中 PHP 可执行文件的路径。</p>
<p>以下是如何操作：</p>
<ol>
<li>首先，在 WSL 中找到 PHP 可执行文件的路径。通常可以使用以下命令：
<ul>
<li><code v-pre>which php</code> 这会显示类似 <code v-pre>/usr/bin/php</code> 的路径。</li>
</ul>
</li>
<li>然后，您需要将这个路径转换为 Windows 可以理解的格式。
<ul>
<li>WSL 路径的格式通常是： <code v-pre>\\wsl$\&lt;DistributionName&gt;\path\to\php</code></li>
<li>例如，如果您使用的是 Ubuntu 发行版，路径可能是：<code v-pre>\\wsl$\Ubuntu\usr\bin\php</code></li>
</ul>
</li>
<li>现在，在您的 <code v-pre>settings.json</code> 文件中，将 <code v-pre>php.validate.executablePath</code> 设置更新如下：
<ul>
<li><code v-pre>&quot;php.validate.executablePath&quot;: &quot;\\\\wsl$\\Ubuntu\\usr\\bin\\php&quot;</code></li>
<li>请注意，在 JSON 中，反斜杠需要被转义，所以我们使用了双反斜杠。</li>
</ul>
</li>
</ol>
<p>如果您使用的是不同的 WSL 发行版，请相应地替换 &quot;Ubuntu&quot; 部分。</p>
<p>设置完成后，Visual Studio Code 应该能够使用 WSL 中的 PHP 进行验证和其他相关功能。如果遇到问题，请确保 WSL 和 PHP 都已正确安装和配置。</p>
</div></template>


