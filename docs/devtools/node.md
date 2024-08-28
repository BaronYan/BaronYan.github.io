


## nvm-cn

nvm-cn 解决的是 NodeJS 自身的国内下载问题。

https://gitee.com/RubyMetric/nvm-cn?_from=gitee_search

```bash

# 安装
bash -c "$(curl -fsSL https://gitee.com/RubyMetric/nvm-cn/raw/main/install.sh)"
# 卸载
bash -c "$(curl -fsSL https://gitee.com/RubyMetric/nvm-cn/raw/main/uninstall.sh)"

# 使用

nvm ls

# 列出所有可安装版本
nvm ls-remote

# 安装某个版本Node
nvm install lts/fermium
nvm install v12.20.1
nvm install v15.5.1

# 切换Node版本
nvm use system
nvm use 14.15    # 不用全部打出版本号

# 更新nvm
nvm-update
```

## npm 换源

推荐您使用C语言编写的全平台换源工具 `RubyMetric/chsrc`

https://gitee.com/RubyMetric/chsrc


全平台命令行换源工具，目标支持 Linux, Windows, macOS, BSD 等尽可能多的操作系统，龙芯、飞腾、RISC-V 等尽可能多的 CPU。

我们使用 C99 来完成上述目标。我们并不使用 Python 或 JS 等解释语言，因为一个简单的换源工具，不应该强行塞给用户一个庞大的解释器和数十、数百 MB 其他文件。

chsrc 不仅是一个命令行工具，同时也是一个换源框架，它甚至使你能够在不了解C语言的情况下编写出新的换源方法(recipe)。


```bash
# 安装
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux -o chsrc; chmod +x ./chsrc

# 使用
# chsrc <command> [options] [target] [mirror]

chsrc set npm
```