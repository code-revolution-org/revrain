+++
title = "البدء السريع"
date = 2026-09-09
draft = false
summary = "ثبّت وفعّل قالب revrain، أكمل الحد الأدنى للإعداد، وشغّل المعاينة المحلية."
description = "دليل البدء السريع لقالب revrain: المتطلبات، تفعيل القالب، الحد الأدنى للإعداد والمعاينة المحلية."
tags = ['revrain', 'hugo']
categories = ['دليل']
+++

## المتطلبات

- Hugo ≥ 0.163.0 (أي إصدار؛ تتطلب واجهة برمجة IsBranch الإصدار v0.163.0 أو أحدث)
- ثبّت Dart Sass وأضفه إلى PATH (مطلوب لتجميع SCSS؛ يستدعيه Hugo تلقائيًا)

## تثبيت القالب

### الطريقة 1: الوحدة الفرعية Git (موصى بها)

```bash
git submodule add https://github.com/code-revolution-org/revrain.git themes/revrain
```

### الطريقة 2: Hugo Modules (يتطلب Git وGo 1.18+)

```bash
hugo mod init <اسم الوحدة الخاص بك>
hugo mod get github.com/code-revolution-org/revrain
```

وأعلن عن الاستيراد في إعدادات موقعك:

```toml
[module]
  [[module.imports]]
    path = 'github.com/code-revolution-org/revrain'
```

### الطريقة 3: التنزيل أو الاستنساخ

نزّل ملف ZIP من [GitHub Releases](https://github.com/code-revolution-org/revrain/releases)، أو استنسخه إلى `themes/revrain`:

```bash
git clone https://github.com/code-revolution-org/revrain.git themes/revrain
```

## تفعيل القالب

في إعداد الموقع `hugo.toml`:

```toml
theme = "revrain"
```

إذا بدأت من `exampleSite` في مستودع القالب، عيّن `themesDir` إلى الدليل الأب للقالب:

```toml
theme = "revrain"
themesDir = "../../"
```

## الحد الأدنى للإعداد

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'موقعي'
    weight = 10
```

احفظه باسم `hugo.toml` للبدء. لغة القالب الافتراضية هي الصينية المبسطة. يمكنك تغيير `defaultContentLanguage` إلى لغتك.

## المعاينة المحلية

```bash
hugo server
```

افتح `http://localhost:1313/` في متصفح. اللغة الافتراضية هي الصينية المبسطة.

## إنشاء أول مقال

```bash
hugo new content posts/my-first-post.ar.md
```

الملف المُنشأ يتبع قالب `archetypes/default.md`. حرّر المقدمة (front matter) والنص، احفظ، و`hugo server` يعيد التحميل تلقائياً.

المقالات ذات `draft = true` لا تُخرج افتراضياً؛ اضبطها إلى `false` قبل النشر.
