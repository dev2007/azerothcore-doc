---
sidebar_position: 30
---

# Windows 核心安装

## 所需软件
---

继续之前参阅[要求](/requirements)。

## 拉取和编译源代码
---

### 拉取代码

1. 创建源文件所在的目录。在本指南中，我们将使用 `C:\Azerothcore`。
2. 打开 Github 桌面
3. 点击左上角的 **文件（File） -> 克隆仓库（Clone repository...）**
4. 点击 **URL**
5. 填写以下数据

```bash
Repository URL or GitHub username and repository: https://github.com/azerothcore/azerothcore-wotlk
Local path: C:\Azerothcore
```

点击**克隆（Clone）**。几分钟后，Azerothcore 的源文件就会被克隆到 `C:\Azerothcore` 中。

### 使用 CMake 配置和生成 Visual C++ 解决方案

在开始之前，创建一个名为 **Build** 的新目录。在本指南中，我们将使用 `C:\Build`。

1. 打开 CMake
2. 点击**浏览源代码...（Browse Source...）**→ 选择源代码目录（**C:\Azerothcore**）
3. 点击**浏览构建...（Browse Build...）**→选择构建目录（**C:\Build**）
4. 单击 **Configure（配置）**。
5. 在下拉菜单中，选择在[要求](requirements/windows-requirements)部分下载的编译器版本。如果使用的是 64 位编译器，请务必选择 **Win64** 版本。
6. 确保勾选了**使用默认本地编译器（Use default native compilers）**。
7. 单击**完成（Finish）**。
8. 确保 **TOOLS_BUILD** 设置为 `all`。这将编译稍后设置中所需的提取器。
9. 再次单击**配置（Configure）**。如果日志窗口中出现红色错误，则需要检查参数并重新运行。
10. 单击**生成（Generate）**。这将把选定的构建文件安装到 **C:\Build** 文件夹中。

#### 一些错误修复

- 如果 CMake 未找到 MySQL，则需要设置 **MYSQL_INCLUDE_DIR = C:/XX/MySQL/MySQL Server X.X/include** 和 **MYSQL_LIBRARY = C:/XX/MySQL/MySQL Server X.X/lib(_XX)/libmysql.lib**。
    - XX 取决于你使用的 MySQL 版本。
    - 如果在 CMake 中未看到 MYSQL 字段，请勾选 "高级 "复选框）。

- 如果出现链接器错误（例如 "error LNK2019: unresolved external symbol mysql_server_init"），请确保 MYSQL_LIBRARY 设置为与编译模式（x64 与 32 位）相匹配的 libmysql.lib。
    - 如果在 CMake 中看不到 MYSQL 字段，请勾选 "高级 "复选框）。

- 如果出现 CMake 无法找到 OpenSSL 的错误：
    - 选中**高级（Advanced）**复选框。
    - 在列表中找到两个 OPENSSL 条目，并指向正确的目录：
        - OPENSSL_ROOT_DIR 是安装路径（默认为 `C:/OpenSSL-Win32` 或 `C:/OpenSSL-Win64`）
        - OPENSSL_INCLUDE_DIR 是安装路径中的 "include" 文件夹（默认为 `C:/OpenSSL-Win32/include` 或 `C:/OpenSSL-Win64/include`）

- 如果出现 CMake *Could NOT find Boost 的错误（缺少：system filesystem program_options iostreams regex）（找到合适的版本 "1.74.0"，最低要求为 "1.70）
    - 找到你的 Boost 文件夹
        - 运行 Bootstrap.bat 文件
        - 运行 b2.exe 文件

- 如果出现系统上未找到 Git 的错误，请： ◦ 选中高级复选框：
    - 选中**高级（Advanced）**复选框。
    - 搜索并找到 **GIT_EXECUTABLE**
        - 指定 git.exe 的路径，例如 `C:/Program Files/Git/cmd/git.exe`
    - 如果没有 git.exe，则需要安装 git。参阅[要求](/requirements)。

### 编译源代码

1. 在 CMake 中按**打开项目（Open Project）**，直接用 Visual Studio 打开 **AzerothCore.sln** 文件。
2. 在顶部菜单中单击**构建（Build）**，然后选择**配置管理器（Configuration Manager）**。
3. 将**活动解决方案配置（Active Solution Configuration）**设为 **RelWithDebInfo**。
4. 在"帮助"下面的列表菜单中，将**活动解决方案配置（Active Solution Configuration）**平台设置为 **x64**，然后单击关闭（设置自动保存）。
    1. 如果在 CMake 配置过程中设置了 32 位编译，请选择 x86。
5. 在右侧边栏的"解决方案资源管理器"中右键单击 **ALL_BUILD**，然后选择**清理（Clean）**。
6. 右键单击 **ALL_BUILD**，然后选择**构建（Build）**。(Ctrl + Shift + B)
    1. 如果你的图形用户界面未显示解决方案资源管理器，请单击"构建"菜单并选择**清理解决方案（Clean Solution）**，然后选择**构建（Build）**。

编译时间因机器而异，但预计在 5 至 30 分钟之间。

如果在编译过程中或编译完成后被要求 "重新加载编译文件（Reload build files）"，请按此操作。

编译完成后，你会在输出中看到类似下面的信息：

```bash
========== Build: 22 succeeded, 0 failed, 0 up-to-date, 1 skipped ==========
```

你可以在 **C:\Build\bin\RelWithDebInfo** 或 **C:\Build\bin\Debug** 文件夹中找到新编译的二进制文件。这些文件都将在本说明的最后用于运行你的服务器。

为了让核心正常运行，你需要以下文件：

```bash
\configs\
authserver.exe
authserver.pbd
worldserver.exe
worldserver.pdb
libmysql.dll

---------
For OpenSSL 1.1.x
libeay32.dll / libcrypto-1_1.dll / libcrypto-1_1-x64.dll
ssleay32.dll / libssl-1_1.dll / libssl-1_1-x64.dll

---------
For OpenSSL 3.0 and later

legacy.dll
libcrypto-3.dll / libcrypto-3-x64.dll
libssl-3.dll / libssl-3-x64.dll
```

在配置文件夹中，你应该能找到：

```bash
authserver.conf.dist
worldserver.conf.dist
```

有两个/三个 DLL 文件需要手动添加到这个文件夹中，你需要从以下安装/bin 目录中复制它们：

**libmysql.dll** → C:\Program Files\MySQL\MySQL Server 8.x\lib\

*注意：你需要 libmysql 的准确版本来对应你下载的 MySQL。因此，你不能从网上下载 DLL，需要从文件夹中取出。*

**版本 1.1.0 *之前的* OpenSSL：**

**libeay32.dll** 和 **ssleay32.dll** → C:\OpenSSL-Win64\ 或 C:\OpenSSL-Win32\ （取决于你的核心是 64 位还是 32 位）。

**OpenSSL 1.1.x 名称已更改：**

对于 32 位版本：**libssl-1_1.dll** 和 **libcrypto-1_1.dll** → C:\OpenSSL-Win32\bin

对于 64 位版本：**libssl-1_1-x64.dll** 和 **libcrypto-1_1-x64.dll** → C:\OpenSSL-Win64\bin

**安装 OpenSSL 3.0 及以上版本时，需要复制：**

**legacy.dll** → C:\OpenSSL-Win(32/64)\bin

对于 32 位版本：libcrypto-3.dll 和 libssl-3.dll → C:\OpenSSL-Win32\bin

对于 64 位版本：libcrypto-3-x64.dll 和 libssl-3-x64.dll → C:\OpenSSL-Win64\bin

**关于编译日志和报告**

pdb 文件只有在调试模式或 RelWithDebInfo 模式下编译时才会存在，它不是强制性的，但建议至少在 RelWithDebInfo 模式下编译核心，以获得正确的崩溃日志。如果在 Release 模式下编译，则不需要 pdb 文件。

要报告崩溃日志，必须在调试模式或 RelWithDebInfo 模式下编译。

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/windows-core-installation)
