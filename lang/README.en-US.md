# revrain

A Hugo theme by [Code Revolution](https://github.com/code-revolution-org), built for geeks and developers. Dark-first design with a digital rain and glassmorphism aesthetic.

[简体中文](../README.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Features

- **Digital Rain** — Matrix-style Canvas animation; character set, font size, moon-white probability and reset probability are all configurable. Respects the system "reduce motion" setting (draws a single static frame) and skips frames automatically on low-end devices
- **Glassmorphism** — Frosted glass cards via backdrop-filter blur
- **Multilingual** — 11 languages built in, with a keyboard-accessible language switcher (arrow keys, Home/End, Esc)
- **SEO** — description / robots / canonical / hreflang alternates, pagination rel=prev/next, Open Graph, Twitter Card, JSON-LD structured data (WebSite / Article), breadcrumb schema
- **Responsive** — Mobile-first with 4 breakpoints (480 / 768 / 1024 / 1280px)
- **Syntax Highlighting** — Built-in via Hugo
- **Math Support** — Server-side rendering by Hugo's embedded KaTeX (`transform.ToMath`) at build time; no client-side JS
- **Dark Theme** — Developer-optimized palette (5 named colors)
- **Accessibility** — Aligned with WCAG 2.2 AA: skip-to-content link, ARIA landmarks and labels, keyboard navigation, visible focus, prefers-reduced-motion support, RTL layout (Arabic)
- **RSS** — Feeds for the home page and sections
- **Table of Contents** — Sidebar TOC with scroll-spy highlighting and collapsible nested items
- **Server-side Pagination** — For sections, taxonomies and the tag cloud

## Quick Start

Enable the theme in your site configuration:

```toml
theme = "revrain"
```

## Configuration

### Global Params

```toml
[params]
  logo = "/logo.png"          # Nav bar logo (optional)
  description = "..."         # Site description for SEO
  images = ["/og-image.png"]  # Default social share image

[params.social]
  twitter = "username"        # Twitter account for twitter:site

[params.favicons]             # Browser tab icons (all optional)
  svg = "/favicon.svg"                # SVG vector icon
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # iOS home screen icon
```

**Favicon lookup chain:** each entry resolves as *configured path → convention filename in `static/` → omitted*. If nothing is configured or present at all, an empty `data:` URI is emitted to suppress the browser's default `/favicon.ico` request (no 404). Paths may be external URLs or site-relative paths.

### Footer

```toml
[params.footer]
  github = "https://github.com/username"          # GitHub link (optional)
  copyright = "My Blog · All Rights Reserved"     # Copyright (optional, hidden if unset)

  [[params.footer.links]]                         # Link group (optional)
    name = "Link Name"
    identifier = "friendly_links"                 # Optional: i18n key; translation wins if present
    url = "https://example.com"
```

**Copyright behavior:**
- Not configured → not displayed
- Configured → rendered as `© <current year> <value>` (year auto-updates)
- Multilingual sites: configure separately per language (see "Multilingual")

### Digital Rain

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # Probability of a moon-white character (0–1)
  reset_chance = 0.025 # Probability of a raindrop reset (0–1)
```

### Math

Formulas are rendered at build time by Hugo's embedded KaTeX engine (`transform.ToMath`) as HTML + MathML — no client-side JavaScript required. Enable the Goldmark passthrough extension in your config:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

Use these delimiters in your content:

- Inline: `\(...\)`
- Block: `$$...$$` or `\[...\]`

**CDN notice:** The KaTeX stylesheet (`katex.min.css` v0.17.0, required by the `htmlAndMathml` output) is loaded from the jsDelivr CDN with Subresource Integrity (SRI) verification. KaTeX is licensed under the [MIT License](https://github.com/KaTeX/KaTeX/blob/main/LICENSE). It is loaded only on pages that contain math.

### Multilingual

The project supports 11 languages, with Simplified Chinese as the default. Each language can set `label` (display name), `locale` (RFC 5646), `title` (site title), `weight` (sort order, ascending) and language-specific params:

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
    direction = 'rtl'   # Right-to-left layout for Arabic
    title = 'موقعي'
    weight = 30
```

Content is assigned to languages by file-name suffix; the suffix must be lowercase (e.g. `about.en-us.md`, `about.zh-cn.md`). Files without a suffix belong to the default language.

### Menus

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # i18n key (optional); translation wins if present
  pageRef = "/"
  weight = 10
```

## Content

### Home Page

The home page uses `_index.md` and supports the following front matter:

```markdown
+++
title = "My Site"              # Page title
subtitle = "Welcome to my site"  # Subtitle shown below the title
logo = "/logo.png"             # Hero logo (optional)
logo_alt = "Site logo"         # Logo alt text (accessibility)

[primary_button]               # Primary button
  url = "/browse"
  text = "Get Started"

[secondary_button]             # Secondary button
  url = "/about"
  text = "About"
+++

Home page body, rendered in a glass card below the buttons.
```

### About Page

A standalone page using `layout = "about"`:

```markdown
+++
title = "About"                # Page title
layout = "about"               # Use the about layout
subtitle = "Changing the World with Code"  # Subtitle
avatar = "/avatar.png"         # Avatar image (optional)
description = "Site description for SEO"  # SEO description

links = [                      # Social/external links (optional)
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

About page body.
```

### Articles

Regular articles (inside a section directory) support the following front matter:

```markdown
+++
title = "My Article"           # Article title
date = 2025-01-15              # Publish date
draft = false                  # Draft: skipped when true
tags = ["tech", "hugo"]        # Tags (optional)
categories = ["Tutorial"]      # Categories (optional)
summary = "Article summary shown on card lists"  # List summary
description = "SEO description; falls back to the summary if unset"  # SEO description
+++

Article body.
```

### Browse Page

A page using `layout = "directory"` that lists all sections:

```markdown
+++
title = "Browse"               # Page title
layout = "directory"           # Use the directory layout
description = "Browse all sections and articles"  # SEO description
+++
```

### Sections

Each section is defined by `_index.md`; `summary` appears on card lists:

```markdown
+++
title = 'Posts'                # Section title
summary = 'Articles covering tech sharing, life essays and more.'  # Summary shown on card lists
+++
```

## Accessibility (WCAG 2.2)

- Skip-to-content link (WCAG 2.4.1)
- ARIA landmarks and labels: main navigation, footer navigation, page navigation, language switcher (role=listbox)
- Full keyboard support for the language switcher: arrow keys to move focus, Home/End, Esc to close
- Mobile menu button exposes `aria-expanded` / `aria-controls`
- The digital rain canvas is hidden from assistive technology (`aria-hidden`, purely decorative) and respects prefers-reduced-motion
- TOC scroll-spy and collapse are fully keyboard operable
- Automatic RTL layout for Arabic (ar)
- Visible focus styles and global prefers-reduced-motion support

## Color System

| Name | Hex | Usage |
|------|-----|-------|
| Abyss Black | `#0A0A0F` | Background |
| Rain Green | `#00D4AA` | Accent, digital rain, links |
| Twilight | `#8B92A8` | Secondary text, borders |
| Moon White | `#E8EAF0` | Primary text, headings |
| Shroud | `#2A2A35` | Glass panels, borders |

## Font Stack

Open-source system fonts covering every language the theme supports:

- Latin: Inter, Noto Sans
- Chinese: Noto Sans SC/TC, Source Han Sans SC/TC
- Japanese: Noto Sans JP, Source Han Sans JP
- Korean: Noto Sans KR, Source Han Sans KR, Nanum Gothic
- Arabic: Noto Sans Arabic, Noto Naskh Arabic
- Cyrillic: Noto Sans

## Minimum Requirements

- Hugo Extended >= 0.156.0
- Dart Sass (required for SCSS compilation)

## License

MIT License. See [LICENSE](../LICENSE).

