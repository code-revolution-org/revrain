# revrain

سمة Hugo من Code Revolution، مصممة للمهووسين والمطورين.

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## المميزات

- **المطر الرقمي** — رسوم متحركة Canvas بأسلوب المصفوفة، قابل للتكوين بالكامل
- **المورفولوجيا الزجاجية** — بطاقات زجاجية مصنفرة مع تمويه الخلفية
- **متعدد اللغات** — 11 لغة مع مُبدّل اللغة
- **تحسين محركات البحث** — Open Graph، Twitter Card، البيانات المنظمة JSON-LD، مخطط breadcrumb
- **متجاوب** — Mobile-first، 4 نقاط توقف (480 / 768 / 1024 / 1280px)
- **تمييز بناء الجملة** — مدمج في Hugo
- **دعم الرياضيات** — عرض KaTeX من جانب الخادم بواسطة Hugo (transform.ToMath)، بدون JavaScript في المتصفح
- **السمة الداكنة** — لوحة ألوان محسّنة للمطورين

## البداية السريعة

```toml
theme = "revrain"
```

## التكوين

### المعاملات العامة

```toml
[params]
  logo = "/logo.png"          # شعار شريط التنقل (اختياري)
  description = "..."         # وصف الموقع لتحسين محركات البحث
  images = ["/og-image.png"]  # صورة المشاركة الاجتماعية الافتراضية

[params.social]
  twitter = "username"        # حساب Twitter لـ twitter:site

[params.favicons]             # أيقونات تبويب المتصفح (كلها اختيارية)
  svg = "/favicon.svg"                # أيقونة SVG متجهة
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # أيقونة الشاشة الرئيسية لنظام iOS
```

**سلسلة البحث عن الأيقونات:** يتم حل كل إدخال كـ *مسار التكوين → اسم الملف التقليدي في `static/` → حذف*. إذا لم يتم تكوين أي أيقونة أو لم تكن موجودة، يتم إصدار URI `data:` فارغ لقمع طلب المتصفح الافتراضي `/favicon.ico` (بدون 404). يمكن أن تكون المسارات عناوين URL خارجية (`https://...`) أو مسارات نسبية للموقع.

### التذييل

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "مدونتي · جميع الحقوق محفوظة"  # اختياري، لا يظهر إذا لم يتم تكوينه

  [[params.footer.links]]
    name = "اسم الرابط"
    url = "https://example.com"
```

**سلوك حقوق النشر:**
- غير مكوّن → لا يظهر
- مكوّن → يُعرض كـ `© 2026 مدونتي · جميع الحقوق محفوظة` (السنة تتحدث تلقائيًا)
- متعدد اللغات: قم بالتكوين لكل لغة (انظر أدناه)

### المطر الرقمي

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 بكسل
  moon_chance = 0.02   # احتمال حرف أبيض قمري
  reset_chance = 0.025 # احتمال إعادة تعيين القطرة
```

### الرياضيات

تُعرض الصيغ الرياضية وقت البناء بواسطة محرك KaTeX المدمج في Hugo (`transform.ToMath`) — لا حاجة إلى JavaScript من جانب المتصفح. فعّل ملحق passthrough في Goldmark في الإعدادات:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

استخدم هذه المحددات في المحتوى:

- سطري: `\(...\)`
- كتلي: `$$...$$` أو `\[...\]`

**إشعار CDN:** يتم تحميل ورقة أنماط KaTeX (`katex.min.css` v0.17.0، المطلوبة لمخرجات `htmlAndMathml`) من شبكة jsDelivr مع التحقق من سلامة الموارد الفرعية (SRI). يُرخَّص KaTeX بموجب [رخصة MIT](https://github.com/KaTeX/KaTeX/blob/main/LICENSE) (Copyright (c) 2013-2020 Khan Academy and other contributors). يُحمَّل فقط في الصفحات التي تحتوي على صيغ رياضية.

### متعدد اللغات

قم بتكوين حقوق النشر لكل لغة:

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.ar]
  label = "العربية"
  weight = 20
  [languages.ar.params.footer]
    copyright = "مدونتي · جميع الحقوق محفوظة"
```

### القائمة

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # مفتاح i18n (اختياري)
  pageRef = "/"
  weight = 10
```

## المحتوى

### الصفحة الرئيسية

```markdown
+++
title = "موقعي"
subtitle = "مرحبًا بك في موقعي"
logo = "/logo.png"
logo_alt = "شعار الموقع"

[primary_button]
  url = "/browse"
  text = "ابدأ"

[secondary_button]
  url = "/about"
  text = "حول"
+++
```

### صفحة حول

```markdown
+++
title = "حول"
layout = "about"
subtitle = "تغيير العالم بالكود"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### مقال

```markdown
+++
title = "مقالتي"
date = 2025-01-15
draft = false
tags = ["تقنية", "hugo"]
categories = ["دليل"]
summary = "ملخص المقال"
description = "وصف لتحسين محركات البحث"
+++
```

### صفحة التصفح

```markdown
+++
title = "التصفح"
layout = "directory"
+++
```

## نظام الألوان

| الاسم | القيمة | الاستخدام |
|-------|--------|-----------|
| سواد الهاوية | `#0A0A0F` | الخلفية الرئيسية |
| أخضر المطر | `#00D4AA` | اللون الرئيسي، المطر الرقمي، الروابط |
| الشفق | `#8B92A8` | النص الثانوي، الحدود |
| أبيض القمر | `#E8EAF0` | النص الرئيسي، العناوين |
| الحجاب | `#2A2A35` | الألواح الزجاجية، الحدود |

## حزمة الخطوط

خطوط النظام مع احتياطي CJK:

- اللاتينية: Inter، Noto Sans
- الصينية: Noto Sans SC/TC، Source Han Sans
- اليابانية: Noto Sans JP، Source Han Sans JP
- الكورية: Noto Sans KR، Nanum Gothic
- العربية: Noto Sans Arabic
- السيريلية: Noto Sans

## الحد الأدنى للمتطلبات

- Hugo Extended >= 0.156.0
- Dart Sass (مطلوب لتجميع SCSS)

## الترخيص

رخصة MIT. راجع [LICENSE](../LICENSE).
