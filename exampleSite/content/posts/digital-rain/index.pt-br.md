+++
title = "Chuva digital"
date = 2026-09-09
draft = false
summary = "Configurar a animação de chuva digital estilo Matrix: conjunto de caracteres, tamanho da fonte, probabilidade lunar e probabilidade de redefinição."
description = "Tutorial de chuva digital do tema revrain: parâmetros enable, chars, font_size, moon_chance, reset_chance."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Ativar

```toml
[params.digital_rain]
enable = true
```

Defina como `false` para desativar a tela inteiramente.

## Conjunto de caracteres

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

Qualquer string funciona; os caracteres são extraídos aleatoriamente em cada coluna.

## Parâmetros completos

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32, em px
moon_chance = 0.02    # probabilidade de caractere branco lunar, 0–1
reset_chance = 0.025  # probabilidade de redefinição das gotas, 0–1
```

- `font_size`: tamanho da fonte, faixa 10–32
- `moon_chance`: probabilidade de um caractere aparecer em branco lunar (cor de destaque)
- `reset_chance`: probabilidade de uma gota voltar ao topo; quanto maior o valor, mais rápido o fluxo

## Comportamento de acessibilidade

A tela está oculta para tecnologias assistivas (`aria-hidden`, puramente decorativa). Quando o sistema ativa "reduzir movimento" (`prefers-reduced-motion: reduce`), apenas um quadro estático é desenhado; dispositivos de baixo desempenho pulam quadros automaticamente para reduzir a carga.
