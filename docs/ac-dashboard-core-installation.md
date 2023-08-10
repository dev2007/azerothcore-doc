# AzerothCore Bash Dashboard 设置

## 介绍

AzerothCore bash dashboard 是一系列脚本的集合，可帮助安装和维护 AzerothCore 服务器。只需极少的步骤，即可在你的机器上轻松安装、更新和执行 AzerothCore。

安装开发或生产专用服务器从未如此简单。如果你需要任何帮助，只需[提问](/how-to-ask-for-help)即可。

## 要求
---

你的电脑需要安装 [git](https://git-scm.com/)、[curl](https://curl.se/)、[unzip](https://github.com/madler/unzip) 和 [sudo](https://www.sudo.ws/)。无需手动安装其他软件。

- 基于 debian/ubuntu 的系统： `apt update && apt install git curl unzip sudo`
- macOS: `brew install git`
- Windows：下载并安装 [Windows 版 Git](https://gitforwindows.org/)

### 说明

- MacOS 用户：安装并使用最新版本的 bash 运行 dashboard 命令（`brew install bash`）
- Windows 用户：命令需要在 "git bash "shell 或与 bash 兼容的 shell（如 WSL、cygwin 等）中执行。不过建议使用 git bash，因为它已预装了 Windows 版 git（我们的要求之一）

## 设置
---

### 获取 AzerothCore 源码

```bash
git clone https://github.com/azerothcore/azerothcore-wotlk.git; cd azerothcore-wotlk
```

### 配置

有一个包含默认配置的 [conf/dist/config.sh](https://github.com/azerothcore/azerothcore-wotlk/blob/master/conf/dist/config.sh) 文件。请看一下。大部分默认配置可能都适用于你的情况，但你也可以将其复制到 `conf/config.sh` 下，然后随意更改值。

### 安装所有 AzerothCore 依赖

```bash
./acore.sh install-deps
```

注意：在 Windows 系统中，必须以管理员身份执行。

### 从头开始构建一切

```bash
./acore.sh compiler all
```

### 设置数据库

- 要么连接到 MySQL 数据库（使用 `sudo mysql -u root`），然后运行以下命令手动创建 `acore` MySQL 用户：

```bash
DROP USER IF EXISTS 'acore'@'localhost';
DROP USER IF EXISTS 'acore'@'127.0.0.1';
CREATE USER 'acore'@'localhost' IDENTIFIED BY 'acore';
CREATE USER 'acore'@'127.0.0.1' IDENTIFIED BY 'acore';
GRANT ALL PRIVILEGES ON * . * TO 'acore'@'localhost' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON * . * TO 'acore'@'127.0.0.1' WITH GRANT OPTION;
FLUSH PRIVILEGES;
exit;
```

*注意：尽管 `acore` 用户只能从 localhost 访问，但最好还是将其密码改为更安全的密码。*

### 下载最新客户端数据

获取最新客户端数据

```bash
./acore.sh client-data
```

### 服务器配置文件

创建这两个文件。它们包含 worldserver 和 authserver 的默认配置，如果不想修改，只需复制即可。

#### Linux 和 Mac

```bash
cp env/dist/etc/authserver.conf.dist env/dist/etc/authserver.conf
cp env/dist/etc/worldserver.conf.dist env/dist/etc/worldserver.conf
```

#### Windows 和 Mac

```bash
cp env/dist/configs/authserver.conf.dist env/dist/configs/authserver.conf
cp env/dist/configs/worldserver.conf.dist env/dist/configs/worldserver.conf
```

### 结果

如果你按照上述步骤操作，就能在 `env/dist` 目录中找到服务器。

`worldserver` 和 `authserver` 二进制文件位于 `azerothcore-wotlk/env/dist/bin`。

你可以直接运行它们，也可以使用重启器（见下文）。`worldserver` 首次启动时将安装完整的 AzerothCore 数据库。此时无需导入任何数据库更新。

### 重启器

AzerothCore dashboard 捆绑了一个重启程序套件：

```bash
./acore.sh run-worldserver
```

等待进程完成后运行：

```bash
./acore.sh run-authserver
```

对于专用服务器，可能需要使用 `tmux` 等工具（见下文）在终端多路复用器会话中运行它们。

## 如何更新你的服务器

更新信息来源：

```bash
git pull
```

重新构建：

```bash
./acore.sh compiler build
```

更新此数据库：

[更新数据库](/keeping-the-server-up-to-date/database-keeping-the-server-up-to-date)

就这样！

## 专用（生产）服务器提示

### 通过 Telegram 每日备份你的数据库

通过 [Telegram](https://telegram.org/) 消息将私人服务器数据库的每日备份直接发送到你的手机/电脑？

是的，这是可能的。只需使用：[azerothcore/telegram-automated-db-backup](https://github.com/azerothcore/telegram-automated-db-backup)

### Visual Studio Code SSH

你无需任何图形用户界面，只需使用 [Visual Studio Code](https://code.visualstudio.com/)、[SSH](https://code.visualstudio.com/docs/remote/ssh) 和 [SSH: 编辑配置文件](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit) 扩展，通过 ssh 进行远程连接，就能在 Linux 服务器上轻松安装 AzerothCore，让你感觉就像在家一样。

### 在 Tmux 会话中运行 AzerothCore

你可以使用 [tmux](https://github.com/tmux/tmux) 作为终端多路复用器，这样就可以在没有图形用户界面的情况下轻松管理服务器内的进程。

你可以创建两个会话，在其中运行 `worldserver` 和 `authserver` 进程：

- `tmux new -s world-session`
- 现在在其中运行 `./acore.sh run-worldserver`，然后从中分离
- `tmux new -s auth-session`
- 现在在其中运行 `./acore.sh run-authserver`，然后从中分离

可以使用 `CTRL+B+D` 退出会话，而不会杀死进程。如果使用 VSCode SSH 连接，可以直接关闭终端会话。

你可以使用以下命令再次连接到 `world-session` 会话：

- `tmux attach -t world-session`

其他有用的命令：

- 创建新会话： `tmux new -s my_session`
- 列出所有会话： `tmux ls`
- 杀死一个会话：`tmux kill my_session`（或直接附加到该会话并键入 `exit`）
- 杀死所有会话：`tmux kill-server`
- ……更多详情请访问 [tmux wiki](https://github.com/tmux/tmux/wiki)

### 在系统启动时自动启动 tmux 会话

你可以使用这个简单的脚本自动创建 tmux 会话并执行 `authserver` 和 `worldserver`：

```bash
#!/usr/bin/env bash

# CHANGE THESE WITH THE CORRECT PATHS
authserver="/path/to/azerothcore-wotlk/acore.sh run-authserver"
worldserver="/path/to/azerothcore-wotlk/acore.sh run-worldserver"

authserver_session="auth-session"
worldserver_session="world-session"

if tmux new-session -d -s $authserver_session; then
    echo "Created authserver session: $authserver_session"
else
    echo "Error when trying to create authserver session: $authserver_session"
fi

if tmux new-session -d -s $worldserver_session; then
    echo "Created worldserver session: $worldserver_session"
else
    echo "Error when trying to create worldserver session: $worldserver_session"
fi

if tmux send-keys -t $authserver_session "$authserver" C-m; then
    echo "Executed \"$authserver\" inside $authserver_session"
    echo "You can attach to $authserver_session and check the result using \"tmux attach -t $authserver_session\""
else
    echo "Error when executing \"$authserver\" inside $authserver_session"
fi

if tmux send-keys -t $worldserver_session "$worldserver" C-m; then
    echo "Executed \"$worldserver\" inside $worldserver_session"
    echo "You can attach to $worldserver_session and check the result using \"tmux attach -t $worldserver_session\""
else
    echo "Error when executing \"$worldserver\" inside $worldserver_session"
fi
```

在 unix 系统中，可以使用 [crontab](https://en.wikipedia.org/wiki/Cron) 在系统启动时自动运行脚本：

```bash
crontab -e
```

然后添加这一行（用放置上述脚本的路径替换 `/path/to/startup.sh`）：

```bash
@reboot /bin/bash /path/to/startup.sh
```

> [英文链接](https://www.azerothcore.org/wiki/ac-dashboard-core-installation)
