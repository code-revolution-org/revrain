+++
title = "Multilingue"
date = 2026-09-09
draft = false
summary = "Configurer un site multilingue : langue par défaut, définitions de langue, nommage des fichiers de contenu et paramètres par langue."
description = "Tutoriel multilingue du thème revrain : langue par défaut, définitions de langue, suffixes de nom de fichier et paramètres par langue."
tags = ['revrain', 'hugo']
categories = ['tutoriel']
+++

## Langue par défaut

```toml
defaultContentLanguage = 'zh-CN'
```

Les fichiers de contenu sans suffixe de langue appartiennent à la langue par défaut.

## Définitions de langue

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'Mon site'
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

- `label` : nom affiché dans le sélecteur de langue
- `locale` : étiquette de langue RFC 5646, utilisée pour `<html lang>` et hreflang
- `weight` : l'ordre croissant définit l'ordre du sélecteur
- `direction = "rtl"` : l'arabe active automatiquement la disposition de droite à gauche

## Nommage des fichiers de contenu

Les langues sont distinguées par le suffixe du nom de fichier, qui **doit être en minuscules** :

| Fichier | Langue |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

Le suffixe peut être omis pour la langue par défaut ; par exemple, lorsque la langue par défaut est `zh-CN`, `about.md` équivaut à `about.zh-cn.md`.

Les fichiers de même nom de base mais de suffixes différents sous la même section sont automatiquement liés comme traductions, et le thème émet les liens hreflang alternés correspondants.

## Paramètres par langue

Vous pouvez configurer des paramètres par langue, par exemple le copyright du pied de page :

```toml
[languages.zh-CN.params.footer]
  copyright = "Mon blog · Tous droits réservés"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

Le sélecteur de langue est un menu déroulant avec prise en charge complète du clavier : les flèches déplacent le focus, `Home`/`End` vont au premier/dernier élément, `Esc` le ferme.
