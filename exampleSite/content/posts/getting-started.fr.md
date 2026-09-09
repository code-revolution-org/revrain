+++
title = "Démarrage rapide"
date = 2026-09-09
draft = false
summary = "Installer et activer le thème revrain, compléter une configuration minimale et lancer l'aperçu local."
description = "Tutoriel de démarrage du thème revrain : prérequis, activation du thème, configuration minimale et aperçu local."
tags = ['revrain', 'hugo']
categories = ['tutoriel']
+++

## Prérequis

- Hugo Extended ≥ 0.158.0 (les API linguistiques `locale`/`label`/`direction` nécessitent v0.158.0+)
- Exécutez `hugo version` dans le terminal et confirmez que la sortie contient `+extended`

## Activer le thème

Dans la configuration du site `hugo.toml` :

```toml
theme = "revrain"
```

Si vous démarrez depuis l'`exampleSite` du dépôt du thème, définissez `themesDir` au répertoire parent du thème :

```toml
theme = "revrain"
themesDir = "../../"
```

## Configuration minimale

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'Mon site'
    weight = 10
```

Enregistrez-le en tant que `hugo.toml` pour commencer. La langue par défaut du thème est le chinois simplifié ; vous pouvez remplacer `defaultContentLanguage` par votre propre langue.

## Aperçu local

```bash
hugo server
```

Ouvrez `http://localhost:1313/` dans un navigateur. La langue par défaut est le chinois simplifié.

## Créer votre premier article

```bash
hugo new content posts/my-first-post.fr.md
```

Le fichier généré suit le modèle `archetypes/default.md`. Modifiez le front matter et le corps, enregistrez, et `hugo server` se recharge à chaud automatiquement.

Les articles avec `draft = true` ne sont pas publiés par défaut ; définissez-le à `false` avant publication.
