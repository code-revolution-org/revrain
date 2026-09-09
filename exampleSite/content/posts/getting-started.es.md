+++
title = "Inicio rápido"
date = 2026-09-09
draft = false
summary = "Instalar y activar el tema revrain, completar una configuración mínima y lanzar la vista previa local."
description = "Tutorial de inicio del tema revrain: requisitos previos, activar el tema, configuración mínima y vista previa local."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Requisitos previos

- Hugo Extended ≥ 0.158.0 (las APIs de idioma `locale`/`label`/`direction` requieren v0.158.0+)
- Ejecute `hugo version` en la terminal y confirme que la salida contiene `+extended`

## Activar el tema

En la configuración del sitio `hugo.toml`:

```toml
theme = "revrain"
```

Si parte del `exampleSite` en el repositorio del tema, defina `themesDir` al directorio padre del tema:

```toml
theme = "revrain"
themesDir = "../../"
```

## Configuración mínima

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'Mi sitio'
    weight = 10
```

Guárdelo como `hugo.toml` para empezar. El idioma predeterminado del tema es chino simplificado. Puede cambiar `defaultContentLanguage` a su propio idioma.

## Vista previa local

```bash
hugo server
```

Abra `http://localhost:1313/` en un navegador. El idioma predeterminado es chino simplificado.

## Crear su primer artículo

```bash
hugo new content posts/my-first-post.es.md
```

El archivo generado sigue la plantilla `archetypes/default.md`. Edite el front matter y el cuerpo, guarde, y `hugo server` se recarga en caliente automáticamente.

Los artículos con `draft = true` no se publican por defecto; establézcalo a `false` antes de publicar.
