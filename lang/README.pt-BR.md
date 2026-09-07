# revrain

Um tema Hugo da [Code Revolution](https://github.com/code-revolution-org), feito para geeks e desenvolvedores. Design escuro com chuva digital e estética de vidro fosco (glassmorphism).

[简体中文](../README.md) | [English](README.en-US.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Recursos

- **Chuva digital** — Animação Canvas estilo Matrix; conjunto de caracteres, tamanho da fonte, probabilidade de branco-lua e probabilidade de reinício totalmente configuráveis. Respeita a configuração do sistema "reduzir movimento" (desenha um único quadro estático) e pula quadros automaticamente em dispositivos de baixo desempenho
- **Glassmorphism** — Cartões de vidro fosco com desfoque backdrop-filter
- **Multilíngue** — 11 idiomas integrados, com seletor de idioma acessível por teclado (setas, Início/Fim, Esc)
- **SEO** — description / robots / canonical / links alternativos hreflang, rel=prev/next de paginação, Open Graph, Twitter Card, dados estruturados JSON-LD (WebSite / Article), esquema de trilha de navegação
- **Responsivo** — Mobile-first com 4 breakpoints (480 / 768 / 1024 / 1280px)
- **Realce de sintaxe** — Integrado via Hugo
- **Suporte a matemática** — Renderização no servidor pelo KaTeX integrado do Hugo (`transform.ToMath`) em tempo de build; sem JS no cliente
- **Tema escuro** — Paleta otimizada para desenvolvedores (5 cores de imagem)
- **Acessibilidade** — Alinhado ao WCAG 2.2 AA: link de pular para o conteúdo principal, landmarks e rótulos ARIA, navegação por teclado, foco visível, suporte a prefers-reduced-motion, layout RTL (árabe)
- **RSS** — Feeds para a página inicial e seções
- **Sumário** — TOC na barra lateral com destaque ao rolar e itens aninhados recolhíveis
- **Paginação no servidor** — Para seções, taxonomias e a nuvem de tags

## Início rápido

Ative o tema na configuração do seu site:

```toml
theme = "revrain"
```

## Configuração

### Parâmetros globais

```toml
[params]
  logo = "/logo.png"          # Logo da barra de navegação (opcional)
  description = "..."         # Descrição do site para SEO
  images = ["/og-image.png"]  # Imagem de compartilhamento social padrão

[params.social]
  twitter = "username"        # Conta do Twitter para twitter:site

[params.favicons]             # Ícones de aba do navegador (todos opcionais)
  svg = "/favicon.svg"                # Ícone vetorial SVG
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # Ícone da tela inicial do iOS
```

**Cadeia de busca do favicon:** cada item é resolvido como *caminho configurado → nome de arquivo convencional em `static/` → omitido*. Se nada for configurado ou presente, uma URI `data:` vazia é emitida para suprimir a solicitação padrão de `/favicon.ico` do navegador (sem 404). Os caminhos podem ser URLs externas ou caminhos relativos ao site.

### Rodapé

```toml
[params.footer]
  github = "https://github.com/username"          # Link do GitHub (opcional)
  copyright = "Meu blog · Todos os direitos reservados" # Copyright (opcional, oculto se não definido)

  [[params.footer.links]]                         # Grupo de links (opcional)
    name = "Nome do link"
    identifier = "friendly_links"                 # Opcional: chave i18n, a tradução vence se existir
    url = "https://example.com"
```

**Comportamento do copyright:**
- Não configurado → não exibido
- Configurado → renderizado como `© <ano atual> <valor>` (o ano é atualizado automaticamente)
- Sites multilíngues: configurável separadamente por idioma (ver "Multilíngue")

### Chuva digital

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # Probabilidade de caractere branco-lua (0–1)
  reset_chance = 0.025 # Probabilidade de reinício da gota (0–1)
```

### Matemática

As fórmulas são renderizadas em tempo de build pelo mecanismo KaTeX integrado do Hugo (`transform.ToMath`) como HTML + MathML — sem JavaScript no cliente. Ative a extensão Goldmark passthrough na sua configuração:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

Use estes delimitadores no seu conteúdo:

- Em linha: `\(...\)`
- Bloco: `$$...$$` ou `\[...\]`

**Aviso de CDN:** A folha de estilo do KaTeX (`katex.min.css` v0.17.0, necessária para a saída `htmlAndMathml`) é carregada do CDN jsDelivr com verificação de integridade de subrecursos (SRI). O KaTeX está sob [licença MIT](https://github.com/KaTeX/KaTeX/blob/main/LICENSE). Ela só é carregada em páginas que contêm matemática.

### Multilíngue

O projeto suporta 11 idiomas, com o chinês simplificado como idioma padrão. Cada idioma pode definir `label` (nome exibido), `locale` (RFC 5646), `title` (título do site), `weight` (ordem de classificação, crescente) e parâmetros específicos do idioma:

```toml
defaultContentLanguage = 'zh-CN'

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站点'
    weight = 10
    [languages.zh-CN.params.footer]
      copyright = "我的博客 · 版权所有"

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20
    [languages.en-US.params.footer]
      copyright = "My Blog · All Rights Reserved"

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'   # Layout da direita para a esquerda para árabe
    title = 'موقعي'
    weight = 30
```

O conteúdo é atribuído aos idiomas pelo sufixo do nome do arquivo; o sufixo deve estar em minúsculas (por exemplo, `about.en-us.md`, `about.zh-cn.md`). Arquivos sem sufixo pertencem ao idioma padrão.

### Menus

```toml
[[menus.main]]
  name = "Início"
  identifier = "menu_home"  # Chave i18n (opcional); a tradução vence se existir
  pageRef = "/"
  weight = 10
```

## Conteúdo

### Página inicial

A página inicial usa `_index.md` e suporta o seguinte front matter:

```markdown
+++
title = "Meu site"              # Título da página
subtitle = "Bem-vindo ao meu site"  # Subtítulo exibido sob o título
logo = "/logo.png"             # Logo da página inicial (opcional)
logo_alt = "Logo do site"      # Texto alternativo do logo (acessibilidade)

[primary_button]               # Botão principal
  url = "/browse"
  text = "Começar"

[secondary_button]             # Botão secundário
  url = "/about"
  text = "Sobre"
+++

Corpo da página inicial, renderizado em um cartão de vidro abaixo dos botões.
```

### Página Sobre

Uma página independente usando `layout = "about"`:

```markdown
+++
title = "Sobre"                 # Título da página
layout = "about"               # Usar o layout "sobre"
subtitle = "Mudando o mundo com código"  # Subtítulo
avatar = "/avatar.png"         # Imagem de avatar (opcional)
description = "Descrição do site para SEO"  # Descrição SEO

links = [                      # Links sociais/externos (opcionais)
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

Corpo da página Sobre.
```

### Artigos

Artigos comuns (dentro de um diretório de seção) suportam o seguinte front matter:

```markdown
+++
title = "Meu artigo"            # Título do artigo
date = 2025-01-15              # Data de publicação
draft = false                  # Rascunho: ignorado se true
tags = ["tecnologia", "hugo"]  # Tags (opcionais)
categories = ["Tutorial"]      # Categorias (opcionais)
summary = "Resumo do artigo exibido nas listas de cartões"  # Resumo de lista
description = "Descrição SEO; usa o resumo se não for definida"  # Descrição SEO
+++

Corpo do artigo.
```

### Página Explorar

Uma página usando `layout = "directory"` que lista todas as seções:

```markdown
+++
title = "Explorar"              # Título da página
layout = "directory"           # Usar o layout de diretório
description = "Explorar todas as seções e artigos"  # Descrição SEO
+++
```

### Seções

Cada seção é definida por `_index.md`; `summary` aparece nas listas de cartões:

```markdown
+++
title = 'Publicações'           # Título da seção
summary = 'Artigos cobrindo compartilhamento de tecnologia, ensaios de vida e mais.'  # Resumo exibido nas listas de cartões
+++
```

## Acessibilidade (WCAG 2.2)

- Link de pular para o conteúdo principal (WCAG 2.4.1)
- Landmarks e rótulos ARIA: navegação principal, navegação do rodapé, navegação de página, seletor de idioma (role=listbox)
- Suporte completo de teclado para o seletor de idioma: setas para mover o foco, Início/Fim, Esc para fechar
- O botão do menu móvel expõe `aria-expanded` / `aria-controls`
- O canvas da chuva digital está oculto das tecnologias assistivas (`aria-hidden`, puramente decorativo) e respeita prefers-reduced-motion
- O destaque ao rolar e o recolhimento da TOC são totalmente operáveis por teclado
- Layout RTL automático para árabe (ar)
- Estilos de foco visíveis e suporte global a prefers-reduced-motion

## Sistema de cores

| Nome | Hex | Uso |
|------|-----|-----|
| Abyss Black | `#0A0A0F` | Fundo |
| Rain Green | `#00D4AA` | Ênfase, chuva digital, links |
| Twilight | `#8B92A8` | Texto secundário, bordas |
| Moon White | `#E8EAF0` | Texto principal, títulos |
| Shroud | `#2A2A35` | Painéis de vidro, bordas |

## Fontes

Fontes de sistema de código aberto cobrindo todos os idiomas suportados pelo tema:

- Latim: Inter, Noto Sans
- Chinês: Noto Sans SC/TC, Source Han Sans SC/TC
- Japonês: Noto Sans JP, Source Han Sans JP
- Coreano: Noto Sans KR, Source Han Sans KR, Nanum Gothic
- Árabe: Noto Sans Arabic, Noto Naskh Arabic
- Cirílico: Noto Sans

## Requisitos mínimos

- Hugo Extended >= 0.156.0
- Dart Sass (necessário para a compilação SCSS)

## Licença

Licença MIT. Veja [LICENSE](../LICENSE).

