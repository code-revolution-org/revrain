+++
title = "Быстрый старт"
date = 2026-09-09
draft = false
summary = "Установить и включить тему revrain, завершить минимальную конфигурацию и запустить локальный предпросмотр."
description = "Руководство по быстрому старту темы revrain: требования, включение темы, минимальная конфигурация и локальный предпросмотр."
tags = ['revrain', 'hugo']
categories = ['руководство']
+++

## Требования

- Hugo ≥ 0.163.0 (любая редакция; API IsBranch требует v0.163.0+)
- Установите Dart Sass и добавьте его в PATH (требуется для компиляции SCSS; Hugo вызывает его автоматически)

## Установка темы

### Способ 1: подмодуль Git (рекомендуется)

```bash
git submodule add https://github.com/code-revolution-org/revrain.git themes/revrain
```

### Способ 2: Hugo Modules (требуются Git и Go 1.18+)

```bash
hugo mod init <ваше имя модуля>
hugo mod get github.com/code-revolution-org/revrain
```

И объявите импорт в конфигурации вашего сайта:

```toml
[module]
  [[module.imports]]
    path = 'github.com/code-revolution-org/revrain'
```

### Способ 3: скачать или клонировать

Скачайте ZIP исходников с [GitHub Releases](https://github.com/code-revolution-org/revrain/releases) или клонируйте в `themes/revrain`:

```bash
git clone https://github.com/code-revolution-org/revrain.git themes/revrain
```

## Включение темы

В конфигурации сайта `hugo.toml`:

```toml
theme = "revrain"
```

Если вы начинаете с `exampleSite` в репозитории темы, укажите `themesDir` на родительский каталог темы:

```toml
theme = "revrain"
themesDir = "../../"
```

## Минимальная конфигурация

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = 'Мой сайт'
    weight = 10
```

Сохраните как `hugo.toml` для начала. Язык темы по умолчанию — упрощённый китайский. Вы можете изменить `defaultContentLanguage` на свой язык.

## Локальный предпросмотр

```bash
hugo server
```

Откройте `http://localhost:1313/` в браузере. Язык по умолчанию — упрощённый китайский.

## Создание первой статьи

```bash
hugo new content posts/my-first-post.ru.md
```

Созданный файл следует шаблону `archetypes/default.md`. Отредактируйте front matter и текст, сохраните, и `hugo server` автоматически перезагрузится.

Статьи с `draft = true` по умолчанию не выводятся; перед публикацией установите `false`.
