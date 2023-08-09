---
sidebar_position: 30
---

# Windows 服务器设置

## 提取 DBC, Maps, VMaps 和 MMaps
---

1. 浏览到你的构建目录（**C:\Build\bin\RelWithDebInfo\ ** *），然后将以下文件复制到你的魔兽世界文件夹（`wow.exe` 所在的位置）。

```bash
mapextractor.exe
mmaps_generator.exe
vmap4extractor.exe
vmap4assembler.exe
```

2. 浏览到 **C:\Azerothcore\apps\extractor**，然后将 "**extractor.bat**" 与之前的文件一起复制到《魔兽世界》文件夹中。
3. 在魔兽世界目录下创建 **mmaps** 和 **vmaps** 文件夹。
4. 启动 `extractor.bat`，选择提取选项。

### 重要说明

- 要使服务器正常工作，需要 **dbc**、**maps** 和 **vmaps** ！
- 不要试图停止 **vmaps** 提取过程。当打印出 "按任意键......（Press any key...）"时，该过程就结束了。它会创建两个新文件夹：**buildings** 和 **vmaps**。***buildings** 文件夹在运行后完全无用，可以安全删除。
- 在第一个任务完成之前不要运行另一个任务，否则会出错。
- 如果在完成前停止 vmap4extractor，则需要在再次启动前删除 `Buildings` 目录。
- **可选但极力推荐：提取 mmaps**。在提取过程中，不要试图停止该进程。
- 在 **C:\Build\bin\RelWithDebInfo `*`**  中新建一个名为 **Data** 的文件夹。
- 将 `vmaps`、`maps`、`dbc`、`camera` 移到 **Data** 文件夹中。

`*` 可在 RelWithDebInfo、Debug 或 Release 中找到。

## 设置配置文件
---

首先，你需要找到两个默认配置文件（名为 `worldserver.conf.dist` 和 `authserver.conf.dist`）并复制它们。然后重命名它们的同名文件，去掉 .dist 扩展名。你可以在 `/build/bin/configs/` 中找到它们（可能会有所不同）。

打开 `.conf` 文件，向下滚动到 `LoginDatabaseInfo`、`WorldDatabaseInfo` 和 `CharacterDatabaseInfo`，然后输入 MySQL 登录信息，以便服务器能够访问你的数据库。

在新编译的配置中，默认值如下

```bash
LoginDatabaseInfo     = "127.0.0.1;3306;acore;acore;acore_auth" worldserver.conf / authserver.conf
WorldDatabaseInfo     = "127.0.0.1;3306;acore;acore;acore_world" worldserver.conf
CharacterDatabaseInfo = "127.0.0.1;3306;acore;acore;acore_characters" worldserver.conf
```

它们遵循以下结构：

```bash
Variablename = "MySQLIP;Port;Username;Password;database"  
```

> [英文链接](https://www.azerothcore.org/wiki/windows-server-setup)
