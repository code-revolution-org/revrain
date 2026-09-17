+++
title = 'デジタルレイン'
date = 2026-09-09
draft = false
summary = 'Matrix 風デジタルレインアニメの設定：文字セット、フォントサイズ、月白確率とリセット確率。'
description = 'revrain テーマのデジタルレインガイド：enable、chars、font_size、moon_chance、reset_chance パラメータ。'
tags = ['revrain', 'hugo']
categories = ['チュートリアル']
+++

## 有効化

```toml
[params.digital_rain]
enable = true
```

`false` にするとキャンバスを完全に無効化します。

## 文字セット

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

任意の文字列が利用可能で、各列でランダムに文字が抽出されます。

## 全パラメータ

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32、単位 px
moon_chance = 0.02    # 月白文字の確率、0–1
reset_chance = 0.025  # 雨滴リセット確率、0–1
```

- `font_size`：フォントサイズ、範囲 10–32
- `moon_chance`：単一文字が月白（アクセント色）になる確率
- `reset_chance`：雨滴が先頭に戻る確率、値が大きいほど流速が速い

## アクセシビリティ挙動

キャンバスは支援技術から隠されます（`aria-hidden`、純粋な装飾）。システムで「モーションを減らす」（`prefers-reduced-motion: reduce`）が有効な場合は静的フレームのみ描画し、低性能端末は自動的にフレームをスキップして負荷を下げます。
