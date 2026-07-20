# revrain

コード革命が開発した Hugo テーマ。ゲージと開発者のために構築されました。

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## 機能

- **デジタルレイン** — マトリックス風 Canvas アニメーション、完全にカスタマイズ可能
- **グラスモーフィズム** — 磨りガラス風カード、backdrop ブラー対応
- **多言語** — 11言語対応、言語切替機能付き
- **SEO** — Open Graph、Twitter Card、JSON-LD 構造化データ、パンくずリスト Schema
- **レスポンシブ** — モバイルファースト、4ブレークポイント（480 / 768 / 1024 / 1280px）
- **シンタックスハイライト** — Hugo 内蔵
- **数式サポート** — Hugo 内蔵
- **ダークテーマ** — 開発者向けのカラーパレット

## クイックスタート

```toml
theme = "revrain"
```

## 設定

### グローバルパラメータ

```toml
[params]
  logo = "/logo.png"          # ナビゲーションバーのロゴ（任意）
  favicon = "/favicon.ico"    # ブラウザタブアイコン（任意）
  description = "..."         # SEO 用サイト説明
  images = ["/og-image.png"]  # デフォルトのソーシャルシェアイメージ

[params.social]
  twitter = "username"        # Twitter アカウント（twitter:site 用）
```

### フッター

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "私のブログ · 全著作権所有"  # 任意、未設定なら非表示

  [[params.footer.links]]
    name = "リンク名"
    url = "https://example.com"
```

**コピーライトの動作：**
- 未設定 → 非表示
- 設定済み → `© 2026 私のブログ · 全著作権所有` と表示（年は自動更新）
- 多言語サイト：言語ごとに個別設定（下記参照）

### デジタルレイン

```toml
[params.digitalRain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  fontSize = 14       # 10–32 px
  moonChance = 0.02   # ムーンホワイト文字の確率
  resetChance = 0.025 # 雨リセットの確率
```

### 多言語

言語ごとにコピーライトを設定：

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.ja]
  label = "日本語"
  weight = 20
  [languages.ja.params.footer]
    copyright = "私のブログ · 全著作権所有"
```

### メニュー

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # i18n key（任意）
  pageRef = "/"
  weight = 10
```

## コンテンツ

### ホームページ

```markdown
+++
title = "私のサイト"
subtitle = "私のサイトへようこそ"
logo = "/logo.png"
logoAlt = "サイトロゴ"

[primaryButton]
  url = "/browse"
  text = "はじめに"

[secondaryButton]
  url = "/about"
  text = "概要"
+++
```

### 自己紹介ページ

```markdown
+++
title = "概要"
layout = "about"
subtitle = "コードで世界を変える"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### 記事

```markdown
+++
title = "私の記事"
date = 2025-01-15
draft = false
tags = ["技術", "hugo"]
categories = ["チュートリアル"]
summary = "記事の要約"
description = "SEO 説明"
+++
```

### ブラウズページ

```markdown
+++
title = "ブラウズ"
layout = "directory"
+++
```

## カラーシステム

| 名前 | 色値 | 用途 |
|------|------|------|
| アビスブラック | `#0A0A0F` | 背景色 |
| レイングリーン | `#00D4AA` | アクセント、デジタルレイン、リンク |
| トワイライト | `#8B92A8` | セカンダリテキスト、ボーダー |
| ムーンホワイト | `#E8EAF0` | プライマリテキスト、見出し |
| シラウド | `#2A2A35` | ガラスパネル、ボーダー |

## フォントスタック

システムフォントを使用、CJK フォールバック付き：

- ラテン語：Inter、Noto Sans
- 中国語：Noto Sans SC/TC、Source Han Sans
- 日本語：Noto Sans JP、Source Han Sans JP
- 韓国語：Noto Sans KR、Nanum Gothic
- アラビア語：Noto Sans Arabic
- キリル文字：Noto Sans

## 最低要件

- Hugo Extended >= 0.156.0

## ライセンス

MIT ライセンス。詳細は [LICENSE](../LICENSE) を参照。
