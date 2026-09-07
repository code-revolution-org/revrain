# revrain

قالب Hugo من [Code Revolution](https://github.com/code-revolution-org)، صُمم لعشاق التقنية والمطورين. تصميم داكن مع مطر رقمي وجماليات الزجاج المثلّج (glassmorphism).

[简体中文](../README.md) | [English](README.en-US.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [Русский](README.ru.md)

## المميزات

- **المطر الرقمي** — رسم متحرك من نوع Matrix على Canvas؛ مجموعة الأحرف وحجم الخط واحتمال اللون الأبيض القمري واحتمال إعادة الضبط كلها قابلة للتخصيص. يحترم إعداد النظام «تقليل الحركة» (يرسم إطارًا ثابتًا واحدًا) ويتخطى الإطارات تلقائيًا على الأجهزة الضعيفة
- **الزجاج المثلّج** — بطاقات زجاجية مصنفرة عبر ضبابية backdrop-filter
- **تعدد اللغات** — 11 لغة مدمجة، مع مبدّل لغة قابل للاستخدام من لوحة المفاتيح (الأسهم، Home/End، Esc)
- **SEO** — description / robots / canonical / روابط بديلة hreflang، وrel=prev/next للترقيم، وOpen Graph، وTwitter Card، وبيانات JSON-LD المهيكلة (WebSite / Article)، ومخطط مسار التنقل (breadcrumb)
- **متجاوب** — أولاً للجوال مع 4 نقاط توقف (480 / 768 / 1024 / 1280px)
- **تلوين الصيغ البرمجية** — مدمج عبر Hugo
- **دعم الرياضيات** — عرض من جهة الخادم بواسطة محرك KaTeX المدمج في Hugo (`transform.ToMath`) وقت البناء؛ بدون JS في المتصفح
- **السمة الداكنة** — لوحة ألوان مُحسّنة للمطورين (5 ألوان رمزية)
- **إمكانية الوصول** — متوافق مع WCAG 2.2 AA: رابط تخطي إلى المحتوى الرئيسي، ومعالم وملصقات ARIA، وتنقّل بلوحة المفاتيح، وتركيز مرئي، ودعم prefers-reduced-motion، وتخطيط RTL (العربية)
- **RSS** — موجزات للصفحة الرئيسية والأقسام
- **فهرس المحتويات** — TOC جانبي مع تمييز أثناء التمرير وعناصر متداخلة قابلة للطي
- **ترقيم من جهة الخادم** — للأقسام والتصنيفات وسحابة الوسوم

## بدء سريع

فعّل القالب في إعدادات موقعك:

```toml
theme = "revrain"
```

## الإعدادات

### المعاملات العامة

```toml
[params]
  logo = "/logo.png"          # شعار شريط التنقل (اختياري)
  description = "..."         # وصف الموقع لتحسين SEO
  images = ["/og-image.png"]  # صورة المشاركة الاجتماعية الافتراضية

[params.social]
  twitter = "username"        # حساب تويتر لـ twitter:site

[params.favicons]             # أيقونات تبويب المتصفح (كلها اختيارية)
  svg = "/favicon.svg"                # أيقونة متجهية SVG
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # أيقونة الشاشة الرئيسية لنظام iOS
```

**سلسلة البحث عن الأيقونة:** يُحلّ كل عنصر بترتيب *المسار المكوّن ← اسم الملف التقليدي في `static/` ← الحذف*. إذا لم يُكوَّن شيء أو لم يوجد أي ملف، يُخرج `data:` URI فارغ لمنع طلب المتصفح الافتراضي `/favicon.ico` (بدون 404). يمكن أن تكون المسارات عناوين URL خارجية أو مسارات نسبية للموقع.

### تذييل الصفحة

```toml
[params.footer]
  github = "https://github.com/username"          # رابط GitHub (اختياري)
  copyright = "مدونتي · جميع الحقوق محفوظة"       # حقوق النشر (اختياري، مخفي إن لم يُضبط)

  [[params.footer.links]]                         # مجموعة الروابط (اختياري)
    name = "اسم الرابط"
    identifier = "friendly_links"                 # اختياري: مفتاح i18n، الترجمة أولى إن وُجدت
    url = "https://example.com"
```

**سلوك حقوق النشر:**
- غير مكوّن → لا يُعرض
- مكوّن → يُعرض كـ `© <السنة الحالية> <القيمة>` (تُحدَّث السنة تلقائيًا)
- المواقع متعددة اللغات: يُكوَّن بشكل منفصل لكل لغة (انظر «تعدد اللغات»)

### المطر الرقمي

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # احتمال الحرف الأبيض القمري (0–1)
  reset_chance = 0.025 # احتمال إعادة ضبط القطرة (0–1)
```

### الرياضيات

تُعرض الصيغ وقت البناء بواسطة محرك KaTeX المدمج في Hugo (`transform.ToMath`) بصيغة HTML + MathML — دون الحاجة إلى JavaScript في المتصفح. فعّل امتداد Goldmark passthrough في إعداداتك:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

استخدم هذه الفواصل في المحتوى:

- داخل السطر: `\(...\)`
- كتلة: `$$...$$` أو `\[...\]`

**ملاحظة CDN:** تُحمَّل ورقة أنماط KaTeX (`katex.min.css` v0.17.0، المطلوبة لمخرجات `htmlAndMathml`) من CDN jsDelivr مع التحقق من تكامل الموارد الفرعية (SRI). KaTeX مرخّص بموجب [رخصة MIT](https://github.com/KaTeX/KaTeX/blob/main/LICENSE). تُحمَّل فقط في الصفحات التي تحتوي على رياضيات.

### تعدد اللغات

يدعم المشروع 11 لغة، والصينية المبسطة هي اللغة الافتراضية. يمكن لكل لغة ضبط `label` (الاسم المعروض)، و`locale` (RFC 5646)، و`title` (عنوان الموقع)، و`weight` (ترتيب الفرز، تصاعديًا)، ومعاملات خاصة باللغة:

```toml
defaultContentLanguage = 'zh-CN'

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站点'
    weight = 10
    [languages.zh-CN.params.footer]
      copyright = "我的博客 · 版权所有"

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20
    [languages.en-US.params.footer]
      copyright = "My Blog · All Rights Reserved"

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'   # تخطيط من اليمين إلى اليسار للعربية
    title = 'موقعي'
    weight = 30
```

يُعيَّن المحتوى للغات عبر لاحقة اسم الملف؛ يجب أن تكون اللاحقة بأحرف صغيرة (مثل `about.en-us.md`، `about.zh-cn.md`). الملفات بدون لاحقة تنتمي إلى اللغة الافتراضية.

### القوائم

```toml
[[menus.main]]
  name = "الرئيسية"
  identifier = "menu_home"  # مفتاح i18n (اختياري)؛ الترجمة أولى إن وُجدت
  pageRef = "/"
  weight = 10
```

## المحتوى

### الصفحة الرئيسية

تستخدم الصفحة الرئيسية `_index.md` وتدعم front matter التالي:

```markdown
+++
title = "موقعي"                # عنوان الصفحة
subtitle = "مرحبًا بك في موقعي"  # العنوان الفرعي أسفل العنوان
logo = "/logo.png"           # شعار الصفحة الرئيسية (اختياري)
logo_alt = "شعار الموقع"       # النص البديل للشعار (إمكانية الوصول)

[primary_button]             # الزر الأساسي
  url = "/browse"
  text = "ابدأ"

[secondary_button]           # الزر الثانوي
  url = "/about"
  text = "معلومات عنا"
+++

نص الصفحة الرئيسية، يُعرض في بطاقة زجاجية أسفل الأزرار.
```

### صفحة «معلومات عنا»

صفحة مستقلة تستخدم `layout = "about"`:

```markdown
+++
title = "معلومات عنا"          # عنوان الصفحة
layout = "about"             # استخدام قالب «معلومات عنا»
subtitle = "نغيّر العالم بالكود"  # العنوان الفرعي
avatar = "/avatar.png"       # صورة الأفاتار (اختياري)
description = "وصف الموقع لتحسين SEO"  # وصف SEO

links = [                    # الروابط الاجتماعية/الخارجية (اختياري)
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

نص صفحة «معلومات عنا».
```

### المقالات

المقالات العادية (داخل دليل قسم) تدعم front matter التالي:

```markdown
+++
title = "مقالتي"               # عنوان المقال
date = 2025-01-15            # تاريخ النشر
draft = false                # مسودة: تُتجاهل عند true
tags = ["تقنية", "hugo"]     # الوسوم (اختياري)
categories = ["درس"]          # التصنيفات (اختياري)
summary = "ملخص المقال المعروض في قوائم البطاقات"  # ملخص القائمة
description = "وصف SEO؛ يُستخدم الملخص إذا لم يُضبط"  # وصف SEO
+++

نص المقال.
```

### صفحة التصفح

صفحة تستخدم `layout = "directory"` تعرض جميع الأقسام:

```markdown
+++
title = "تصفح"                 # عنوان الصفحة
layout = "directory"         # استخدام قالب الدليل
description = "تصفح جميع الأقسام والمقالات"  # وصف SEO
+++
```

### الأقسام

يُعرَّف كل قسم عبر `_index.md`؛ يظهر `summary` في قوائم البطاقات:

```markdown
+++
title = 'مقالات'               # عنوان القسم
summary = 'مقالات تغطي مشاركة التقنية ومقالات الحياة والمزيد.'  # الملخص المعروض في قوائم البطاقات
+++
```

## إمكانية الوصول (WCAG 2.2)

- رابط تخطي إلى المحتوى الرئيسي (WCAG 2.4.1)
- معالم وملصقات ARIA: التنقل الرئيسي، تنقل التذييل، تنقل الصفحة، مبدّل اللغة (role=listbox)
- دعم كامل للوحة المفاتيح في مبدّل اللغة: الأسهم لتحريك التركيز، Home/End، Esc للإغلاق
- زر قائمة الجوال يكشف `aria-expanded` / `aria-controls`
- لوحة المطر الرقمي مخفية عن التقنيات المساعدة (`aria-hidden`، زخرفية بحتة) وتحترم prefers-reduced-motion
- تمييز TOC أثناء التمرير وطيّه قابلان للاستخدام بالكامل من لوحة المفاتيح
- تخطيط RTL تلقائي للعربية (ar)
- أنماط تركيز مرئية ودعم شامل لـ prefers-reduced-motion

## نظام الألوان

| الاسم | Hex | الاستخدام |
|-------|-----|-----------|
| أسود الهاوية Abyss Black | `#0A0A0F` | الخلفية |
| أخضر المطر Rain Green | `#00D4AA` | التمييز، المطر الرقمي، الروابط |
| الشفق Twilight | `#8B92A8` | النص الثانوي، الحدود |
| أبيض القمر Moon White | `#E8EAF0` | النص الرئيسي، العناوين |
| الكفن Shroud | `#2A2A35` | اللوحات الزجاجية، الحدود |

## الخطوط

خطوط نظام مفتوحة المصدر تغطي جميع لغات القالب:

- اللاتينية: Inter، Noto Sans
- الصينية: Noto Sans SC/TC، Source Han Sans SC/TC
- اليابانية: Noto Sans JP، Source Han Sans JP
- الكورية: Noto Sans KR، Source Han Sans KR، Nanum Gothic
- العربية: Noto Sans Arabic، Noto Naskh Arabic
- السيريلية: Noto Sans

## المتطلبات الدنيا

- Hugo Extended >= 0.156.0
- Dart Sass (مطلوب لتجميع SCSS)

## الرخصة

رخصة MIT. انظر [LICENSE](../LICENSE).

