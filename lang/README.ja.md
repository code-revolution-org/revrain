# revrain

[Code Revolution](https://github.com/code-revolution-org) が開発した Hugo テーマ。ギークと開発者のために作られました。ダーク基調のデザインに、デジタルレインとガラスモーフィズムのビジュアルを融合。

[简体中文](../README.md) | [English](README.en-US.md) | [繁體中文](README.zh-TW.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## 特徴

- **デジタルレイン** — Matrix 風 Canvas アニメーション。文字セット、フォントサイズ、月白色の出現確率、リセット確率をすべて設定可能。システムの「視差効果を減らす」設定に従い（静的フレームのみ描画）、低スペック端末では自動でフレームを間引く
- **ガラスモーフィズム** — backdrop-filter によるすりガラス風カード
- **多言語** — 11 言語を内蔵。キーボードで操作できる言語切替ドロップダウン（方向キー、Home/End、Esc）
- **SEO** — description / robots / canonical / hreflang 代替リンク、ページネーション rel=prev/next、Open Graph、Twitter Card、JSON-LD 構造化データ（WebSite / Article）、パンくず Schema
- **レスポンシブ** — モバイルファースト、4 つのブレークポイント（480 / 768 / 1024 / 1280px）
- **シンタックスハイライト** — Hugo 内蔵
- **数式対応** — ビルド時に Hugo 内蔵の KaTeX（`transform.ToMath`）でサーバーサイド描画。クライアント JS 不要
- **ダークテーマ** — 開発者向けに最適化された配色（5 つのイメージカラー）
- **アクセシビリティ** — WCAG 2.2 AA 準拠：メインコンテンツへのスキップリンク、ARIA ランドマークとラベル、キーボードナビゲーション、可視フォーカス、prefers-reduced-motion 対応、RTL レイアウト（アラビア語）
- **RSS** — ホームとセクションで RSS フィードを生成
- **目次** — サイドバーの TOC。スクロールで現在の見出しをハイライト、入れ子項目は折りたたみ可能
- **サーバーサイドページネーション** — セクション、分類、タグクラウドすべてサーバーサイド

## クイックスタート

サイト設定でテーマを有効化:

```toml
theme = "revrain"
```

## 設定

### グローバルパラメータ

```toml
[params]
  logo = "/logo.png"          # ナビバー logo（オプション）
  description = "..."         # サイト説明、SEO 用
  images = ["/og-image.png"]  # デフォルトのソーシャル共有画像

[params.social]
  twitter = "username"        # Twitter アカウント、twitter:site 用

[params.favicons]             # ブラウザタブアイコン（すべてオプション）
  svg = "/favicon.svg"                # SVG ベクターアイコン
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # iOS ホーム画面アイコン
```

**favicon 検索チェーン:** 各項目は *設定パス → `static/` 内の規約ファイル名 → 省略* の順で解決されます。何も設定されておらずファイルも存在しない場合は、空の `data:` URI を出力してブラウザのデフォルト `/favicon.ico` リクエストを抑止します（404 回避）。パスは外部 URL でもサイト相対パスでも指定可能。

### フッター

```toml
[params.footer]
  github = "https://github.com/username"          # GitHub リンク（オプション）
  copyright = "私のブログ · 全著作権所有"            # 著作権表示（オプション、未設定なら非表示）

  [[params.footer.links]]                         # リンクグループ（オプション）
    name = "リンク名"
    identifier = "friendly_links"                 # オプション: i18n key、存在すれば翻訳を優先
    url = "https://example.com"
```

**著作権表示の挙動:**
- 未設定 → 表示しない
- 設定 → `© <現在の年> <内容>` として描画（年は自動更新）
- 多言語サイト: 言語ごとに個別設定可能（「多言語」参照）

### デジタルレイン

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # 月白色文字の出現確率（0–1）
  reset_chance = 0.025 # 雨粒リセット確率（0–1）
```

### 数式

数式はビルド時に Hugo 内蔵の KaTeX エンジン（`transform.ToMath`）で HTML + MathML として描画され、クライアント JS は不要です。設定で Goldmark passthrough 拡張を有効化:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

コンテンツ内では次のデリミタを使用:

- インライン: `\(...\)`
- ブロック: `$$...$$` または `\[...\]`

**CDN 注記:** KaTeX スタイルシート（`katex.min.css` v0.17.0、`htmlAndMathml` 出力に必須）は jsDelivr CDN から Subresource Integrity（SRI）検証付きで読み込まれます。KaTeX は [MIT ライセンス](https://github.com/KaTeX/KaTeX/blob/main/LICENSE) です。数式を含むページのみで読み込まれます。

### 多言語

プロジェクトは 11 言語に対応し、デフォルト言語は簡体字中国語です。各言語で `label`（表示名）、`locale`（RFC 5646）、`title`（サイトタイトル）、`weight`（並び順、昇順）および言語固有パラメータを設定できます:

```toml
defaultContentLanguage = 'zh-CN'

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站点'
    weight = 10
    [languages.zh-CN.params.footer]
      copyright = "我的博客 · 版权所有"

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20
    [languages.en-US.params.footer]
      copyright = "My Blog · All Rights Reserved"

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'   # アラビア語は右から左のレイアウト
    title = 'موقعي'
    weight = 30
```

コンテンツはファイル名の接尾辞で言語が割り当てられます。接尾辞は小文字でなければなりません（例: `about.en-us.md`、`about.zh-cn.md`）。接尾辞のないファイルはデフォルト言語に属します。

### メニュー

```toml
[[menus.main]]
  name = "ホーム"
  identifier = "menu_home"  # i18n key（オプション）、存在すれば翻訳を優先
  pageRef = "/"
  weight = 10
```

## コンテンツ

### ホームページ

ホームページは `_index.md` を使用し、以下の front matter をサポート:

```markdown
+++
title = "私のサイト"            # ページタイトル
subtitle = "私のサイトへようこそ"  # 見出しの下に表示されるサブタイトル
logo = "/logo.png"           # ヒーローロゴ（任意）
logo_alt = "サイト logo"       # ロゴの代替テキスト（アクセシビリティ）

[primary_button]             # メインボタン
  url = "/browse"
  text = "はじめる"

[secondary_button]           # サブボタン
  url = "/about"
  text = "私たちについて"
+++

ホームページ本文。ボタン下のガラスカード内に描画されます。
```

### アバウトページ

`layout = "about"` を使用する独立ページ:

```markdown
+++
title = "私たちについて"        # ページタイトル
layout = "about"             # about レイアウトを使用
subtitle = "コードで世界を変える"  # サブタイトル
avatar = "/avatar.png"       # アバター画像（任意）
description = "サイト説明、SEO 用"  # SEO 説明

links = [                    # ソーシャル・外部リンク（任意）
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

アバウトページ本文。
```

### 記事

通常の記事（セクションディレクトリ内）は以下の front matter をサポート:

```markdown
+++
title = "私の記事"            # 記事タイトル
date = 2025-01-15            # 公開日
draft = false                # 下書き：true ならビルドで出力しない
tags = ["技術", "hugo"]      # タグ（任意）
categories = ["チュートリアル"] # カテゴリ（任意）
summary = "記事の概要。カードリストに表示"  # リスト用概要
description = "SEO 説明。未設定なら概要を自動使用"  # SEO 説明
+++

記事本文。
```

### ブラウズページ

`layout = "directory"` を使用して全セクションを表示:

```markdown
+++
title = "ブラウズ"            # ページタイトル
layout = "directory"         # ディレクトリレイアウトを使用
description = "すべてのセクションと記事を閲覧"  # SEO 説明
+++
```

### セクション

各セクションは `_index.md` で定義し、`summary` はカードリストに表示されます:

```markdown
+++
title = '記事'                # セクションタイトル
summary = '技術共有、生活エッセイなど多様なテーマの記事集。'  # カードリストに表示される概要
+++
```

## アクセシビリティ（WCAG 2.2）

- メインコンテンツへのスキップリンク（ナビゲーションをスキップ、WCAG 2.4.1）
- ARIA ランドマークとラベル: メインナビゲーション、フッターナビゲーション、ページナビゲーション、言語切替（role=listbox）
- 言語切替の完全なキーボードサポート: 方向キーでフォーカス移動、Home/End で先頭/末尾、Esc で閉じる
- モバイルメニューボタンは `aria-expanded` / `aria-controls` を公開
- デジタルレインのキャンバスは支援技術から隠され（`aria-hidden`、純装飾）、prefers-reduced-motion に従う
- TOC のスクロールハイライトと折りたたみはすべてキーボード操作可能
- アラビア語（ar）は自動的に RTL レイアウト
- 可視フォーカススタイル、prefers-reduced-motion のグローバルサポート

## カラーシステム

| 名称 | 色値 | 用途 |
|------|------|------|
| アビスブラック Abyss Black | `#0A0A0F` | 背景色 |
| レイングリーン Rain Green | `#00D4AA` | アクセント、デジタルレイン、リンク |
| トワイライト Twilight | `#8B92A8` | 二次テキスト、ボーダー |
| ムーンホワイト Moon White | `#E8EAF0` | 主要テキスト、見出し |
| シュラウド Shroud | `#2A2A35` | ガラスパネル、ボーダー |

## フォントスタック

テーマが対応する全言語をカバーするオープンソースシステムフォント:

- ラテン: Inter、Noto Sans
- 中国語: Noto Sans SC/TC、Source Han Sans SC/TC
- 日本語: Noto Sans JP、Source Han Sans JP
- 韓国語: Noto Sans KR、Source Han Sans KR、Nanum Gothic
- アラビア語: Noto Sans Arabic、Noto Naskh Arabic
- キリル文字: Noto Sans

## 最低要件

- Hugo Extended >= 0.156.0
- Dart Sass（SCSS コンパイルに必須）

## ライセンス

MIT ライセンス。詳細は [LICENSE](../LICENSE) を参照。

