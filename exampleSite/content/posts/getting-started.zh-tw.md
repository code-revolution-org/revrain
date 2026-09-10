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

- Hugo ≥ 0.163.0（普通版即可；IsBranch 分支偵測 API 需要 v0.163.0+）
- 安裝 Dart Sass 並加入 PATH（SCSS 編譯所需，Hugo 自動呼叫）

## 安裝主題

### 方式一：Git 子模組（推薦）

```bash
git submodule add https://github.com/code-revolution-org/revrain.git themes/revrain
```

### 方式二：Hugo Modules（需 Git 與 Go 1.18+）

```bash
hugo mod init <你的模組名稱>
hugo mod get github.com/code-revolution-org/revrain
```

並在站點設定中宣告匯入：

```toml
[module]
  [[module.imports]]
    path = 'github.com/code-revolution-org/revrain'
```

### 方式三：下載或複製

從 [GitHub Releases](https://github.com/code-revolution-org/revrain/releases) 下載原始碼 ZIP，或複製到 `themes/revrain`：

```bash
git clone https://github.com/code-revolution-org/revrain.git themes/revrain
```

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
