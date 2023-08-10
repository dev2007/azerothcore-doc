# 常见错误
---

:::note 提示
常见问题集没有回答你的问题？请阅读[如何寻求帮助](/how-to-ask-for-help)，了解如何以最佳方式解决问题。
:::

## 数据库相关错误
---

### ACE00001

我无法启动 Auth/WorldServer，出现以下错误：

```bash
[ERROR]: Table 'acore_world.table' doesn't exist
Your database structure is not up to date. Please make sure you've executed all queries in the sql/updates folders.
```

您根本没有更新，您需要[更新您的数据库](/keeping-the-server-up-to-date/database-keeping-the-server-up-to-date)。

---

### ACE00002

我无法启动 Auth/WorldServer，我得到的信息是：

```bash
[ERROR]: DatabasePool world NOT opened. There were errors opening the MySQL connections. Check your SQLDriverLogFile for specific errors.
[ERROR]: Cannot connect to world database 127.0.0.1;3306;acore;acore;acore_world
```

这可能意味着很多不同的情况，可能是你的数据库不在线，可能是你输入了错误的凭据，也可能是数据库结构有误。

您需要启用 Worldserver.conf 中的 SQLDriverLogFile，以获得关于问题所在的准确报告。

为此，请取消 Logger.sql.driver 的注释，然后再次运行 WorldServer。

---

### ACE00003

我无法启动 Auth/WorldServer，我得到的信息是：

```bash
> Loaded 0 acore strings. DB table `acore_string` is empty.
```

这是因为您根本没有导入数据库。请按照[数据库安装](/database-installation)中的说明进行操作。

---

### ACE00004

我无法启动 Auth/WorldServer，我得到的信息是：

```bash
Unknown column 'level' in 'field list'

Your database structure is not up to date. Please make sure you've executed all queries in the sql/updates folders.
```

这可能意味着以下几个方面：
1. 您更新了数据库，但忘记重新编译更新二进制文件。
2. 您更新了二进制文件，但忘记更新数据库。
3. 您试图使用自定义补丁或模块，但忘记更新数据库。
4. 您试图使用另一个项目中的 SQL 补丁。

---

## 数据库更新相关错误
---

### ACE00020

我的 DB 汇编程序关闭后没有导入所有更新，我得到了：

```bash
ERROR 1054 (42522) at line 14062: Unknown column 'resistance2' in 'field list'
```

出现此错误的原因是您手动更改了数据库结构，并与更新发生冲突。

最简单的修复方法是删除数据库并重新导入。

---

### ACE0021

我的 DB Assembler 关闭后没有导入所有更新：

这可能有几个原因：
1. 您为 DB Assembler 设置了错误的凭证。
2. 您的数据库结构已被手动修改，并与更新冲突。通过放弃数据库来解决这个问题。

---

### ACE00022

我的 DB 汇编程序关闭后没有导入所有更新，我得到的结果是：

```bash
ERROR 1067 (42000) at line 181: Invalid default value for 'start_time'.
```

禁用 MySQL 严格模式，阅读[如何在 localhost (xampp) 中打开/关闭 MySQL 严格模式？StackOverflow](https://stackoverflow.com/questions/40881773/how-to-turn-on-off-mysql-strict-mode-in-localhost-xampp)。

---

### ACE00023

我的 Worldserver 在自动更新时关闭，我得到的信息是：

```bash
ERROR 2013 (HY000) at line 4: Lost connection to MySQL server during query
```

这很可能是因为 MySQL 服务器的 max_allowed_packet 设置过低。参阅[这里](https://docs.oracle.com/cd/E19509-01/820-6323/gicxk/index.html)或在 SQL 客户端（HeidiSQL、SQLyog 等）中运行 `SET GLOBAL max_allowed_packet=1073741824;` 命令更新 max_allowed_packet。

**该值将在下一次重启 SQL 服务器时重置，今后可能需要再次运行此查询。**

## 核心相关错误
---

### ACE00040

核心无法启动，我得到了：

```bash
dbc exists, and has 13 field(s) (expected 12). Extracted file might be from wrong client version or a database-update has been forgotten.
```

您需要从与服务器相同的未修改客户端版本（即 3.3.5a）中提取 DBC 文件。

---

### ACE00041

核心无法启动，一打开就关闭。

使用命令提示符启动服务器，以获得准确的错误信息。

---

### ACE00042

核心无法启动，我看到了这个错误窗口。

```bash
The code execution cannot proceed because libmysql.dll was not found. Reinstalling the program may fix this problem.

Or similar error.
```

您没有将必要的 .dll 文件复制到二进制文件目录。

---

### ACE00043

核心无法启动，我得到了：

```bash
AzerothCore does not support MySQL versions below 5.7 and MariaDB versions below 10.5
```

升级 MySQL/MariaDB。

---

### ACE00044

我得到了：

```bash
-- Performing Test boost_filesystem_copy_links_without_NO_SCOPED_ENUM - Failed error
```

你可以忽略它。这是我们无法掩盖的错误。

---

### ACE00045

WorldServer 运行时出现错误：

```bash
Map file './maps/0004331.map' is from an incompatible map version (MAPS v9), MAPS v10 is expected
```

提取源代码，重新编译工具，将提取器复制到 wow 二进制文件中，然后使用更新的 mapextractor 重新创建地图。然后用新的地图文件替换旧的地图文件。

---

### ACE00046

我在启动 WorldServer 时遇到错误：

```bash
ACE00046
我在启动 WorldServer 时遇到错误：
```

你需要使用的 libmysql.dll 版本与你用来编译源代码的版本完全相同。你可以从 **C:\Program Files\MySQL\MySQL Server 8.x\lib\ ** 或按照[安装指南](/server-setup/windows-server-setup#编译源代码)获取它。

这是因为你更新了 MySQL 服务器，但没有重新编译和添加新的 libmysql.dll 文件。

---

### ACE00047

我在尝试启动 Worldserver 或 Authserver 时遇到错误：

```bash
This application was unable to start correctly (0xc000007b). Click OK to close the application.
```

这通常是由于 32/64 位动态链接库与编译后的二进制文件混合所致。您的 DLL 需要与编译后的二进制文件使用相同的位版本。

---

### ACE00048

我在尝试启动 Worldserver 或 Authserver 时遇到错误：

```bash
{}DatabaseInfo is not specified in configuration file!

{} = World/Character/Auth
```

这说明 .conf 文件中缺少数据库连接信息。

转到 .conf 文件中指定的 DatabaseInfo，添加连接信息。

---

## 核心编译相关错误
---

### ACE00060

我没有获得 AzerothCore 哈希值

重新安装 Windows 版 Git，并在要求调整 PATH 时选择 "从命令行和第三方软件获取 Git"。

---

### ACE00061

我无法在 CentOS/Ubuntu/Debian 等操作系统上安装 AzerothCore。

AzerothCore 需要 GCC 8.0 或更高版本和 CLang 7 或更高版本。

---

### ACE00062

我无法在 Windows XP/Vista/7 上安装 AzerothCore。

AzerothCore 需要 [Visual Studio 2022](AzerothCore )，因此您需要升级到 Windows 10 或更高版本。

---

### ACE00063

我无法在 Linux 上安装 AzerothCore，我得到的结果是：

```bash
c++: internal compiler error: Segmentation fault (program cc1plus)
```

这可能是由于

1. SELinux 强化内核，解决方法：改用一个标准内核，用 clang 而不是 gcc 编译，或不用 pch 编译。
2. 内存/交换内存不足，增加内存。

---

### ACE00064

如何在操作系统上<插入问题>。

使用谷歌或购买书籍来学习您正在使用的操作系统。

---

### ACE00065

我无法编译，我得到了：

```bash
fatal error C1060: compiler is out of heap sp#ace
C1076: compiler limit : internal heap limit reached; use /Zm to specify a higher limit
```

阅读[如何在命令行上启用 64 位 x64 托管 MSVC 工具集。微软](https://docs.microsoft.com/en-us/cpp/build/how-to-enable-a-64-bit-visual-cpp-toolset-on-the-command-line?redirectedfrom=MSDN&view=msvc-160)。

---

### ACE00066

我无法编译，我得到了：

```bash
C1001: An internal error has occurred in the compiler.
```

更新 Visual Studio。

---

### ACE00067

我无法生成 CMake 文件，得到的结果是：

```bash
无法找到 Boost（缺少：系统文件系统 program_options iostreams regex）（找到合适的版本 "1.74.0"，最低要求为 "1.70）
```

找到 Boost 文件夹

1. 运行 Bootstrap.bat 文件
2. 运行 b2.exe 文件

---

## 提取器相关的错误
---

### ACE00080

我在寻找地图提取器，但它们适用于 wow 第 4 版。

不，它们不是。名称 "vmap4extractor"/"vmap4Assembler "反映了工具的版本。它们都适用于 WoW 3.3.5a。

---

### ACE00081

运行提取器时无法打开 RootWmo。

不是错误，请忽略。

---

### ACE00082

我无法使用 Vmap 提取器。

先提取地图。

---

### ACE00083

我有 ManGOS 或 TrinityCore 的地图，可以使用它们吗？

不能。

:::note 提示
常见问题集没有回答你的问题？请阅读[如何寻求帮助](/how-to-ask-for-help)，了解如何以最佳方式解决问题。
:::

> [英文链接](https://www.azerothcore.org/wiki/common-errors)
