---
sidebar_position: 20
---

# macOS 要求

||
|--|
|MacOS ≥ 11|
|OpenSSL ≥ 3.0|
|Boost ≥ 1.70|
|MySQL ≥ 5.7.0|
|CMake ≥ 3.16|

- 使用 App Store 安装 XCode，然后打开终端并键入：

```bash
xcode-select --install
```

- 安装软件包管理器 [Homebrew](http://brew.sh/)

使用 brew it 安装所需的软件包：

```bash
brew update
```

```bash
brew install openssl@3 readline cmake boost coreutils bash bash-completion coreutils
```

这将安装 bash 5+，你可能需要重启终端。输入 `bash --version` 确保你使用的是 bash 5 或更新版本。

现在安装 mysql：

```bash
brew install mysql
```

完成 `mysql` 安装时会出现一些提示，例如正确设置密码。按照说明正确配置 mysql 即可。**这一步很重要，不要跳过。**

要验证 mysql 是否已正确安装，可尝试使用命令行（如 `mysql -u root -p`）或 Sequel Ace 等带有用户界面的 DB 客户端管理器进行访问。

您可以使用以下命令安装 Sequel Ace：

```bash
brew install --cask sequel-ace
```

## 帮助
---

如果仍有问题，请查看：

- [常见问题](/faq)
- [常见错误](/common-errors)
- [如何寻求帮助](/how-to-ask-for-help)
- [加入我们的 Discord 服务器](https://discord.gg/gkt4y2x)，但这不是一个全天候支持频道。只要有时间，工作人员就会回答您的问题。

> [英文链接](https://www.azerothcore.org/wiki/macos-requirements)
