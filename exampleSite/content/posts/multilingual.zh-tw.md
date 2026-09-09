+++
title = '多語言'
date = 2026-09-09
draft = false
summary = '設定多語言站點：預設語言、語言定義、內容檔案命名與語言級參數。'
description = 'revrain 主題多語言教學：預設語言、語言定義、檔名後綴與語言級參數。'
tags = ['revrain', 'hugo']
categories = ['教學']
+++

## 預設語言

```toml
defaultContentLanguage = 'zh-CN'
```

未寫語言後綴的內容檔案歸屬預設語言。

## 語言定義

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站點'
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

- `label`：語言切換器顯示名
- `locale`：RFC 5646 語言標籤，用於 `<html lang>` 與 hreflang
- `weight`：升序決定語言切換器排列順序
- `direction = "rtl"`：阿拉伯語自動啟用從右到左佈局

## 內容檔案命名

按檔名後綴區分語言，**後綴必須小寫**：

| 檔案 | 語言 |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

預設語言可省略後綴，例如當預設語言為 `zh-CN` 時，`about.md` 等同於 `about.zh-cn.md`。

同欄目下同名、不同後綴的檔案自動互為翻譯，主題輸出對應的 hreflang 交替連結。

## 語言級參數

可為每種語言單獨設定參數，例如頁腳版權：

```toml
[languages.zh-CN.params.footer]
  copyright = "我的博客 · 版權所有"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

語言切換器為下拉選單，支援鍵盤操作：方向鍵移動焦點、`Home`/`End` 跳首尾、`Esc` 關閉。
