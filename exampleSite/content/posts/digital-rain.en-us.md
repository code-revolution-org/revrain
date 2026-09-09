+++
title = 'Digital Rain'
date = 2026-09-09
draft = false
summary = 'Configure the Matrix-style digital rain animation: character set, font size, moon chance and reset chance.'
description = 'revrain theme digital rain tutorial: enable, chars, font_size, moon_chance and reset_chance parameters.'
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Enable

```toml
[params.digital_rain]
enable = true
```

Set to `false` to disable the canvas entirely.

## Character set

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

Any string works; characters are drawn randomly in each column.

## Full parameters

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32, in px
moon_chance = 0.02    # moon-white character probability, 0–1
reset_chance = 0.025 # drop reset probability, 0–1
```

- `font_size`: font size, range 10–32
- `moon_chance`: probability that a single character appears in moon white (accent color)
- `reset_chance`: probability that a drop resets to the top; higher values mean a faster flow

## Accessibility behavior

The canvas is hidden from assistive technologies (`aria-hidden`, purely decorative). When the system enables "reduce motion" (`prefers-reduced-motion: reduce`), only a static frame is drawn; low-performance devices skip frames automatically to reduce overhead.
