+++
title = "Fórmulas matemáticas"
date = 2026-09-09
draft = false
summary = "Renderizar fórmulas matemáticas en el servidor durante la construcción con el KaTeX integrado, sin JS del lado del cliente."
description = "Tutorial de matemáticas del tema revrain: configuración passthrough, delimitadores y renderizado en el servidor."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Activar passthrough

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## Delimitadores

Las fórmulas en línea usan `\(...\)`:

```md
Este es un ejemplo de fórmula en línea \(a^2 + b^2 = c^2\).
```

Las fórmulas en bloque usan `\[...\]` o `$$...$$`:

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

No use `$...$`, para evitar conflictos con símbolos monetarios en el texto Markdown.

## Renderizado

Las fórmulas se renderizan en el servidor durante la construcción por el KaTeX integrado (`transform.ToMath`) en HTML + MathML, sin JavaScript del lado del cliente. La hoja de estilos de KaTeX (`katex.min.css` v0.17.0) se carga desde el CDN de jsDelivr con verificación de integridad de subrecurso (SRI), y solo en las páginas que contienen fórmulas.
