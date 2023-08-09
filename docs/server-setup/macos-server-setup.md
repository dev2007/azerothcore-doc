---
sidebar_position: 20
---

# macOS 服务器设置

## 提取 DBC, Maps, VMaps 和 MMaps
---

切换到你的 AzerothCore 构建目录（例如：`$HOME/build/bin/`），将以下文件复制到你的魔兽世界二进制文件目录。

- **map_extractor**
- **mmaps_generator**
- **vmap4_assembler**
- **vmap4_extractor**

### DBC 和 Maps 文件

```bash
cd <你的魔兽世界客户端目录>
./map_extractor
```

### Visual Maps（又名 vmaps） 注意：如果在完成前停止了 vmap4_extractor，则需要删除 Buildings 目录后才能再次启动。

你还可以提取 vmaps，这将花费相当长的时间，具体取决于你的机器（在古老的硬件上可能需要几个小时）。

```bash
cd <你的魔兽世界客户端目录>
./vmap4_extractor
mkdir vmaps;
./vmap4_assembler Buildings vmaps
```

完成后，你将收到以下信息，请放心忽略。

```bash
Processing Map 724
[################################################################]
Extracting GameObject models...Extracting World\Wmo\Band\Final_Stage.wmo
No such file.
Couldn't open RootWmo!!!
Done!
  
Extract V4.00 2012_02. Work complete. No errors.
```

### Movement Maps（又名 mmap —— 可选推荐）

提取 mmap 需要相当长的时间，这取决于你的机器（长达数小时）。

```bash
cd <你的魔兽世界客户端目录>
mkdir mmaps;
./mmaps_generator
```

现在一切都已完成，你需要将 **dbc**、**maps**、**vmaps** 和 **mmaps** 文件夹复制到你的 AzerothCore 构建目录（例如：`$HOME/build/data/`）。

## 设置配置文件
---

首先，你需要找到两个默认配置文件（名为 `worldserver.conf.dist` 和 `authserver.conf.dist`）并复制它们。然后重命名它们的同名文件，去掉 `.dist` 扩展名。你可以在 `/build/configs/` 中找到它们（可能会有所不同）。

打开 `.conf` 文件，向下滚动到 `LoginDatabaseInfo`、`WorldDatabaseInfo` 和 `CharacterDatabaseInfo`，然后输入 MySQL 登录信息，以便服务器能访问你的数据库。

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

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/macos-server-setup)
