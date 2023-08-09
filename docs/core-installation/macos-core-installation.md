---
sidebar_position: 20
---

# macOS 核心安装

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

注意：如果你想得到完整的历史记录，请使用 `git fetch --unshallow`。

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
export OPENSSL_ROOT_DIR=$(brew --prefix openssl@1.1)
cmake ../ \
-DCMAKE_INSTALL_PREFIX=$HOME/azeroth-server/  \
-DTOOLS_BUILD=all \
-DSCRIPTS=static \
-DMYSQL_ADD_INCLUDE_PATH=/opt/homebrew/include/mysql \
-DMYSQL_LIBRARY=/opt/homebrew/lib/libmysqlclient.dylib \
-DREADLINE_INCLUDE_DIR=/opt/homebrew/opt/readline/include \
-DREADLINE_LIBRARY=/opt/homebrew/opt/readline/lib/libreadline.dylib \
-DOPENSSL_INCLUDE_DIR="$OPENSSL_ROOT_DIR/include" \
-DOPENSSL_SSL_LIBRARIES="$OPENSSL_ROOT_DIR/lib/libssl.dylib" \
-DOPENSSL_CRYPTO_LIBRARIES="$OPENSSL_ROOT_DIR/lib/libcrypto.dylib"
```

然后，进行构建和安装：

```bash
make -j `nproc`
make install
```

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/macos-core-installation)
