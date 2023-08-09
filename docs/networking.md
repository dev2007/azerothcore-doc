---
sidebar_position: 60
---

# 5. 网络

本指南适用于高级设置，或只是提供更多有关设置本地或互联网使用的领域（realm）的详细信息。一般来说，特定操作系统指南中说明的默认设置应该可以满足简单设置的需要。

## 世界服务器和自动服务器配置
---

在几乎所有基本设置情况下，都应保留默认的 localhost (127.0.0.1) IP 设置。默认的 bindip（0.0.0.0）也应保持不变。

### 为互联网连接设置认证数据库 realmlist

这里必须使用互联网 IP，这样互联网客户才能找到服务器。路由器/防火墙必须转发或开放 `3724` 端口（authserver）和 `8085` 端口（worldserver）。

#### Realmlist 表

你需要确保 **authserver** 应用程序将传入连接导向您的域。

- 运行你选择的数据库管理工具（如 SQLYog 或 HeidiSQL）或使用 MySQL 命令行界面 (CLI)。
- 如果需要从一台外部机器连接到数据库，参阅 https://www.enovision.net/mysql-ssh-tunnel-heidisql，而不是打开 mysql 服务器的端口。
- 打开 **acore_auth** 数据库，找到 **realmlist** 表。你需要根据需要编辑**地址字段（address field）**：

    - 局域网 IP（192.168.x.x）——如果你安装 AzerothCore 的电脑与运行魔兽世界的电脑不同，但所有相关电脑都在同一个网络（路由器）上，请使用该电脑的局域网 IP。
    - 127.0.0.1——也称为 "localhost"。如果你将 AzerothCore 安装在运行魔兽世界的同一台电脑上，且只有你自己在连接，请在此处和配置中保留此设置。
    - 公共 IP 地址 - 如果您希望其他人连接到你的服务器，请使用你的外部 IP。访问 http://www.whatismyip.com/ 查找你的外部 IP 地址。
        - 如果你在家庭网络中托管服务器，你可能需要设置适当的端口转发，这不在本指南的范围之内。https://portforward.com 有适用于大多数路由器的指南，你的互联网服务提供商应该也能在这方面提供帮助。
    - 完全限定域名——（mydomain.com 或 warcraft.mydomain.com）与外部 IP 地址类似，如果你希望其他人连接到你的服务器，可以使用此域名，这样做的好处是无需跟踪可能是动态的 IP 地址。
        - 与公共 IP 地址类似，如果您从家庭网络托管，很可能需要设置端口转发。
        - 此外，还需要配置 DNS 以指向服务器的公共 IP 地址。设置 DNS 不在本指南的讨论范围之内，不过你的域名注册商或动态 DNS 提供商应该有这方面的文档。
- MySQL CLI 命令（如果使用 HeidiSQL 等 MySQL 管理器，则不需要此步骤）
    - `$ sudo mysql`
    - 你会看到提示变为 `mysql>`
    - `use acore_auth;`
    - 将你的 IP 替换为你在上面选择使用的 IP
    - `UPDATE realmlist SET address = '[your_ip]' WHERE id = 1;`
    - exit

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/networking)
