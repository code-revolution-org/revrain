# revrain

A Hugo theme by Code Revolution, built for geeks and developers.

[简体中文](lang/README.zh-CN.md) | [繁體中文](lang/README.zh-TW.md) | [日本語](lang/README.ja.md) | [한국어](lang/README.ko.md) | [Deutsch](lang/README.de.md) | [Français](lang/README.fr.md) | [Español](lang/README.es.md) | [Português](lang/README.pt-BR.md) | [Русский](lang/README.ru.md) | [العربية](lang/README.ar.md)

## Features

- **Digital Rain** — Matrix-style canvas animation, fully configurable
- **Glassmorphism** — Frosted glass cards with backdrop blur
- **Multilingual** — 11 languages with language switcher
- **SEO** — Open Graph, Twitter Card, JSON-LD structured data, breadcrumb schema
- **Responsive** — Mobile-first, 4 breakpoints (480 / 768 / 1024 / 1280px)
- **Syntax Highlighting** — Built-in via Hugo
- **Math Support** — Built-in via Hugo
- **Dark Theme** — Developer-optimized color palette
- **Accessibility** — WCAG 2.2 AA-aligned: skip link, visible focus, reduced-motion support, ARIA landmarks

## Quick Start

```toml
theme = "revrain"
```

## Configuration

### Global Params

```toml
[params]
  logo = "/logo.png"          # Nav bar logo (optional)
  favicon = "/favicon.ico"    # Browser tab icon (optional)
  description = "..."         # Site description for SEO
  images = ["/og-image.png"]  # Default social share image

[params.social]
  twitter = "username"        # Twitter account for twitter:site
```

### Footer

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "My Blog · All Rights Reserved"  # Optional, disabled if not set

  [[params.footer.links]]
    name = "Link Name"
    url = "https://example.com"
```

**Copyright behavior:**
- Not configured → not displayed
- Configured → renders as `© 2026 My Blog · All Rights Reserved` (year auto-updates)
- Multilingual: configure per language (see below)

### Digital Rain

```toml
[params.digitalRain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  fontSize = 14       # 10–32 px
  moonChance = 0.02   # Probability of moon-white character
  resetChance = 0.025 # Probability of rain drop reset
```

### Multilingual

Configure copyright per language:

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.zh-CN]
  label = "简体中文"
  weight = 20
  [languages.zh-CN.params.footer]
    copyright = "我的博客 · 版权所有"
```

### Menus

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # i18n key (optional)
  pageRef = "/"
  weight = 10
```

## Content

### Home Page

```markdown
+++
title = "My Site"
subtitle = "Welcome to my site"
logo = "/logo.png"
logoAlt = "Site logo"

[primaryButton]
  url = "/browse"
  text = "Get Started"

[secondaryButton]
  url = "/about"
  text = "About"
+++
```

### About Page

```markdown
+++
title = "About"
layout = "about"
subtitle = "Changing the World with Code"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### Articles

```markdown
+++
title = "My Article"
date = 2025-01-15
draft = false
tags = ["tech", "hugo"]
categories = ["Tutorial"]
summary = "A short summary"
description = "SEO description"
+++
```

### Browse Page

```markdown
+++
title = "Browse"
layout = "directory"
+++
```

## Color System

| Name | Hex | Usage |
|------|-----|-------|
| Abyss Black | `#0A0A0F` | Background |
| Rain Green | `#00D4AA` | Accent, digital rain, links |
| Twilight | `#8B92A8` | Secondary text, borders |
| Moon White | `#E8EAF0` | Primary text, headings |
| Shroud | `#2A2A35` | Glass panels, borders |

## Font Stack

Uses system fonts with CJK fallbacks:

- Latin: Inter, Noto Sans
- Chinese: Noto Sans SC/TC, Source Han Sans
- Japanese: Noto Sans JP, Source Han Sans JP
- Korean: Noto Sans KR, Nanum Gothic
- Arabic: Noto Sans Arabic
- Cyrillic: Noto Sans

## Minimum Requirements

- Hugo Extended >= 0.156.0
- Dart Sass (required for SCSS compilation)

## License

MIT License. See [LICENSE](LICENSE).
