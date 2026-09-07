# revrain

Un tema de Hugo de [Code Revolution](https://github.com/code-revolution-org), hecho para geeks y desarrolladores. Diseño oscuro con lluvia digital y estética de vidrio esmerilado (glassmorphism).

[简体中文](../README.md) | [English](README.en-US.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Português (Brasil)](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Características

- **Lluvia digital** — Animación Canvas estilo Matrix; conjunto de caracteres, tamaño de fuente, probabilidad de blanco lunar y probabilidad de reinicio totalmente configurables. Respeta el ajuste del sistema «reducir movimiento» (dibuja un único fotograma estático) y omite fotogramas automáticamente en dispositivos de gama baja
- **Glassmorphism** — Tarjetas de vidrio esmerilado con desenfoque backdrop-filter
- **Multilingüe** — 11 idiomas integrados, con selector de idioma accesible por teclado (flechas, Inicio/Fin, Esc)
- **SEO** — description / robots / canonical / enlaces alternativos hreflang, rel=prev/next de paginación, Open Graph, Twitter Card, datos estructurados JSON-LD (WebSite / Article), esquema de migas de pan
- **Responsive** — Mobile-first con 4 puntos de ruptura (480 / 768 / 1024 / 1280px)
- **Resaltado de sintaxis** — Integrado vía Hugo
- **Soporte matemático** — Renderizado en el servidor por el KaTeX integrado de Hugo (`transform.ToMath`) en tiempo de compilación; sin JS en el cliente
- **Tema oscuro** — Paleta optimizada para desarrolladores (5 colores de imagen)
- **Accesibilidad** — Alineado con WCAG 2.2 AA: enlace de salto al contenido principal, puntos de referencia y etiquetas ARIA, navegación por teclado, foco visible, soporte de prefers-reduced-motion, diseño RTL (árabe)
- **RSS** — Feeds para la página de inicio y las secciones
- **Tabla de contenidos** — TOC lateral con resaltado al desplazarse y elementos anidados plegables
- **Paginación en el servidor** — Para secciones, taxonomías y la nube de etiquetas

## Inicio rápido

Active el tema en la configuración de su sitio:

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
  apple_touch = "/apple-touch-icon.png"  # Icono de pantalla de inicio iOS
```

**Cadena de búsqueda de favicon:** cada entrada se resuelve como *ruta configurada → nombre de archivo convencional en `static/` → omitida*. Si no hay nada configurado o presente, se emite una URI `data:` vacía para suprimir la solicitud predeterminada de `/favicon.ico` del navegador (sin 404). Las rutas pueden ser URL externas o rutas relativas al sitio.

### Pie de página

```toml
[params.footer]
  github = "https://github.com/username"          # Enlace de GitHub (opcional)
  copyright = "Mi blog · Todos los derechos reservados" # Copyright (opcional, oculto si no se define)

  [[params.footer.links]]                         # Grupo de enlaces (opcional)
    name = "Nombre del enlace"
    identifier = "friendly_links"                 # Opcional: clave i18n, la traducción gana si existe
    url = "https://example.com"
```

**Comportamiento del copyright:**
- No configurado → no se muestra
- Configurado → se muestra como `© <año actual> <valor>` (el año se actualiza automáticamente)
- Sitios multilingües: se configura por separado para cada idioma (ver «Multilingüe»)

### Lluvia digital

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # Probabilidad de carácter blanco lunar (0–1)
  reset_chance = 0.025 # Probabilidad de reinicio de gota (0–1)
```

### Matemáticas

Las fórmulas se renderizan en tiempo de compilación por el motor KaTeX integrado de Hugo (`transform.ToMath`) como HTML + MathML — sin JavaScript en el cliente. Active la extensión Goldmark passthrough en su configuración:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

Use estos delimitadores en su contenido:

- En línea: `\(...\)`
- Bloque: `$$...$$` o `\[...\]`

**Aviso CDN:** La hoja de estilos de KaTeX (`katex.min.css` v0.17.0, requerida para la salida `htmlAndMathml`) se carga desde el CDN jsDelivr con verificación de integridad de subrecursos (SRI). KaTeX está bajo [licencia MIT](https://github.com/KaTeX/KaTeX/blob/main/LICENSE). Solo se carga en las páginas que contienen matemáticas.

### Multilingüe

El proyecto admite 11 idiomas, con el chino simplificado como idioma predeterminado. Cada idioma puede definir `label` (nombre mostrado), `locale` (RFC 5646), `title` (título del sitio), `weight` (orden de clasificación, ascendente) y parámetros específicos del idioma:

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
    direction = 'rtl'   # Diseño de derecha a izquierda para árabe
    title = 'موقعي'
    weight = 30
```

El contenido se asigna a los idiomas mediante el sufijo del nombre de archivo; el sufijo debe estar en minúsculas (p. ej. `about.en-us.md`, `about.zh-cn.md`). Los archivos sin sufijo pertenecen al idioma predeterminado.

### Menús

```toml
[[menus.main]]
  name = "Inicio"
  identifier = "menu_home"  # Clave i18n (opcional); la traducción gana si existe
  pageRef = "/"
  weight = 10
```

## Contenido

### Página de inicio

La página de inicio usa `_index.md` y admite el siguiente front matter:

```markdown
+++
title = "Mi sitio"              # Título de la página
subtitle = "Bienvenido a mi sitio"  # Subtítulo mostrado bajo el título
logo = "/logo.png"             # Logo de la página de inicio (opcional)
logo_alt = "Logo del sitio"    # Texto alternativo del logo (accesibilidad)

[primary_button]               # Botón principal
  url = "/browse"
  text = "Empezar"

[secondary_button]             # Botón secundario
  url = "/about"
  text = "Acerca de"
+++

Cuerpo de la página de inicio, mostrado en una tarjeta de vidrio debajo de los botones.
```

### Página Acerca de

Una página independiente que usa `layout = "about"`:

```markdown
+++
title = "Acerca de"             # Título de la página
layout = "about"               # Usar la plantilla "acerca de"
subtitle = "Cambiar el mundo con código"  # Subtítulo
avatar = "/avatar.png"         # Imagen de avatar (opcional)
description = "Descripción del sitio para SEO"  # Descripción SEO

links = [                      # Enlaces sociales/externos (opcionales)
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

Cuerpo de la página Acerca de.
```

### Artículos

Los artículos normales (dentro de un directorio de sección) admiten el siguiente front matter:

```markdown
+++
title = "Mi artículo"           # Título del artículo
date = 2025-01-15              # Fecha de publicación
draft = false                  # Borrador: se omite si es true
tags = ["tecnología", "hugo"]  # Etiquetas (opcionales)
categories = ["Tutorial"]      # Categorías (opcionales)
summary = "Resumen del artículo mostrado en las listas de tarjetas"  # Resumen de lista
description = "Descripción SEO; usa el resumen si no se define"  # Descripción SEO
+++

Cuerpo del artículo.
```

### Página Explorar

Una página que usa `layout = "directory"` que enumera todas las secciones:

```markdown
+++
title = "Explorar"              # Título de la página
layout = "directory"           # Usar la plantilla de directorio
description = "Explorar todas las secciones y artículos"  # Descripción SEO
+++
```

### Secciones

Cada sección se define con `_index.md`; `summary` aparece en las listas de tarjetas:

```markdown
+++
title = 'Publicaciones'         # Título de la sección
summary = 'Artículos sobre compartir tecnología, ensayos de vida y más.'  # Resumen mostrado en las listas de tarjetas
+++
```

## Accesibilidad (WCAG 2.2)

- Enlace de salto al contenido principal (WCAG 2.4.1)
- Puntos de referencia y etiquetas ARIA: navegación principal, navegación del pie, navegación de página, selector de idioma (role=listbox)
- Soporte completo de teclado para el selector de idioma: flechas para mover el foco, Inicio/Fin, Esc para cerrar
- El botón del menú móvil expone `aria-expanded` / `aria-controls`
- El lienzo de lluvia digital está oculto a las tecnologías de asistencia (`aria-hidden`, puramente decorativo) y respeta prefers-reduced-motion
- El resaltado al desplazarse y el plegado de la TOC son totalmente operables con el teclado
- Diseño RTL automático para árabe (ar)
- Estilos de foco visibles y soporte global de prefers-reduced-motion

## Sistema de colores

| Nombre | Hex | Uso |
|--------|-----|-----|
| Abyss Black | `#0A0A0F` | Fondo |
| Rain Green | `#00D4AA` | Acento, lluvia digital, enlaces |
| Twilight | `#8B92A8` | Texto secundario, bordes |
| Moon White | `#E8EAF0` | Texto principal, títulos |
| Shroud | `#2A2A35` | Paneles de vidrio, bordes |

## Fuentes

Fuentes de sistema de código abierto que cubren todos los idiomas admitidos por el tema:

- Latín: Inter, Noto Sans
- Chino: Noto Sans SC/TC, Source Han Sans SC/TC
- Japonés: Noto Sans JP, Source Han Sans JP
- Coreano: Noto Sans KR, Source Han Sans KR, Nanum Gothic
- Árabe: Noto Sans Arabic, Noto Naskh Arabic
- Cirílico: Noto Sans

## Requisitos mínimos

- Hugo Extended >= 0.156.0
- Dart Sass (requerido para la compilación SCSS)

## Licencia

Licencia MIT. Ver [LICENSE](../LICENSE).

