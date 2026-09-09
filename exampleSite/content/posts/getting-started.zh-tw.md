+++
title = '快速開始'
date = 2026-09-09
draft = false
summary = '安裝並啟用 revrain 主題，完成最小可執行設定，啟動本地預覽。'
description = 'revrain 主題快速開始教學：前置需求、啟用主題、最小設定與本地預覽。'
tags = ['revrain', 'hugo']
categories = ['教學']
+++

## 前置需求

- Hugo Extended ≥ 0.158.0（語言 API `locale`/`label`/`direction` 需要 v0.158.0+）
- 在命令列執行 `hugo version`，確認輸出含 `+extended`

## 啟用主題

在站點設定 `hugo.toml` 中設定：

```toml
theme = "revrain"
```

若以本主題倉庫的 `exampleSite` 作為起點，`themesDir` 指向主題上一級目錄：

```toml
theme = "revrain"
themesDir = "../../"
```

## 最小可執行設定

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站點'
    weight = 10
```

儲存為 `hugo.toml` 即可開始使用。主題預設語言為簡體中文；可將 `defaultContentLanguage` 改為自己的語言。

## 本地預覽

```bash
hugo server
```

瀏覽器開啟 `http://localhost:1313/`，預設語言為簡體中文。

## 建立第一篇文章

```bash
hugo new content posts/my-first-post.zh-tw.md
```

產生的檔案遵循 `archetypes/default.md` 模板。編輯 front matter 與正文後儲存，`hugo server` 自動熱重載。

`draft = true` 的文章預設不輸出；發布前改為 `false`。
