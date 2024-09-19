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
<p>以上设置会报错：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">Cannot validate since <span class="token punctuation">\</span><span class="token punctuation">\</span>wsl$<span class="token punctuation">\</span>Ubuntu<span class="token punctuation">\</span>usr<span class="token punctuation">\</span>bin<span class="token punctuation">\</span>php is not a valid php executable. Use the setting <span class="token string">'php.validate.executablePath'</span> to configure the PHP executable.</span>
<span class="line">Cannot validate since C:<span class="token punctuation">\</span>Windows<span class="token punctuation">\</span>System32<span class="token punctuation">\</span>wsl.exe <span class="token parameter variable">-d</span> Ubuntu php is not a valid php executable. Use the setting <span class="token string">'php.validate.executablePath'</span> to configure the PHP executable.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个错误是由于 PHP 可执行文件路径设置不正确导致的。</p>
<p>要解决这个问题，您需要修改 <code v-pre>php.validate.executablePath</code> 设置。</p>
<p>WSL 路径在 Windows 中的表示方式有所不同。</p>
<p>让我们来修改一下您的设置：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ... 其他设置保持不变 ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">"php.validate.executablePath"</span><span class="token operator">:</span> <span class="token string">"C:\\Windows\\System32\\wsl.exe -d Ubuntu php"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个修改做了以下更改：</p>
<ol>
<li>我们使用了 <code v-pre>wsl.exe</code> 来执行 WSL 中的 PHP。</li>
<li><code v-pre>-d Ubuntu</code> 指定了我们要使用的 WSL 发行版（在这里是 Ubuntu）。</li>
<li>最后加上 php 命令来运行 PHP。</li>
</ol>
<p>这样设置后，VS Code 应该能够正确识别并使用 WSL 中的 PHP 可执行文件。</p>
<p>如果您仍然遇到问题，可以尝试以下步骤：</p>
<ol>
<li>确保您的 WSL 中已经正确安装了 PHP。</li>
<li>在 WSL 终端中运行 <code v-pre>which php</code> 命令，确认 PHP 的实际路径。</li>
<li>如果路径不是 <code v-pre>/usr/bin/php</code>，您可能需要相应地调整命令。</li>
</ol>
<p>如果问题仍然存在，您可能需要检查 WSL 的安装和配置，确保它能够正常工作。</p>
</div></template>


