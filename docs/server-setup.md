---
sidebar_position: 40
---

# 3. 服务器设置

现在，源代码已经编译完成，你需要通过下载或解压的方式添加一些必要的文件。

有些文件是可选的，但强烈建议使用：

|目录||
|--|--|
|dbc|强制的|
|maps|强制的|
|vmaps|**强烈推荐**|
|mmaps|**强烈推荐**|
|cameras|推荐|


## 下载
---

如果不想使用解压程序来提取这些文件，可在此处找到下载链接：

Github 链接：

[完整数据 (v16) - 从 2023 年 1 月 2 日到现在](https://github.com/wowgaming/client-data/releases/)

1. 下载上面的文件。
2. 在构建文件夹中新建一个名为 **Data** 的文件夹：**C:\Build\bin\RelWithDebInfo\Data** 或 linux: **$HOME/azeroth-server/data/**
3. 从 zip 文件中解压文件，并将它们放在 **Data** 文件夹中。
4. 将 [DataDir](#更新-datadir) 配置选项编辑为你的文件夹位置。

## 解压程序（如果已下载上述文件，则不需要）
---

如果已下载上述文件，则可跳过这一步，直接进入操作 [worldserver.conf / authserver.conf](#配置文件-worldserverconf--authserverconf)。

这部分只是对整个过程的概括，请根据你使用的操作系统阅读更详细的内容。

- [Linux 服务器设置](/server-setup/linux-server-setup)
- [macOS 服务器设置](/server-setup/macos-server-setup)
- [Windows 服务器设置](/server-setup/windows-server-setup)

AzerothCore 需要从魔兽世界客户端中提取某些文件。你需要从 3.3.5a 版客户端中提取这些文件。

默认情况下，你将使用工具编译核心，并获得以下可执行文件：**mapextractor**、**vmap4extractor**、**vmap4assembler**、**mmaps_generator**（windows 下为 .exe）。

将这些文件与魔兽世界二进制文件（windows 下为 **wow.exe**）放在一起，然后运行它们。

解压缩所有必要文件后，在 **RelWithDebInfo** 或 **Debug** 目录下创建一个名为 **Data** 的文件夹，并将文件放入其中。或者，你也可以通过更改 worldserver.conf 文件中的 DataDir 值，指定一个不同的目录来保存这些文件。

如果你使用其他项目或分支的提取器，几乎可以肯定您的艾泽拉斯核心将无法识别提取的数据，甚至无法运行！

完成提取后，你可能会收到以下信息，请放心忽略：

```bash
Processing Map 724
[################################################################]
Extracting GameObject models...Extracting World\Wmo\Band\Final_Stage.wmo
No such file.
Couldn't open RootWmo!!!
Done!
  
Extract V4.00 2012_02. Work complete. No errors.
```

### 故障排除

**"无法打开 wmo_list.txt！未提取任何内容。"**

你需要在运行 makevmaps_simple.bat 之前运行 Mapextractor.exe。

## 配置文件 worldserver.conf / authserver.conf
---

### 创建配置文件

1. 备份所有的 .dist 文件。
2. 从每个备份中删除 .dist 扩展名。

打开 .conf 文件，向下滚动到 LoginDatabaseInfo、WorldDatabaseInfo 和 CharacterDatabaseInfo，然后输入 MySQL 登录信息，以便服务器能够访问你的数据库。

在新编译的配置中，默认值如下：

```bash
LoginDatabaseInfo     = "127.0.0.1;3306;acore;acore;acore_auth" worldserver.conf / authserver.conf
WorldDatabaseInfo     = "127.0.0.1;3306;acore;acore;acore_world" worldserver.conf
CharacterDatabaseInfo = "127.0.0.1;3306;acore;acore;acore_characters" worldserver.conf
```

它们遵循以下结构：

```bash
Variablename = "MySQLIP;Port;Username;Password;database"  
```

必须验证以下步骤：

- 如果 AzerothCore 安装在运行魔兽世界的同一台电脑上，则主机名（127.0.0.1）可以保持不变。否则，请按照[Realmlist 表](/realmlist)中的说明进行操作。
- 端口（3306）是标准配置值。如果你在 mysql 设置中更改了默认端口，则必须相应更改。用户名和密码可以是变量。你可以选择
    - 使用默认的 acore / acore 用户名和密码对。
    - 在首选数据库管理工具的用户管理器中创建一个唯一的登录名（通常用一个人形图标标识），并赋予其必要的权限（SELECT、INSERT、UPDATE、DELETE 权限即可，而且更安全）。

### 更新 DataDir

1. 在 worldserver.conf 文件中找到 **DataDir** 选项。
2. 将其编辑为文件夹路径，即 **C:\Build\bin\RelWithDebInfo\Data**

*专业提示：对于大多数 worldserver.conf 设置的更改，你只需在游戏中输入 .reload config 即可看到更改，无需重启服务器。*

*注意：艾泽拉斯核心团队和所有者在任何情况下都不会赞助或支持非法的公共服务器。如果您使用这些项目运行非法的公共服务器，而不是用于测试和学习，那是您个人的选择。*

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/server-setup)
