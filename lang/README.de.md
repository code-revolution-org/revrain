# revrain

Ein Hugo-Theme von [Code Revolution](https://github.com/code-revolution-org), entwickelt für Geeks und Entwickler. Dunkles Design mit Digital Rain und Glassmorphism-Optik.

[简体中文](../README.md) | [English](README.en-US.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Funktionen

- **Digital Rain** — Matrix-artige Canvas-Animation; Zeichensatz, Schriftgröße, Mondweiß-Wahrscheinlichkeit und Reset-Wahrscheinlichkeit sind alle konfigurierbar. Respektiert die Systemeinstellung „Bewegung reduzieren" (zeichnet nur ein statisches Bild) und überspringt Frames automatisch auf schwachen Geräten
- **Glassmorphism** — Milchglas-Karten mit backdrop-filter-Blur
- **Mehrsprachig** — 11 Sprachen integriert, mit per Tastatur bedienbarem Sprachumschalter (Pfeiltasten, Home/End, Esc)
- **SEO** — description / robots / canonical / hreflang-Alternate-Links, Pagination rel=prev/next, Open Graph, Twitter Card, JSON-LD strukturierte Daten (WebSite / Article), Breadcrumb-Schema
- **Responsive** — Mobile-first mit 4 Breakpoints (480 / 768 / 1024 / 1280px)
- **Syntax-Hervorhebung** — Eingebaut über Hugo
- **Mathe-Support** — Serverseitiges Rendering durch Hugos eingebautes KaTeX (`transform.ToMath`) zur Build-Zeit; kein clientseitiges JS
- **Dark Theme** — Für Entwickler optimierte Farbpalette (5 Bild-Farben)
- **Barrierefreiheit** — Ausgerichtet an WCAG 2.2 AA: Skip-Link zum Hauptinhalt, ARIA-Landmarks und -Labels, Tastaturnavigation, sichtbarer Fokus, prefers-reduced-motion-Support, RTL-Layout (Arabisch)
- **RSS** — Feeds für Startseite und Sektionen
- **Inhaltsverzeichnis** — Sidebar-TOC mit Scroll-Spy-Highlighting und einklappbaren verschachtelten Einträgen
- **Serverseitige Pagination** — Für Sektionen, Taxonomien und die Tag-Cloud

## Schnellstart

Aktivieren Sie das Theme in Ihrer Site-Konfiguration:

```toml
theme = "revrain"
```

## Konfiguration

### Globale Parameter

```toml
[params]
  logo = "/logo.png"          # Nav-Bar-Logo (optional)
  description = "..."         # Site-Beschreibung für SEO
  images = ["/og-image.png"]  # Standard-Social-Sharing-Bild

[params.social]
  twitter = "username"        # Twitter-Konto für twitter:site

[params.favicons]             # Browser-Tab-Icons (alle optional)
  svg = "/favicon.svg"                # SVG-Vektor-Icon
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # iOS-Home-Bildschirm-Icon
```

**Favicon-Suchkette:** Jeder Eintrag wird als *konfigurierter Pfad → Konventionsdateiname in `static/` → weggelassen* aufgelöst. Wenn nichts konfiguriert ist oder keine Datei existiert, wird eine leere `data:`-URI ausgegeben, um die Standardanfrage des Browsers nach `/favicon.ico` zu unterdrücken (kein 404). Pfade können externe URLs oder site-relative Pfade sein.

### Footer

```toml
[params.footer]
  github = "https://github.com/username"          # GitHub-Link (optional)
  copyright = "Mein Blog · Alle Rechte vorbehalten" # Urheberrecht (optional, ausgeblendet wenn nicht gesetzt)

  [[params.footer.links]]                         # Link-Gruppe (optional)
    name = "Link-Name"
    identifier = "friendly_links"                 # Optional: i18n-Key, Übersetzung gewinnt falls vorhanden
    url = "https://example.com"
```

**Verhalten des Urheberrechts:**
- Nicht konfiguriert → nicht angezeigt
- Konfiguriert → gerendert als `© <aktuelles Jahr> <Wert>` (Jahr wird automatisch aktualisiert)
- Mehrsprachige Sites: pro Sprache separat konfigurierbar (siehe „Mehrsprachig")

### Digital Rain

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # Wahrscheinlichkeit eines mondweißen Zeichens (0–1)
  reset_chance = 0.025 # Wahrscheinlichkeit eines Tropfen-Resets (0–1)
```

### Mathe

Formeln werden zur Build-Zeit von Hugos eingebautem KaTeX-Motor (`transform.ToMath`) als HTML + MathML gerendert — kein clientseitiges JavaScript erforderlich. Aktivieren Sie die Goldmark-Passthrough-Erweiterung in Ihrer Konfiguration:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

Verwenden Sie diese Begrenzer in Ihren Inhalten:

- Inline: `\(...\)`
- Block: `$$...$$` oder `\[...\]`

**CDN-Hinweis:** Das KaTeX-Stylesheet (`katex.min.css` v0.17.0, erforderlich für die `htmlAndMathml`-Ausgabe) wird vom jsDelivr-CDN mit Subresource-Integrity-Prüfung (SRI) geladen. KaTeX ist unter der [MIT-Lizenz](https://github.com/KaTeX/KaTeX/blob/main/LICENSE) lizenziert. Es wird nur auf Seiten mit Mathe geladen.

### Mehrsprachig

Das Projekt unterstützt 11 Sprachen, mit vereinfachtem Chinesisch als Standardsprache. Jede Sprache kann `label` (Anzeigename), `locale` (RFC 5646), `title` (Site-Titel), `weight` (Sortierung, aufsteigend) und sprachspezifische Parameter setzen:

```toml
defaultContentLanguage = 'zh-CN'

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站点'
    weight = 10
    [languages.zh-CN.params.footer]
      copyright = "我的博客 · 版权所有"

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20
    [languages.en-US.params.footer]
      copyright = "My Blog · All Rights Reserved"

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'   # Rechts-nach-links-Layout für Arabisch
    title = 'موقعي'
    weight = 30
```

Inhalte werden über das Dateinamen-Suffix der Sprache zugeordnet; das Suffix muss klein geschrieben sein (z. B. `about.en-us.md`, `about.zh-cn.md`). Dateien ohne Suffix gehören zur Standardsprache.

### Menüs

```toml
[[menus.main]]
  name = "Startseite"
  identifier = "menu_home"  # i18n-Key (optional); Übersetzung gewinnt falls vorhanden
  pageRef = "/"
  weight = 10
```

## Inhalt

### Startseite

Die Startseite verwendet `_index.md` und unterstützt folgendes Front Matter:

```markdown
+++
title = "Meine Seite"           # Seitentitel
subtitle = "Willkommen auf meiner Seite"  # Untertitel unter dem Titel
logo = "/logo.png"             # Hero-Logo (optional)
logo_alt = "Seiten-Logo"       # Logo-Alternativtext (Barrierefreiheit)

[primary_button]               # Primärer Button
  url = "/browse"
  text = "Loslegen"

[secondary_button]             # Sekundärer Button
  url = "/about"
  text = "Über uns"
+++

Startseiten-Text, gerendert in einer Glaskarte unter den Buttons.
```

### Über-Seite

Eine eigenständige Seite mit `layout = "about"`:

```markdown
+++
title = "Über uns"              # Seitentitel
layout = "about"               # About-Layout verwenden
subtitle = "Die Welt mit Code verändern"  # Untertitel
avatar = "/avatar.png"         # Avatar-Bild (optional)
description = "Site-Beschreibung für SEO"  # SEO-Beschreibung

links = [                      # Soziale/externe Links (optional)
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

Über-Seite Text.
```

### Artikel

Reguläre Artikel (innerhalb eines Sektionsverzeichnisses) unterstützen folgendes Front Matter:

```markdown
+++
title = "Mein Artikel"          # Artikel-Titel
date = 2025-01-15              # Veröffentlichungsdatum
draft = false                  # Entwurf: bei true nicht bauen
tags = ["Technik", "hugo"]     # Tags (optional)
categories = ["Tutorial"]      # Kategorien (optional)
summary = "Artikel-Zusammenfassung auf Kartenlisten"  # Listen-Zusammenfassung
description = "SEO-Beschreibung; fällt auf die Zusammenfassung zurück wenn nicht gesetzt"  # SEO-Beschreibung
+++

Artikeltext.
```

### Browse-Seite

Eine Seite mit `layout = "directory"`, die alle Sektionen auflistet:

```markdown
+++
title = "Browse"                # Seitentitel
layout = "directory"           # Directory-Layout verwenden
description = "Alle Sektionen und Artikel durchsuchen"  # SEO-Beschreibung
+++
```

### Sektionen

Jede Sektion wird durch `_index.md` definiert; `summary` erscheint auf Kartenlisten:

```markdown
+++
title = 'Beiträge'              # Sektionstitel
summary = 'Artikel zu Technik, Leben und mehr.'  # Zusammenfassung auf Kartenlisten
+++
```

## Barrierefreiheit (WCAG 2.2)

- Skip-Link zum Hauptinhalt (WCAG 2.4.1)
- ARIA-Landmarks und -Labels: Hauptnavigation, Footer-Navigation, Seitennavigation, Sprachumschalter (role=listbox)
- Vollständige Tastaturunterstützung für den Sprachumschalter: Pfeiltasten zum Bewegen des Fokus, Home/End, Esc zum Schließen
- Der Mobile-Menü-Button legt `aria-expanded` / `aria-controls` offen
- Die Digital-Rain-Canvas ist für assistive Technologien verborgen (`aria-hidden`, rein dekorativ) und respektiert prefers-reduced-motion
- TOC-Scroll-Spy und Einklappen sind vollständig per Tastatur bedienbar
- Automatisches RTL-Layout für Arabisch (ar)
- Sichtbare Fokus-Stile und globale prefers-reduced-motion-Unterstützung

## Farbsystem

| Name | Hex | Verwendung |
|------|-----|------------|
| Abyss Black | `#0A0A0F` | Hintergrund |
| Rain Green | `#00D4AA` | Akzent, Digital Rain, Links |
| Twilight | `#8B92A8` | Sekundärtext, Rahmen |
| Moon White | `#E8EAF0` | Primärtext, Überschriften |
| Shroud | `#2A2A35` | Glaspanele, Rahmen |

## Schriftarten

Open-Source-Systemschriften für alle vom Theme unterstützten Sprachen:

- Lateinisch: Inter, Noto Sans
- Chinesisch: Noto Sans SC/TC, Source Han Sans SC/TC
- Japanisch: Noto Sans JP, Source Han Sans JP
- Koreanisch: Noto Sans KR, Source Han Sans KR, Nanum Gothic
- Arabisch: Noto Sans Arabic, Noto Naskh Arabic
- Kyrillisch: Noto Sans

## Mindestanforderungen

- Hugo Extended >= 0.156.0
- Dart Sass (erforderlich für die SCSS-Kompilierung)

## Lizenz

MIT-Lizenz. Siehe [LICENSE](../LICENSE).

