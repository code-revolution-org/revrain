# revrain

Un thème Hugo par Code Revolution, conçu pour les geeks et les développeurs.

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Fonctionnalités

- **Pluie numérique** — Animation Canvas style Matrix, entièrement configurable
- **Verre morphisme** — Cartes en verre dépoli avec flou backdrop
- **Multilingue** — 11 langues avec sélecteur de langue
- **SEO** — Open Graph, Twitter Card, données structurées JSON-LD, schéma breadcrumb
- **Responsive** — Mobile-first, 4 points de rupture (480 / 768 / 1024 / 1280px)
- **Coloration syntaxique** — Intégré à Hugo
- **Support mathématique** — Intégré à Hugo
- **Thème sombre** — Palette de couleurs optimisée pour les développeurs

## Démarrage rapide

```toml
theme = "revrain"
```

## Configuration

### Paramètres globaux

```toml
[params]
  logo = "/logo.png"          # Logo de la barre de navigation (optionnel)
  favicon = "/favicon.ico"    # Icône de l'onglet du navigateur (optionnel)
  description = "..."         # Description du site pour le SEO
  images = ["/og-image.png"]  # Image de partage social par défaut

[params.social]
  twitter = "username"        # Compte Twitter pour twitter:site
```

### Pied de page

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "Mon Blog · Tous droits réservés"  # Optionnel, non affiché si non défini

  [[params.footer.links]]
    name = "Nom du lien"
    url = "https://example.com"
```

**Comportement du copyright :**
- Non configuré → non affiché
- Configuré → rendu comme `© 2026 Mon Blog · Tous droits réservés` (année mise à jour automatiquement)
- Multilingue : configurez par langue (voir ci-dessous)

### Pluie numérique

```toml
[params.digitalRain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  fontSize = 14       # 10–32 px
  moonChance = 0.02   # Probabilité de caractère blanc lunaire
  resetChance = 0.025 # Probabilité de réinitialisation de la goutte
```

### Multilingue

Configurez le copyright par langue :

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.fr]
  label = "Français"
  weight = 20
  [languages.fr.params.footer]
    copyright = "Mon Blog · Tous droits réservés"
```

### Menu

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # Clé i18n (optionnel)
  pageRef = "/"
  weight = 10
```

## Contenu

### Page d'accueil

```markdown
+++
title = "Mon site"
subtitle = "Bienvenue sur mon site"
logo = "/logo.png"
logoAlt = "Logo du site"

[primaryButton]
  url = "/browse"
  text = "Commencer"

[secondaryButton]
  url = "/about"
  text = "À propos"
+++
```

### Page À propos

```markdown
+++
title = "À propos"
layout = "about"
subtitle = "Changer le monde avec le code"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### Article

```markdown
+++
title = "Mon article"
date = 2025-01-15
draft = false
tags = ["tech", "hugo"]
categories = ["Tutoriel"]
summary = "Résumé de l'article"
description = "Description SEO"
+++
```

### Page Parcourir

```markdown
+++
title = "Parcourir"
layout = "directory"
+++
```

## Système de couleurs

| Nom | Valeur | Utilisation |
|-----|--------|-------------|
| Abysse Noir | `#0A0A0F` | Arrière-plan |
| Pluie Verte | `#00D4AA` | Accent, pluie numérique, liens |
| Crépuscule | `#8B92A8` | Texte secondaire, bordures |
| Blanc Lunaire | `#E8EAF0` | Texte principal, titres |
| Voile | `#2A2A35` | Panneaux en verre, bordures |

## Pile de polices

Polices système avec fallback CJK :

- Latin : Inter, Noto Sans
- Chinois : Noto Sans SC/TC, Source Han Sans
- Japonais : Noto Sans JP, Source Han Sans JP
- Coréen : Noto Sans KR, Nanum Gothic
- Arabe : Noto Sans Arabic
- Cyrillique : Noto Sans

## Prérequis

- Hugo Extended >= 0.156.0

## Licence

Licence MIT. Voir [LICENSE](../LICENSE).
