+++
title = '數字雨'
date = 2026-09-09
draft = false
summary = '設定 Matrix 風格數字雨動畫：字元集、字號、月白機率與重置機率。'
description = 'revrain 主題數字雨教學：enable、chars、font_size、moon_chance、reset_chance 參數。'
tags = ['revrain', 'hugo']
categories = ['教學']
+++

## 啟用

```toml
[params.digital_rain]
enable = true
```

設為 `false` 則完全關閉畫布。

## 字元集

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

任意字串均可，字元在每一列中隨機抽取。

## 完整參數

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32，單位 px
moon_chance = 0.02    # 月白色字元機率，0–1
reset_chance = 0.025  # 雨滴重置機率，0–1
```

- `font_size`：字號，範圍 10–32
- `moon_chance`：單一字元呈月白色（強調色）的機率
- `reset_chance`：雨滴回到頂部的機率，數值越大流速越快

## 無障礙行為

畫布對輔助技術隱藏（`aria-hidden`，純裝飾）。當系統開啟「減少動態效果」（`prefers-reduced-motion: reduce`）時，僅繪製靜態幀；低效能裝置自動跳幀以降低開銷。
