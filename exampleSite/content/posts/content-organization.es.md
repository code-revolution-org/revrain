+++
title = "Organización del contenido"
date = 2026-09-09
draft = false
summary = "Campos front matter y convenciones de directorio para las páginas de inicio, acerca, navegación, sección y artículo."
description = "Tutorial de organización del contenido del tema revrain: campos front matter y estructura de directorio de cada tipo de página."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Página de inicio

`content/_index.md` admite título, subtítulo, logo y dos botones:

```toml
+++
title = "Mi sitio"
subtitle = "Bienvenido a mi sitio"
logo = "/logo.png"
logo_alt = "Logo del sitio"

[primary_button]
url = "/browse"
text = "Empezar a explorar"

[secondary_button]
url = "/about"
text = "Acerca de"
+++

Cuerpo de la página de inicio, renderizado en una tarjeta de vidrio bajo los botones.
```

`logo`, `logo_alt` y los botones son todos opcionales; los elementos ausentes no se muestran.

## Página acerca de

`content/about.es.md`, declare `layout = "about"`:

```toml
+++
title = "Acerca de"
layout = "about"
subtitle = "Cambiar el mundo con código"
avatar = "/avatar.png"
description = "Descripción SEO de la página"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar` y `links` son opcionales. `links` se renderiza como una lista de enlaces externos con `target="_blank" rel="noopener"` añadido automáticamente.

## Página de navegación

`content/browse.es.md`, declare `layout = "directory"`, que lista todas las secciones automáticamente:

```toml
+++
title = "Navegación"
layout = "directory"
description = "Explorar todas las secciones y artículos"
+++
```

## Sección

El índice de sección `content/posts/_index.md`, `summary` se muestra en la lista de tarjetas:

```toml
+++
title = "Artículos"
summary = "Una colección de artículos sobre compartir tecnología, ensayos de vida y más."
+++
```

## Artículos

`content/posts/my-post.es.md`, los artículos normales no necesitan `layout`:

```toml
+++
title = "Mi artículo"
date = 2026-09-09
draft = false
tags = ["tecnología", "hugo"]
categories = ["tutorial"]
summary = "Resumen del artículo, mostrado en la lista de tarjetas"
description = "Descripción SEO, usa el resumen si no se establece"
+++

Cuerpo del artículo.
```

Las páginas de artículo renderizan automáticamente la tabla de contenidos de la barra lateral (TOC), las migas de pan y la navegación anterior/siguiente. `summary` alimenta la tarjeta de lista; `description` es para SEO y usa `summary` si no se establece.
