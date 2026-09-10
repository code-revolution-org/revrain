+++
title = "Mehrsprachig"
date = 2026-09-09
draft = false
summary = "Mehrsprachige Site konfigurieren: Standardsprache, Sprachdefinitionen, Dateibenennung und sprachspezifische Parameter."
description = "Mehrsprachig-Tutorial des Themes revrain: Standardsprache, Sprachdefinitionen, Dateinamenssuffixe und sprachspezifische Parameter."
tags = ['revrain', 'hugo']
categories = ['anleitung']
+++

## Standardsprache

```toml
defaultContentLanguage = 'zh-CN'
```

Inhaltsdateien ohne Sprachsuffix gehören zur Standardsprache.

## Sprachdefinitionen

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'Meine Website'
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

- `label`: Anzeigename im Sprachumschalter
- `locale`: RFC-5646-Sprachkennzeichen, verwendet für `<html lang>` und hreflang
- `weight`: aufsteigende Reihenfolge definiert die Umschalter-Reihenfolge
- `direction = "rtl"`: Arabisch aktiviert automatisch Rechts-nach-Links-Layout

## Dateibenennung

Sprachen werden durch das Dateinamenssuffix unterschieden, das **Kleinbuchstaben sein muss**:

| Datei | Sprache |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

Das Suffix kann für die Standardsprache weggelassen werden; wenn die Standardsprache beispielsweise `zh-CN` ist, ist `about.md` gleichbedeutend mit `about.zh-cn.md`.

Dateien mit gleichem Basisnamen aber unterschiedlichem Suffix im selben Abschnitt werden automatisch als Übersetzungen verknüpft, und das Theme gibt die entsprechenden hreflang-Alternate-Links aus.

## Sprachspezifische Parameter

Sie können parameter pro Sprache konfigurieren, z. B. das Footer-Copyright:

```toml
[languages.zh-CN.params.footer]
  copyright = "Mein Blog · Alle Rechte vorbehalten"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

Der Sprachumschalter ist ein Dropdown-Menü mit voller Tastaturunterstützung: Pfeiltasten bewegen den Fokus, `Home`/`End` springen zum ersten/letzten Eintrag, `Esc` schließt ihn.
