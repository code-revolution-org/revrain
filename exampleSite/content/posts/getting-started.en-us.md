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

- Hugo ≥ 0.163.0 (any edition; the IsBranch API requires v0.163.0+)
- Install Dart Sass and add it to your PATH (required for SCSS compilation; Hugo invokes it automatically)

## Install the theme

### Method 1: Git submodule (recommended)

```bash
git submodule add https://github.com/code-revolution-org/revrain.git themes/revrain
```

### Method 2: Hugo Modules (requires Git and Go 1.18+)

```bash
hugo mod init <your module name>
hugo mod get github.com/code-revolution-org/revrain
```

And declare the import in your site configuration:

```toml
[module]
  [[module.imports]]
    path = 'github.com/code-revolution-org/revrain'
```

### Method 3: Download or clone

Download the source ZIP from [GitHub Releases](https://github.com/code-revolution-org/revrain/releases), or clone it into `themes/revrain`:

```bash
git clone https://github.com/code-revolution-org/revrain.git themes/revrain
```

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
