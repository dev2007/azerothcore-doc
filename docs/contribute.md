# 贡献
---

你可以通过多种方式为 AzerothCore 做出贡献：
- [评论开放问题](#如何评论问题)
- [打开一个问题](#如何打开问题)
- [测试拉取请求](#如何测试拉取请求)
- [测试纯 DB 变动](/How-to-test-DB-only-changes)
- [创建拉取请求](#如何创建拉取请求)
- [改进我们的维基](#改进维基)

## 一般信息
---

要做出贡献，您显然需要一个 Github 账户。

## 如何评论问题
---

您可以通过检查[问题](https://github.com/azerothcore/azerothcore-wotlk/issues)和参与讨论来提供帮助。

您可以做的一件事是更新您的核心，并检查问题是否在您的修订版上仍然有效，然后写下**包含提交哈希值**的注释。

## 如何打开问题
---

报告错误前的重要事项：

1. **将您的核心更新至最新的艾泽拉斯核心版本，并检查错误是否仍然存在**
2. **在[问题](https://github.com/azerothcore/azerothcore-wotlk/issues)中搜索，查看是否有人已经报告过该错误，在这种情况下，您只需评论该问题以确认该错误（包括您的核心版本）**

如果（也只有在）该错误尚未被报告，您可以[打开一个问题](https://github.com/azerothcore/azerothcore-wotlk/issues/new)，并在其中包括：
- **bug 描述**，包括任何有用的**链接**以及任何相关实体（NPC、法术、游戏对象等）的 **ID**/**GUID**/**名称**
- 您正在运行的 AzerothCore 的**核心版本（提交哈希值）**，即使您刚刚更新了核心，也**不要只写 "最新版本"**。
- 如果是构建问题，最好也能提供您的**操作系统**和**编译器版本**

## 如何测试拉取请求
---

- 阅读如何[测试 PR](/How-to-test-a-PR)。

## 如何创建拉取请求
---

- 阅读[如何创建 PR](/How-to-create-a-PR)。
- 或者，您也可以查看本教程，了解如何通过 GitHub 打开包含 SQL 代码的 PR。

### 给代码作者署名

如果您想提交别人写的代码，可以在提交时注明作者：

`git commit --author="AuthorName <authoremail@address.com>" -am "此处填提交信息"`

更新：不幸的是，在通过压扁提交合并 PR 时，GitHub 会自动将提交结果的作者设置为打开 PR 的人。因此，请在 PR 说明中提及原作者（以及提交（如适用））。

## 改进维基

你想改进或添加维基页面吗？很好！让我们用[聊天工具](https://discord.gg/PaqQRkd)讨论一下吧。

> [英文链接](https://www.azerothcore.org/wiki/contribute)
