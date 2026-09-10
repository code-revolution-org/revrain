+++
title = "Fórmulas matemáticas"
date = 2026-09-09
draft = false
summary = "Renderizar fórmulas matemáticas no servidor durante a construção com o KaTeX integrado, sem JS do lado do cliente."
description = "Tutorial de matemática do tema revrain: configuração passthrough, delimitadores e renderização no servidor."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Ativar passthrough

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## Delimitadores

Fórmulas em linha usam `\(...\)`:

```md
Este é um exemplo de fórmula em linha \(a^2 + b^2 = c^2\).
```

Fórmulas em bloco usam `\[...\]` ou `$$...$$`:

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

Não use `$...$`, para evitar conflitos com símbolos de moeda no texto Markdown.

## Renderização

As fórmulas são renderizadas no servidor durante a construção pelo KaTeX integrado (`transform.ToMath`) em HTML + MathML, sem JavaScript do lado do cliente. A folha de estilo do KaTeX (`katex.min.css` v0.17.0) é carregada do CDN jsDelivr com verificação de integridade de subrecurso (SRI), e apenas nas páginas que contêm fórmulas.
