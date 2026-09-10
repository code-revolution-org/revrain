+++
title = "Математические формулы"
date = 2026-09-09
draft = false
summary = "Рендеринг формул на сервере при сборке с помощью встроенного KaTeX, без клиентского JS."
description = "Руководство по математике темы revrain: настройка passthrough, разделители и серверный рендеринг."
tags = ['revrain', 'hugo']
categories = ['руководство']
+++

## Включение passthrough

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## Разделители

Строчные формулы используют `\(...\)`:

```md
Это пример строчной формулы \(a^2 + b^2 = c^2\).
```

Блочные формулы используют `\[...\]` или `$$...$$`:

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

Не используйте `$...$`, чтобы избежать конфликтов с символами валют в тексте Markdown.

## Способ рендеринга

Формулы рендерятся на сервере при сборке встроенным KaTeX (`transform.ToMath`) в HTML + MathML, без клиентского JavaScript. Таблица стилей KaTeX (`katex.min.css` v0.17.0) загружается из CDN jsDelivr с проверкой целостности подресурса (SRI), и только на страницах, содержащих формулы.
