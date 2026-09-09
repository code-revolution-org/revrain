+++
title = "Início rápido"
date = 2026-09-09
draft = false
summary = "Instalar e ativar o tema revrain, completar uma configuração mínima e iniciar a pré-visualização local."
description = "Tutorial de início rápido do tema revrain: pré-requisitos, ativar o tema, configuração mínima e pré-visualização local."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Pré-requisitos

- Hugo Extended ≥ 0.158.0 (as APIs de idioma `locale`/`label`/`direction` requerem v0.158.0+)
- Execute `hugo version` no terminal e confirme que a saída contém `+extended`

## Ativar o tema

Na configuração do site `hugo.toml`:

```toml
theme = "revrain"
```

Se você começar a partir do `exampleSite` no repositório do tema, defina `themesDir` para o diretório pai do tema:

```toml
theme = "revrain"
themesDir = "../../"
```

## Configuração mínima

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'Meu site'
    weight = 10
```

Salve como `hugo.toml` para começar. O idioma padrão do tema é chinês simplificado. Você pode alterar `defaultContentLanguage` para o seu idioma.

## Pré-visualização local

```bash
hugo server
```

Abra `http://localhost:1313/` em um navegador. O idioma padrão é chinês simplificado.

## Criar seu primeiro artigo

```bash
hugo new content posts/my-first-post.pt-br.md
```

O arquivo gerado segue o modelo `archetypes/default.md`. Edite o front matter e o corpo, salve, e `hugo server` recarrega automaticamente.

Artigos com `draft = true` não são publicados por padrão; defina como `false` antes de publicar.
