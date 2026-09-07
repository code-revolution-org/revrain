# revrain

由 [程式碼革命（Code Revolution）](https://github.com/code-revolution-org) 開發的 Hugo 主題，專為極客和開發者打造。深色系設計，融入數字雨與毛玻璃視覺風格。

[简体中文](../README.md) | [English](README.en-US.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## 特性

- **數字雨** — Matrix 風格 Canvas 動畫，字元集、字號、月白機率、重置機率均可配置；遵循系統「減少動態效果」設定（僅繪製靜態幀），低效能裝置自動跳幀
- **毛玻璃** — 卡片採用 backdrop-filter 磨砂模糊，玻璃質感
- **多語言** — 內建 11 種語言及鍵盤可操作的語言切換器（下拉選單支援方向鍵、Home/End、Esc）
- **SEO** — description / robots / canonical / hreflang 交替連結、分頁 rel=prev/next、Open Graph、Twitter Card、JSON-LD 結構化資料（WebSite / Article）、麵包屑 Schema
- **響應式** — 行動優先，4 個斷點（480 / 768 / 1024 / 1280px）
- **程式碼高亮** — Hugo 內建支援
- **數學公式** — 建置時由 Hugo 內建 KaTeX（`transform.ToMath`）伺服器端渲染，無需用戶端 JS
- **深色主題** — 面向開發者最佳化的配色（5 個意象色）
- **無障礙** — 對齊 WCAG 2.2 AA：跳轉到主內容連結、ARIA 地標與標籤、鍵盤導覽、可見焦點、prefers-reduced-motion 支援、RTL 版面（阿拉伯語）
- **RSS** — 首頁與欄目產生 RSS feed
- **文章目錄** — 側邊欄 TOC，捲動時高亮目前標題，巢狀項目可摺疊
- **伺服器端分頁** — 欄目、分類與標籤雲均使用伺服器端分頁

## 快速開始

在站點設定中啟用主題：

```toml
theme = "revrain"
```

## 設定

### 全域參數

```toml
[params]
  logo = "/logo.png"          # 導覽列 logo（可選）
  description = "..."         # 站點描述，用於 SEO
  images = ["/og-image.png"]  # 預設社交分享圖片

[params.social]
  twitter = "username"        # Twitter 帳號，用於 twitter:site

[params.favicons]             # 瀏覽器分頁圖示（全部可選）
  svg = "/favicon.svg"                # SVG 向量圖示
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # iOS 主畫面圖示
```

**favicon 查找鏈：** 每個條目按 *設定路徑 → `static/` 下的規範檔名 → 省略* 解析。若完全未設定或檔案不存在，則輸出空 `data:` URI 以抑制瀏覽器預設的 `/favicon.ico` 請求（避免 404）。路徑可以是外部 URL 或站點相對路徑。

### 頁尾

```toml
[params.footer]
  github = "https://github.com/username"          # GitHub 連結（可選）
  copyright = "我的部落格 · 版權所有"                # 版權宣告（可選，未設定不顯示）

  [[params.footer.links]]                         # 友站連結組（可選）
    name = "連結名稱"
    identifier = "friendly_links"                 # 可選：i18n key，存在則優先使用翻譯
    url = "https://example.com"
```

**版權宣告行為：**
- 未設定 → 不顯示
- 已設定 → 渲染為 `© <目前年份> <內容>`（年份自動更新）
- 多語言站點：可為每種語言單獨設定（見「多語言」）

### 數字雨

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # 月白字元機率（0–1）
  reset_chance = 0.025 # 雨滴重置機率（0–1）
```

### 數學公式

公式在建置時由 Hugo 內建 KaTeX 引擎（`transform.ToMath`）渲染為 HTML + MathML，無需用戶端 JS。在設定中啟用 Goldmark passthrough 擴充：

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

內容中使用以下定界符：

- 行內：`\(...\)`
- 區塊：`$$...$$` 或 `\[...\]`

**CDN 聲明：** KaTeX 樣式表（`katex.min.css` v0.17.0，`htmlAndMathml` 輸出必需）從 jsDelivr CDN 載入，並帶子資源完整性（SRI）校驗。KaTeX 採用 [MIT 許可證](https://github.com/KaTeX/KaTeX/blob/main/LICENSE)。僅在包含公式的頁面載入。

### 多語言

專案支援 11 種語言，預設語言為簡體中文。每門語言可設定 `label`（顯示名稱）、`locale`（RFC 5646）、`title`（站點標題）、`weight`（排序，遞增）及獨立參數：

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
    direction = 'rtl'   # 阿拉伯語從右到左版面
    title = 'موقعي'
    weight = 30
```

內容按檔案名稱後綴區分語言，後綴必須小寫（如 `about.en-us.md`、`about.zh-cn.md`）。未寫後綴的檔案歸屬預設語言。

### 選單

```toml
[[menus.main]]
  name = "首頁"
  identifier = "menu_home"  # i18n key（可選），存在則優先使用翻譯
  pageRef = "/"
  weight = 10
```

## 內容

### 首頁

首頁使用 `_index.md`，支援以下 front matter：

```markdown
+++
title = "我的站點"            # 頁面標題
subtitle = "歡迎來到我的站點"   # 副標題，顯示在標題下方
logo = "/logo.png"           # 首頁大圖 logo（選用）
logo_alt = "站點 logo"        # logo 替代文字（無障礙）

[primary_button]             # 主按鈕
  url = "/browse"
  text = "開始探索"

[secondary_button]           # 次按鈕
  url = "/about"
  text = "關於我們"
+++

首頁正文，渲染在按鈕下方的毛玻璃卡片中。
```

### 關於頁

使用 `layout = "about"` 的獨立頁面：

```markdown
+++
title = "關於我們"            # 頁面標題
layout = "about"             # 使用關於頁模板
subtitle = "用程式碼改變世界"     # 副標題
avatar = "/avatar.png"       # 頭像圖片（選用）
description = "站點描述，用於 SEO"  # SEO 描述

links = [                    # 社交/外鏈（選用）
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

關於頁正文。
```

### 文章

一般文章（位於欄目目錄下），支援以下 front matter：

```markdown
+++
title = "我的文章"            # 文章標題
date = 2025-01-15            # 發布日期
draft = false                # 草稿：true 時建置不輸出
tags = ["技術", "hugo"]      # 標籤（選用）
categories = ["教學"]         # 分類（選用）
summary = "文章簡介，顯示在卡片列表"  # 列表摘要
description = "SEO 描述，缺省時自動取摘要"  # SEO 描述
+++

文章正文。
```

### 瀏覽頁

使用 `layout = "directory"` 展示全部欄目：

```markdown
+++
title = "瀏覽"                # 頁面標題
layout = "directory"         # 使用欄目總覽模板
description = "瀏覽所有欄目和文章"  # SEO 描述
+++
```

### 欄目

每個欄目（section）透過 `_index.md` 定義，`summary` 顯示在卡片列表中：

```markdown
+++
title = '文章'                # 欄目標題
summary = '涵蓋技術分享、生活隨筆等多個主題的文章合集。'  # 欄目簡介，顯示在卡片列表
+++
```

## 無障礙（WCAG 2.2）

- 跳轉到主內容連結（跳過導覽，WCAG 2.4.1）
- ARIA 地標與標籤：主導覽、頁尾導覽、頁面導覽、語言切換器（role=listbox）
- 語言切換器完整鍵盤支援：方向鍵移動焦點、Home/End 首尾、Esc 關閉
- 行動選單按鈕帶 `aria-expanded` / `aria-controls`
- 數字雨畫布對輔助技術隱藏（`aria-hidden`，純裝飾），並遵循 prefers-reduced-motion
- 目錄（TOC）捲動高亮與摺疊均有鍵盤路徑
- 阿拉伯語（ar）自動啟用 RTL 版面
- 可見焦點樣式、prefers-reduced-motion 全域支援

## 顏色系統

| 名稱 | 色值 | 用途 |
|------|------|------|
| 深淵黑 Abyss Black | `#0A0A0F` | 背景色 |
| 雨絲綠 Rain Green | `#00D4AA` | 強調色、數字雨、連結 |
| 暮光 Twilight | `#8B92A8` | 次要文字、邊框 |
| 月白 Moon White | `#E8EAF0` | 主要文字、標題 |
| 幔霧 Shroud | `#2A2A35` | 毛玻璃面板、邊框 |

## 字型堆疊

使用開源系統字型，涵蓋主題支援的全部語言：

- 拉丁文：Inter、Noto Sans
- 中文：Noto Sans SC/TC、思源黑體（Source Han Sans SC/TC）
- 日文：Noto Sans JP、Source Han Sans JP
- 韓文：Noto Sans KR、Source Han Sans KR、Nanum Gothic
- 阿拉伯文：Noto Sans Arabic、Noto Naskh Arabic
- 西里爾文：Noto Sans

## 最低要求

- Hugo Extended >= 0.156.0
- Dart Sass（SCSS 編譯所需）

## 許可證

MIT 許可證。詳見 [LICENSE](../LICENSE)。

