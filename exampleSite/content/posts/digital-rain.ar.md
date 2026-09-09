+++
title = "المطر الرقمي"
date = 2026-09-09
draft = false
summary = "إعداد رسم المطر الرقمي بنمط Matrix: مجموعة المحارف، حجم الخط، احتمال القمر، واحتمال إعادة الضبط."
description = "دليل المطر الرقمي لقالب revrain: المعاملات enable وchars وfont_size وmoon_chance وreset_chance."
tags = ['revrain', 'hugo']
categories = ['دليل']
+++

## التفعيل

```toml
[params.digital_rain]
enable = true
```

اضبط `false` لتعطيل اللوحة بالكامل.

## مجموعة المحارف

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

أي سلسلة محارف تصلح؛ تُسحب المحارف عشوائياً في كل عمود.

## كل المعاملات

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32، بالبكسل
moon_chance = 0.02    # احتمال محرف أبيض قمري، 0–1
reset_chance = 0.025  # احتمال إعادة ضبط القطرة، 0–1
```

- `font_size`: حجم الخط، المجال 10–32
- `moon_chance`: احتمال ظهور محرف باللون الأبيض القمري (لون التمييز)
- `reset_chance`: احتمال عودة القطرة إلى الأعلى؛ كلما ارتفعت القيمة، ازداد سرعة التدفق

## سلوك إمكانية الوصول

اللوحة مخفية عن التقنيات المساعدة (`aria-hidden`، زخرفية بحتة). عند تفعيل النظام لـ«تقليل الحركة» (`prefers-reduced-motion: reduce`)، يُرسم إطار ثابت فقط؛ وتتجاوز الأجهزة منخفضة الأداء الإطارات تلقائياً لتخفيض العبء.
