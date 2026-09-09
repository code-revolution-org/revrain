+++
title = "Multilingüe"
date = 2026-09-09
draft = false
summary = "Configurar un sitio multilingüe: idioma predeterminado, definiciones de idioma, nombres de archivos de contenido y parámetros por idioma."
description = "Tutorial multilingüe del tema revrain: idioma predeterminado, definiciones de idioma, sufijos de nombre de archivo y parámetros por idioma."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Idioma predeterminado

```toml
defaultContentLanguage = 'zh-CN'
```

Los archivos de contenido sin sufijo de idioma pertenecen al idioma predeterminado.

## Definiciones de idioma

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'Mi sitio'
    weight = 10

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'
    title = 'موقعي'
    weight = 30
```

- `label`: nombre mostrado en el selector de idioma
- `locale`: etiqueta de idioma RFC 5646, usada para `<html lang>` y hreflang
- `weight`: el orden ascendente define el orden del selector
- `direction = "rtl"`: el árabe activa automáticamente el diseño de derecha a izquierda

## Nombres de archivos de contenido

Los idiomas se distinguen por el sufijo del nombre de archivo, que **debe estar en minúsculas**:

| Archivo | Idioma |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

El sufijo puede omitirse para el idioma predeterminado; por ejemplo, cuando el predeterminado es `zh-CN`, `about.md` equivale a `about.zh-cn.md`.

Los archivos con el mismo nombre base pero distinto sufijo en la misma sección se enlazan automáticamente como traducciones, y el tema emite los enlaces hreflang alternos correspondientes.

## Parámetros por idioma

Puede configurar parámetros por idioma, por ejemplo el copyright del pie de página:

```toml
[languages.zh-CN.params.footer]
  copyright = "Mi blog · Todos los derechos reservados"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

El selector de idioma es un menú desplegable con soporte completo de teclado: las flechas mueven el foco, `Home`/`End` van al primer/último elemento, `Esc` lo cierra.
