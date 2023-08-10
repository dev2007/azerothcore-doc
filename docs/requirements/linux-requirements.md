---
sidebar_position: 10
---

# Linux 要求

||
|--|
|MySQL ≥ 5.7.0|
|Boost ≥ 1.74|
|OpenSSL ≥ 1.0.x|
|CMake ≥ 3.16|
|Clang ≥ [10](https://github.com/azerothcore/azerothcore-wotlk/actions?query=workflow%3Acore-build)|

## 使用 MariaDB 10.x 的 Ubuntu

AzerothCore 仅支持 MariaDB 10.6 和 10.5 版本。

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install git cmake make gcc g++ clang libssl-dev libbz2-dev libreadline-dev libncurses-dev libboost-all-dev mariadb-server mariadb-client libmariadb-dev libmariadb-dev-compat
```

## 使用 MySQL 8.x 的 Ubuntu

```bash
sudo apt-get update && sudo apt-get install git cmake make gcc g++ clang libmysqlclient-dev libssl-dev libbz2-dev libreadline-dev libncurses-dev mysql-server libboost-all-dev
```

请记住，如果你使用的是 `root` 用户，则无需使用 `sudo`。

**注意**：如果出现**找不到 -lstdc++（cannot find -lstdc++）** 的错误，你需要安装 `g++-12` 及其依赖。

要在 Ubuntu 18.04 及类似版本中配置 MySQL（设置 `root` 密码和其他设置），请阅读[此指南](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04)。

**注意**：在旧版本的 Ubuntu，如 `18.04` 中，你需要安装 `gcc-10` 和 `libboost1.74-dev`：

```bash
sudo add-apt-repository -y ppa:ubuntu-toolchain-r/test
sudo add-apt-repository -y ppa:mhier/libboost-latest
sudo apt-get update
sudo apt install -y gcc-10 g++-10
sudo apt install -y install libboost1.74-dev
```

---

/*
## Debian 10

```bash
sudo apt-get update && sudo apt-get install git cmake make gcc g++ clang default-libmysqlclient-dev libssl-dev libbz2-dev libreadline-dev libncurses-dev mariadb-server libboost-all-dev
```

记住，如果你使用的是 `root` 用户，则不必使用 `sudo`。

**注意**：如果在列表末尾添加 `-y` 和选项，则无需确认即可开始安装。

**例如**：

```bash
apt-get update && apt-get install git cmake make gcc g++ clang default-libmysqlclient-dev libssl-dev libbz2-dev libreadline-dev libncurses-dev mariadb-server libboost-all-dev -y
```

*/

---

## 检查你的 clang 版本

```bash
clang --version
```

你的 `clang` 版本**必须**是 `10` 或更高（在[这里](https://github.com/azerothcore/azerothcore-wotlk/actions?query=workflow%3Acore-build)你可以查看在我们的 Github Actions pipeline 中运行的版本，我们建议使用其中一个版本）。

例如，如果你使用的是 Ubuntu 的旧版本，如 18.04，则需要使用以下命令安装 clang：

```bash
sudo apt-get install clang-10.0
```

如果你使用其他发行版或版本，请在谷歌上搜索如何为你的系统安装正确的 clang 版本。

目前，该项目需要 clang10 或更高版本。

这是升级和安装 11 版本的方法。

答案详见此处：

[如何在 Debian 上安装 clang 11](https://stackoverflow.com/questions/66223241/how-to-install-clang-11-on-debian)

## 检查你的 cmake 版本

```bash
cmake --version
```

你的 `cmake` 版本**必须**是 `3.16` 或更高。

在旧版本的 Ubuntu 上（例如：16.04），你可以按照此处的说明安装最新版本的 cmake。在 debian 上，你需要使用 backports 源码或手动编译 Cmake。

记住，可以使用 Python 更新 cmake。

安装：

```bash
python -m pip install cmake
```

更新：

```bash
python -m pip install --upgrade cmake
```

## 确保已安装 gcc-8 头文件

如果使用的是 16.04 等旧版本的 Ubuntu，就会出现这个问题。你必须添加 PPA "工具链测试构建（Toolchain test builds）"：https://launchpad.net/~ubuntu-toolchain-r/+archive/ubuntu/test。

之后

```bash
sudo apt-get update
```

你可以安装 GCC-8：

```bash
sudo apt-get install g++-8 gcc-8
```
---

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/linux-requirements)
