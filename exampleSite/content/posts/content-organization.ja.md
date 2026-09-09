+++
title = 'コンテンツ構成'
date = 2026-09-09
draft = false
summary = 'ホーム、アバウト、ブラウズ、セクション、記事の front matter 項目とディレクトリ約束。'
description = 'revrain テーマのコンテンツ構成ガイド：各ページ種別の front matter 項目とディレクトリ構造。'
tags = ['revrain', 'hugo']
categories = ['チュートリアル']
+++

## ホームページ

`content/_index.md` はタイトル、サブタイトル、logo、2 つのボタンをサポートします：

```toml
+++
title = "私のサイト"
subtitle = "私のサイトへようこそ"
logo = "/logo.png"
logo_alt = "サイト logo"

[primary_button]
url = "/browse"
text = "探索を始める"

[secondary_button]
url = "/about"
text = "私たちについて"
+++

ホームページの本文、ボタン下のグラスカードにレンダリングされます。
```

`logo`、`logo_alt`、各ボタンはすべて任意です。省略すると対応する要素は表示されません。

## アバウトページ

`content/about.ja.md`、`layout = "about"` を宣言します：

```toml
+++
title = "私たちについて"
layout = "about"
subtitle = "コードで世界を変える"
avatar = "/avatar.png"
description = "ページの SEO 説明"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar`、`links` は任意です。`links` は外部リンクのリストとしてレンダリングされ、`target="_blank" rel="noopener"` が自動付与されます。

## ブラウズページ

`content/browse.ja.md`、`layout = "directory"` を宣言すると、全セクションを自動的に一覧表示します：

```toml
+++
title = "ブラウズ"
layout = "directory"
description = "全セクションと記事を閲覧"
+++
```

## セクション

セクションインデックス `content/posts/_index.md`、`summary` はカードリストに表示されます：

```toml
+++
title = "記事"
summary = "技術共有や暮らしのエッセイなど多様なテーマの記事コレクション。"
+++
```

## 記事

`content/posts/my-post.ja.md`、通常の記事に `layout` の指定は不要です：

```toml
+++
title = "私の記事"
date = 2026-09-09
draft = false
tags = ["技術", "hugo"]
categories = ["チュートリアル"]
summary = "記事の要約、カードリストに表示"
description = "SEO 説明、未設定時は要約が自動使用"
+++

記事の本文。
```

記事ページはサイドバーの目次（TOC）、パンくずリスト、前後記事ナビゲーションを自動レンダリングします。`summary` はリストカードに使い、`description` は SEO 用で、未設定時は `summary` が自動使用されます。
