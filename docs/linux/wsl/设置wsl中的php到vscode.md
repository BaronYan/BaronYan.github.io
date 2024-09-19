
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

以上设置会报错：
```bash
Cannot validate since \\wsl$\Ubuntu\usr\bin\php is not a valid php executable. Use the setting 'php.validate.executablePath' to configure the PHP executable.
Cannot validate since C:\Windows\System32\wsl.exe -d Ubuntu php is not a valid php executable. Use the setting 'php.validate.executablePath' to configure the PHP executable.
```
这个错误是由于 PHP 可执行文件路径设置不正确导致的。

要解决这个问题，您需要修改 `php.validate.executablePath` 设置。

WSL 路径在 Windows 中的表示方式有所不同。

让我们来修改一下您的设置：
```json
{
    // ... 其他设置保持不变 ...

    "php.validate.executablePath": "C:\\Windows\\System32\\wsl.exe -d Ubuntu php"
}
```

这个修改做了以下更改：
1. 我们使用了 `wsl.exe` 来执行 WSL 中的 PHP。
2. `-d Ubuntu` 指定了我们要使用的 WSL 发行版（在这里是 Ubuntu）。
3. 最后加上 php 命令来运行 PHP。

这样设置后，VS Code 应该能够正确识别并使用 WSL 中的 PHP 可执行文件。

如果您仍然遇到问题，可以尝试以下步骤：
1. 确保您的 WSL 中已经正确安装了 PHP。
2. 在 WSL 终端中运行 `which php` 命令，确认 PHP 的实际路径。
3. 如果路径不是 `/usr/bin/php`，您可能需要相应地调整命令。

如果问题仍然存在，您可能需要检查 WSL 的安装和配置，确保它能够正常工作。