---
sidebar_position: 70
---

# 6. 最后的服务器步骤

## 启动服务器
---

- 在构建文件夹中运行 `authserver` 和 `worldserver`。

有关如何配置重启器和调试器的详细信息，请访问[如何重启和调试页面](/how-to-restart-and-debug)

**千万不要直接在数据库中创建账户，除非你非常确定自己知道该做什么以及如何做！**

- 然后直接在 **worldserver** 窗口中输入 GM Command **account create（创建账户）**，创建登录账户。语法(参阅下面的示例）
- 如果希望将账户设置为 GM，则在 **worldserver** 窗口中键入：**account set gmlevel $account #level #realmid**， 其中，**$account** 是要更改的账户名称，**#level** 可以是 0-4，**#realmid** 是领域（realm）ID。设置 **#level** 为 "3" 表示 GM 帐户级别（数字越大=权限越大），"-1" 表示 "所有领域"的领域 ID。

*提示：打开你的 **acore_world** 数据库，找到**命令（command）**表。该表显示 GM 命令的完整列表、说明和安全级别。这将是你能找到的最新列表，前提是您一直更新你的数据库和核心。*

- 最小化你的服务器并运行**魔兽世界**（切勿使用启动器运行魔兽世界，除非你编辑了上述 `realmlist.wtf` 的补丁列表选项）。
- 使用刚刚创建的用户/密码登录。
- 应该可以选择 AzerothCore 领域。登录后创建一个角色，然后就大功告成了！

## 创建账户
---

参阅[创建账户](/creating-accounts)。

## 设置远程访问
---

出于开发目的，这一步不是必须的。不过，为了提高安全性，当你希望其他人创建账户时，你应该设置一个注册表单，这样你就不必粘贴他们的密码了。查看[远程访问](/remote-access)，了解如何向服务器发送命令。

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/final-server-steps)
