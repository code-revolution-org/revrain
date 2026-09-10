+++
title = '数字雨'
date = 2026-09-09
draft = false
summary = '配置 Matrix 风格数字雨动画：字符集、字号、月白概率与重置概率。'
description = 'revrain 主题数字雨教程：enable、chars、font_size、moon_chance、reset_chance 参数。'
tags = ['revrain', 'hugo']
categories = ['教程']
+++

## 启用

```toml
[params.digital_rain]
enable = true
```

设为 `false` 则完全关闭画布。

## 字符集

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

任意字符串均可，字符在每一列中随机抽取。

## 完整参数

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32，单位 px
moon_chance = 0.02    # 月白色字符概率，0–1
reset_chance = 0.025  # 雨滴重置概率，0–1
```

- `font_size`：字号，范围 10–32
- `moon_chance`：单个字符呈月白色（强调色）的概率
- `reset_chance`：雨滴回到顶部的概率，数值越大流速越快

## 无障碍行为

画布对辅助技术隐藏（`aria-hidden`，纯装饰）。当系统开启「减少动态效果」（`prefers-reduced-motion: reduce`）时，仅绘制静态帧；低性能设备自动跳帧以降低开销。
