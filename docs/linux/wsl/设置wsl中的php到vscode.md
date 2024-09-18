
# 如何将 wsl 中的 php 设置到 VScode？

要将 WSL 中的 PHP 设置到 Visual Studio Code 的 `settings.json` 文件中，您需要指定 WSL 中 PHP 可执行文件的路径。

以下是如何操作：

1. 首先，在 WSL 中找到 PHP 可执行文件的路径。通常可以使用以下命令：
   - `which php` 这会显示类似 `/usr/bin/php` 的路径。
2. 然后，您需要将这个路径转换为 Windows 可以理解的格式。
   - WSL 路径的格式通常是： `\\wsl$\<DistributionName>\path\to\php`
   - 例如，如果您使用的是 Ubuntu 发行版，路径可能是：`\\wsl$\Ubuntu\usr\bin\php`
3. 现在，在您的 `settings.json` 文件中，将 `php.validate.executablePath` 设置更新如下：
   - `"php.validate.executablePath": "\\\\wsl$\\Ubuntu\\usr\\bin\\php"`
   - 请注意，在 JSON 中，反斜杠需要被转义，所以我们使用了双反斜杠。

如果您使用的是不同的 WSL 发行版，请相应地替换 "Ubuntu" 部分。

设置完成后，Visual Studio Code 应该能够使用 WSL 中的 PHP 进行验证和其他相关功能。如果遇到问题，请确保 WSL 和 PHP 都已正确安装和配置。