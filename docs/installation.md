---
sidebar_position: 10
description: AzerothCore安装指南，支持经典和docker
keywords: [AzerothCore, 艾泽拉斯, 魔兽世界, 服务端, 单机版, 安装, 文档]
---

# 0.安装指南

## 选择安装方式
---
安装 AzerothCore 有多种方式，您需要选择其中**一种**。

### 从源码安装（支持，推荐）

这些是官方支持的、完整的安装AzerothCore的方法，适用于任何用途（Windows、Linux、macOS）。

- [AzerothCore 经典安装](#AzerothCore-经典安装)——安装 AzerothCore 的传统方式。经过实战检验，推荐用于所有操作系统，适用于任何用途。此过程可让您更清楚地了解艾泽拉斯核心的结构。请参见本页下方。
- [Docker 安装](/install-with-docker)——基于 Docker 的安装程序。建议具备 Docker 知识。支持有限。
- [AzerothCore Bash Dashboard 设置](/ac-dashboard-core-installation)--安装AzerothCore的最简单方法，推荐用于本地开发和生产。

### 从预编译镜像安装（支持，使用有限）

- [Docker 预编译设置](https://www.azerothcore.org/acore-docker/)——安装 AzerothCore 的最简单方法。目前，您无法安装 c++ 模块，只能安装 Eluna 脚本。特别适用于错误分流、错误报告或国内使用。

### 其他（不支持）

这些指南由社区成员制作，可能不是最新的：

- [Amazon Web Services](/aws-tutorial)
- [Digital Ocean droplet](/digital-ocean-video-tutorial)
- [ArchLinux](/arch-linux)
- [FreeBSD](/freebsd)
- [Visual Studio Code](/vsc-requirements)

## AzerothCore经典安装
---

本指南的每个步骤都分为三个标签，分别针对不同的操作系统（Linux、macOS 和 Windows）。

为了提高可读性，本指南分为 8 个步骤：

1. [要求](/requirements)
2. [核心安装](/core-installation)
3. [服务器设置](/server-setup)
4. [数据库安装](/database-installation)
5. [网络](/networking)
6. [最后的服务器步骤](/final-server-steps)
7. [保持服务器更新](/keeping-the-server-up-to-date)
8. [客户端设置](/client-setup)

每个步骤都可以单独阅读，也可以合并阅读，以便逐渐进入状态并更好地理解所有步骤。

*提示：如果您是第一次安装艾泽拉斯核心，我们建议您仔细阅读每一个步骤！*