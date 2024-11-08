<template><div><h1 id="开发者登录服务器" tabindex="-1"><a class="header-anchor" href="#开发者登录服务器"><span>开发者登录服务器</span></a></h1>
<p>除了使用root登录  还能使用什么身份登录呢?</p>
<h2 id="登录方式" tabindex="-1"><a class="header-anchor" href="#登录方式"><span>登录方式</span></a></h2>
<p>除了使用 root 身份登录，您还可以考虑以下几种更安全的登录方式：</p>
<ul>
<li>普通用户账户：
<ul>
<li>创建一个专门用于开发的普通用户账户。</li>
<li>例如：<code v-pre>adduser developer</code></li>
</ul>
</li>
<li>sudo 用户：
<ul>
<li>创建一个具有 sudo 权限的用户，可以在需要时临时获取 root 权限。</li>
<li>创建用户：<code v-pre>adduser developer</code></li>
<li>赋予 sudo 权限：<code v-pre>usermod -aG sudo developer</code></li>
</ul>
</li>
<li>www-data 用户：
<ul>
<li>如果是 Web 服务器相关操作，可以考虑使用 www-data 用户。</li>
<li>切换到 www-data：<code v-pre>sudo -u www-data bash</code></li>
</ul>
</li>
<li>项目专用用户：
<ul>
<li>为特定项目创建专门的用户。</li>
<li>例如：<code v-pre>adduser project_user</code></li>
</ul>
</li>
<li>使用 SSH 密钥登录：
<ul>
<li>设置 SSH 密钥对，使用公钥认证而不是密码登录。</li>
<li>生成密钥：<code v-pre>ssh-keygen -t rsa</code></li>
<li>将公钥添加到服务器：<code v-pre>ssh-copy-id user@host</code></li>
</ul>
</li>
<li>使用 SFTP 用户：
<ul>
<li>如果主要进行文件传输，可以创建一个受限的 SFTP 用户。</li>
<li>使用这些方法时，请记住：</li>
<li>为新用户设置强密码</li>
<li>根据最小权限原则分配权限</li>
<li>定期审查用户权限</li>
<li>使用 su 或 sudo 在需要时临时获取更高权限</li>
</ul>
</li>
</ul>
<p>选择合适的登录方式可以显著提高系统安全性，同时仍然保持足够的操作灵活性。</p>
<h2 id="关于-www-data-没有权限的问题" tabindex="-1"><a class="header-anchor" href="#关于-www-data-没有权限的问题"><span>关于 www-data 没有权限的问题</span></a></h2>
<p>这个错误信息包含两个主要问题：</p>
<ol>
<li>缓存目录权限问题</li>
<li>Packagist 仓库连接超时</li>
</ol>
<p>让我们逐一解决这些问题：</p>
<h3 id="_1-缓存目录权限问题" tabindex="-1"><a class="header-anchor" href="#_1-缓存目录权限问题"><span>1. 缓存目录权限问题：</span></a></h3>
<p>错误信息表明 Composer 无法创建或写入缓存目录 <code v-pre>/var/www/.cache/composer/</code>。这通常是因为 www-data 用户没有该目录的写入权限。</p>
<p>解决方案：</p>
<ol>
<li>创建缓存目录并赋予适当的权限：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/www/.cache/composer</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> www-data:www-data /var/www/.cache</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /var/www/.cache</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>如果上述方法不起作用，可以尝试将 Composer 缓存目录设置到一个 www-data 用户可写的位置：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">COMPOSER_HOME</span><span class="token operator">=</span>/tmp/composer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-packagist-仓库连接超时" tabindex="-1"><a class="header-anchor" href="#_2-packagist-仓库连接超时"><span>2.Packagist 仓库连接超时：</span></a></h3>
<p>这个问题可能是由网络问题或 Packagist 服务器暂时不可用导致的。</p>
<p>解决方案：</p>
<ol>
<li>检查您的网络连接，确保可以访问 https://repo.packagist.org</li>
<li>尝试增加 Composer 的超时时间：<code v-pre>composer config --global process-timeout 2000</code></li>
<li>如果问题持续存在，可以尝试使用镜像站点：<code v-pre> composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/</code></li>
<li>如果使用了镜像，之后可以通过以下命令切回官方源：<code v-pre>composer config -g --unset repos.packagist</code></li>
</ol>
<p>其他建议：</p>
<ul>
<li>确保系统时间是正确的，因为证书验证可能会受到影响</li>
<li>尝试清除 Composer 缓存：composer clear-cache</li>
<li>更新 Composer 到最新版本：composer self-update</li>
</ul>
<p>如果在执行这些步骤后问题仍然存在，可能需要进一步检查服务器的网络设置或防火墙规则。另外，确保 PHP 的 curl 扩展已正确安装并启用。</p>
<p>最后，如果使用 www-data 用户仍然遇到问题，考虑创建一个专门的开发用户，并确保该用户对项目目录有适当的权限。这通常是一个更好的做法，因为它可以提供更精细的权限控制。</p>
<h2 id="设置密码" tabindex="-1"><a class="header-anchor" href="#设置密码"><span>设置密码</span></a></h2>
<p>在使用 adduser developer 创建用户后，设置密码的步骤如下：</p>
<ol>
<li>通常，<code v-pre>adduser</code> 命令会在创建用户过程中提示您设置密码。如果您跳过了这一步，或者想要更改密码，可以使用以下方法。</li>
<li>使用 <code v-pre>passwd</code> 命令设置密码。您需要有 root 权限或使用 sudo 来执行此操作。在终端中输入：<code v-pre>sudo passwd developer</code></li>
<li>系统会提示您输入新密码。输入您想要设置的密码并按回车键。</li>
<li>系统会要求您再次输入密码以确认。再次输入相同的密码并按回车键。</li>
<li>如果两次输入的密码匹配，系统会显示密码更新成功的消息。</li>
</ol>
<p>请注意：</p>
<ul>
<li>如果您是以 root 用户身份登录的，可以省略 sudo。</li>
<li>为了安全起见，输入密码时屏幕上不会显示任何字符。</li>
<li>建议使用强密码，包含大小写字母、数字和特殊字符的组合。</li>
</ul>
<p>如果您想在创建用户时直接设置密码，可以使用 <code v-pre>useradd</code> 命令配合 <code v-pre>-p</code> 选项，但这种方法不太安全，因为密码会以明文形式出现在命令行中。因此，通常建议先创建用户，然后使用 passwd 命令单独设置密码。</p>
<h2 id="新创建的用户是否默认有远程-ssh登录的权限呢" tabindex="-1"><a class="header-anchor" href="#新创建的用户是否默认有远程-ssh登录的权限呢"><span>新创建的用户是否默认有远程 ssh登录的权限呢？</span></a></h2>
<p>在Ubuntu系统中，新创建的用户是否默认有远程SSH登录权限取决于几个因素：</p>
<ol>
<li>SSH服务配置：
<ul>
<li>SSH服务的配置文件（通常是 <code v-pre>/etc/ssh/sshd_config</code>）决定了哪些用户可以通过SSH登录。默认情况下，所有用户都被允许SSH登录，除非特别配置了限制。</li>
</ul>
</li>
<li>用户账户状态：
<ul>
<li>新创建的用户账户必须是激活状态，并且有一个有效的shell。使用 adduser 命令创建的用户通常默认满足这些条件。</li>
</ul>
</li>
<li>防火墙设置：
<ul>
<li>确保服务器的防火墙允许SSH连接（通常是22端口）。</li>
</ul>
</li>
<li>用户组成员身份：
<ul>
<li>某些系统可能限制只有特定组的成员才能SSH登录。</li>
</ul>
</li>
</ol>
<p>要确认新用户是否可以SSH登录，您可以：</p>
<ol>
<li>检查SSH配置：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">cat</span> /etc/ssh/sshd_config <span class="token operator">|</span> <span class="token function">grep</span> AllowUsers</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">cat</span> /etc/ssh/sshd_config <span class="token operator">|</span> <span class="token function">grep</span> DenyUsers</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有特别的限制，新用户应该可以登录。</p>
<ol start="2">
<li>确认用户shell,确保用户有一个有效的登录shell（如 /bin/bash）。:<code v-pre> grep developer /etc/passwd</code></li>
<li>尝试SSH登录：
<ul>
<li>最直接的方法是尝试使用新用户进行SSH登录。</li>
<li>如果您希望限制SSH访问，可以编辑 <code v-pre>/etc/ssh/sshd_config</code> 文件，添加或修改 AllowUsers 或 AllowGroups 指令。修改后记得重启SSH服务：<code v-pre>sudo systemctl restart sshd</code></li>
</ul>
</li>
</ol>
<h2 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>composer</span></a></h2>
<p>在Ubuntu服务器上以root身份安装Composer并不是一个推荐的做法。以下是一些原因和建议：</p>
<ol>
<li>安全风险：
<ul>
<li>以root身份运行任何程序都会带来潜在的安全风险。如果Composer或通过它安装的包存在漏洞，可能会对整个系统造成危害。</li>
</ul>
</li>
<li>权限问题：
<ul>
<li>以root身份安装可能会导致文件权限问题，使得非root用户难以使用或管理Composer及其安装的包。</li>
</ul>
</li>
<li>最佳实践：
<ul>
<li>遵循最小权限原则是一种良好的安全实践。只在绝对必要时才使用root权限。</li>
</ul>
</li>
</ol>
<p>建议的安装方法：
1. 创建一个专门的非root用户来管理PHP项目：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> adduser phpuser</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">sudo</span> phpuser</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>切换到新用户：<code v-pre>su - phpuser</code></li>
<li>按照Composer官方文档的说明安装Composer：</li>
<li>将Composer移动到全局可访问的位置（需要sudo权限）：<code v-pre>sudo mv composer.phar /usr/local/bin/composer</code></li>
</ol>
<p>这种方法可以确保Composer在系统范围内可用，同时避免了以root身份运行的潜在风险。记住，在使用Composer时，应该尽可能使用非特权用户账户。</p>
<h3 id="sudo-usermod-ag-sudo-phpuser" tabindex="-1"><a class="header-anchor" href="#sudo-usermod-ag-sudo-phpuser"><span><code v-pre>sudo usermod -aG sudo phpuser</code></span></a></h3>
<p>这个命令 <code v-pre>sudo usermod -aG sudo phpuser</code> 的含义如下：</p>
<ol>
<li><code v-pre>sudo</code>: 以超级用户权限执行后面的命令。</li>
<li><code v-pre>usermod</code>: 这是一个用于修改用户账户的命令。</li>
<li><code v-pre>-aG</code>: 这是 usermod 命令的选项：</li>
<li><code v-pre>-a</code>: 表示 &quot;append&quot;，即添加到组，而不是替换现有的组。</li>
<li><code v-pre>-G</code>: 指定要添加用户到哪个组。</li>
<li><code v-pre>sudo</code>: 这里指的是要将用户添加到的组名，即 &quot;sudo&quot; 组。</li>
<li><code v-pre>phpuser</code>: 这是要修改的用户名。</li>
</ol>
<p>综合起来，这个命令的作用是：将用户 phpuser 添加到 sudo 组中，而不影响该用户已经所属的其他组。</p>
<p>加入 sudo 组的重要性：</p>
<ol>
<li>成为 sudo 组的成员后，该用户就获得了使用 sudo 命令的权限。</li>
<li>这意味着 phpuser 可以在需要时临时获取超级用户权限来执行特定的管理任务。</li>
<li>这种方法比直接使用 root 账户更安全，因为它允许日常操作使用普通用户权限，只在必要时提升权限。</li>
</ol>
<p>使用这种方法，phpuser 就可以在需要时使用 sudo 命令来执行需要管理员权限的操作，比如安装软件包或修改系统配置，而不需要一直以 root 身份登录。这符合最小权限原则，提高了系统的安全性。</p>
</div></template>


