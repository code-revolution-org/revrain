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

- Hugo Extended ≥ 0.158.0 (API языка `locale`/`label`/`direction` требуют v0.158.0+)
- Выполните `hugo version` в терминале и подтвердите, что вывод содержит `+extended`

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
