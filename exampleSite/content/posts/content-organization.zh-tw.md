+++
title = '內容組織'
date = 2026-09-09
draft = false
summary = '首頁、關於頁、瀏覽頁、欄目與文章的 front matter 欄位與目錄約定。'
description = 'revrain 主題內容組織教學：各類頁面的 front matter 欄位與目錄結構。'
tags = ['revrain', 'hugo']
categories = ['教學']
+++

## 首頁

`content/_index.md`，支援主副標題、logo 與兩個按鈕：

```toml
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

首頁正文，渲染在按鈕下方的毛玻璃卡片中。
```

`logo`、`logo_alt` 與按鈕均為選填；缺省則不顯示對應元素。

## 關於頁

`content/about.zh-tw.md`，需宣告 `layout = "about"`：

```toml
+++
title = "關於我們"
layout = "about"
subtitle = "用程式改變世界"
avatar = "/avatar.png"
description = "頁面 SEO 描述"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar`、`links` 為選填。`links` 渲染為外鏈清單，自動加上 `target="_blank" rel="noopener"`。

## 瀏覽頁

`content/browse.zh-tw.md`，需宣告 `layout = "directory"`，自動列出全部欄目：

```toml
+++
title = "瀏覽"
layout = "directory"
description = "瀏覽所有欄目和文章"
+++
```

## 欄目

欄目首頁 `content/posts/_index.md`，`summary` 顯示在卡片清單：

```toml
+++
title = "文章"
summary = "涵蓋技術分享、生活隨筆等多個主題的文章合集。"
+++
```

## 文章

`content/posts/my-post.zh-tw.md`，普通文章無需指定 `layout`：

```toml
+++
title = "我的文章"
date = 2026-09-09
draft = false
tags = ["技術", "hugo"]
categories = ["教學"]
summary = "文章簡介，顯示在卡片清單"
description = "SEO 描述，缺省時自動取摘要"
+++

文章正文。
```

文章頁自動渲染側邊欄目錄（TOC）、麵包屑與上下篇導覽。`summary` 用於清單卡片，`description` 用於 SEO，缺省時自動取 `summary`。
