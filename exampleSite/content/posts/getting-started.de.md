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

- Hugo ≥ 0.163.0 (beliebige Edition; die IsBranch-API erfordert v0.163.0+)
- Dart Sass installieren und zum PATH hinzufügen (erforderlich für die SCSS-Kompilierung; Hugo ruft es automatisch auf)

## Theme installieren

### Methode 1: Git-Submodul (empfohlen)

```bash
git submodule add https://github.com/code-revolution-org/revrain.git themes/revrain
```

### Methode 2: Hugo Modules (erfordert Git und Go 1.18+)

```bash
hugo mod init <dein Modulname>
hugo mod get github.com/code-revolution-org/revrain
```

Und deklariere den Import in deiner Site-Konfiguration:

```toml
[module]
  [[module.imports]]
    path = 'github.com/code-revolution-org/revrain'
```

### Methode 3: Herunterladen oder klonen

Lade das Quell-ZIP von [GitHub Releases](https://github.com/code-revolution-org/revrain/releases) herunter oder klone es nach `themes/revrain`:

```bash
git clone https://github.com/code-revolution-org/revrain.git themes/revrain
```

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
