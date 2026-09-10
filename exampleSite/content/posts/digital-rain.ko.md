+++
title = '디지털 비'
date = 2026-09-09
draft = false
summary = 'Matrix 스타일 디지털 비 애니메이션 설정: 문자 집합, 글꼴 크기, 월확률과 리셋 확률.'
description = 'revrain 테마 디지털 비 가이드: enable, chars, font_size, moon_chance, reset_chance 매개변수.'
tags = ['revrain', 'hugo']
categories = ['튜토리얼']
+++

## 활성화

```toml
[params.digital_rain]
enable = true
```

`false`로 설정하면 캔버스를 완전히 비활성화한다.

## 문자 집합

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

임의의 문자열이 가능하며, 각 열에서 문자가 무작위로 추출된다.

## 전체 매개변수

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32, 단위 px
moon_chance = 0.02    # 월백 문자 확률, 0–1
reset_chance = 0.025  # 비 방울 리셋 확률, 0–1
```

- `font_size`: 글꼴 크기, 범위 10–32
- `moon_chance`: 단일 문자가 월백(강조색)으로 나타날 확률
- `reset_chance`: 비 방울이 맨 위로 돌아갈 확률, 값이 클수록 유속이 빠르다

## 접근성 동작

캔버스는 보조 기술에서 숨겨진다(`aria-hidden`, 순수 장식). 시스템에서 "동작 줄이기"(`prefers-reduced-motion: reduce`)가 켜져 있으면 정적 프레임만 그리며, 저성능 기기는 자동으로 프레임을 건너뛰어 부하를 줄인다.
