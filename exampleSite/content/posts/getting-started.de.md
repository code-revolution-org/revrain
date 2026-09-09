+++
title = "Schnellstart"
date = 2026-09-09
draft = false
summary = "Das Theme revrain installieren und aktivieren, eine Minimalkonfiguration vervollständigen und die lokale Vorschau starten."
description = "Schnellstart-Tutorial für das Theme revrain: Voraussetzungen, Theme aktivieren, Minimalkonfiguration und lokale Vorschau."
tags = ['revrain', 'hugo']
categories = ['anleitung']
+++

## Voraussetzungen

- Hugo Extended ≥ 0.158.0 (Sprach-APIs `locale`/`label`/`direction` erfordern v0.158.0+)
- Führen Sie `hugo version` im Terminal aus und bestätigen Sie, dass die Ausgabe `+extended` enthält

## Theme aktivieren

In der Site-Konfiguration `hugo.toml`:

```toml
theme = "revrain"
```

Wenn Sie vom `exampleSite` im Theme-Repository starten, setzen Sie `themesDir` auf das übergeordnete Verzeichnis des Themes:

```toml
theme = "revrain"
themesDir = "../../"
```

## Minimalkonfiguration

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'Meine Website'
    weight = 10
```

Als `hugo.toml` speichern, um zu beginnen. Die Standardsprache des Themes ist vereinfachtes Chinesisch. Sie können `defaultContentLanguage` auf Ihre eigene Sprache ändern.

## Lokale Vorschau

```bash
hugo server
```

`http://localhost:1313/` im Browser öffnen. Standardsprache ist vereinfachtes Chinesisch.

## Ersten Beitrag erstellen

```bash
hugo new content posts/my-first-post.de.md
```

Die erstellte Datei folgt der Vorlage `archetypes/default.md`. Front Matter und Inhalt bearbeiten, speichern, und `hugo server` lädt automatisch neu.

Beiträge mit `draft = true` werden standardmäßig nicht ausgegeben. Vor der Veröffentlichung auf `false` setzen.
