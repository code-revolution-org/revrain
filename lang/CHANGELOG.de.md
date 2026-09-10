# Changelog

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.1.0/), und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [Unveröffentlicht]

## [v0.0.1] - 2026-09-10

Die erste offizielle Version von revrain.

### Added

- **Theme-Grundgerüst**: Ein vollständiges dunkles Hugo-Theme mit Vorlagen für Startseite, Über-Seite, Stöbern-Seite, 404-Seite sowie Artikel/Sektionen
- **Digital Rain**: Matrix-artige Canvas-Animation; Zeichensatz, Schriftgröße, Mondweiß-Wahrscheinlichkeit und Reset-Wahrscheinlichkeit sind alle konfigurierbar. Respektiert die Systemeinstellung „Bewegung reduzieren" (zeichnet nur ein statisches Bild) und überspringt Frames automatisch auf schwachen Geräten
- **Glassmorphism**: Mattscheiben-Karten mit backdrop-filter Unschärfe
- **Mehrsprachig**: 11 Sprachen integriert (zh-CN / zh-TW / en-US / ja / ko / de / fr / es / pt-BR / ru / ar), Standard ist vereinfachtes Chinesisch; über Tastatur bedienbarer Sprachumschalter (Pfeiltasten, Home/End, Esc)
- **SEO**: description / robots / canonical / hreflang-Alternate-Links, Pagination rel=prev/next, Open Graph, Twitter Card, JSON-LD strukturierte Daten (WebSite / Article), Breadcrumb-Schema, og:image-Suchkette mit automatischer Cover-Erkennung
- **Barrierefreiheit (WCAG 2.2 AA)**: Skip-to-Content-Link, ARIA-Landmarks und -Labels, Tastaturnavigation, sichtbarer Fokus, prefers-reduced-motion-Unterstützung, arabisches RTL-Spiegellayout
- **Responsiv**: Mobile-first mit 4 Breakpoints (480 / 768 / 1024 / 1280px)
- **Mathe-Unterstützung**: Serverseitiges Rendering zur Build-Zeit mit Hugos eingebautem KaTeX (`transform.ToMath`); kein Client-JS
- **Syntaxhervorhebung**: Eingebaut über Hugo
- **RSS**: Feeds für Startseite und Sektionen, mit Mehr-Autoren-Informationen und intelligentem Abo-Einstieg
- **Taxonomien**: Tag-/Kategorie-Clouds mit serverseitiger Pagination
- **Inhaltsverzeichnis**: Sidebar-TOC mit Scroll-Highlight und einklappbaren verschachtelten Einträgen
- **Navigation**: Breadcrumbs, Zurück-/Weiter-Schaltflächen, Zurück-Schaltfläche
- **favicon**: Standard-Mehrformat-Iconset (SVG / 16 / 32 / apple-touch) mit dreistufiger Fallback-Kette
- **Schriftarten-Stack**: Open-Source-Schriften für alle unterstützten Sprachen des Themes (Latein, CJK, Arabisch, Kyrillisch)
- **Bereitstellung**: GitHub Actions Auto-Build und Bereitstellung auf GitHub Pages
- **Beispielseite**: Start-, Über-, Stöbern- und Sektionsseiten in 11 Sprachen plus 5 mehrsprachige Tutorial-Artikel
- **Mindestanforderungen**: Hugo >= 0.163.0 (beliebige Edition), Dart Sass

[Unveröffentlicht]: https://github.com/code-revolution-org/revrain/compare/v0.0.1...HEAD
[v0.0.1]: https://github.com/code-revolution-org/revrain/releases/tag/v0.0.1
