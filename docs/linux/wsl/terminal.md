

确保您已经在WSL的Ubuntu中安装了tmux：

```bash
sudo apt update
sudo apt install tmux
```

在WSL的Ubuntu中编辑您的bash配置文件。通常是 `~/.bashrc`,在文件末尾添加以下内容

```bash
# 检查是否在tmux会话中，以及是否是交互式shell
if [ -z "$TMUX" ] && [ -n "$PS1" ]; then
    # 启动新的tmux会话或附加到现有会话
    tmux new-session -A -s workspace \
    # 将窗口分割为四个窗格
    \; split-window -h \; split-window -v \; select-pane -t 0 \; split-window -v \
    # 在所有窗格中切换到工作目录
    \; send-keys -t 0 'cd /path/to/your/work/directory' C-m \
    \; send-keys -t 1 'cd /path/to/your/work/directory' C-m \
    \; send-keys -t 2 'cd /path/to/your/work/directory' C-m \
    \; send-keys -t 3 'cd /path/to/your/work/directory' C-m
fi
```
请将 /path/to/your/work/directory 替换为您实际的工作目录路径。

重新加载bash配置: `source ~/.bashrc`

现在，我们需要配置Windows Terminal以在启动时直接进入WSL的Ubuntu。打开Windows Terminal的设置（JSON文件），找到Ubuntu的配置部分，并修改如下：

```
{
    "guid": "{your-ubuntu-guid}",
    "hidden": false,
    "name": "Ubuntu",
    "source": "Windows.Terminal.Wsl",
    "startingDirectory": "//wsl$/Ubuntu/home/yourusername",
    "commandline": "wsl.exe -d Ubuntu -- bash -l"
}
```

请确保将 yourusername 替换为您在WSL Ubuntu中的用户名。
保存Windows Terminal的设置并重新启动Windows Terminal。
现在，当您在Windows Terminal中打开Ubuntu标签时，它应该会自动启动tmux，将屏幕分割为四个窗格，并在每个窗格中切换到您指定的工作目录。
如果仍然没有效果，请检查以下几点：
1. 确保tmux已正确安装在WSL的Ubuntu中。
检查 ~/.bashrc 文件中的修改是否正确保存。
确保Windows Terminal的设置正确指向了WSL的Ubuntu。
如果问题仍然存在，可能需要进一步调试。您可以尝试在 ~/.bashrc 文件中添加一些调试输出，例如：

`echo "Entering custom tmux setup" >> /tmp/debug.log`
