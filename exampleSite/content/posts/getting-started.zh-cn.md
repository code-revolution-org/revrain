+++
title = '快速开始'
date = 2026-09-09
draft = false
summary = '安装并启用 revrain 主题，完成最小可运行配置，启动本地预览。'
description = 'revrain 主题快速开始教程：前置要求、启用主题、最小配置与本地预览。'
tags = ['revrain', 'hugo']
categories = ['教程']
+++

## 前置要求

- Hugo ≥ 0.163.0（普通版即可；IsBranch 分支检测 API 需要 v0.163.0+）
- 安装 Dart Sass 并加入 PATH（SCSS 编译所需，Hugo 自动调用）

## 安装主题

### 方式一：Git 子模块（推荐）

```bash
git submodule add https://github.com/code-revolution-org/revrain.git themes/revrain
```

### 方式二：Hugo Modules（需 Git 与 Go 1.18+）

```bash
hugo mod init <你的模块名>
hugo mod get github.com/code-revolution-org/revrain
```

并在站点配置中声明导入：

```toml
[module]
  [[module.imports]]
    path = 'github.com/code-revolution-org/revrain'
```

### 方式三：下载或克隆

从 [GitHub Releases](https://github.com/code-revolution-org/revrain/releases) 下载源码 ZIP，或克隆到 `themes/revrain`：

```bash
git clone https://github.com/code-revolution-org/revrain.git themes/revrain
```

## 启用主题

在站点配置 `hugo.toml` 中设置：

```toml
theme = "revrain"
```

若以本主题仓库的 `exampleSite` 作为起点，`themesDir` 指向主题上一级目录：

```toml
theme = "revrain"
themesDir = "../../"
```

## 最小可运行配置

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站点'
    weight = 10
```

保存为 `hugo.toml` 即可开始使用。

## 本地预览

```bash
hugo server
```

浏览器访问 `http://localhost:1313/`，默认语言为简体中文。

## 创建第一篇文章

```bash
hugo new content posts/my-first-post.zh-cn.md
```

生成的文件遵循 `archetypes/default.md` 模板。编辑 front matter 与正文后保存，`hugo server` 自动热重载。

`draft = true` 的文章默认不输出；发布前将其改为 `false`。
