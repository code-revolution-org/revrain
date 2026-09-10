+++
title = '多言語'
date = 2026-09-09
draft = false
summary = '多言語サイトの設定：既定言語、言語定義、コンテンツファイル命名と言語別パラメータ。'
description = 'revrain テーマの多言語ガイド：既定言語、言語定義、ファイル名サフィックスと言語別パラメータ。'
tags = ['revrain', 'hugo']
categories = ['チュートリアル']
+++

## 既定言語

```toml
defaultContentLanguage = 'zh-CN'
```

言語サフィックスのないコンテンツファイルは既定言語に帰属します。

## 言語定義

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '私のサイト'
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

- `label`：言語切替の表示名
- `locale`：RFC 5646 言語タグ、`<html lang>` と hreflang に使用
- `weight`：昇順で言語切替の並び順を決定
- `direction = "rtl"`：アラビア語は右から左へレイアウトを自動有効化

## コンテンツファイル命名

言語はファイル名サフィックスで区別し、**サフィックスは小文字必須**です：

| ファイル | 言語 |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

既定言語はサフィックスを省略できます。例えば既定が `zh-CN` のとき、`about.md` は `about.zh-cn.md` と同義です。

同じセクションで同名・異サフィックスのファイルは自動的に翻訳として紐付き、テーマは対応する hreflang 交替リンクを出力します。

## 言語別パラメータ

言語ごとにパラメータを個別設定できます。例えばフッター著作権：

```toml
[languages.zh-CN.params.footer]
  copyright = "私のブログ · 全著作権所有"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

言語切替はドロップダウンメニューで、キーボード操作に対応：矢印キーでフォーカス移動、`Home`/`End` で先頭/末尾へ、`Esc` で閉じます。
