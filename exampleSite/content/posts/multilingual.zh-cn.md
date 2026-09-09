+++
title = '多语言'
date = 2026-09-09
draft = false
summary = '配置多语言站点：默认语言、语言定义、内容文件命名与语言级参数。'
description = 'revrain 主题多语言教程：默认语言、语言定义、文件名后缀与语言级参数。'
tags = ['revrain', 'hugo']
categories = ['教程']
+++

## 默认语言

```toml
defaultContentLanguage = 'zh-CN'
```

未写语言后缀的内容文件归属默认语言。

## 语言定义

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站点'
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

- `label`：语言切换器显示名
- `locale`：RFC 5646 语言标签，用于 `<html lang>` 与 hreflang
- `weight`：升序决定语言切换器排列顺序
- `direction = "rtl"`：阿拉伯语自动启用从右到左布局

## 内容文件命名

按文件名后缀区分语言，**后缀必须小写**：

| 文件 | 语言 |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

默认语言可省略后缀，例如当默认语言为 `zh-CN` 时，`about.md` 等同于 `about.zh-cn.md`。

同栏目下同名、不同后缀的文件自动互为翻译，主题输出对应的 hreflang 交替链接。

## 语言级参数

可为每种语言单独配置参数，例如页脚版权：

```toml
[languages.zh-CN.params.footer]
  copyright = "我的博客 · 版权所有"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

语言切换器为下拉菜单，支持键盘操作：方向键移动焦点、`Home`/`End` 跳首尾、`Esc` 关闭。
