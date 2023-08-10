# 常见问题

如果你在安装或编译 AzerothCore 时遇到问题，请阅读[常见错误](/common-errors)。

:::notice 提示
常见问题集没有回答你的问题？请阅读[如何寻求帮助](/how-to-ask-for-help)，了解如何以最佳方式解决问题。
:::

## 一般常见问题

- 支持哪些操作系统/平台？
    - 目前支持 Windows、macOS、Linux 和 Docker。
- 我应该何时更新源代码？
    - 我们建议你经常更新内核，至少每周一次，以便受益于最新的内核修复和安全补丁。
- AzerothCore 需要多少内存？
    - 你可以在[这里](/memory-usage)找到所有内存信息。
- 什么是 "类似暴雪（Blizzlike）"？
    - AzerothCore 试图复制魔兽世界的暴雪状态。所谓"类似暴雪（Blizzlike）"，是指它与暴雪服务器上的状态非常接近。
- 为什么艾泽拉斯核心不模仿 "类似暴雪 "的错误或漏洞？
    - 虽然我们努力提供类似暴雪的内容，但我们也重视用户体验。这意味着我们有时会修复当时零售时存在的错误或漏洞，以便为玩家提供更好的整体体验。
- 我如何做出贡献？
    - 您可以通过提交拉取请求来帮助修复问题，请点击[此处](/contribute)了解更多信息。
    - 您可以通过测试我们的 [Pull Request](/contribute#如何测试拉取请求) 和参与 [github 问题讨论](https://github.com/azerothcore/azerothcore-wotlk/issues)来帮助我们。
    - 您可以使用 [bountysource](/bountysource) 为您希望修复的问题或建议悬赏（金钱）。点击此处了解更多：赏金源
    - 你可以通过提交 [Pull Request](https://github.com/azerothcore/wiki) 来帮助改进维基。
- 为什么不合并我的修复？
    - 所有修复都必须由开发人员审核。不是所有开发人员都知道所有事情，所以你需要等到有人审核后再合并。
    - 有些修复需要测试，但并非所有开发人员都能测试，因此您需要等待其他人来测试。
    - 在获得 "待合并 "标签后，它们最终会被合并。
    - 也许你没有遵循 [SQL/C++ 标准](/standard-operating-procedure)。
    - 在[合并过程](/merge-process)中阅读更多内容。
- 如何报告崩溃？
    - 将崩溃日志粘贴到 PasteBin 或 Gist 中。
    - 崩溃日志**需要来自 RelWithDebInfo 或 Debug 编译**。如果来自 Release，则毫无用处。
    - [如何重启和调试](/how-to-restart-and-debug)。
- 你们支持基于 AzerothCore 的重装吗？
    - 不支持，我们强烈建议不要使用它们，有[几个原因](https://www.mangosrumors.org/why-you-should-not-use-repacks-to-run-your-wow-server/)。你可以查看[此教程](https://www.chromiecraft.com/how-to-install-a-wow-server-on-your-own-computer/)，了解在不使用任何重装包的情况下安装 AzerothCore 的简单方法。

## 数据库相关常见问题
---

- 数据库多久更新一次？
    - 数据库几乎每天更新一次。
- 如何更新数据库？
    - wq 可以在[数据库保持服务器最新](/keeping-the-server-up-to-date/database-keeping-the-server-up-to-date)指南中找到保持数据库最新状态所需的一切信息。

## 核心相关常见问题
---

- 源码何时稳定？
    - 很快...... ™
    - 我们会尽最大努力保持主分支的稳定和可玩性。我们从不直接将代码推送到主分支，而是首先要求每个人（包括 AzerothCore 管理员和员工）打开 PR，以便每个人都能在合并到主分支之前检查它们。
    - 请通过[测试 PR](/how-to-test-a-pr) 和报告任何可能发现的错误来帮助我们。
- 我无法在 Windows 平台上运行提取程序，点击后就消失了？
    - 请理解这是一个**命令行**工具，而不是图形用户界面工具。这意味着你需要在 Windows 中使用命令行（例如 "命令提示符"），而不是直接双击它。
- 为什么无法运行旧版 MAP/DBC 提取程序？
    - 它们的更新是有原因的，如果不使用最新版本的解压缩程序，在启动世界服务器时就会出错。
    - 如果使用 "TOOLS" 编译，您将始终获得最新版本。
- 什么是 Map、VMap、 MMap 和 DBC？
    - **注意，AzerothCore 不支持也不允许对客户端文件或私人/公共服务器进行任何形式的修改！AzerothCore 本身就是用于理论研究和学习的。**
    - 除了作为二进制文件的内核提供了基本功能和解释功能、定义和命令的单个客户端之外，内核还可以被描述为"躯体"，以下数据构成了它的 "解剖结构"：
        - **Map**：**运行 AzerothCore 必需**地图（Map）。地图提供物理值和数据供核心解读。在此基础上，核心拥有可与每个客户端进行比较的布局。这包括区域定义。
        - **VMap**：虚拟地图（VMap）是**可选项，但强烈推荐使用**。例如，虚拟地图会计算视线的可能性。根据其内容，服务器可以（例如）计算是否可以施法（例如，目标和施法者之间是否有墙）。
        - **MMap**：移动地图（MMap） 是**可选项，但强烈推荐使用**。为了进一步加强物理边界，移动地图（MMap）会强制执行非玩家角色（如 NPC）的物理边界，因为客户端不会处理它们的碰撞。它们还能改进路径生成。
        - **DBC**：运行 AzerothCore 需要 DBC。DBC（"数据库客户端[文件]"）提供了魔兽世界客户端解释的基本值。它们定义了种族、纹理、本地模型等。AzerothCore 会解释并加载这些文件。
    - 使用 "TOOLS" 编译 AzerothCore 时，总是会创建提取和创建这些文件所需的工具。
- 我在提取地图、VMaps、MMaps 和 DBC 时遇到问题（我尝试过使用旧版本的提取器）——出了什么问题？
    - 旧版工具已经过时，无法使用。
    - 必须使用命令行才能运行这些工具。
- 我缺少 MySQL 的库，似乎无法在软件源中找到它们？
    - 该库名为 "mysql.lib"，并非由 AzerothCore 提供。
    - 请确保您使用开发头文件安装了 MySQL-Server。
    - 您可以按照[核心安装](/core-installation)指南查找库。
- 我缺少 OpenSSL 的库，似乎无法在软件源中找到它们？
    - 对于 1.1.0 之前的 OpenSSL 版本，它们将被命名为 "libeay32.dll "和 "ssleay32.dll"。
    - 对于 1.1.0 及更高版本的 OpenSSL，它们被称为
        - 对于 32 位安装："libssl-1_1.dll" 和 "libcrypto-1_1.dll"。
        - 用于 64 位安装：用于 64 位安装："libssl-1_1-x64.dll "和 "libcrypto-1_1-x64.dll"。
    - 您可以按照[核心安装](/core-installation)指南查找这些库。

## 调试相关常见问题
---

- 如何在 Windows 上获得良好的崩溃日志？
    - 在 RelWithDebInfo 或 Debug 下编译核心。Release 版本的崩溃日志毫无用处。
    - 如果在 [Visual Studio 中运行 worldserver 和 autherserver](/run-worldserver-and-authserver-in-visual-studio)，就可以自行调试。

## 模块相关常见问题
---

- 我需要为我的自定义模块添加一个新钩子，我该怎么做？
    - 您可以将钩子添加到自己的 fork 中（参见：[创建一个新钩子](/hooks-script)），然后向官方仓库创建一个新的拉取请求，这样我们就可以验证并合并它。
- 可以将核心补丁转化为模块吗？
    - 可以。[是否可以将核心补丁转化为 AzerothCore 的模块？- StackOverflow](https://stackoverflow.com/questions/66340549/is-it-possible-to-turn-a-core-patch-into-a-module-for-azerothcore/66340683#66340683)。

## 功能相关常见问题
---

- 哪些实例/区域/战场可以正常使用？
    - 大部分都能完美运行，有些运行情况较差。
    - 核心系统一直在开发中，最准确的数据将来自于您自己的尝试。
- Warden 有效吗？
    - 是的，但并非 100% 成功。Warden 并不能检测到所有黑客，即使在零售平台上也是如此。
- 如何关闭实例或战场？如何禁用咒语？
    - 所有禁用都在[禁用表](/disables)中处理。

:::note 提示
常见问题集没有回答你的问题？请阅读[如何寻求帮助](/how-to-ask-for-help)，了解如何以最佳方式解决问题。
:::

> [英文链接](https://www.azerothcore.org/wiki/faq)
