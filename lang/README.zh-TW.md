# revrain

由代碼革命開發的 Hugo 主題，專為極客和開發者打造。

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## 特性

- **數位雨** — Matrix 風格 Canvas 動畫，完全可配置
- **毛玻璃效果** — 磨砂玻璃卡片，支援 backdrop 模糊
- **多語言** — 11 種語言，含語言切換器
- **SEO** — Open Graph、Twitter Card、JSON-LD 結構化資料、麵包屑 Schema
- **響應式** — 移動優先，4 個斷點（480 / 768 / 1024 / 1280px）
- **程式碼高亮** — Hugo 內建支援
- **數學公式** — Hugo 伺服器端 KaTeX 渲染（transform.ToMath），無需用戶端 JS
- **深色主題** — 針對開發者優化的配色方案

## 快速開始

```toml
theme = "revrain"
```

## 配置

### 全域參數

```toml
[params]
  logo = "/logo.png"          # 導航列 logo（可選）
  description = "..."         # 站點描述，用於 SEO
  images = ["/og-image.png"]  # 預設社交分享圖片

[params.social]
  twitter = "username"        # Twitter 帳號，用於 twitter:site

[params.favicons]             # 瀏覽器標籤頁圖示（全部可選）
  svg = "/favicon.svg"                # SVG 向量圖示
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # iOS 主螢幕圖示
```

**favicon 查找鏈：** 每個條目按 *配置路徑 → static/ 下的規範檔名 → 跳過* 解析。若完全未配置或不存在任何圖示，則輸出空 `data:` URI 以抑制瀏覽器預設的 `/favicon.ico` 請求（避免 404）。路徑可以是外部 URL（`https://...`）或站台相對路徑。

### 頁尾

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "我的部落格 · 版權所有"  # 可選，未配置則不顯示

  [[params.footer.links]]
    name = "連結名稱"
    url = "https://example.com"
```

**版權聲明行為：**
- 未配置 → 不顯示
- 已配置 → 渲染為 `© 2026 我的部落格 · 版權所有`（年份自動更新）
- 多語言站點：為每種語言單獨配置（見下文）

### 數位雨

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # 月白色字元機率
  reset_chance = 0.025 # 雨滴重置機率
```

### 數學公式

數學公式在建置時由 Hugo 內建的 KaTeX 引擎（`transform.ToMath`）渲染——無需用戶端 JavaScript。在設定中啟用 Goldmark passthrough 擴充功能：

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

在內容中使用以下定界符：

- 行內：`\(...\)`
- 區塊：`$$...$$` 或 `\[...\]`

**CDN 聲明：** KaTeX 樣式表（`katex.min.css` v0.17.0，`htmlAndMathml` 輸出必需）從 jsDelivr CDN 載入，並帶有子資源完整性（SRI）驗證。KaTeX 採用 [MIT 授權](https://github.com/KaTeX/KaTeX/blob/main/LICENSE)（版權歸 Khan Academy 及其他貢獻者，2013-2020）。僅在包含公式的頁面載入。

### 多語言

為每種語言單獨配置版權：

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.zh-TW]
  label = "繁體中文"
  weight = 20
  [languages.zh-TW.params.footer]
    copyright = "我的部落格 · 版權所有"
```

### 選單

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # i18n key（可選）
  pageRef = "/"
  weight = 10
```

## 內容

### 首頁

```markdown
+++
title = "我的站點"
subtitle = "歡迎來到我的站點"
logo = "/logo.png"
logo_alt = "站點 logo"

[primary_button]
  url = "/browse"
  text = "開始探索"

[secondary_button]
  url = "/about"
  text = "關於我們"
+++
```

### 關於頁

```markdown
+++
title = "關於我們"
layout = "about"
subtitle = "用程式碼改變世界"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### 文章

```markdown
+++
title = "我的文章"
date = 2025-01-15
draft = false
tags = ["技術", "hugo"]
categories = ["教學"]
summary = "文章簡介"
description = "SEO 描述"
+++
```

### 瀏覽頁

```markdown
+++
title = "瀏覽"
layout = "directory"
+++
```

## 顏色系統

| 名稱 | 色值 | 用途 |
|------|------|------|
| 深淵黑 | `#0A0A0F` | 背景色 |
| 雨絲綠 | `#00D4AA` | 強調色、數位雨、連結 |
| 暮光 | `#8B92A8` | 次要文字、邊框 |
| 月白 | `#E8EAF0` | 主要文字、標題 |
| 幔霧 | `#2A2A35` | 毛玻璃面板、邊框 |

## 字體堆疊

使用系統字體，包含 CJK 回退：

- 拉丁文：Inter、Noto Sans
- 中文：Noto Sans SC/TC、思源黑體
- 日文：Noto Sans JP、Source Han Sans JP
- 韓文：Noto Sans KR、Nanum Gothic
- 阿拉伯文：Noto Sans Arabic
- 西里爾文：Noto Sans

## 最低要求

- Hugo Extended >= 0.156.0
- Dart Sass（SCSS 編譯所需）

## 授權條款

MIT 授權條款。詳見 [LICENSE](../LICENSE)。
