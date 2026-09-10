+++
title = '数学公式'
date = 2026-09-09
draft = false
summary = '使用 Hugo 内置 KaTeX 在构建时服务端渲染数学公式，无需客户端 JS。'
description = 'revrain 主题数学公式教程：passthrough 配置、定界符与服务端渲染。'
tags = ['revrain', 'hugo']
categories = ['教程']
+++

## 启用 passthrough

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## 定界符

行内公式用 `\(...\)`：

```md
这是行内公式 \(a^2 + b^2 = c^2\) 的示例。
```

块级公式用 `\[...\]` 或 `$$...$$`：

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

不要使用 `$...$`，以免与 Markdown 文本中的货币符号冲突。

## 渲染方式

公式在构建时由 Hugo 内置 KaTeX（`transform.ToMath`）服务端渲染为 HTML + MathML，无需客户端 JavaScript。KaTeX 样式表（`katex.min.css` v0.17.0）从 jsDelivr CDN 加载并带子资源完整性（SRI）校验，仅在包含公式的页面加载。
