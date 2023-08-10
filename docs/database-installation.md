---
sidebar_position: 50
---

# 4. 数据库安装

## 在 MySQL 中创建数据库
---

### 创建数据库和用户

首先，你需要使用下面的脚本创建 acore 用户。

https://github.com/azerothcore/azerothcore-wotlk/blob/master/data/sql/create/create_mysql.sql

你可以使用 MySQL 客户端或 MySQL 命令行界面 (CLI) 执行此操作。

在启动 core 运行其中一个文件之前，你需要在 MySQL 客户端或 MySQL CLI 中使用一个 MySQL root 帐户（仅使用 MySQL root 导入其中一个文件，切勿以 root 或管理员身份运行 core）。

*提示：为提高安全性，你可以更改所创建用户的密码。*

## 填充数据库
---

如果你想了解 SQL 目录的工作原理或计划进行自定义更改，我们建议你阅读此文。

### 自动数据库更新程序

Auth- 和 Worldserver 会在启动时检查并应用所有需要的数据库文件。

要编辑数据库自动更新程序，可在 `authserver.conf` 和 `worldserver.conf` 中的 **UPDATE SETTINGS** 下找到必要的设置。

1. 启动 Authserver。
2. 启动 Worldserver。

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/database-installation)
