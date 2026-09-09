+++
title = "الصيغ الرياضية"
date = 2026-09-09
draft = false
summary = "تصيير الصيغ الرياضية خادمياً عند البناء بـ KaTeX المدمج، دون جافاسكربت في العميل."
description = "دليل الرياضيات لقالب revrain: إعداد passthrough، والفواصل، والتصيير الخادمي."
tags = ['revrain', 'hugo']
categories = ['دليل']
+++

## تفعيل passthrough

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## الفواصل

الصيغ السطرية تستخدم `\(...\)`:

```md
هذا مثال لصيغة سطرية \(a^2 + b^2 = c^2\).
```

الصيغ الكتلية تستخدم `\[...\]` أو `$$...$$`:

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

لا تستخدم `$...$`، لتفادي التعارض مع رموز العملات في نص Markdown.

## طريقة التصيير

تُصيَّر الصيغ خادمياً عند البناء بـ KaTeX المدمج (`transform.ToMath`) إلى HTML + MathML، دون حاجة إلى جافاسكربت في العميل. تُحمَّل ورقة أنماط KaTeX (`katex.min.css` v0.17.0) من CDN الخاص بـ jsDelivr مع تحقق تكامل المورد الفرعي (SRI)، وفي الصفحات الحاوية على صيغ فقط.
