+++
title = "متعدد اللغات"
date = 2026-09-09
draft = false
summary = "إعداد موقع متعدد اللغات: اللغة الافتراضية، تعريفات اللغات، تسمية ملفات المحتوى، والمعاملات لكل لغة."
description = "دليل تعدد اللغات لقالب revrain: اللغة الافتراضية، تعريفات اللغات، لواحق أسماء الملفات والمعاملات لكل لغة."
tags = ['revrain', 'hugo']
categories = ['دليل']
+++

## اللغة الافتراضية

```toml
defaultContentLanguage = 'zh-CN'
```

ملفات المحتوى دون لاحقة لغة تنتمي إلى اللغة الافتراضية.

## تعريفات اللغات

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'موقعي'
    weight = 10

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'
    title = 'موقعي'
    weight = 30
```

- `label`: الاسم المعروض في مبدّل اللغة
- `locale`: وسم لغة RFC 5646، يُستخدم لـ `<html lang>` وhreflang
- `weight`: الترتيب التصاعدي يحدّد ترتيب المبدّل
- `direction = "rtl"`: العربية تُفعّل تخطيطاً من اليمين إلى اليسار تلقائياً

## تسمية ملفات المحتوى

تُميَّز اللغات بلاحقة اسم الملف، التي **يجب أن تكون بأحرف صغيرة**:

| الملف | اللغة |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

يمكن حذف اللاحقة للغة الافتراضية؛ مثلاً عند كون الافتراضية `zh-CN`، فإن `about.md` تكافئ `about.zh-cn.md`.

ترتبط الملفات بنفس الاسم الأساسي ولاحقة مختلفة ضمن نفس القسم تلقائياً كترجمات، ويُخرج القالب روابط hreflang البديلة المقابلة.

## المعاملات لكل لغة

يمكن إعداد المعاملات لكل لغة على حدة، مثلاً حقوق النشر في التذييل:

```toml
[languages.zh-CN.params.footer]
  copyright = "مدوّنتي · جميع الحقوق محفوظة"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

مبدّل اللغة قائمة منسدلة تدعم لوحة المفاتيح كاملاً: أسهم الاتجاه تنقل التركيز، و`Home`/`End` إلى الأول/الأخير، و`Esc` يغلقها.
