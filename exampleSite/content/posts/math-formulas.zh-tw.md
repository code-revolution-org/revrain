+++
title = '數學公式'
date = 2026-09-09
draft = false
summary = '使用 Hugo 內建 KaTeX 在建構時伺服器渲染數學公式，無需客戶端 JS。'
description = 'revrain 主題數學公式教學：passthrough 設定、定界符與伺服器渲染。'
tags = ['revrain', 'hugo']
categories = ['教學']
+++

## 啟用 passthrough

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## 定界符

行內公式用 `\(...\)`：

```md
這是行內公式 \(a^2 + b^2 = c^2\) 的範例。
```

塊級公式用 `\[...\]` 或 `$$...$$`：

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

不要使用 `$...$`，以免與 Markdown 文本中的貨幣符號衝突。

## 渲染方式

公式在建構時由 Hugo 內建 KaTeX（`transform.ToMath`）伺服器渲染為 HTML + MathML，無需客戶端 JavaScript。KaTeX 樣式表（`katex.min.css` v0.17.0）從 jsDelivr CDN 載入並帶子資源完整性（SRI）校驗，僅在包含公式的頁面載入。
