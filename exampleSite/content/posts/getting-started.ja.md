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

- Hugo Extended ≥ 0.158.0（言語 API `locale`/`label`/`direction` は v0.158.0 以上が必要）
- 端末で `hugo version` を実行し、出力に `+extended` が含まれることを確認

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
