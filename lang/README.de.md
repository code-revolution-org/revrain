# revrain

Ein Hugo-Theme von Code Revolution, entwickelt für Geeks und Entwickler.

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Funktionen

- **Digitaler Regen** — Matrix-Stil Canvas-Animation, vollständig konfigurierbar
- **Glasmorphism** — Geschliffene Glas-Karten mitBackdrop-Blur
- **Mehrsprachig** — 11 Sprachen mit Sprachumschalter
- **SEO** — Open Graph, Twitter Card, JSON-LD strukturierte Daten, Breadcrumb-Schema
- **Responsiv** — Mobile-First, 4 Breakpoints (480 / 768 / 1024 / 1280px)
- **Syntax-Highlighting** — Hugo-integriert
- **Mathematik-Unterstützung** — Hugo-integriert
- **Dunkles Theme** — Für Entwickler optimierte Farbpalette

## Schnellstart

```toml
theme = "revrain"
```

## Konfiguration

### Globale Parameter

```toml
[params]
  logo = "/logo.png"          # Navigationsleisten-Logo (optional)
  favicon = "/favicon.ico"    # Browser-Tab-Symbol (optional)
  description = "..."         # Site-Beschreibung für SEO
  images = ["/og-image.png"]  # Standard-Social-Share-Bild

[params.social]
  twitter = "username"        # Twitter-Konto für twitter:site
```

### Fußzeile

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "Mein Blog · Alle Rechte vorbehalten"  # Optional, nicht angezeigt wenn nicht gesetzt

  [[params.footer.links]]
    name = "Link-Name"
    url = "https://example.com"
```

**Copyright-Verhalten:**
- Nicht konfiguriert → nicht angezeigt
- Konfiguriert → wird als `© 2026 Mein Blog · Alle Rechte vorbehalten` gerendert (Jahr aktualisiert automatisch)
- Mehrsprachig: pro Sprache konfigurieren (siehe unten)

### Digitaler Regen

```toml
[params.digitalRain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  fontSize = 14       # 10–32 px
  moonChance = 0.02   # Wahrscheinlichkeit für Mond-Weiß-Zeichen
  resetChance = 0.025 # Wahrscheinlichkeit für Regentropfen-Reset
```

### Mehrsprachig

Copyright pro Sprache konfigurieren:

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.de]
  label = "Deutsch"
  weight = 20
  [languages.de.params.footer]
    copyright = "Mein Blog · Alle Rechte vorbehalten"
```

### Menü

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # i18n-Schlüssel (optional)
  pageRef = "/"
  weight = 10
```

## Inhalte

### Startseite

```markdown
+++
title = "Meine Site"
subtitle = "Willkommen auf meiner Site"
logo = "/logo.png"
logoAlt = "Site-Logo"

[primaryButton]
  url = "/browse"
  text = "Loslegen"

[secondaryButton]
  url = "/about"
  text = "Über uns"
+++
```

### Über-seite

```markdown
+++
title = "Über uns"
layout = "about"
subtitle = "Die Welt mit Code verändern"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### Artikel

```markdown
+++
title = "Mein Artikel"
date = 2025-01-15
draft = false
tags = ["Technik", "hugo"]
categories = ["Tutorial"]
summary = "Artikel-Zusammenfassung"
description = "SEO-Beschreibung"
+++
```

### Browse-Seite

```markdown
+++
title = "Durchsuchen"
layout = "directory"
+++
```

## Farbsystem

| Name | Farbwert | Verwendung |
|------|----------|------------|
| Abyss Schwarz | `#0A0A0F` | Hintergrund |
| Regen Grün | `#00D4AA` | Akzent, digitaler Regen, Links |
| Zwielicht | `#8B92A8` | Sekundärtext, Rahmen |
| Mond Weiß | `#E8EAF0` | Primärtext, Überschriften |
| Schleier | `#2A2A35` | Glas-Panel, Rahmen |

## Font-Stack

Systemfonts mit CJK-Fallback:

- Lateinisch: Inter, Noto Sans
- Chinesisch: Noto Sans SC/TC, Source Han Sans
- Japanisch: Noto Sans JP, Source Han Sans JP
- Koreanisch: Noto Sans KR, Nanum Gothic
- Arabisch: Noto Sans Arabic
- Kyrillisch: Noto Sans

## Mindestanforderungen

- Hugo Extended >= 0.156.0

## Lizenz

MIT-Lizenz. Siehe [LICENSE](../LICENSE).
