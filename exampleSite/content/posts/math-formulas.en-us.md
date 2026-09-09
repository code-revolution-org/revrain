+++
title = 'Math Formulas'
date = 2026-09-09
draft = false
summary = 'Render math formulas server-side at build time with the built-in KaTeX, no client-side JS required.'
description = 'revrain theme math tutorial: passthrough config, delimiters and server-side rendering.'
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Enable passthrough

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## Delimiters

Inline formulas use `\(...\)`:

```md
This is an inline formula \(a^2 + b^2 = c^2\) example.
```

Block formulas use `\[...\]` or `$$...$$`:

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

Do not use `$...$`, to avoid conflicts with currency symbols in Markdown text.

## Rendering

Formulas are rendered server-side at build time by the built-in KaTeX (`transform.ToMath`) into HTML + MathML, with no client-side JavaScript required. The KaTeX stylesheet (`katex.min.css` v0.17.0) is loaded from the jsDelivr CDN with subresource integrity (SRI) verification, and only on pages that contain formulas.
