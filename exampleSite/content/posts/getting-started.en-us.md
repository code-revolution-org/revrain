+++
title = 'Getting Started'
date = 2026-09-09
draft = false
summary = 'Install and enable the revrain theme, complete a minimal runnable config, and start a local preview.'
description = 'revrain theme getting started tutorial: prerequisites, enabling the theme, minimal config and local preview.'
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Prerequisites

- Hugo Extended ≥ 0.158.0 (language APIs `locale`/`label`/`direction` require v0.158.0+)
- Run `hugo version` in the terminal and confirm the output contains `+extended`

## Enable the theme

In the site configuration `hugo.toml`:

```toml
theme = "revrain"
```

If you start from the `exampleSite` in this theme repository, set `themesDir` to the parent directory of the theme:

```toml
theme = "revrain"
themesDir = "../../"
```

## Minimal runnable config

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'My Site'
    weight = 10
```

Save it as `hugo.toml` to begin. The theme ships with Simplified Chinese as the default language; change `defaultContentLanguage` to your own.

## Local preview

```bash
hugo server
```

Open `http://localhost:1313/` in a browser; the default language is Simplified Chinese.

## Create your first post

```bash
hugo new content posts/my-first-post.en-us.md
```

The generated file follows the `archetypes/default.md` template. Edit the front matter and body, save it, and `hugo server` hot-reloads automatically.

Posts with `draft = true` are not published by default; set it to `false` before release.
