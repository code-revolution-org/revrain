# Changelog

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/), e este projeto segue o [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não lançado]

## [v0.0.1] - 2026-09-10

O primeiro lançamento oficial do revrain.

### Added

- **Estrutura do tema**: um tema Hugo escuro completo com modelos para a página inicial, sobre, explorar, 404 e artigos/seções
- **Chuva digital**: animação Canvas estilo Matrix; conjunto de caracteres, tamanho da fonte, probabilidade de branco-lua e probabilidade de reinício totalmente configuráveis. Respeita a configuração do sistema "reduzir movimento" (desenha um único quadro estático) e pula quadros automaticamente em dispositivos de baixo desempenho
- **Glassmorphism**: cartões de vidro fosco com desfoque backdrop-filter
- **Multilíngue**: 11 idiomas integrados (zh-CN / zh-TW / en-US / ja / ko / de / fr / es / pt-BR / ru / ar), chinês simplificado por padrão; seletor de idioma operável por teclado (setas, Home/End, Esc)
- **SEO**: description / robots / canonical / links alternativos hreflang, paginação rel=prev/next, Open Graph, Twitter Card, dados estruturados JSON-LD (WebSite / Article), esquema de trilha de navegação, cadeia de busca og:image com descoberta automática de capas
- **Acessibilidade (WCAG 2.2 AA)**: link para pular para o conteúdo principal, landmarks e rótulos ARIA, navegação por teclado, foco visível, suporte a prefers-reduced-motion, layout RTL espelhado para árabe
- **Responsivo**: mobile-first com 4 pontos de quebra (480 / 768 / 1024 / 1280px)
- **Fórmulas matemáticas**: renderização no servidor em tempo de compilação com o KaTeX embutido do Hugo (`transform.ToMath`); sem JS no cliente
- **Realce de sintaxe**: integrado via Hugo
- **RSS**: feeds para a página inicial e seções, com informações de vários autores e entrada de assinatura inteligente
- **Taxonomias**: nuvens de tags/categorias com paginação no servidor
- **Índice de conteúdo**: TOC na barra lateral com destaque ao rolar e itens aninhados recolhíveis
- **Navegação**: trilha de navegação, botões anterior/próximo, botão voltar
- **favicon**: conjunto de ícones padrão multiformato (SVG / 16 / 32 / apple-touch) com cadeia de fallback de três níveis
- **Pilha de fontes**: fontes de código aberto que cobrem todos os idiomas suportados pelo tema (latim, CJK, árabe, cirílico)
- **Implantação**: build automático com GitHub Actions e implantação no GitHub Pages
- **Site de exemplo**: páginas inicial, sobre, explorar e seções em 11 idiomas, além de 5 artigos de tutorial multilíngues
- **Requisitos mínimos**: Hugo >= 0.163.0 (qualquer edição), Dart Sass

[Não lançado]: https://github.com/code-revolution-org/revrain/compare/v0.0.1...HEAD
[v0.0.1]: https://github.com/code-revolution-org/revrain/releases/tag/v0.0.1
