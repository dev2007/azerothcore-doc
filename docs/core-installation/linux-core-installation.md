---
sidebar_position: 10
---

# Linux 核心安装

## 所需软件
---

继续之前参阅[要求](/requirements)。

## 获取源代码
---

从以下方法中选择**一种**，在终端运行以下 `git ...` 命令。

1. 只克隆主分支 + 完整历史（推荐使用较小的版本）：

```bash
git clone https://github.com/azerothcore/azerothcore-wotlk.git --branch master --single-branch azerothcore
```

2. 只克隆主分支，不克隆之前的历史分支（最小）：

```bash
git clone https://github.com/azerothcore/azerothcore-wotlk.git --branch master --single-branch azerothcore --depth 1
```

注意：如果您想得到完整的历史记录，请使用 `git fetch --unshallow`。

3. 克隆所有分支和所有历史：

```bash
git clone https://github.com/azerothcore/azerothcore-wotlk.git azerothcore
```

这将创建一个包含 AC 源文件的 `azerothcore-wotlk` 目录。

## 编译源代码
---

### 创建构建目录

为了避免更新和源代码编译碰撞的问题，我们创建了一个特定的编译目录，以避免可能出现的问题（如果可能出现的话）

```bash
cd azerothcore
mkdir build
cd build
```

### 配置编译

运行 CMake 命令前，请将 `$HOME/azeroth-server/` 替换为服务器的安装路径（你希望将编译后的二进制文件放置的地方）。

针对高级用户的 [CMake 选项](https://www.azerothcore.org/wiki/cmake-options)参数解释。

此时，你必须在 "build/"目录下。

**注意**：在下面的命令中，变量 `$HOME` 是**当前用户**的路径，所以如果你以 root 登录，$HOME 将是"/root"。你可以按以下步骤检查环境变量的状态：

```bash
echo $HOME
```

**注意**：如果你使用的是非默认的 `clang` 软件包，则需要相应地替换它。例如，如果您安装了 `clang-6.0`，则必须将 clang 替换为 `clang-6.0`，将 `clang++` 替换为 `clang++-6.0`

```bash
cmake ../ -DCMAKE_INSTALL_PREFIX=$HOME/azeroth-server/ -DCMAKE_C_COMPILER=/usr/bin/clang -DCMAKE_CXX_COMPILER=/usr/bin/clang++ -DWITH_WARNINGS=1 -DTOOLS_BUILD=all -DSCRIPTS=static -DMODULES=static
```

要了解可用的内核数量。可以使用以下命令：

```bash
nproc --all
```

然后键入要执行的线程数，用 `6` 代替：

```bash
make -j 6
make install
```

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/linux-core-installation)
