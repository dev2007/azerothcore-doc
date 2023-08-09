---
sidebar_position: 10
---

# Linux 保持服务器更新

## 保持源代码更新
---

```bash
cd ~/azerothcore/
git pull origin master
```

重新构建你拉取的更改。

```bash
cd build
make -j 8; make install
```

有时，我们会从资源库中添加或删除文件。这时就需要重新编译服务器，编译方式与第一次[安装 Linux Core ](/linux-core-installation#配置编译)时相同。

## 保持数据库更新
---

阅读[数据库保持服务器最新](/keeping-the-server-up-to-date/database-keeping-the-server-up-to-date)。

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答你的问题。

> [英文链接](https://www.azerothcore.org/wiki/linux-keeping-the-server-up-to-date)
