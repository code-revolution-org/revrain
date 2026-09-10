+++
title = "Organização do conteúdo"
date = 2026-09-09
draft = false
summary = "Campos de front matter e convenções de diretório para as páginas inicial, sobre, navegação, seção e artigo."
description = "Tutorial de organização do conteúdo do tema revrain: campos de front matter e estrutura de diretório de cada tipo de página."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Página inicial

`content/_index.md` aceita título, subtítulo, logo e dois botões:

```toml
+++
title = "Meu site"
subtitle = "Bem-vindo ao meu site"
logo = "/logo.png"
logo_alt = "Logo do site"

[primary_button]
url = "/browse"
text = "Começar a explorar"

[secondary_button]
url = "/about"
text = "Sobre"
+++

Corpo da página inicial, renderizado em um cartão de vidro abaixo dos botões.
```

`logo`, `logo_alt` e os botões são todos opcionais; elementos ausentes não são exibidos.

## Página sobre

`content/about.pt-br.md`, declare `layout = "about"`:

```toml
+++
title = "Sobre"
layout = "about"
subtitle = "Mudando o mundo com código"
avatar = "/avatar.png"
description = "Descrição SEO da página"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar` e `links` são opcionais. `links` é renderizado como uma lista de links externos com `target="_blank" rel="noopener"` adicionado automaticamente.

## Página de navegação

`content/browse.pt-br.md`, declare `layout = "directory"`, que lista todas as seções automaticamente:

```toml
+++
title = "Navegação"
layout = "directory"
description = "Navegar por todas as seções e artigos"
+++
```

## Seção

O índice da seção `content/posts/_index.md`, `summary` é exibido na lista de cartões:

```toml
+++
title = "Artigos"
summary = "Uma coleção de artigos sobre compartilhamento de tecnologia, ensaios de vida e mais."
+++
```

## Artigos

`content/posts/my-post.pt-br.md`, artigos comuns não precisam de `layout`:

```toml
+++
title = "Meu artigo"
date = 2026-09-09
draft = false
tags = ["tecnologia", "hugo"]
categories = ["tutorial"]
summary = "Resumo do artigo, exibido na lista de cartões"
description = "Descrição SEO, usa o resumo se não definido"
+++

Corpo do artigo.
```

As páginas de artigo renderizam automaticamente o sumário na barra lateral (TOC), trilha de navegação e navegação anterior/próximo. `summary` alimenta o cartão da lista; `description` serve para SEO e usa `summary` se não definido.
