+++
title = "Mathematische Formeln"
date = 2026-09-09
draft = false
summary = "Formeln beim Build serverseitig mit dem integrierten KaTeX rendern, ohne clientseitiges JS."
description = "Mathematik-Tutorial des Themes revrain: passthrough-Konfiguration, Trennzeichen und serverseitiges Rendern."
tags = ['revrain', 'hugo']
categories = ['anleitung']
+++

## passthrough aktivieren

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## Trennzeichen

Inline-Formeln verwenden `\(...\)`:

```md
Dies ist ein Beispiel für eine Inline-Formel \(a^2 + b^2 = c^2\).
```

Block-Formeln verwenden `\[...\]` oder `$$...$$`:

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

Verwenden Sie nicht `$...$`, um Konflikte mit Währungssymbolen im Markdown-Text zu vermeiden.

## Renderweise

Formeln werden beim Build serverseitig vom integrierten KaTeX (`transform.ToMath`) in HTML + MathML gerendert, ohne clientseitiges JavaScript. Das KaTeX-Stylesheet (`katex.min.css` v0.17.0) wird von der jsDelivr-CDN mit Subresource-Integrity(SRI)-Verifizierung geladen, und nur auf Seiten, die Formeln enthalten.
