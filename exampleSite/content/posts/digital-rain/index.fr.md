+++
title = "Pluie numérique"
date = 2026-09-09
draft = false
summary = "Configurer l'animation de pluie numérique style Matrix : jeu de caractères, taille de police, probabilité lunaire et probabilité de réinitialisation."
description = "Tutoriel pluie numérique du thème revrain : paramètres enable, chars, font_size, moon_chance, reset_chance."
tags = ['revrain', 'hugo']
categories = ['tutoriel']
+++

## Activation

```toml
[params.digital_rain]
enable = true
```

Définir à `false` désactive entièrement le canevas.

## Jeu de caractères

```toml
[params.digital_rain]
chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

Toute chaîne fonctionne ; les caractères sont tirés au hasard dans chaque colonne.

## Paramètres complets

```toml
[params.digital_rain]
enable = true
chars = "アイウエオ0123456789ABC"
font_size = 14        # 10–32, en px
moon_chance = 0.02    # probabilité de caractère blanc lune, 0–1
reset_chance = 0.025  # probabilité de réinitialisation des gouttes, 0–1
```

- `font_size` : taille de police, plage 10–32
- `moon_chance` : probabilité qu'un caractère apparaisse en blanc lune (couleur d'accent)
- `reset_chance` : probabilité qu'une goutte revienne en haut ; plus la valeur est élevée, plus le flux est rapide

## Comportement d'accessibilité

Le canevas est masqué aux technologies d'assistance (`aria-hidden`, purement décoratif). Quand le système active « réduire les animations » (`prefers-reduced-motion: reduce`), seule une image statique est dessinée ; les appareils à faible performance sautent des images automatiquement pour réduire la charge.
