+++
title = '数式'
date = 2026-09-09
draft = false
summary = 'Hugo 内蔵 KaTeX でビルド時にサーバーサイドで数式をレンダリング、クライアント JS 不要。'
description = 'revrain テーマの数式ガイド：passthrough 設定、区切り文字とサーバーサイドレンダリング。'
tags = ['revrain', 'hugo']
categories = ['チュートリアル']
+++

## passthrough の有効化

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## 区切り文字

行内数式は `\(...\)` を使います：

```md
これは行内数式 \(a^2 + b^2 = c^2\) の例です。
```

ブロック数式は `\[...\]` または `$$...$$` を使います：

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

`$...$` は使わないでください。Markdown 文章の通貨記号と衝突する恐れがあります。

## レンダリング方式

数式はビルド時に Hugo 内蔵 KaTeX（`transform.ToMath`）でサーバーサイドレンダリングされ HTML + MathML になります。クライアント側の JavaScript は不要です。KaTeX スタイルシート（`katex.min.css` v0.17.0）は jsDelivr CDN からサブリソース完全性（SRI）検証付きで読み込まれ、数式を含むページでのみ読み込まれます。
