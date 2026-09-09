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

- Hugo Extended ≥ 0.158.0（语言 API `locale`/`label`/`direction` 需要 v0.158.0+）
- 在命令行执行 `hugo version`，确认输出含 `+extended`

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
