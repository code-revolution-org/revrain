# revrain

Тема Hugo от Code Revolution, созданная для гиков и разработчиков.

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Возможности

- **Цифровой дождь** — Анимация Canvas в стиле Матрицы, полностью настраиваемая
- **Стекломорфизм** — Стеклянные карточки с размытием фона
- **Мультиязычность** — 11 языков с переключателем
- **SEO** — Open Graph, Twitter Card, структурированные данные JSON-LD, схема хлебных крошек
- **Адаптивность** — Mobile-first, 4 контрольные точки (480 / 768 / 1024 / 1280px)
- **Подсветка синтаксиса** — Встроенная в Hugo
- **Поддержка математики** — Серверный рендеринг KaTeX в Hugo (transform.ToMath), без JS на клиенте
- **Тёмная тема** — Палитра цветов, оптимизированная для разработчиков

## Быстрый старт

```toml
theme = "revrain"
```

## Конфигурация

### Глобальные параметры

```toml
[params]
  logo = "/logo.png"          # Логотип навигационной панели (опционально)
  favicon = "/favicon.ico"    # Иконка вкладки браузера (опционально)
  description = "..."         # Описание сайта для SEO
  images = ["/og-image.png"]  # Изображение для социальных сетей по умолчанию

[params.social]
  twitter = "username"        # Аккаунт Twitter для twitter:site
```

### Подвал

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "Мой блог · Все права защищены"  # Опционально, не отображается если не настроено

  [[params.footer.links]]
    name = "Название ссылки"
    url = "https://example.com"
```

**Поведение копирайта:**
- Не настроен → не отображается
- Настроен → рендерится как `© 2026 Мой блог · Все права защищены` (год обновляется автоматически)
- Мультиязычность: настройте для каждого языка (см. ниже)

### Цифровой дождь

```toml
[params.digitalRain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  fontSize = 14       # 10–32 px
  moonChance = 0.02   # Вероятность лунно-белого символа
  resetChance = 0.025 # Вероятность сброса капли
```

### Математика

Математические формулы рендерятся во время сборки встроенным в Hugo движком KaTeX (`transform.ToMath`) — клиентский JavaScript не требуется. Включите расширение passthrough в Goldmark в вашей конфигурации:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

Используйте эти разделители в контенте:

- Строчный: `\(...\)`
- Блочный: `$$...$$` или `\[...\]`

**Уведомление о CDN:** Таблица стилей KaTeX (`katex.min.css` v0.17.0, обязательна для вывода `htmlAndMathml`) загружается с CDN jsDelivr с проверкой целостности подресурсов (SRI). KaTeX распространяется по [лицензии MIT](https://github.com/KaTeX/KaTeX/blob/main/LICENSE) (Copyright (c) 2013-2020 Khan Academy and other contributors). Она загружается только на страницах с формулами.

### Мультиязычность

Настройте копирайт для каждого языка:

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.ru]
  label = "Русский"
  weight = 20
  [languages.ru.params.footer]
    copyright = "Мой блог · Все права защищены"
```

### Меню

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # Ключ i18n (опционально)
  pageRef = "/"
  weight = 10
```

## Контент

### Домашняя страница

```markdown
+++
title = "Мой сайт"
subtitle = "Добро пожаловать на мой сайт"
logo = "/logo.png"
logoAlt = "Логотип сайта"

[primaryButton]
  url = "/browse"
  text = "Начать"

[secondaryButton]
  url = "/about"
  text = "О нас"
+++
```

### Страница О нас

```markdown
+++
title = "О нас"
layout = "about"
subtitle = "Меняем мир кодом"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### Статья

```markdown
+++
title = "Моя статья"
date = 2025-01-15
draft = false
tags = ["технологии", "hugo"]
categories = ["Руководство"]
summary = "Краткое описание"
description = "Описание для SEO"
+++
```

### Страница обзора

```markdown
+++
title = "Обзор"
layout = "directory"
+++
```

## Цветовая система

| Название | Значение | Назначение |
|----------|----------|------------|
| Бездна Чёрный | `#0A0A0F` | Основной фон |
| Дождь Зелёный | `#00D4AA` | Акцент, цифровой дождь, ссылки |
| Сумерки | `#8B92A8` | Второстепенный текст, границы |
| Лунный Белый | `#E8EAF0` | Основной текст, заголовки |
| Покров | `#2A2A35` | Стеклянные панели, границы |

## Стек шрифтов

Системные шрифты с CJK-резервированием:

- Латиница: Inter, Noto Sans
- Китайский: Noto Sans SC/TC, Source Han Sans
- Японский: Noto Sans JP, Source Han Sans JP
- Корейский: Noto Sans KR, Nanum Gothic
- Арабский: Noto Sans Arabic
- Кириллица: Noto Sans

## Минимальные требования

- Hugo Extended >= 0.156.0
- Dart Sass (требуется для компиляции SCSS)

## Лицензия

Лицензия MIT. См. [LICENSE](../LICENSE).
