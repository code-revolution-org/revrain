+++
title = "Multilíngue"
date = 2026-09-09
draft = false
summary = "Configurar um site multilíngue: idioma padrão, definições de idioma, nomenclatura de arquivos de conteúdo e parâmetros por idioma."
description = "Tutorial multilíngue do tema revrain: idioma padrão, definições de idioma, sufixos de nome de arquivo e parâmetros por idioma."
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Idioma padrão

```toml
defaultContentLanguage = 'zh-CN'
```

Arquivos de conteúdo sem sufixo de idioma pertencem ao idioma padrão.

## Definições de idioma

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'Meu site'
    weight = 10

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'
    title = 'موقعي'
    weight = 30
```

- `label`: nome de exibição no seletor de idioma
- `locale`: etiqueta de idioma RFC 5646, usada para `<html lang>` e hreflang
- `weight`: a ordem crescente define a ordem do seletor
- `direction = "rtl"`: o árabe ativa automaticamente o layout da direita para a esquerda

## Nomenclatura de arquivos de conteúdo

Os idiomas são distinguidos pelo sufixo do nome do arquivo, que **deve estar em minúsculas**:

| Arquivo | Idioma |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

O sufixo pode ser omitido para o idioma padrão; por exemplo, quando o padrão é `zh-CN`, `about.md` equivale a `about.zh-cn.md`.

Arquivos com o mesmo nome base, mas sufixos diferentes, na mesma seção, são vinculados automaticamente como traduções, e o tema emite os links hreflang alternativos correspondentes.

## Parâmetros por idioma

Você pode configurar parâmetros por idioma, por exemplo o copyright do rodapé:

```toml
[languages.zh-CN.params.footer]
  copyright = "Meu blog · Todos os direitos reservados"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

O seletor de idioma é um menu suspenso com suporte completo de teclado: as setas movem o foco, `Home`/`End` vão ao primeiro/último item, `Esc` fecha.
