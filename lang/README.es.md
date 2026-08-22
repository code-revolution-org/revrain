# revrain

Un tema de Hugo por Code Revolution, diseñado para frikis y desarrolladores.

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Características

- **Lluvia digital** — Animación Canvas estilo Matrix, completamente configurable
- **Morfismo de vidrio** — Tarjetas de vidrio esmerilado con backdrop blur
- **Multilingüe** — 11 idiomas con selector de idioma
- **SEO** — Open Graph, Twitter Card, datos estructurados JSON-LD, esquema breadcrumb
- **Responsive** — Mobile-first, 4 breakpoints (480 / 768 / 1024 / 1280px)
- **Resaltado de sintaxis** — Integrado en Hugo
- **Soporte matemático** — Renderizado KaTeX del lado del servidor por Hugo (transform.ToMath), sin JS del lado del cliente
- **Tema oscuro** — Paleta de colores optimizada para desarrolladores

## Inicio rápido

```toml
theme = "revrain"
```

## Configuración

### Parámetros globales

```toml
[params]
  logo = "/logo.png"          # Logo de la barra de navegación (opcional)
  description = "..."         # Descripción del sitio para SEO
  images = ["/og-image.png"]  # Imagen de compartir social por defecto

[params.social]
  twitter = "username"        # Cuenta de Twitter para twitter:site

[params.favicons]             # Iconos de pestaña del navegador (todos opcionales)
  svg = "/favicon.svg"                # Icono vectorial SVG
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # Icono de pantalla de inicio de iOS
```

**Cadena de búsqueda de favicons:** cada entrada se resuelve como *ruta configurada → nombre de archivo convencional en `static/` → omitida*. Si no se configura ni existe ningún icono, se emite un URI `data:` vacío para suprimir la solicitud predeterminada de `/favicon.ico` del navegador (sin 404). Las rutas pueden ser URL externas (`https://...`) o rutas relativas al sitio.

### Pie de página

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "Mi Blog · Todos los derechos reservados"  # Opcional, no se muestra si no está configurado

  [[params.footer.links]]
    name = "Nombre del enlace"
    url = "https://example.com"
```

**Comportamiento del copyright:**
- No configurado → no se muestra
- Configurado → se renderiza como `© 2026 Mi Blog · Todos los derechos reservados` (el año se actualiza automáticamente)
- Multilingüe: configure por idioma (ver abajo)

### Lluvia digital

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # Probabilidad de carácter blanco lunar
  reset_chance = 0.025 # Probabilidad de reinicio de gota
```

### Matemáticas

Las fórmulas matemáticas se renderizan en tiempo de compilación con el motor KaTeX integrado en Hugo (`transform.ToMath`) — no se requiere JavaScript del lado del cliente. Active la extensión passthrough de Goldmark en su configuración:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

Use estos delimitadores en su contenido:

- En línea: `\(...\)`
- En bloque: `$$...$$` o `\[...\]`

**Aviso CDN:** La hoja de estilo de KaTeX (`katex.min.css` v0.17.0, necesaria para la salida `htmlAndMathml`) se carga desde el CDN jsDelivr con verificación de integridad de subrecursos (SRI). KaTeX está licenciado bajo la [licencia MIT](https://github.com/KaTeX/KaTeX/blob/main/LICENSE) (Copyright (c) 2013-2020 Khan Academy and other contributors). Solo se carga en páginas que contienen fórmulas.

### Multilingüe

Configure el copyright por idioma:

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.es]
  label = "Español"
  weight = 20
  [languages.es.params.footer]
    copyright = "Mi Blog · Todos los derechos reservados"
```

### Menú

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # Clave i18n (opcional)
  pageRef = "/"
  weight = 10
```

## Contenido

### Página de inicio

```markdown
+++
title = "Mi sitio"
subtitle = "Bienvenido a mi sitio"
logo = "/logo.png"
logo_alt = "Logo del sitio"

[primary_button]
  url = "/browse"
  text = "Empezar"

[secondary_button]
  url = "/about"
  text = "Acerca de"
+++
```

### Página Acerca de

```markdown
+++
title = "Acerca de"
layout = "about"
subtitle = "Cambiando el mundo con código"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### Artículo

```markdown
+++
title = "Mi artículo"
date = 2025-01-15
draft = false
tags = ["tech", "hugo"]
categories = ["Tutorial"]
summary = "Resumen del artículo"
description = "Descripción SEO"
+++
```

### Página Explorar

```markdown
+++
title = "Explorar"
layout = "directory"
+++
```

## Sistema de colores

| Nombre | Valor | Uso |
|--------|-------|-----|
| Abismo Negro | `#0A0A0F` | Fondo principal |
| Lluvia Verde | `#00D4AA` | Acento, lluvia digital, enlaces |
| Crepúsculo | `#8B92A8` | Texto secundario, bordes |
| Blanco Lunar | `#E8EAF0` | Texto principal, títulos |
| Velo | `#2A2A35` | Paneles de vidrio, bordes |

## Pila de fuentes

Fuentes del sistema con fallback CJK:

- Latín: Inter, Noto Sans
- Chino: Noto Sans SC/TC, Source Han Sans
- Japonés: Noto Sans JP, Source Han Sans JP
- Coreano: Noto Sans KR, Nanum Gothic
- Árabe: Noto Sans Arabic
- Cirílico: Noto Sans

## Requisitos mínimos

- Hugo Extended >= 0.156.0
- Dart Sass (requerido para la compilación SCSS)

## Licencia

Licencia MIT. Ver [LICENSE](../LICENSE).
