+++
title = 'はじめる'
date = 2026-09-09
draft = false
summary = 'revrain テーマをインストールして有効化し、最小構成でローカルプレビューを起動する。'
description = 'revrain テーマのスタートガイド：前提条件、テーマの有効化、最小構成とローカルプレビュー。'
tags = ['revrain', 'hugo']
categories = ['チュートリアル']
+++

## 前提条件

- Hugo ≥ 0.163.0（通常版で可。IsBranch API は v0.163.0 以上が必要）
- Dart Sass をインストールして PATH に追加（SCSS コンパイルに必要。Hugo が自動的に呼び出します）

## テーマのインストール

### 方法 1：Git サブモジュール（推奨）

```bash
git submodule add https://github.com/code-revolution-org/revrain.git themes/revrain
```

### 方法 2：Hugo Modules（Git と Go 1.18+ が必要）

```bash
hugo mod init <あなたのモジュール名>
hugo mod get github.com/code-revolution-org/revrain
```

サイト設定でインポートを宣言します：

```toml
[module]
  [[module.imports]]
    path = 'github.com/code-revolution-org/revrain'
```

### 方法 3：ダウンロードまたはクローン

[GitHub Releases](https://github.com/code-revolution-org/revrain/releases) からソース ZIP をダウンロードするか、`themes/revrain` にクローンします：

```bash
git clone https://github.com/code-revolution-org/revrain.git themes/revrain
```

## テーマの有効化

サイト設定 `hugo.toml` で設定します：

```toml
theme = "revrain"
```

本テーマのリポジトリにある `exampleSite` を起点にする場合、`themesDir` をテーマの親ディレクトリに設定します：

```toml
theme = "revrain"
themesDir = "../../"
```

## 最小構成

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '私のサイト'
    weight = 10
```

`hugo.toml` として保存すれば利用開始できます。テーマの既定言語は簡体字中国語です。`defaultContentLanguage` をご自身の言語に変更できます。

## ローカルプレビュー

```bash
hugo server
```

ブラウザで `http://localhost:1313/` を開きます。既定言語は簡体字中国語です。

## 最初の記事を作成

```bash
hugo new content posts/my-first-post.ja.md
```

生成されたファイルは `archetypes/default.md` テンプレートに従います。front matter と本文を編集して保存すると、`hugo server` が自動的にホットリロードします。

`draft = true` の記事は既定で出力されません。公開前に `false` に設定してください。
