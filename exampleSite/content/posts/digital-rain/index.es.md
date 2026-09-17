+++
title = "Lluvia digital"
date = 2026-09-09
draft = false
summary = "Configurar la animación de lluvia digital estilo Matrix: juego de caracteres, tamaño de fuente, probabilidad lunar y probabilidad de reinicio."
description = "Tutorial de lluvia digital del tema revrain: parámetros enable, chars, font_size, moon_chance, reset_chance."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Activar

```toml
[params.digital_rain]
enable = true
```

Defina a `false` para desactivar el lienzo por completo.

## Juego de caracteres

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

Cualquier cadena funciona; los caracteres se extraen al azar en cada columna.

## Parámetros completos

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32, en px
moon_chance = 0.02    # probabilidad de carácter blanco luna, 0–1
reset_chance = 0.025  # probabilidad de reinicio de gotas, 0–1
```

- `font_size`: tamaño de fuente, rango 10–32
- `moon_chance`: probabilidad de que un carácter aparezca en blanco luna (color de acento)
- `reset_chance`: probabilidad de que una gota vuelva arriba; cuanto mayor el valor, más rápido el flujo

## Comportamiento de accesibilidad

El lienzo está oculto a las tecnologías de asistencia (`aria-hidden`, puramente decorativo). Cuando el sistema activa «reducir movimiento» (`prefers-reduced-motion: reduce`), solo se dibuja un fotograma estático; los dispositivos de bajo rendimiento saltan fotogramas automáticamente para reducir la carga.
