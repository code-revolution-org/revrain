+++
title = "Digitaler Regen"
date = 2026-09-09
draft = false
summary = "Die Matrix-artige Digitaler-Regen-Animation konfigurieren: Zeichensatz, Schriftgröße, Mond-Wahrscheinlichkeit und Reset-Wahrscheinlichkeit."
description = "Digitaler-Regen-Tutorial des Themes revrain: Parameter enable, chars, font_size, moon_chance, reset_chance."
tags = ['revrain', 'hugo']
categories = ['anleitung']
+++

## Aktivieren

```toml
[params.digital_rain]
enable = true
```

Auf `false` setzen, um die Canvas vollständig zu deaktivieren.

## Zeichensatz

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

Jede Zeichenkette funktioniert; Zeichen werden zufällig in jeder Spalte gezogen.

## Vollständige Parameter

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32, in px
moon_chance = 0.02    # Wahrscheinlichkeit für mondweißes Zeichen, 0–1
reset_chance = 0.025  # Reset-Wahrscheinlichkeit der Tropfen, 0–1
```

- `font_size`: Schriftgröße, Bereich 10–32
- `moon_chance`: Wahrscheinlichkeit, dass ein Zeichen in Mondweiß (Akzentfarbe) erscheint
- `reset_chance`: Wahrscheinlichkeit, dass ein Tropfen nach oben zurückkehrt; je höher der Wert, desto schneller der Fluss

## Barrierefreiheitsverhalten

Die Canvas ist für Hilfstechnologien ausgeblendet (`aria-hidden`, rein dekorativ). Wenn das System „Animationen reduzieren“ aktiviert (`prefers-reduced-motion: reduce`), wird nur ein statisches Bild gezeichnet; leistungsarme Geräte überspringen automatisch Bilder, um die Last zu senken.
