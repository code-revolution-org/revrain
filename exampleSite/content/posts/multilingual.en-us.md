+++
title = 'Multilingual'
date = 2026-09-09
draft = false
summary = 'Configure a multilingual site: default language, language definitions, content file naming and per-language params.'
description = 'revrain theme multilingual tutorial: default language, language definitions, filename suffixes and per-language params.'
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Default language

```toml
defaultContentLanguage = 'zh-CN'
```

Content files without a language suffix belong to the default language.

## Language definitions

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'My Site'
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
    title = 'My Site'
    weight = 30
```

- `label`: display name in the language switcher
- `locale`: RFC 5646 language tag, used for `<html lang>` and hreflang
- `weight`: ascending order defines the switcher order
- `direction = "rtl"`: Arabic automatically enables right-to-left layout

## Content file naming

Languages are distinguished by the filename suffix, which **must be lowercase**:

| File | Language |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

The suffix may be omitted for the default language; for example, when the default is `zh-CN`, `about.md` is equivalent to `about.zh-cn.md`.

Files with the same basename but different suffixes under the same section are automatically linked as translations, and the theme emits the corresponding hreflang alternate links.

## Per-language params

You can configure params per language, for example the footer copyright:

```toml
[languages.zh-CN.params.footer]
  copyright = "我的博客 · 版权所有"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

The language switcher is a dropdown with full keyboard support: arrow keys move the focus, `Home`/`End` jump to the first/last item, `Esc` closes it.
