+++
title = "تنظيم المحتوى"
date = 2026-09-09
draft = false
summary = "حقول المقدمة واتفاقيات الدلائل لصفحات الرئيسية، عن، تصفّح، القسم، والمقال."
description = "دليل تنظيم المحتوى لقالب revrain: حقول المقدمة وبنية الدليل لكل نوع صفحة."
tags = ['revrain', 'hugo']
categories = ['دليل']
+++

## الصفحة الرئيسية

يقبل `content/_index.md` العنوان والعنوان الفرعي والشعار وزرّين:

```toml
+++
title = "موقعي"
subtitle = "مرحباً بك في موقعي"
logo = "/logo.png"
logo_alt = "شعار الموقع"

[primary_button]
url = "/browse"
text = "ابدأ الاستكشاف"

[secondary_button]
url = "/about"
text = "عن الموقع"
+++

نص الصفحة الرئيسية، يُصيَّر في بطاقة زجاجية أسفل الأزرار.
```

`logo` و`logo_alt` والأزرار كلها اختيارية؛ العناصر المفقودة لا تُعرض.

## صفحة "عن"

`content/about.ar.md`، أعلن `layout = "about"`:

```toml
+++
title = "عن الموقع"
layout = "about"
subtitle = "نغيّر العالم بالكود"
avatar = "/avatar.png"
description = "وصف الصفحة لمحركات البحث"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar` و`links` اختيارية. يُصيَّر `links` كقائمة روابط خارجية مع إضافة `target="_blank" rel="noopener"` تلقائياً.

## صفحة التصفّح

`content/browse.ar.md`، أعلن `layout = "directory"`، التي تسرد كل الأقسام تلقائياً:

```toml
+++
title = "تصفّح"
layout = "directory"
description = "تصفّح كل الأقسام والمقالات"
+++
```

## القسم

فهرس القسم `content/posts/_index.md`، يُعرض `summary` في قائمة البطاقات:

```toml
+++
title = "مقالات"
summary = "مجموعة مقالات تغطّي مشاركة التقنية ومقالات الحياة والمزيد."
+++
```

## المقالات

`content/posts/my-post.ar.md`، المقالات العادية لا تحتاج `layout`:

```toml
+++
title = "مقالي"
date = 2026-09-09
draft = false
tags = ["تقنية", "hugo"]
categories = ["دليل"]
summary = "ملخّص المقال، يُعرض في قائمة البطاقات"
description = "وصف لمحركات البحث، يستخدم الملخّص إذا لم يُضبط"
+++

نص المقال.
```

تصيّر صفحات المقالات تلقائياً جدول المحتويات في الشريط الجانبي (TOC)، فتات الخبز، والتنقّل بين المقال السابق/التالي. يغذّي `summary` بطاقة القائمة؛ و`description` لمحركات البحث ويستخدم `summary` إذا لم يُضبط.
