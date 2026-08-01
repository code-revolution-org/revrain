# revrain

Um tema Hugo da Code Revolution, feito para geeks e desenvolvedores.

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Funcionalidades

- **Chuva digital** — Animação Canvas estilo Matrix, totalmente configurável
- **Morfismo de vidro** — Cartões de vidro fosco com backdrop blur
- **Multilíngue** — 11 idiomas com seletor de idioma
- **SEO** — Open Graph, Twitter Card, dados estruturados JSON-LD, esquema breadcrumb
- **Responsivo** — Mobile-first, 4 breakpoints (480 / 768 / 1024 / 1280px)
- **Destaque de sintaxe** — Integrado ao Hugo
- **Suporte matemático** — Integrado ao Hugo
- **Tema escuro** — Paleta de cores otimizada para desenvolvedores

## Início rápido

```toml
theme = "revrain"
```

## Configuração

### Parâmetros globais

```toml
[params]
  logo = "/logo.png"          # Logo da barra de navegação (opcional)
  favicon = "/favicon.ico"    # Ícone da aba do navegador (opcional)
  description = "..."         # Descrição do site para SEO
  images = ["/og-image.png"]  # Imagem de compartilhamento social padrão

[params.social]
  twitter = "username"        # Conta do Twitter para twitter:site
```

### Rodapé

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "Meu Blog · Todos os direitos reservados"  # Opcional, não exibido se não configurado

  [[params.footer.links]]
    name = "Nome do link"
    url = "https://example.com"
```

**Comportamento do copyright:**
- Não configurado → não exibido
- Configurado → renderizado como `© 2026 Meu Blog · Todos os direitos reservados` (ano atualizado automaticamente)
- Multilíngue: configure por idioma (veja abaixo)

### Chuva digital

```toml
[params.digitalRain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  fontSize = 14       # 10–32 px
  moonChance = 0.02   # Probabilidade de caractere branco lunar
  resetChance = 0.025 # Probabilidade de redefinição de gota
```

### Multilíngue

Configure o copyright por idioma:

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.pt-BR]
  label = "Português (Brasil)"
  weight = 20
  [languages.pt-BR.params.footer]
    copyright = "Meu Blog · Todos os direitos reservados"
```

### Menu

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # Chave i18n (opcional)
  pageRef = "/"
  weight = 10
```

## Conteúdo

### Página inicial

```markdown
+++
title = "Meu site"
subtitle = "Bem-vindo ao meu site"
logo = "/logo.png"
logoAlt = "Logo do site"

[primaryButton]
  url = "/browse"
  text = "Começar"

[secondaryButton]
  url = "/about"
  text = "Sobre"
+++
```

### Página Sobre

```markdown
+++
title = "Sobre"
layout = "about"
subtitle = "Mudando o mundo com código"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### Artigo

```markdown
+++
title = "Meu artigo"
date = 2025-01-15
draft = false
tags = ["tech", "hugo"]
categories = ["Tutorial"]
summary = "Resumo do artigo"
description = "Descrição SEO"
+++
```

### Página Explorar

```markdown
+++
title = "Explorar"
layout = "directory"
+++
```

## Sistema de cores

| Nome | Valor | Uso |
|------|-------|-----|
| Abismo Preto | `#0A0A0F` | Fundo principal |
| Chuva Verde | `#00D4AA` | Destaque, chuva digital, links |
| Crepúsculo | `#8B92A8` | Texto secundário, bordas |
| Branco Lunar | `#E8EAF0` | Texto principal, títulos |
| Véu | `#2A2A35` | Painéis de vidro, bordas |

## Pilha de fontes

Fontes do sistema com fallback CJK:

- Latim: Inter, Noto Sans
- Chinês: Noto Sans SC/TC, Source Han Sans
- Japonês: Noto Sans JP, Source Han Sans JP
- Coreano: Noto Sans KR, Nanum Gothic
- Árabe: Noto Sans Arabic
- Cirílico: Noto Sans

## Requisitos mínimos

- Hugo Extended >= 0.156.0
- Dart Sass (necessário para a compilação SCSS)

## Licença

Licença MIT. Ver [LICENSE](../LICENSE).
