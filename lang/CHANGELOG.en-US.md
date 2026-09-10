# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.0.1] - 2026-09-10

The first official release of revrain.

### Added

- **Theme framework**: A complete dark Hugo theme with templates for the home page, about page, browse page, 404 page, and articles/sections
- **Digital rain**: Matrix-style Canvas animation; character set, font size, moon-white probability, and reset probability are all configurable. Respects the system "reduce motion" setting (draws a single static frame) and skips frames automatically on low-end devices
- **Glassmorphism**: Frosted glass cards via backdrop-filter blur
- **Multilingual**: 11 languages built in (zh-CN / zh-TW / en-US / ja / ko / de / fr / es / pt-BR / ru / ar), Simplified Chinese by default; keyboard-accessible language switcher (arrow keys, Home/End, Esc)
- **SEO**: description / robots / canonical / hreflang alternates, pagination rel=prev/next, Open Graph, Twitter Card, JSON-LD structured data (WebSite / Article), breadcrumb schema, og:image lookup chain with automatic cover resource discovery
- **Accessibility (WCAG 2.2 AA)**: skip-to-content link, ARIA landmarks and labels, keyboard navigation, visible focus, prefers-reduced-motion support, Arabic RTL mirrored layout
- **Responsive**: Mobile-first with 4 breakpoints (480 / 768 / 1024 / 1280px)
- **Math support**: Server-side rendering at build time by Hugo's embedded KaTeX (`transform.ToMath`); no client-side JS
- **Syntax highlighting**: Built-in via Hugo
- **RSS**: Feeds for the home page and sections, with multi-author information and smart subscription entry
- **Taxonomies**: Tag/category clouds using server-side pagination
- **Table of contents**: Sidebar TOC with scroll-spy highlighting and collapsible nested items
- **Navigation**: Breadcrumbs, prev/next buttons, back button
- **favicon**: Standard multi-format icon set (SVG / 16 / 32 / apple-touch) with a three-level fallback chain
- **Font system stack**: Open-source fonts covering every language the theme supports (Latin, CJK, Arabic, Cyrillic)
- **Deployment**: GitHub Actions auto-build and deployment to GitHub Pages
- **Example site**: Home, about, browse, and section pages in 11 languages, plus 5 multilingual tutorial articles
- **Minimum requirements**: Hugo >= 0.163.0 (any edition), Dart Sass

[Unreleased]: https://github.com/code-revolution-org/revrain/compare/v0.0.1...HEAD
[v0.0.1]: https://github.com/code-revolution-org/revrain/releases/tag/v0.0.1
